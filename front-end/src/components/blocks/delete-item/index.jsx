"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";

export function ModalDeleteItem({ onDel, item }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    await onDel(item.id); // chama a função passada via props com o id do item
    setIsOpen(false); // fecha o modal
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Deletar</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deseja deletar esse item?</DialogTitle>
          <DialogDescription>
            Este modal permite deletar itens da lista.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <p><strong>Título:</strong> {item.titulo}</p>
          <p><strong>Status:</strong> {item.status}</p>
          <p><strong>ID:</strong> {item.id}</p>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button variant="destructive" onClick={handleDelete}>
            Confirmar deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
