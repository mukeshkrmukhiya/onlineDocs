'use client'
import React, { useState, useEffect } from 'react';
import { HiCalendar } from 'react-icons/hi';
import { MdSchedule } from 'react-icons/md';
// import { format } from 'date-fns';
import { RxCrossCircled } from "react-icons/rx";


const CreateTodo = ({ mode, todoData, onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        startAt: '',
        endAt: '',
        priority: 'low', // Default priority
    });

    useEffect(() => {
        if (mode === 'update' && todoData) {
            setFormData({
                title: todoData.title,
                desc: todoData.desc,
                startAt: todoData.startAt,
                endAt: todoData.endAt,
                priority: todoData.priority,
            });
        }
    }, [mode, todoData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if startAt or endAt has changed
        const startAtChanged = formData.startAt !== todoData?.startAt;
        const endAtChanged = formData.endAt !== todoData?.endAt;
    
        // If startAt or endAt hasn't changed, keep the previous values
        const updatedFormData = {
            title: formData.title,
            desc: formData.desc,
            startAt: startAtChanged ? formData.startAt : todoData?.startAt,
            endAt: endAtChanged ? formData.endAt : todoData?.endAt,
            priority: formData.priority,
        };
        onSubmit(updatedFormData);
        setFormData({
            title: '',
            desc: '',
            startAt: '',
            endAt: '',
            priority: 'low',
        });
    };    

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 flex items-center justify-between">
                <div className="flex items-center text-gray-400">
                    <HiCalendar className="text-gray-400 mr-2" />
                    {mode === 'update' ? 'Update Todo' : 'Create Todo'}
                </div>
                <RxCrossCircled
                    className="border-gray-500 ml-2 text-2xl text-red-500 cursor-pointer hover:text-red-700 transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={() => onClose()}
                />
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter title"
                        className="mt-1 block w-full text-gray-200 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        name="desc"
                        value={formData.desc}
                        onChange={handleChange}
                        placeholder="Enter description"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="startAt" className="block text-sm font-medium text-gray-700">
                        Start At
                    </label>
                    <div className="flex items-center space-x-2">
                        <MdSchedule className="text-gray-700" />
                        <input
                            type="datetime-local"
                            name="startAt"
                            value={mode === 'update' ? formData.startAt.slice(0, -1) : formData.startAt}
                            onChange={handleChange}
                            className="block w-full border rounded px-3 py-2 outline-none focus:border-blue-300"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="endAt" className="block text-sm font-medium text-gray-700">
                        End At
                    </label>
                    <div className="flex items-center space-x-2">
                        <MdSchedule className="text-gray-700" />
                        <input
                            type="datetime-local"
                            name="endAt"
                            value={mode === 'update' ? formData.endAt.slice(0, -1) : formData.endAt}
                            onChange={handleChange}
                            className="block w-full border rounded px-3 py-2 outline-none focus:border-blue-300"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                        Priority
                    </label>
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                        required
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="block w-full bg-blue-500 text-white rounded py-2 font-semibold hover:bg-blue-600 transition duration-300"
                >
                    {mode === 'update' ? 'Update Todo' : 'Create Todo'}
                </button>
            </form>
        </div>
    );
};

export default CreateTodo;