import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Category } from "../types";
import { Input, Chip } from "../../../components/design-system";
import { useAppTheme } from "../../../theme";

interface CategorySelectorProps {
  categoryInput: string;
  selectedCategory: Category | null;
  filteredCategories: Category[];
  showDropdown: boolean;
  loading: boolean;
  onInputChange: (text: string) => void;
  onCategorySelect: (category: Category) => void;
  onCreateNew: () => void;
  onClear: () => void;
  onFocus: () => void;
}

export function CategorySelector({
  categoryInput,
  selectedCategory,
  filteredCategories,
  showDropdown,
  loading,
  onInputChange,
  onCategorySelect,
  onCreateNew,
  onClear,
  onFocus,
}: CategorySelectorProps) {
  const { theme } = useAppTheme();
  const hasExactMatch = filteredCategories.some(
    (cat) => cat.name.toLowerCase() === categoryInput.toLowerCase(),
  );
  const showCreateOption = categoryInput.trim() !== "" && !hasExactMatch;

  return (
    <View style={styles.section}>
      <Text
        style={[
          styles.sectionTitle,
          theme.custom.typography.h5,
          { color: theme.custom.colors.text },
        ]}
      >
        Expense Category
      </Text>

      {selectedCategory && !showDropdown ? (
        <View style={styles.selectedContainer}>
          <Chip
            label={selectedCategory.name}
            selected={true}
            onClose={onClear}
            style={styles.selectedChip}
          />
        </View>
      ) : (
        <Input
          placeholder="Type or select a category"
          value={categoryInput}
          onChangeText={onInputChange}
          onFocus={onFocus}
          leftIcon="tag"
        />
      )}

      {showDropdown &&
        (categoryInput.trim() !== "" || filteredCategories.length > 0) && (
          <View
            style={[
              styles.dropdown,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.custom.colors.border,
              },
            ]}
          >
            {loading ? (
              <ActivityIndicator
                size="small"
                color={theme.colors.primary}
                style={styles.dropdownLoader}
              />
            ) : (
              <>
                {filteredCategories.length > 0 ? (
                  <FlatList
                    data={filteredCategories}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={[
                          styles.dropdownItem,
                          { borderBottomColor: theme.custom.colors.divider },
                        ]}
                        onPress={() => onCategorySelect(item)}
                      >
                        <Text
                          style={[
                            styles.dropdownItemText,
                            theme.custom.typography.body,
                            { color: theme.custom.colors.text },
                          ]}
                        >
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                    style={styles.dropdownList}
                    nestedScrollEnabled
                  />
                ) : (
                  categoryInput.trim() !== "" && (
                    <Text
                      style={[
                        styles.noResultsText,
                        theme.custom.typography.body,
                        { color: theme.custom.colors.textSecondary },
                      ]}
                    >
                      No matching categories
                    </Text>
                  )
                )}

                {showCreateOption && (
                  <TouchableOpacity
                    style={[
                      styles.dropdownItem,
                      styles.createOption,
                      {
                        backgroundColor: theme.custom.colors.surfaceVariant,
                        borderTopColor: theme.colors.primary,
                      },
                    ]}
                    onPress={onCreateNew}
                  >
                    <Text
                      style={[
                        styles.createOptionText,
                        theme.custom.typography.bodyMedium,
                        { color: theme.colors.primary },
                      ]}
                    >
                      + Create new category: "{categoryInput}"
                    </Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  selectedContainer: {
    marginTop: 8,
  },
  selectedChip: {
    alignSelf: 'flex-start',
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    maxHeight: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownLoader: {
    padding: 16,
  },
  dropdownList: {
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
  },
  dropdownItemText: {},
  noResultsText: {
    padding: 16,
    textAlign: 'center',
  },
  createOption: {
    borderTopWidth: 2,
    borderBottomWidth: 0,
  },
  createOptionText: {},
});
