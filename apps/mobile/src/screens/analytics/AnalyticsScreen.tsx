import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { PieChart, BarChart } from 'react-native-chart-kit';
import { useAppTheme } from '../../theme';
import { useTransactions } from '../../hooks/useTransactions';
import { StatCard } from '../../components/analytics';
import { Card, EmptyState } from '../../components/design-system';

const screenWidth = Dimensions.get('window').width;

type TimePeriod = 'week' | 'month' | 'year';

export default function AnalyticsScreen() {
  const { theme } = useAppTheme();
  const { transactions, loading, error, refreshing, refresh, retry } = useTransactions();
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('month');

  const chartConfig = {
    backgroundGradientFrom: theme.colors.surface,
    backgroundGradientTo: theme.colors.surface,
    color: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.6,
    decimalPlaces: 0,
    propsForLabels: {
      fontSize: 12,
      fill: theme.custom.colors.text,
    },
  };

  const filteredTransactions = useMemo(() => {
    const now = new Date();
    const startDate = new Date();

    switch (timePeriod) {
      case 'week':
        startDate.setDate(now.getDate() - 7);
        break;
      case 'month':
        startDate.setMonth(now.getMonth() - 1);
        break;
      case 'year':
        startDate.setFullYear(now.getFullYear() - 1);
        break;
    }

    return transactions.filter((t) => {
      if (!t.transaction.createdAt) return false;
      const transactionDate = new Date(t.transaction.createdAt);
      return transactionDate >= startDate;
    });
  }, [transactions, timePeriod]);

  const stats = useMemo(() => {
    const totalExpenses = filteredTransactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.transaction.value, 0);

    const totalIncome = filteredTransactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.transaction.value, 0);

    const expenseCount = filteredTransactions.filter((t) => t.type === 'expense').length;
    const incomeCount = filteredTransactions.filter((t) => t.type === 'income').length;

    const avgExpense = expenseCount > 0 ? totalExpenses / expenseCount : 0;
    const avgIncome = incomeCount > 0 ? totalIncome / incomeCount : 0;

    return {
      totalExpenses,
      totalIncome,
      net: totalIncome - totalExpenses,
      expenseCount,
      incomeCount,
      avgExpense,
      avgIncome,
    };
  }, [filteredTransactions]);

  const categoryData = useMemo(() => {
    const categoryMap = new Map<string, { name: string; value: number; color: string }>();
    const colors = [
      theme.colors.primary,
      theme.custom.colors.error,
      theme.custom.colors.success,
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#4BC0C0',
      '#9966FF',
      '#FF9F40',
    ];

    filteredTransactions
      .filter((t) => t.type === 'expense')
      .forEach((t) => {
        const existing = categoryMap.get(t.category.id);
        if (existing) {
          existing.value += t.transaction.value;
        } else {
          categoryMap.set(t.category.id, {
            name: t.category.name,
            value: t.transaction.value,
            color: colors[categoryMap.size % colors.length],
          });
        }
      });

    return Array.from(categoryMap.values())
      .sort((a, b) => b.value - a.value)
      .slice(0, 6);
  }, [filteredTransactions]);

  const monthlyData = useMemo(() => {
    const monthMap = new Map<string, { expenses: number; income: number }>();
    const monthCount = timePeriod === 'week' ? 7 : timePeriod === 'month' ? 4 : 12;

    for (let i = monthCount - 1; i >= 0; i--) {
      const date = new Date();
      if (timePeriod === 'week') {
        date.setDate(date.getDate() - i);
      } else if (timePeriod === 'month') {
        date.setDate(date.getDate() - i * 7);
      } else {
        date.setMonth(date.getMonth() - i);
      }

      const key =
        timePeriod === 'year'
          ? date.toLocaleDateString('en-US', { month: 'short' })
          : timePeriod === 'month'
          ? `W${Math.floor(i / 7) + 1}`
          : date.toLocaleDateString('en-US', { weekday: 'short' });

      monthMap.set(key, { expenses: 0, income: 0 });
    }

    filteredTransactions.forEach((t) => {
      if (!t.transaction.createdAt) return;
      const date = new Date(t.transaction.createdAt);
      let key: string;

      if (timePeriod === 'year') {
        key = date.toLocaleDateString('en-US', { month: 'short' });
      } else if (timePeriod === 'month') {
        const weeksDiff = Math.floor(
          (new Date().getTime() - date.getTime()) / (7 * 24 * 60 * 60 * 1000)
        );
        key = `W${4 - weeksDiff}`;
      } else {
        key = date.toLocaleDateString('en-US', { weekday: 'short' });
      }

      const existing = monthMap.get(key);
      if (existing) {
        if (t.type === 'expense') {
          existing.expenses += t.transaction.value;
        } else {
          existing.income += t.transaction.value;
        }
      }
    });

    return Array.from(monthMap.entries()).map(([label, data]) => ({
      label,
      ...data,
    }));
  }, [filteredTransactions, timePeriod]);

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <EmptyState
          icon="alert-circle"
          title="Error Loading Analytics"
          description={error}
          actionLabel="Retry"
          onAction={retry}
        />
      </View>
    );
  }

  if (transactions.length === 0) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <EmptyState
          icon="chart-line"
          title="No Data Available"
          description="Start adding transactions to see your analytics"
        />
      </View>
    );
  }

  const pieChartData = categoryData.map((item) => ({
    name: item.name,
    population: item.value,
    color: item.color,
    legendFontColor: theme.custom.colors.text,
    legendFontSize: 12,
  }));

  const barChartData = {
    labels: monthlyData.map((d) => d.label),
    datasets: [
      {
        data: monthlyData.map((d) => d.expenses),
        color: (opacity = 1) => theme.custom.colors.error,
      },
      {
        data: monthlyData.map((d) => d.income),
        color: (opacity = 1) => theme.custom.colors.success,
      },
    ],
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refresh}
            colors={[theme.colors.primary]}
            tintColor={theme.colors.primary}
          />
        }
      >
        <View style={styles.periodSelector}>
          <SegmentedButtons
            value={timePeriod}
            onValueChange={(value) => setTimePeriod(value as TimePeriod)}
            buttons={[
              { value: 'week', label: 'Week' },
              { value: 'month', label: 'Month' },
              { value: 'year', label: 'Year' },
            ]}
          />
        </View>

        <View style={styles.statsGrid}>
          <StatCard
            title="Total Expenses"
            value={`$${stats.totalExpenses.toFixed(2)}`}
            icon="arrow-down-circle"
            color={theme.custom.colors.error}
            subtitle={`${stats.expenseCount} transactions`}
          />
          <StatCard
            title="Total Income"
            value={`$${stats.totalIncome.toFixed(2)}`}
            icon="arrow-up-circle"
            color={theme.custom.colors.success}
            subtitle={`${stats.incomeCount} transactions`}
          />
        </View>

        <View style={styles.statsGrid}>
          <StatCard
            title="Net Balance"
            value={`$${stats.net.toFixed(2)}`}
            icon="cash"
            color={stats.net >= 0 ? theme.custom.colors.success : theme.custom.colors.error}
          />
          <StatCard
            title="Avg Expense"
            value={`$${stats.avgExpense.toFixed(2)}`}
            icon="calculator"
            color={theme.colors.primary}
          />
        </View>

        {categoryData.length > 0 && (
          <Card style={styles.chartCard} elevation={2}>
            <Text
              style={[
                styles.chartTitle,
                theme.custom.typography.h5,
                { color: theme.custom.colors.text },
              ]}
            >
              Expenses by Category
            </Text>
            <PieChart
              data={pieChartData}
              width={screenWidth - 64}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </Card>
        )}

        {monthlyData.length > 0 && (
          <Card style={styles.chartCard} elevation={2}>
            <Text
              style={[
                styles.chartTitle,
                theme.custom.typography.h5,
                { color: theme.custom.colors.text },
              ]}
            >
              Income vs Expenses Trend
            </Text>
            <View style={styles.legendContainer}>
              <View style={styles.legendItem}>
                <View
                  style={[styles.legendDot, { backgroundColor: theme.custom.colors.error }]}
                />
                <Text
                  style={[
                    styles.legendText,
                    theme.custom.typography.caption,
                    { color: theme.custom.colors.text },
                  ]}
                >
                  Expenses
                </Text>
              </View>
              <View style={styles.legendItem}>
                <View
                  style={[styles.legendDot, { backgroundColor: theme.custom.colors.success }]}
                />
                <Text
                  style={[
                    styles.legendText,
                    theme.custom.typography.caption,
                    { color: theme.custom.colors.text },
                  ]}
                >
                  Income
                </Text>
              </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BarChart
                data={barChartData}
                width={Math.max(screenWidth - 64, monthlyData.length * 80)}
                height={220}
                chartConfig={chartConfig}
                verticalLabelRotation={0}
                showBarTops={false}
                fromZero
                withInnerLines={false}
                style={styles.barChart}
              />
            </ScrollView>
          </Card>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  periodSelector: {
    padding: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  chartCard: {
    margin: 16,
    padding: 16,
  },
  chartTitle: {
    marginBottom: 16,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    gap: 24,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {},
  barChart: {
    marginVertical: 8,
    borderRadius: 8,
  },
  bottomPadding: {
    height: 32,
  },
});
