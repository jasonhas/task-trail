import Todo from "@/model/todo";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title} = await request.json()
    await connectMongoDB();
    await Todo.create({title})
    return NextResponse.json({message: "Todo Create"}, {status: 201})
}

export async function GET() {
    await connectMongoDB()
    const todos = await Todo.find();
    return NextResponse.json({todos})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Todo.findByIdAndDelete(id)
    return NextResponse.json({message: "Todo Deleted"}, {status:201})
}
