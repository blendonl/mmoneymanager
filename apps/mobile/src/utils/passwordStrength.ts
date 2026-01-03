export const calculatePasswordStrength = (password: string): number => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return Math.min(strength, 4);
};

export const getPasswordStrengthColor = (strength: number): string => {
  if (strength <= 1) return '#F44336';
  if (strength === 2) return '#FF9800';
  if (strength === 3) return '#FFC107';
  return '#4CAF50';
};

export const getPasswordStrengthLabel = (strength: number): string => {
  if (strength === 0) return '';
  if (strength <= 1) return 'Weak';
  if (strength === 2) return 'Fair';
  if (strength === 3) return 'Good';
  return 'Strong';
};
