import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { apiClient } from "../../../api/client";
import { Category } from "../types";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [itemCategories, setItemCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [categoryInput, setCategoryInput] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchItemCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/expense-categories");
      setCategories(response.data || []);
    } catch (error: any) {
      Alert.alert("Error", "Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  const fetchItemCategories = async () => {
    try {
      const response = await apiClient.get("/expense-item-categories");
      setItemCategories(response.data || []);
    } catch (error: any) {
      console.error("Failed to fetch item categories:", error);
    }
  };

  const handleCategoryInputChange = (text: string) => {
    setCategoryInput(text);
    setShowCategoryDropdown(true);

    if (text.trim() === "") {
      setFilteredCategories([]);
      setSelectedCategory(null);
      return;
    }

    const filtered = categories.filter((cat) =>
      cat.name.toLowerCase().includes(text.toLowerCase()),
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
      Alert.alert("Error", "Please enter a category name");
      return;
    }

    const existingCategory = categories.find(
      (cat) => cat.name.toLowerCase() === trimmedName.toLowerCase(),
    );

    if (existingCategory) {
      handleCategorySelect(existingCategory);
      return;
    }

    try {
      setLoading(true);
      const response = await apiClient.post("/expense-categories", {
        name: trimmedName,
        isConnectedToStore: true,
      });

      const newCategory: Category = {
        id: response.data.id,
        name: response.data.name,
        isConnectedToStore: response.data.isConnectedToStore,
      };

      setCategories([...categories, newCategory]);
      handleCategorySelect(newCategory);
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  const clearCategory = () => {
    setSelectedCategory(null);
    setCategoryInput("");
    setShowCategoryDropdown(true);
  };

  return {
    categories,
    itemCategories,
    selectedCategory,
    categoryInput,
    filteredCategories,
    showCategoryDropdown,
    loading,
    handleCategoryInputChange,
    handleCategorySelect,
    handleCreateNewCategory,
    clearCategory,
    setShowCategoryDropdown,
  };
}
