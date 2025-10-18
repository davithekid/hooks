"use client";
import { useState } from "react";
import { api } from "@/lib/api";

export function useItems(itemsInitial) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState(itemsInitial || []);

  const addItem = async (newItemData) => {
    setLoading(true);
    setError(null);
    try {
      const createdItem = await api.post("items", newItemData);
      setItems((prev) => [...prev, createdItem]);
    } catch (err) {
      console.error(err);
      setError("Erro ao criar item");
    } finally {
      setLoading(false);
    }
  };

  const delItem = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await api.del(`items/${id}`);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err);
      setError("Erro ao excluir item");
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (id, itemEditado) => {
    setLoading(true);
    setError(null);
    try {
      const updatedItem = await api.put(`items/${id}`, itemEditado);
      setItems((prev) =>
        prev.map((item) => (item.id === id ? updatedItem : item))
      );
    } catch (err) {
      console.error(err);
      setError("Erro ao editar item");
    } finally {
      setLoading(false);
    }
  };

  return { items, loading, error, addItem, delItem, updateItem };
}
