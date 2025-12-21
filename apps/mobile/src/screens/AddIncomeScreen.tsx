import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Input, Button, Chip } from '../components/design-system';
import { PriceInput } from '../components/forms';
import { useAppTheme } from '../theme';
import { apiClient } from '../api/client';
import { useImageUpload } from '../hooks/useImageUpload';
import { ReceiptCamera } from './transactions/add/components/ReceiptCamera';
import { ReceiptPreview } from '../components/transactions/ReceiptPreview';

interface Category {
    id: string;
    name: string;
}

export default function AddIncomeScreen({ navigation }: any) {
    const { theme } = useAppTheme();
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [categoryInput, setCategoryInput] = useState('');
    const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    const [incomeAmount, setIncomeAmount] = useState('');
    const [incomeDescription, setIncomeDescription] = useState('');

    const imageUpload = useImageUpload();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await apiClient.get('/expense-categories');
            setCategories(response.data || []);
        } catch (error: any) {
            Alert.alert('Error', 'Failed to fetch categories');
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryInputChange = (text: string) => {
        setCategoryInput(text);
        setShowCategoryDropdown(true);

        if (text.trim() === '') {
            setFilteredCategories([]);
            setSelectedCategory(null);
            return;
        }

        const filtered = categories.filter((cat) =>
            cat.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCategories(filtered);
    };

    const handleCategorySelect = (category: Category) => {
        setSelectedCategory(category);
        setCategoryInput(category.name);
        setShowCategoryDropdown(false);
        setFilteredCategories([]);
    };

    const handleCreateNewCategory = async () => {
        const trimmedName = categoryInput.trim();

        if (!trimmedName) {
            Alert.alert('Error', 'Please enter a category name');
            return;
        }

        const existingCategory = categories.find(
            (cat) => cat.name.toLowerCase() === trimmedName.toLowerCase()
        );

        if (existingCategory) {
            handleCategorySelect(existingCategory);
            return;
        }

        try {
            setLoading(true);
            const response = await apiClient.post('/expense-categories', {
                name: trimmedName,
            });

            const newCategory: Category = {
                id: response.data.id,
                name: response.data.name,
            };

            setCategories([...categories, newCategory]);
            handleCategorySelect(newCategory);
        } catch (error: any) {
            Alert.alert('Error', error.message || 'Failed to create category');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        if (!selectedCategory) {
            Alert.alert('Error', 'Please select a category');
            return;
        }

        if (!incomeAmount || parseFloat(incomeAmount) <= 0) {
            Alert.alert('Error', 'Please enter a valid amount');
            return;
        }

        try {
            setLoading(true);

            let receiptUrls: string[] = [];
            if (imageUpload.imageUris.length > 0) {
                receiptUrls = await imageUpload.uploadImages();
            }

            const payload = {
                type: 'INCOME',
                value: parseFloat(incomeAmount),
                userId: 'current-user',
                description: incomeDescription,
                categoryId: selectedCategory.id,
                receiptImages: receiptUrls,
            };

            await apiClient.post('/transactions', payload);
            imageUpload.clearImages();
            Alert.alert('Success', 'Income created successfully', [
                {
                    text: 'OK',
                    onPress: () => navigation.goBack(),
                },
            ]);
        } catch (error: any) {
            Alert.alert('Error', error.message || 'Failed to create income');
        } finally {
            setLoading(false);
        }
    };

    const renderCategorySelection = () => {
        const hasExactMatch = filteredCategories.some(
            (cat) => cat.name.toLowerCase() === categoryInput.toLowerCase()
        );
        const showCreateOption = categoryInput.trim() !== '' && !hasExactMatch;

        return (
            <View style={styles.section}>
                <Text
                    style={[
                        styles.sectionTitle,
                        theme.custom.typography.h5,
                        { color: theme.custom.colors.text },
                    ]}
                >
                    Income Category
                </Text>

                {selectedCategory && !showCategoryDropdown ? (
                    <View style={styles.selectedContainer}>
                        <Chip
                            label={selectedCategory.name}
                            selected={true}
                            onClose={() => {
                                setSelectedCategory(null);
                                setCategoryInput('');
                                setShowCategoryDropdown(true);
                            }}
                            style={styles.selectedChip}
                        />
                    </View>
                ) : (
                    <Input
                        placeholder="Type or select a category"
                        value={categoryInput}
                        onChangeText={handleCategoryInputChange}
                        onFocus={() => setShowCategoryDropdown(true)}
                        leftIcon="tag"
                    />
                )}

                {showCategoryDropdown && (categoryInput.trim() !== '' || filteredCategories.length > 0) && (
                    <View
                        style={[
                            styles.dropdown,
                            {
                                backgroundColor: theme.colors.surface,
                                borderColor: theme.custom.colors.border,
                            },
                        ]}
                    >
                        {loading ? (
                            <ActivityIndicator
                                size="small"
                                color={theme.colors.primary}
                                style={styles.dropdownLoader}
                            />
                        ) : (
                            <>
                                {filteredCategories.length > 0 ? (
                                    <FlatList
                                        data={filteredCategories}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                style={[
                                                    styles.dropdownItem,
                                                    { borderBottomColor: theme.custom.colors.divider },
                                                ]}
                                                onPress={() => handleCategorySelect(item)}
                                            >
                                                <Text
                                                    style={[
                                                        styles.dropdownItemText,
                                                        theme.custom.typography.body,
                                                        { color: theme.custom.colors.text },
                                                    ]}
                                                >
                                                    {item.name}
                                                </Text>
                                            </TouchableOpacity>
                                        )}
                                        style={styles.dropdownList}
                                        nestedScrollEnabled
                                    />
                                ) : (
                                    categoryInput.trim() !== '' && (
                                        <Text
                                            style={[
                                                styles.noResultsText,
                                                theme.custom.typography.body,
                                                { color: theme.custom.colors.textSecondary },
                                            ]}
                                        >
                                            No matching categories
                                        </Text>
                                    )
                                )}

                                {showCreateOption && (
                                    <TouchableOpacity
                                        style={[
                                            styles.dropdownItem,
                                            styles.createOption,
                                            {
                                                backgroundColor: theme.custom.colors.surfaceVariant,
                                                borderTopColor: theme.colors.primary,
                                            },
                                        ]}
                                        onPress={handleCreateNewCategory}
                                    >
                                        <Text
                                            style={[
                                                styles.createOptionText,
                                                theme.custom.typography.bodyMedium,
                                                { color: theme.colors.primary },
                                            ]}
                                        >
                                            + Create new category: "{categoryInput}"
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </>
                        )}
                    </View>
                )}
            </View>
        );
    };

    const renderIncomeForm = () => (
        <View style={styles.section}>
            <Text
                style={[
                    styles.sectionTitle,
                    theme.custom.typography.h5,
                    { color: theme.custom.colors.text },
                ]}
            >
                Income Details
            </Text>
            <PriceInput
                label="Amount"
                value={incomeAmount}
                onChangeText={setIncomeAmount}
                placeholder="0.00"
            />
            <Input
                label="Description (optional)"
                value={incomeDescription}
                onChangeText={setIncomeDescription}
                multiline
                numberOfLines={4}
            />
        </View>
    );

    const canSubmit = () => {
        if (!selectedCategory) return false;
        return incomeAmount && parseFloat(incomeAmount) > 0;
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.flex}
            keyboardVerticalOffset={100}
        >
            <ScrollView
                style={[styles.container, { backgroundColor: theme.colors.background }]}
                keyboardShouldPersistTaps="handled"
            >
                {renderCategorySelection()}
            {selectedCategory && renderIncomeForm()}

            {selectedCategory && (
                <View style={styles.section}>
                    <Text
                        style={[
                            styles.sectionTitle,
                            theme.custom.typography.h5,
                            { color: theme.custom.colors.text },
                        ]}
                    >
                        Receipt (Optional)
                    </Text>
                    <ReceiptCamera
                        onImageSelected={imageUpload.addImage}
                        disabled={imageUpload.uploading || loading}
                    />
                    <ReceiptPreview
                        imageUris={imageUpload.imageUris}
                        onRemove={imageUpload.removeImage}
                    />
                </View>
            )}

            {canSubmit() && (
                <Button
                    title="Create Income"
                    onPress={handleSubmit}
                    loading={loading || imageUpload.uploading}
                    disabled={loading || imageUpload.uploading}
                    fullWidth
                    style={styles.submitButton}
                />
            )}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        marginBottom: 12,
    },
    selectedContainer: {
        marginTop: 8,
    },
    selectedChip: {
        alignSelf: 'flex-start',
    },
    dropdown: {
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        maxHeight: 200,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    dropdownLoader: {
        padding: 16,
    },
    dropdownList: {
        maxHeight: 200,
    },
    dropdownItem: {
        padding: 12,
        borderBottomWidth: 1,
    },
    dropdownItemText: {},
    noResultsText: {
        padding: 16,
        textAlign: 'center',
    },
    createOption: {
        borderTopWidth: 2,
        borderBottomWidth: 0,
    },
    createOptionText: {},
    submitButton: {
        marginTop: 16,
        marginBottom: 32,
    },
});
