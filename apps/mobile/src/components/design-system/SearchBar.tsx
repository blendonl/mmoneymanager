import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useAppTheme } from '../../theme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onFilterPress?: () => void;
  style?: ViewStyle;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
  onFilterPress,
  style,
}) => {
  const { theme } = useAppTheme();

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={[
        styles.searchBar,
        { backgroundColor: theme.colors.surfaceVariant },
        style,
      ]}
      inputStyle={theme.custom.typography.body}
      icon="magnify"
      traileringIcon={onFilterPress ? 'filter-variant' : undefined}
      onTraileringIconPress={onFilterPress}
      elevation={0}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 28,
  },
});
