import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import ImageView from 'react-native-image-viewing';
import { useAppTheme } from '../../theme';

interface ReceiptPreviewProps {
  imageUris: string[];
  onRemove: (index: number) => void;
}

export const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({
  imageUris,
  onRemove,
}) => {
  const { theme } = useAppTheme();
  const [viewerVisible, setViewerVisible] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const handleImagePress = (index: number) => {
    setViewerIndex(index);
    setViewerVisible(true);
  };

  if (imageUris.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imagesContainer}>
          {imageUris.map((uri, index) => (
            <View key={index} style={styles.imageWrapper}>
              <TouchableOpacity
                onPress={() => handleImagePress(index)}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri }}
                  style={[
                    styles.thumbnail,
                    { borderColor: theme.custom.colors.border },
                  ]}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <IconButton
                icon="close-circle"
                size={24}
                iconColor={theme.colors.error}
                containerColor={theme.colors.surface}
                style={styles.removeButton}
                onPress={() => onRemove(index)}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <ImageView
        images={imageUris.map((uri) => ({ uri }))}
        imageIndex={viewerIndex}
        visible={viewerVisible}
        onRequestClose={() => setViewerVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  imagesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  imageWrapper: {
    position: 'relative',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
  },
  removeButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    margin: 0,
  },
});
