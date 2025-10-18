"use client";

import CardItem from "@/components/CardItem";
import { useItems } from "@/hooks/useItems";
import ModalAddItem from "./add-item/ModalAddItem";

export default function Listagem({ itemsInitial }) {
  const { items, loading, error, addItem, delItem, updateItem } = useItems(itemsInitial);

  return (
    <div className="p-5 space-y-6">
      <div className="flex justify-center gap-4">
        <ModalAddItem onAddItem={addItem} />
      </div>

      {loading && <p className="text-center">Carregando...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-3 gap-4">
        {items
          ?.filter((item) => item && item.id)
          .map((item) => (
            <CardItem
              key={item.id}
              item={item}
              onEdit={updateItem}
              onDel={delItem}
            />
          ))}
      </div>
    </div>
  );
}
