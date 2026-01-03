import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFamily } from '../../context/FamilyContext';
import { useNavigation } from '@react-navigation/native';
import { useAppTheme } from '../../theme';

interface FamilySelectorModalProps {
  visible: boolean;
  onClose: () => void;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const FamilySelectorModal: React.FC<FamilySelectorModalProps> = ({
  visible,
  onClose,
}) => {
  const { theme } = useAppTheme();
  const navigation = useNavigation();
  const { families, selectedFamily, selectFamily } = useFamily();
  const slideAnim = React.useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const handleSelect = async (family: any | null) => {
    await selectFamily(family);
    onClose();
  };

  const handleCreateFamily = () => {
    onClose();
    navigation.navigate('CreateFamily' as never);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.overlay, { backgroundColor: theme.colors.backdrop }]}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.modalContainer,
                {
                  backgroundColor: theme.colors.surface,
                  borderTopLeftRadius: theme.custom.borderRadius.xl + 8,
                  borderTopRightRadius: theme.custom.borderRadius.xl + 8,
                  transform: [{ translateY: slideAnim }],
                },
              ]}
            >
              <View style={[
                styles.handle,
                { backgroundColor: theme.custom.colors.divider }
              ]} />

              <View style={[
                styles.header,
                {
                  paddingHorizontal: theme.custom.spacing.lg,
                  paddingVertical: theme.custom.spacing.md,
                  borderBottomColor: theme.custom.colors.divider,
                }
              ]}>
                <Text style={[
                  styles.title,
                  { color: theme.colors.onSurface },
                  theme.custom.typography.h3,
                ]}>
                  Select Context
                </Text>
                <TouchableOpacity
                  onPress={onClose}
                  style={[styles.closeButton, { padding: theme.custom.spacing.xs }]}
                >
                  <MaterialCommunityIcons
                    name="close"
                    size={24}
                    color={theme.colors.onSurface}
                  />
                </TouchableOpacity>
              </View>

              <FlatList
                data={[null, ...families]}
                keyExtractor={(item) => item?.id || 'personal'}
                renderItem={({ item }) => {
                  const isSelected = item
                    ? selectedFamily?.id === item.id
                    : !selectedFamily;
                  const isPersonal = !item;

                  return (
                    <TouchableOpacity
                      style={[
                        styles.item,
                        {
                          backgroundColor: isSelected
                            ? theme.custom.colors.selectionBackground
                            : 'transparent',
                          borderRadius: theme.custom.borderRadius.lg,
                          paddingVertical: theme.custom.spacing.md,
                          paddingHorizontal: theme.custom.spacing.md,
                          marginVertical: theme.custom.spacing.xs,
                        },
                      ]}
                      onPress={() => handleSelect(item)}
                      activeOpacity={0.7}
                    >
                      <View style={styles.itemLeft}>
                        <View
                          style={[
                            styles.iconContainer,
                            {
                              backgroundColor: isPersonal
                                ? theme.custom.colors.familyPersonalLight
                                : theme.custom.colors.familyGroupLight,
                              borderRadius: theme.custom.borderRadius.round,
                            },
                          ]}
                        >
                          <MaterialCommunityIcons
                            name={isPersonal ? 'account' : 'account-group'}
                            size={24}
                            color={isPersonal
                              ? theme.custom.colors.familyPersonal
                              : theme.custom.colors.familyGroup
                            }
                          />
                        </View>
                        <View style={styles.itemTextContainer}>
                          <Text
                            style={[
                              styles.itemName,
                              { color: theme.colors.onSurface },
                              theme.custom.typography.bodyMedium,
                            ]}
                          >
                            {isPersonal ? 'Personal' : item.name}
                          </Text>
                          {!isPersonal && (
                            <Text style={[
                              styles.itemBalance,
                              { color: theme.custom.colors.textSecondary },
                              theme.custom.typography.caption,
                            ]}>
                              ${item.balance.toFixed(2)}
                            </Text>
                          )}
                        </View>
                      </View>
                      {isSelected && (
                        <MaterialCommunityIcons
                          name="check-circle"
                          size={24}
                          color={theme.colors.primary}
                        />
                      )}
                    </TouchableOpacity>
                  );
                }}
                contentContainerStyle={[
                  styles.listContent,
                  {
                    paddingHorizontal: theme.custom.spacing.lg,
                    paddingTop: theme.custom.spacing.sm,
                  }
                ]}
              />

              <TouchableOpacity
                style={[
                  styles.createButton,
                  {
                    backgroundColor: theme.colors.primary,
                    marginHorizontal: theme.custom.spacing.lg,
                    marginTop: theme.custom.spacing.sm,
                    paddingVertical: theme.custom.spacing.md - 2,
                    borderRadius: theme.custom.borderRadius.lg,
                  },
                ]}
                onPress={handleCreateFamily}
                activeOpacity={0.8}
              >
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={20}
                  color={theme.colors.onPrimary}
                />
                <Text style={[
                  styles.createButtonText,
                  { color: theme.colors.onPrimary },
                  theme.custom.typography.button,
                ]}>
                  Create New Family
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    maxHeight: SCREEN_HEIGHT * 0.7,
    paddingBottom: 20,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: '700',
  },
  closeButton: {},
  listContent: {},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemName: {
    fontWeight: '600',
  },
  itemBalance: {
    marginTop: 2,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonText: {
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default FamilySelectorModal;
