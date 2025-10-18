"use client";

import CardItem from "@/components/CardItem";
import { useItems } from "@/hooks/useItems";
import ModalAddItem from "./add-item/ModalAddItem";
import { ModalUpdateItem } from "./update-item";
import { ModalDeleteItem } from "./delete-item";

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
            <div key={item.id} className="relative border rounded p-3">
              <CardItem item={item} />

              <div className="absolute top-2 right-2 flex gap-1">
                <ModalUpdateItem item={item} onEdit={updateItem} />
                <ModalDeleteItem item={item} onDel={delItem} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
