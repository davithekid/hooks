import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight, Shapes } from "lucide-react";
import React from "react";
 export default function CardItem({ item }) {
  return (
    <>
    <Card className="max-w-xs shadow-none gap-0 pt-0">
      <CardHeader className="py-4 px-5 flex flex-row items-center gap-3 font-semibold">
        <div className="h-8 w-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
          <Shapes className="h-5 w-5" />
        </div>
       {item.titulo}
      </CardHeader>
      <CardContent className="mt-1 text-[15px] text-muted-foreground px-5 text-center">
        <p>
       {item.status}
        </p>
      </CardContent>
      <CardFooter className="mt-6">
      </CardFooter>
    </Card>
    </>
  );
};
