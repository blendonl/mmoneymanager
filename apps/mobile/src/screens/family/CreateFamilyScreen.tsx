import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useFamily } from "../../context/FamilyContext";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "../../components/design-system";
import { useAppTheme } from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CreateFamilyScreen() {
  const { theme } = useAppTheme();
  const [name, setName] = useState("");
  const { createFamily } = useFamily();
  const navigation = useNavigation();

  const handleCreate = async () => {
    if (!name.trim()) {
      Alert.alert("Error", "Please enter a family name");
      return;
    }

    try {
      const family = await createFamily(name);
      navigation.goBack();
      navigation.navigate("FamilyDetail" as never, { familyId: family.id } as never);
    } catch (error) {
      Alert.alert("Error", "Failed to create family");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: theme.colors.background }
        ]}
        contentContainerStyle={{
          padding: theme.custom.spacing.lg,
        }}
      >
        <View style={[
          styles.iconContainer,
          {
            backgroundColor: theme.custom.colors.familyGroupLight,
            borderRadius: theme.custom.borderRadius.round,
            padding: theme.custom.spacing.lg,
            marginBottom: theme.custom.spacing.lg,
          }
        ]}>
          <MaterialCommunityIcons
            name="account-group"
            size={48}
            color={theme.custom.colors.familyGroup}
          />
        </View>

        <Text style={[
          styles.title,
          { color: theme.colors.onBackground },
          theme.custom.typography.h2,
        ]}>
          Create a New Family
        </Text>

        <Text style={[
          styles.subtitle,
          { color: theme.custom.colors.textSecondary },
          theme.custom.typography.body,
        ]}>
          Start managing finances together with your family members
        </Text>

        <View style={{ marginTop: theme.custom.spacing.xl }}>
          <Input
            label="Family Name"
            value={name}
            onChangeText={setName}
            placeholder="Enter family name"
            autoFocus
          />
        </View>

        <View style={{ marginTop: theme.custom.spacing.lg }}>
          <Button title="Create Family" onPress={handleCreate} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    width: 96,
    height: 96,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
  },
});
