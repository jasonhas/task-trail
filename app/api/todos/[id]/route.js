import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Todo from "@/model/todo";

export async function PUT(request, {params}){
    const {id} = params;

    const {newTitle: title} = await request.json()
    await connectMongoDB()
    await Todo.findByIdAndUpdate(id, {title})
    return NextResponse.json({message: "Todo updated"}, {status:200})
}

export async function GET(request, {params}){
    const { id} = params;
    await connectMongoDB();
    const todo = await Todo.findOne({_id: id})
    return NextResponse.json({todo}, { status: 200})
}