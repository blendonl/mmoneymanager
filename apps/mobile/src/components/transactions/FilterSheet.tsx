import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { Button, Input, Chip } from '../design-system';
import { useAppTheme } from '../../theme';

export interface TransactionFilters {
  type: 'all' | 'expense' | 'income';
  categories: string[];
  minAmount: string;
  maxAmount: string;
  dateFrom: Date | null;
  dateTo: Date | null;
}

interface FilterSheetProps {
  visible: boolean;
  filters: TransactionFilters;
  categories: Array<{ id: string; name: string }>;
  onClose: () => void;
  onApply: (filters: TransactionFilters) => void;
  onClear: () => void;
}

export const FilterSheet: React.FC<FilterSheetProps> = ({
  visible,
  filters,
  categories,
  onClose,
  onApply,
  onClear,
}) => {
  const { theme } = useAppTheme();
  const [localFilters, setLocalFilters] = useState<TransactionFilters>(filters);

  const handleApply = () => {
    onApply(localFilters);
    onClose();
  };

  const handleClear = () => {
    const clearedFilters: TransactionFilters = {
      type: 'all',
      categories: [],
      minAmount: '',
      maxAmount: '',
      dateFrom: null,
      dateTo: null,
    };
    setLocalFilters(clearedFilters);
    onClear();
    onClose();
  };

  const toggleCategory = (categoryId: string) => {
    setLocalFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((id) => id !== categoryId)
        : [...prev.categories, categoryId],
    }));
  };

  const setType = (type: 'all' | 'expense' | 'income') => {
    setLocalFilters((prev) => ({ ...prev, type }));
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        contentContainerStyle={[
          styles.modal,
          { backgroundColor: theme.colors.surface },
        ]}
      >
        <View style={styles.header}>
          <Text
            style={[
              styles.title,
              theme.custom.typography.h3,
              { color: theme.custom.colors.text },
            ]}
          >
            Filter Transactions
          </Text>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                theme.custom.typography.h5,
                { color: theme.custom.colors.text },
              ]}
            >
              Transaction Type
            </Text>
            <View style={styles.chipRow}>
              <Chip
                label="All"
                selected={localFilters.type === 'all'}
                onPress={() => setType('all')}
              />
              <Chip
                label="Expenses"
                selected={localFilters.type === 'expense'}
                onPress={() => setType('expense')}
              />
              <Chip
                label="Incomes"
                selected={localFilters.type === 'income'}
                onPress={() => setType('income')}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                theme.custom.typography.h5,
                { color: theme.custom.colors.text },
              ]}
            >
              Amount Range
            </Text>
            <View style={styles.row}>
              <Input
                label="Min Amount"
                value={localFilters.minAmount}
                onChangeText={(text) =>
                  setLocalFilters((prev) => ({ ...prev, minAmount: text }))
                }
                keyboardType="decimal-pad"
                placeholder="0.00"
                style={styles.halfInput}
              />
              <View style={styles.spacer} />
              <Input
                label="Max Amount"
                value={localFilters.maxAmount}
                onChangeText={(text) =>
                  setLocalFilters((prev) => ({ ...prev, maxAmount: text }))
                }
                keyboardType="decimal-pad"
                placeholder="0.00"
                style={styles.halfInput}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                theme.custom.typography.h5,
                { color: theme.custom.colors.text },
              ]}
            >
              Categories
            </Text>
            <View style={styles.chipRow}>
              {categories.map((category) => (
                <Chip
                  key={category.id}
                  label={category.name}
                  selected={localFilters.categories.includes(category.id)}
                  onPress={() => toggleCategory(category.id)}
                />
              ))}
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Button
            title="Clear All"
            onPress={handleClear}
            variant="text"
            style={styles.footerButton}
          />
          <View style={styles.footerButtonGroup}>
            <Button
              title="Cancel"
              onPress={onClose}
              variant="outlined"
              style={styles.footerButton}
            />
            <Button
              title="Apply"
              onPress={handleApply}
              variant="primary"
              style={styles.footerButton}
            />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    marginTop: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  header: {
    padding: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
  },
  halfInput: {
    flex: 1,
  },
  spacer: {
    width: 12,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerButton: {
    marginHorizontal: 4,
  },
  footerButtonGroup: {
    flexDirection: 'row',
  },
});
