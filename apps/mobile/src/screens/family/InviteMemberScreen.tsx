import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useFamily } from "../../context/FamilyContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Input, Button } from "../../components/design-system";
import { useAppTheme } from "../../theme";

export default function InviteMemberScreen() {
  const { theme } = useAppTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { familyId } = route.params as { familyId: string };
  const { inviteMember } = useFamily();
  const [email, setEmail] = useState("");

  const handleInvite = async () => {
    if (!email.trim() || !email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    try {
      await inviteMember(familyId, email);
      Alert.alert("Success", "Invitation sent!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to send invitation");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={styles.title}>Invite Member</Text>
      <Input
        label="Email Address"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email address"
        keyboardType="email-address"
        autoCapitalize="none"
        autoFocus
      />
      <Button title="Send Invitation" onPress={handleInvite} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
});
