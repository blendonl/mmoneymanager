import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../../theme';

interface Step {
  label: string;
  completed: boolean;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  const { theme } = useAppTheme();

  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = step.completed;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <View style={styles.stepContainer}>
              <View
                style={[
                  styles.stepCircle,
                  {
                    backgroundColor: isCompleted || isActive
                      ? theme.colors.primary
                      : theme.custom.colors.surfaceVariant,
                    borderColor: theme.colors.primary,
                    borderWidth: isActive ? 2 : 0,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.stepNumber,
                    theme.custom.typography.caption,
                    {
                      color: isCompleted || isActive
                        ? '#FFFFFF'
                        : theme.custom.colors.textSecondary,
                    },
                  ]}
                >
                  {isCompleted ? '✓' : index + 1}
                </Text>
              </View>
              <Text
                style={[
                  styles.stepLabel,
                  theme.custom.typography.small,
                  {
                    color: isActive
                      ? theme.colors.primary
                      : theme.custom.colors.textSecondary,
                    fontWeight: isActive ? '600' : '400',
                  },
                ]}
              >
                {step.label}
              </Text>
            </View>
            {!isLast && (
              <View
                style={[
                  styles.line,
                  {
                    backgroundColor: isCompleted
                      ? theme.colors.primary
                      : theme.custom.colors.divider,
                  },
                ]}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  stepContainer: {
    alignItems: 'center',
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  stepNumber: {
    fontWeight: '600',
  },
  stepLabel: {
    textAlign: 'center',
    maxWidth: 80,
  },
  line: {
    flex: 1,
    height: 2,
    marginHorizontal: 4,
    marginBottom: 20,
  },
});
