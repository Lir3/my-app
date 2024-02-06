import TodoList from '../components/TodoList';
import { useState } from 'react';
import { useFireStore } from '../hooks/useFireStore';
import type Todo from '../types/Todo';

const Page9 = () => {

    // firestore操作
    const { findDatas } = useFireStore<Todo>('todos');

    // todo一覧
    const [todos, setTodos] = useState<{ id: string; data: Todo }[]>([]);

    const findTodos = async () => {

    };
    return (
        <>
            <p>Page9</p>
            <TodoList></TodoList>
        </>
    );
};

export default Page9;