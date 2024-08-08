"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"



export default function AddTodo() {
    const [title, setTitle] = useState("")

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        if(!title) {
            alert("The todo is kinda required")
            return;
        }
    
        try {
            const res = await fetch('http://localhost:3000/api/todos', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title})
            })
    
            if (res.ok) {
                router.refresh();
                router.push('/')
            } else {
                throw new Error("Failed to create todo")
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={(e) =>setTitle(e.target.value)} value={title} className="border border-slate-500 px-8 py-2" type="text" placeholder="Todo"></input>

            <button className="bg-green-500 font-bold text-white py-3 px-6 w-fit">Add Todo</button>
        </form>
    )
}