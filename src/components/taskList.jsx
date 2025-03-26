import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../store/taskSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API } from "../constants";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(WEATHER_API);
        setWeather(res.data);
      } catch (err) {
        setError("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-4 bg-gray-600 text-white rounded-lg shadow-md mt-4 w-[300px] md:w-[500px]">
      <h2 className="text-xl mb-2">Task List</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-300 text-center bg-gray-800 p-3 rounded-lg">
          No tasks added yet.
        </p>
      ) : (
        <div>
          <div className="flex flex-col space-y-2">
            {tasks.map((task) => (
              <div key={task.id} className="p-3 bg-gray-800 rounded">
                <div className="justify-between">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-green-600 text-sm">
                      {task.priority}
                    </p>
                    <p className="font-bold text-sm text-cyan-300">
                      {task.taskType} Task
                    </p>
                  </div>
                  <p className="my-3 break-words whitespace-normal">
                    Task:- {task.text}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-5">
                  {task.taskType === "Outdoor" ? (
                    <div className="font-sans px-2 mx-3 w-30 md:w-[160px] h-12 md:h-8 bg-gray-500 text-white p-1 rounded-lg text-sm">
                      Temp:- {weather?.main?.temp}°C ,{" "}
                      {weather?.weather[0]?.description.toUpperCase()}
                    </div>
                  ) : (
                    <p></p>
                  )}

                  <button
                    onClick={() => dispatch(removeTask(task.id))}
                    className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-lg">
                    Delete 🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
