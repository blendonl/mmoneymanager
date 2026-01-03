import React from 'react';
import { StyleSheet, View, ScrollView, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GradientBackground } from '../auth/GradientBackground';

interface GlassScreenLayoutProps {
  children: React.ReactNode;
  scrollable?: boolean;
  header?: React.ReactNode;
  style?: ViewStyle;
}

export const GlassScreenLayout: React.FC<GlassScreenLayoutProps> = ({
  children,
  scrollable = false,
  header,
  style,
}) => {
  const content = (
    <SafeAreaView style={styles.safeArea}>
      {header}
      <View style={[styles.content, style]}>
        {children}
      </View>
    </SafeAreaView>
  );

  return (
    <GradientBackground>
      {scrollable ? (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
});
