import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Input, Button } from "../../../components/design-system";
import { useAppTheme } from "../../../theme";
import { createGlassStyles } from "../../../theme/glassStyles";

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
  const { theme } = useAppTheme();
  const glassStyles = createGlassStyles(theme.custom.colors);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View
        style={[
          styles.modalOverlay,
          { backgroundColor: theme.custom.colors.backdrop },
        ]}
      >
        <View
          style={[
            glassStyles.glassCardStrong,
            styles.modalContent,
            { backgroundColor: theme.colors.surface },
          ]}
        >
          <Text
            style={[
              styles.modalTitle,
              theme.custom.typography.h4,
              { color: theme.custom.colors.text },
            ]}
          >
            Add New Store
          </Text>

          <Input
            placeholder="Store name"
            value={storeName}
            onChangeText={onStoreName}
            leftIcon="store"
          />

          <Input
            placeholder="Store location"
            value={storeLocation}
            onChangeText={onStoreLocation}
            leftIcon="map-marker"
          />

          <View style={styles.modalButtons}>
            <Button
              title="Cancel"
              onPress={onClose}
              variant="outlined"
              style={styles.button}
            />

            <Button
              title="Create"
              onPress={onCreate}
              loading={loading}
              disabled={loading || !storeName.trim()}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderRadius: 16,
    padding: 24,
    width: "85%",
    maxWidth: 400,
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    gap: 12,
  },
  button: {
    flex: 1,
  },
});
