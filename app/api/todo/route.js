import { NextResponse } from 'next/server';
import Todo from '@/app/models/todos';

export async function GET() {
  try {
    const todos = await Todo.find();
    return NextResponse.json({ todos });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching todos', error }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, desc, startAt, endAt, priority } = body;
    const newTodo = await Todo.create({ title, desc, startAt, endAt, priority });
    return NextResponse.json({ message: 'Todo created', todo: newTodo }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating todo', error }, { status: 500 });
  }
}