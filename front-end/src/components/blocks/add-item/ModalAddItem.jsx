'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ModalAddItem({ onAddItem }) {
    const [titulo, setTitulo] = useState('')
    const [status, setStatus] = useState('')

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Adicionar Item</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Adicionando item</DialogTitle>
                        <DialogDescription>
                            Utilize este modal para adicionar itens à lista!
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="titulo">Título</Label>
                            <Input
                                id="titulo"
                                name="titulo"
                                placeholder="Digite o título"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="status">Status</Label>
                            <Input
                                id="status"
                                name="status"
                                placeholder="Digite o status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                onAddItem({ titulo, status })
                            }}
                        >
                            Salvar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
