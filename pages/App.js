import React, { useState } from "react"
import {data} from './data'
import Stage from "./Stage";


const App = () => {
    const [items, setItems] = useState(() => {

    })

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(items));
      }, [items]);

    let notDoneItems = []

    const areItemsDone = (item) => {
        notDoneItems = Object.values(item).filter(status => !status)
        if (notDoneItems.length === 0) {
            return true
    

    const areAllItemsDone = (items) => {
    const allTasks = Object.keys(state).length;
    const doneTasks = Object.entries(state)
      .map(([title, tasks]) => checkThatTasksAreDone(tasks))
      .filter(Boolean).length;
  
    return allTasks === doneTasks;
  };



}

const markAsComplete = (stageId, itemId) => {
    const itemsUpdated = [...items];
    itemsUpdated[stageId].tasks[itemId].completed = true;
    setItems(itemsUpdated);
    localStorage.setItem("step-progress", JSON.stringify(itemsUpdated));
  };



