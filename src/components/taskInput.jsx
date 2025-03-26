import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../store/taskSlice";
import { setDialogOpen } from "../store/dialogSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Priority");
  const [taskType, setTaskType] = useState("Type");

  const handleAddTask = () => {
    if (!task.trim()) return;

    if (!user) {
      dispatch(setDialogOpen(true));
      return;
    } else {
      dispatch(setDialogOpen(false));
      dispatch(addTask({ id: uuidv4(), text: task, priority, taskType }));
      setTask("");
    }
  };

  return (
    <div className="p-5 bg-gray-500 text-white rounded-lg shadow-md w-[300px] md:w-[500px]">
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-3 border rounded-lg w-full text-black"
      />

      <div className="flex gap-3">
        <div className="w-full">
          <select
            className="p-2 border rounded-lg w-full mt-4 text-black"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}>
            <option value="Default">Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="w-full">
          <select
            className="p-2 border rounded-lg w-full mt-4 text-black"
            value={taskType}
            onChange={(f) => setTaskType(f.target.value)}>
            <option value="Default">Type</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
          </select>
        </div>
      </div>

      <button
        onClick={user ? handleAddTask : dispatch(setDialogOpen(true))}
        className="mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg cursor-pointer">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
