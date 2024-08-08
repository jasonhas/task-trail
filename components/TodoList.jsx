import RemoveBtn from "./RemoveBtn";
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'
import CheckDone from "./CheckDone";

const getTodos = async() => {
    try {
        const res = await fetch('http://localhost:3000/api/todos', {
            cache: 'no-store',
        })

        if(!res.ok) {
            throw new Error("Failed to fetch todos");
        }

        return res.json()
    } catch(error) {
        console.log(error)
    }
}

export default async function TodoList() {

    const { todos } = await getTodos();

    return (
        <>
        <div className="text-center">
            You have {todos.length} items to accomplish
        </div>
        
        {todos.map((t) => (

        
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div className="flex gap-2 items-center">
                <CheckDone/>
                <h2 className="font-bold text-2xl">{t.title}</h2>
            </div>

            <div className="flex gap-2">
                <RemoveBtn id={t._id}/>
                <Link href={`/editTodo/${t._id}`}><HiPencilAlt size={24}/></Link>
            </div>

        </div>

        ))}

        </>

    )
}