"use client"
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({id}) {
    const router = useRouter();
    const removeTodo = async () => {
        const confirmed = confirm('Are you sure')

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/todos?id=${id}`, {
                method: "DELETE",
            })

            if(res.ok) {
                router.refresh();
            }
        }
    }
    return (
        <button onClick={removeTodo} className="text-red-800">
            <HiOutlineTrash size={24} className=""/>
        </button>
    )
}