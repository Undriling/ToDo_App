import React from "react";
import Weather from "./weather";
import TaskInput from "./taskInput";
import TaskList from "./taskList";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-700 text-white">
      <h1 className="text-xl md:text-3xl font-bold mb-4 font-serif text-center">
        ToDo App By Manash
      </h1>

      <div className="py-5">
        <Weather />
      </div>

      <div className="py-5 font-serif">
        <TaskInput />
      </div>

      <div className="font-serif">
        {user ? <TaskList /> : <p>Needs to login to add tasks !</p>}
      </div>
    </div>
  );
};

export default Home;
