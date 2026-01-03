import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAppTheme } from '../../theme';

interface DateTimePickerComponentProps {
  label?: string;
  value: Date;
  onChange: (date: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
  disabled?: boolean;
}

export const DateTimePickerComponent: React.FC<DateTimePickerComponentProps> = ({
  label,
  value,
  onChange,
  mode = 'datetime',
  disabled = false,
}) => {
  const { theme } = useAppTheme();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [tempDate, setTempDate] = useState(value);

  const formatDateTime = (date: Date) => {
    if (mode === 'date') {
      return date.toLocaleDateString();
    } else if (mode === 'time') {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
      if (selectedDate) {
        const newDate = new Date(tempDate);
        newDate.setFullYear(selectedDate.getFullYear());
        newDate.setMonth(selectedDate.getMonth());
        newDate.setDate(selectedDate.getDate());
        setTempDate(newDate);

        if (mode === 'datetime') {
          setShowTimePicker(true);
        } else {
          onChange(newDate);
        }
      }
    } else if (selectedDate) {
      setTempDate(selectedDate);
    }
  };

  const handleTimeChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowTimePicker(false);
      if (selectedDate) {
        const newDate = new Date(tempDate);
        newDate.setHours(selectedDate.getHours());
        newDate.setMinutes(selectedDate.getMinutes());
        onChange(newDate);
      }
    } else if (selectedDate) {
      setTempDate(selectedDate);
    }
  };

  const handleIOSConfirm = () => {
    onChange(tempDate);
    setShowDatePicker(false);
    setShowTimePicker(false);
  };

  const handleIOSCancel = () => {
    setTempDate(value);
    setShowDatePicker(false);
    setShowTimePicker(false);
  };

  const handlePress = () => {
    if (disabled) return;
    setTempDate(value);
    if (mode === 'time') {
      setShowTimePicker(true);
    } else {
      setShowDatePicker(true);
    }
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: theme.custom.colors.text }]}>
          {label}
        </Text>
      )}

      <TouchableOpacity
        onPress={handlePress}
        disabled={disabled}
        style={[
          styles.input,
          {
            backgroundColor: theme.custom.colors.surface,
            borderColor: theme.custom.colors.border,
          },
          disabled && styles.disabled,
        ]}
      >
        <Text style={{ color: theme.custom.colors.text }}>
          {formatDateTime(value)}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <View>
          <DateTimePicker
            value={tempDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
          />
          {Platform.OS === 'ios' && (
            <View style={styles.iosButtons}>
              <TouchableOpacity onPress={handleIOSCancel} style={styles.iosButton}>
                <Text style={[styles.iosButtonText, { color: theme.custom.colors.textSecondary }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleIOSConfirm} style={styles.iosButton}>
                <Text style={[styles.iosButtonText, { color: theme.custom.colors.primary }]}>Done</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      {showTimePicker && (
        <View>
          <DateTimePicker
            value={tempDate}
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleTimeChange}
          />
          {Platform.OS === 'ios' && (
            <View style={styles.iosButtons}>
              <TouchableOpacity onPress={handleIOSCancel} style={styles.iosButton}>
                <Text style={[styles.iosButtonText, { color: theme.custom.colors.textSecondary }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleIOSConfirm} style={styles.iosButton}>
                <Text style={[styles.iosButtonText, { color: theme.custom.colors.primary }]}>Done</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  iosButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  iosButton: {
    padding: 8,
  },
  iosButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
