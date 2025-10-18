"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Shapes } from "lucide-react";
import { ModalUpdateItem } from "./blocks/update-item";
import { ModalDeleteItem } from "./blocks/delete-item";

export default function CardItem({ item, onEdit, onDel }) {
  return (
    <Card className="max-w-xs shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      
      <CardHeader className="flex items-center gap-3 bg-primary/10 px-5 py-4 font-semibold">
        <div className="h-8 w-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
          <Shapes className="h-5 w-5" />
        </div>
        <span className="text-lg">{item.titulo}</span>
      </CardHeader>

      <CardContent className="px-5 py-3 text-center text-sm text-muted-foreground">
        <p>{item.status}</p>
      </CardContent>

      <CardFooter className="flex justify-center gap-3 border-t pt-2">
        <ModalUpdateItem item={item} onEdit={onEdit} />
        <ModalDeleteItem item={item} onDel={onDel} />
      </CardFooter>
    </Card>
  );
}
