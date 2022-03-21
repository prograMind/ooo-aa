import React, { useState } from "react"
import {data} from './data'
import Stage from "./Stage";


const App = () => {
    const [items, setItems] = useState(data)

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(items));
      }, [items]);

    let notDoneItems = []

    const areItemsDone = (item) => {
        notDoneItems = Object.values(item).filter(completed => !completed)
        if (notDoneItems.length === 0) {
            return true
    

}

const markAsComplete = (stageId, itemId) => {
    const itemsUpdated = [...items];
    itemsUpdated[stageId].tasks[itemId].completed = true;
    setItems(itemsUpdated);
    localStorage.setItem("step-progress", JSON.stringify(itemsUpdated));
  };



