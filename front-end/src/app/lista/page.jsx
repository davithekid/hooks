import Listagem from "@/components/blocks/Listagem"
import { apiServer } from "@/lib/api-server"

export default async function Lista() {

    let items = []
    try {
        items = await apiServer.get('items')
        console.log(items)
    } catch (error) {

    }

    return (
        <>
        <main className="mx-auto container">
           <Listagem itemsInitial={items}/>
        </main>
        </>
    )
}