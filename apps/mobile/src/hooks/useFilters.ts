import { useState, useMemo } from 'react';
import { TransactionFilters } from '../components/transactions/FilterSheet';

interface Transaction {
  id: string;
  type: 'expense' | 'income';
  category: {
    id: string;
    name: string;
  };
  transaction: {
    value: number;
    createdAt?: string;
  };
  store?: {
    name: string;
  };
  items?: Array<{
    name: string;
  }>;
}

export const useFilters = () => {
  const [filters, setFilters] = useState<TransactionFilters>({
    type: 'all',
    categories: [],
    minAmount: '',
    maxAmount: '',
    dateFrom: null,
    dateTo: null,
  });

  const [searchQuery, setSearchQuery] = useState('');

  const applyFilters = (newFilters: TransactionFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      type: 'all',
      categories: [],
      minAmount: '',
      maxAmount: '',
      dateFrom: null,
      dateTo: null,
    });
  };

  const hasActiveFilters = useMemo(() => {
    return (
      filters.type !== 'all' ||
      filters.categories.length > 0 ||
      filters.minAmount !== '' ||
      filters.maxAmount !== '' ||
      filters.dateFrom !== null ||
      filters.dateTo !== null ||
      searchQuery !== ''
    );
  }, [filters, searchQuery]);

  const filterTransactions = (transactions: Transaction[]) => {
    return transactions.filter((transaction) => {
      if (filters.type !== 'all' && transaction.type !== filters.type) {
        return false;
      }

      if (filters.categories.length > 0) {
        if (!filters.categories.includes(transaction.category.id)) {
          return false;
        }
      }

      if (filters.minAmount) {
        const minAmount = parseFloat(filters.minAmount);
        if (transaction.transaction.value < minAmount) {
          return false;
        }
      }

      if (filters.maxAmount) {
        const maxAmount = parseFloat(filters.maxAmount);
        if (transaction.transaction.value > maxAmount) {
          return false;
        }
      }

      if (filters.dateFrom && transaction.transaction.createdAt) {
        const transactionDate = new Date(transaction.transaction.createdAt);
        if (transactionDate < filters.dateFrom) {
          return false;
        }
      }

      if (filters.dateTo && transaction.transaction.createdAt) {
        const transactionDate = new Date(transaction.transaction.createdAt);
        if (transactionDate > filters.dateTo) {
          return false;
        }
      }

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const categoryMatch = transaction.category.name.toLowerCase().includes(query);
        const storeMatch = transaction.store?.name.toLowerCase().includes(query);
        const itemsMatch = transaction.items?.some((item) =>
          item.name.toLowerCase().includes(query)
        );

        if (!categoryMatch && !storeMatch && !itemsMatch) {
          return false;
        }
      }

      return true;
    });
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.type !== 'all') count++;
    if (filters.categories.length > 0) count += filters.categories.length;
    if (filters.minAmount || filters.maxAmount) count++;
    if (filters.dateFrom || filters.dateTo) count++;
    return count;
  };

  return {
    filters,
    searchQuery,
    setSearchQuery,
    applyFilters,
    clearFilters,
    hasActiveFilters,
    filterTransactions,
    getActiveFilterCount,
  };
};
