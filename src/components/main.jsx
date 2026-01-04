import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { motion } from "framer-motion"

const Main = () => {

    const [todo, settodo] = useState("")
    const [todos, settodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });
    const [editid, seteditid] = useState(null);
    const [hideComplete, sethideComplete] = useState(false);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    // const saveToLs = () => {
    //   localStorage.setItem("todos", JSON.stringify(todos));
    // }

    const handleadd = () => {
        if (editid) {
            // update existing todo
            let updatetodo = todos.map((item) => item.id === editid ? { ...item, todo: todo } : item);
            settodos(updatetodo);
            seteditid(null)
            settodo("")
        } else {
            // new todo add
            settodos([...todos, { todo, id: uuidv4(), isComplete: false }])
            settodo("")
        }
    }
    const handlechange = (e) => {
        settodo(e.target.value)
    }
    const handlecheckbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(items => {
            return items.id === id;
        })
        let newtodos = [...todos];
        newtodos[index].isComplete = !newtodos[index].isComplete;
        settodos(newtodos);
    }
    const handledelete = (e) => {
        let id = e.target.name;
        let newtodos = todos.filter(items => items.id != id);
        settodos(newtodos);
    }
    const handleedit = (e) => {
        let id = e.target.name;
        let edititem = todos.find(item => item.id === id);
        settodo(edititem.todo);
        seteditid(id);
    }
    const handleclearallchecked = () => {
        let remainingtodos = todos.filter(item => !item.isComplete);
        settodos(remainingtodos)
    }

    const anyChecked = todos.some(item => item.isComplete)
    const issaveDisabled = todo.length === 0;
    return (

        <>
            <div className='min-h-screen px-2 sm:px-6 bg-yellow-50 py-6' >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center m-2 p-2 rounded-md "
                >
                    <img
                        src="/logo.jpeg"
                        alt="logo"
                        className="w-10 h-10 sm:w-12 sm:h-12 mr-4 rounded-full"
                    />
                    <h1 className=' font-extrabold m-2 text-lg sm:text-xl' >Add ToDos</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className=" flex flex-col items-center gap-3 mt-4 "
                >
                    <input
                        type="text"
                        onChange={handlechange}
                        value={todo} className=" bg-orange-100 border-2 w-full sm:w-2/3 md:1/2 p-2 rounded "
                    />
                    <button
                        onClick={handleadd}
                        disabled={issaveDisabled}
                        className='bg-stone-900 px-6 py-2 p-4 rounded-md text-white hover:scale-105 transition disabled:opacity-50 '
                    >
                        {editid ? "Update" : "Save"}
                    </button>
                </motion.div>

                <div className="todo_list mt-6 flex flex-col items-center ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className='border-2 w-full sm:w-2/3 md:w-1/2 p-2 mb-3 rounded'>
                        <input
                            id="show"
                            type="checkbox"
                            checked={hideComplete}
                            onChange={() => sethideComplete(!hideComplete)}
                        />
                        <label htmlFor="show" className='ml-2 font-medium text-sm '>Hide Completed Todos</label>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="todos w-full sm:w-2/3 md:w-1/2 "
                    >
                        <h1 className='text-center text-lg font-bold mb-2 ' >Yours ToDo</h1>
                        {todos.length === 0 && (
                            <div className='text-center text-gray-500'>No Todos for Do</div>
                        )}
                        {todos
                            .filter(item => !hideComplete || !item.isComplete)
                            .map(items => (
                                <div
                                    key={items.id}
                                    className="todo flex flex-col sm:flex-row sm:items-center justify-between bg-yellow-100 rounded-sm p-2 my-2 border-2"
                                >
                                    <div className='flex items-center gap-2' >
                                        <input
                                            type="checkbox"
                                            checked={items.isComplete}
                                            name={items.id}
                                            onChange={handlecheckbox}
                                        />
                                        <span className={items.isComplete ? "line-through" : ""}>
                                            {items.todo}
                                        </span>

                                    </div>
                                    <div className="flex gap-2 justify-end">
                                        <button
                                            name={items.id}
                                            onClick={handledelete}
                                            className='bg-red-900 border p-2 rounded text-white'
                                        >
                                            <AiTwotoneDelete />
                                        </button>
                                        <button
                                            name={items.id}
                                            onClick={handleedit}
                                            className='bg-green-700 p-2 rounded text-white'
                                        >
                                            <FaEdit />
                                        </button>
                                    </div>
                                </div>
                            ))}

                        <button
                            onClick={handleclearallchecked}
                            disabled={!anyChecked}
                            className="bg-green-900 w-full  py-2 rounded text-white mt-4 disabled:opacity-50"
                        >
                            Clear Completed
                        </button>
                    </motion.div>
                </div>
            </div >


        </>
    );
};

export default Main
