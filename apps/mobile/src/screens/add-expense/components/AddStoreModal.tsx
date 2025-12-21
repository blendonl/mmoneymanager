import React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "../styles";

interface AddStoreModalProps {
  visible: boolean;
  storeName: string;
  storeLocation: string;
  loading: boolean;
  onStoreName: (text: string) => void;
  onStoreLocation: (text: string) => void;
  onCreate: () => void;
  onClose: () => void;
}

export function AddStoreModal({
  visible,
  storeName,
  storeLocation,
  loading,
  onStoreName,
  onStoreLocation,
  onCreate,
  onClose,
}: AddStoreModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add New Store</Text>

          <TextInput
            style={styles.input}
            placeholder="Store name"
            value={storeName}
            onChangeText={onStoreName}
          />

          <TextInput
            style={styles.input}
            placeholder="Store location"
            value={storeLocation}
            onChangeText={onStoreLocation}
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.modalCancelButton]}
              onPress={onClose}
            >
              <Text style={styles.modalCancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, styles.modalCreateButton]}
              onPress={onCreate}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.modalCreateButtonText}>Create</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
