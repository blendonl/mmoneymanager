import React from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import { useFamily } from "../../context/FamilyContext";
import { Card, Button } from "../../components/design-system";
import { useAppTheme } from "../../theme";

export default function PendingInvitationsScreen() {
  const { theme } = useAppTheme();
  const { pendingInvitations, acceptInvitation, declineInvitation } = useFamily();

  const handleAccept = async (invitationId: string) => {
    try {
      await acceptInvitation(invitationId);
      Alert.alert("Success", "Invitation accepted!");
    } catch (error) {
      Alert.alert("Error", "Failed to accept invitation");
    }
  };

  const handleDecline = async (invitationId: string) => {
    try {
      await declineInvitation(invitationId);
      Alert.alert("Success", "Invitation declined");
    } catch (error) {
      Alert.alert("Error", "Failed to decline invitation");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={styles.title}>Pending Invitations</Text>

      <FlatList
        data={pendingInvitations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.invitationCard}>
            <Text style={styles.inviteeEmail}>{item.inviteeEmail}</Text>
            <Text style={[styles.date, { color: theme.custom.colors.textSecondary }]}>
              Invited on: {new Date(item.createdAt).toLocaleDateString()}
            </Text>
            <View style={styles.buttonRow}>
              <Button
                title="Accept"
                onPress={() => handleAccept(item.id)}
                style={styles.button}
              />
              <Button
                title="Decline"
                onPress={() => handleDecline(item.id)}
                style={[styles.button, { backgroundColor: theme.colors.error }]}
              />
            </View>
          </Card>
        )}
        ListEmptyComponent={
          <Text style={[styles.emptyText, { color: theme.custom.colors.textSecondary }]}>
            No pending invitations
          </Text>
        }
      />
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
    marginBottom: 16,
  },
  invitationCard: {
    marginBottom: 12,
  },
  inviteeEmail: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    flex: 1,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 32,
  },
});
