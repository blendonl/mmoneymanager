import React from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Category } from "../types";
import { styles } from "../styles";

interface AddItemCategoryModalProps {
  visible: boolean;
  categoryName: string;
  selectedParent: Category | null;
  itemCategories: Category[];
  loading: boolean;
  onCategoryName: (text: string) => void;
  onParentSelect: (category: Category | null) => void;
  onCreate: () => void;
  onClose: () => void;
}

export function AddItemCategoryModal({
  visible,
  categoryName,
  selectedParent,
  itemCategories,
  loading,
  onCategoryName,
  onParentSelect,
  onCreate,
  onClose,
}: AddItemCategoryModalProps) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Create Item Category</Text>

          <TextInput
            style={styles.input}
            placeholder="Category name"
            value={categoryName}
            onChangeText={onCategoryName}
          />

          <Text style={styles.label}>Parent Category (optional)</Text>
          <View style={styles.parentCategorySelector}>
            {selectedParent ? (
              <View style={styles.selectedParentContainer}>
                <Text style={styles.selectedParentText}>
                  {selectedParent.name}
                </Text>
                <TouchableOpacity onPress={() => onParentSelect(null)}>
                  <Text style={styles.clearButton}>✕</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <FlatList
                data={itemCategories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.parentCategoryItem}
                    onPress={() => onParentSelect(item)}
                  >
                    <Text style={styles.parentCategoryText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
                style={styles.parentCategoryList}
              />
            )}
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
              disabled={loading}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.createButton]}
              onPress={onCreate}
              disabled={loading || !categoryName.trim()}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Create</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
