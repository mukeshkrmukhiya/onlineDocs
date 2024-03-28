'use client'
import React, { useState } from 'react';
import { MdEditRoad } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const TodoCard = ({ todo, onUpdate, onDelete, onEdit }) => {
    const [editedTodo, setEditedTodo] = useState({
        ...todo,
    });

    const handleCheckboxChange = () => {
        const updatedTodo = { ...editedTodo, completed: !editedTodo.completed };
        setEditedTodo(updatedTodo);
        onUpdate(updatedTodo);
    };

    const handleEdit = () => {
        onEdit(todo);
    };

    const handleDelete = () => {
        onDelete(todo._id);
    };

    const renderTimeAgo = (timeString) => {
        const currentTime = new Date();
        const targetTime = new Date(timeString);
        const diffMs = currentTime - targetTime;

        // Convert milliseconds to minutes
        const minutes = Math.floor(Math.abs(diffMs) / (1000 * 60));

        if (diffMs < 0) {
            // Time is in the future
            return 'In the future';
        } else if (minutes < 1) {
            return `${(minutes / 60).toFixed(1)} sec${minutes === 1 ? '' : 's'} ago`;
        } else if (minutes < 60) {
            return `${minutes} min${minutes === 1 ? '' : 's'} ago`;
        } else if (minutes < 1440) {  // 1440 minutes = 1 day
            const hours = Math.floor(minutes / 60);
            return `${hours} hr${hours === 1 ? '' : 's'} ago`;
        } else if (minutes < 525600) {  // 525600 minutes = 1 year
            const days = Math.floor(minutes / 1440);
            return `${days} day${days === 1 ? '' : 's'} ago`;
        } else {
            const years = Math.floor(minutes / 525600);
            return `${years} yr${years === 1 ? '' : 's'} ago`;
        }
    };

    const renderEndTime = () => {
        const endTime = new Date(new Date(editedTodo.endAt).getTime());
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        return endTime.toLocaleTimeString('en-US', options);
    };

    const isActive = () => {
        // Check if the current time is within an active time range (e.g., within the first hour)
        const currentTime = new Date();
        const diffMs = currentTime - new Date(editedTodo.startAt);
        const minutes = Math.floor(diffMs / (1000 * 60));
        return minutes >=1 ? true: false; // Assuming "active" time range is within the first hour
    };



    const getTotalTime = () => {
        const startTime = new Date(editedTodo.startAt);
        const endTime = new Date(editedTodo.endAt);
        const diffMs = endTime - startTime;
    
        // Convert milliseconds to minutes, hours, and days
        const totalMinutes = Math.floor(diffMs / (1000 * 60));
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);
    
        if (totalDays > 0) {
            return `${totalDays} d`;
        } else if (totalHours > 0) {
            return `${totalHours} h`;
        } else {
            return `${totalMinutes} m`;
        }
    };
    
    

    const getPriorityColor = () => {
        switch (editedTodo.priority) {
            case 'low':
                return 'bg-green-200';
            case 'medium':
                return 'bg-yellow-200';
            case 'high':
                return 'bg-red-200';
            default:
                return 'bg-white';
        }
    };

    return (
        <div className={`w-full md:w-1/2 lg:w-1/3 px-2 mb-4 ${editedTodo.completed ? 'opacity-50' : ''}`}>
            <div className={`border border-gray-300 shadow-md rounded-md ${getPriorityColor()} ${isActive() ? 'bg-green-200' : ''}`}>
                <div className="px-4 py-2 border-b border-white  flex items-center justify-between ">
                    <div className="flex items-center">
                        <span className="font-bold text-xl text-gray-600">{editedTodo.title}</span>
                        <span className="text-sm text-gray-400 ml-2">{renderTimeAgo(editedTodo.createdAt)}</span>
                    </div>
                    <div className="flex items-center ">
                    <span className=" text-gray-400 mx-2 text-xl font-bold">{getTotalTime()}</span>
                        <span
                            className="text-yellow-500 cursor-pointer hover:text-yellow-700 transition duration-300 ease-in-out transform hover:scale-110"
                            onClick={handleEdit}
                        >
                            <MdEditRoad className="w-6 h-6" />
                        </span>
                        <span
                            className="text-red-500 cursor-pointer ml-2 hover:text-red-700 transition duration-300 ease-in-out transform hover:scale-110"
                            onClick={handleDelete}
                        >
                            <RxCross2 className="w-6 h-6" />
                        </span>
                    </div>
                </div>
                <div className="px-4 py-2 flex-grow ">
                    <p className="text-gray-600">{editedTodo.desc}</p>
                </div>
                <div className="flex justify-between items-center px-4 py-2 border-t border-white ">
                    <span className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={editedTodo.completed}
                            onChange={handleCheckboxChange}
                        />
                        <span className="text-gray-500">
                            {isActive() && !editedTodo.completed && <p className="text-red-500 font-bold pr-2">Active</p>}
                            {!isActive() && !editedTodo.completed && <p className="text-yellow-500 font-bold pr-2">Not Started</p>}
                            {editedTodo.completed && <p className="text-green-500 font-bold pr-2">Completed</p>}
                        </span>
                    </span>
                    <div className="border-l h-6 border-white"></div>
                    <div className="activeTime">
                        <span className="text-sm text-gray-500 mr-2"> Time: </span>
                        <span className="text-sm text-gray-500">
                            {new Date(editedTodo.startAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}
                            {' - '}
                            {renderEndTime()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoCard;