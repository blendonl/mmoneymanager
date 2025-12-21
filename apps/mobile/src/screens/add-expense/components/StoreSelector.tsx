import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Store } from "../types";
import { Input, Card } from "../../../components/design-system";
import { useAppTheme } from "../../../theme";

interface StoreSelectorProps {
  storeInput: string;
  selectedStore: Store | null;
  stores: Store[];
  showDropdown: boolean;
  onInputChange: (text: string) => void;
  onStoreSelect: (store: Store) => void;
  onAddNew: () => void;
  onClear: () => void;
  onFocus: () => void;
}

export function StoreSelector({
  storeInput,
  selectedStore,
  stores,
  showDropdown,
  onInputChange,
  onStoreSelect,
  onAddNew,
  onClear,
  onFocus,
}: StoreSelectorProps) {
  const { theme } = useAppTheme();

  return (
    <View style={styles.section}>
      <Text
        style={[
          styles.sectionTitle,
          theme.custom.typography.h5,
          { color: theme.custom.colors.text },
        ]}
      >
        Store Information
      </Text>

      {selectedStore && !showDropdown ? (
        <Card style={styles.selectedCard} elevation={1}>
          <View style={styles.selectedContent}>
            <View style={styles.storeInfo}>
              <Text
                style={[
                  styles.storeName,
                  theme.custom.typography.bodyMedium,
                  { color: theme.custom.colors.text },
                ]}
              >
                {selectedStore.name}
              </Text>
              <Text
                style={[
                  styles.storeLocation,
                  theme.custom.typography.caption,
                  { color: theme.custom.colors.textSecondary },
                ]}
              >
                {selectedStore.location}
              </Text>
            </View>
            <TouchableOpacity onPress={onClear} style={styles.clearButton}>
              <Text
                style={[
                  styles.clearText,
                  { color: theme.custom.colors.textSecondary },
                ]}
              >
                ✕
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
      ) : (
        <Input
          placeholder="Search or select a store"
          value={storeInput}
          onChangeText={onInputChange}
          onFocus={onFocus}
          leftIcon="store"
        />
      )}

      {showDropdown && (
        <View
          style={[
            styles.dropdown,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.custom.colors.border,
            },
          ]}
        >
          {stores.length > 0 && (
            <FlatList
              data={stores}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.dropdownItem,
                    { borderBottomColor: theme.custom.colors.divider },
                  ]}
                  onPress={() => onStoreSelect(item)}
                >
                  <Text
                    style={[
                      styles.storeText,
                      theme.custom.typography.bodyMedium,
                      { color: theme.custom.colors.text },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      styles.storeLocationText,
                      theme.custom.typography.caption,
                      { color: theme.custom.colors.textSecondary },
                    ]}
                  >
                    {item.location}
                  </Text>
                </TouchableOpacity>
              )}
              nestedScrollEnabled
            />
          )}

          <TouchableOpacity
            style={[
              styles.dropdownItem,
              styles.addNewOption,
              {
                backgroundColor: theme.custom.colors.surfaceVariant,
                borderTopColor: theme.colors.primary,
              },
            ]}
            onPress={onAddNew}
          >
            <Text
              style={[
                styles.addNewText,
                theme.custom.typography.bodyMedium,
                { color: theme.colors.primary },
              ]}
            >
              + Add new store
            </Text>
          </TouchableOpacity>
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
  selectedCard: {
    marginTop: 8,
  },
  selectedContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {},
  storeLocation: {
    marginTop: 2,
  },
  clearButton: {
    padding: 8,
  },
  clearText: {
    fontSize: 20,
    fontWeight: 'bold',
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
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
  },
  storeText: {},
  storeLocationText: {
    marginTop: 4,
  },
  addNewOption: {
    borderTopWidth: 2,
    borderBottomWidth: 0,
  },
  addNewText: {},
});
