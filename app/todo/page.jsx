import Navbar from "../navbar";
import TodoList from "../components/todo/todoList";

const ToDo = () => {
  return (
    <main>
      <Navbar />
      <div className="fixed top-4 right-4 text-2xl font-bold p-4 bg-gray-800 bg-opacity-7 text-white rounded-l-lg shadow-md">
        To-Do
      </div>
      <TodoList />
    </main>
  );
};

export default ToDo;