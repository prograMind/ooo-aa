import React, { useState } from "react"
import Item from './Item'
import StageName from "./StageName"
import {data} from './data'

export default function Stage (props) {

    const isStageDone = (stage) => {
        return stage.every((item) => item.completed)
    }

    return (
        <>
        {data.map((s, sId) => {
            const { stageText, tasks } = s;
            isStageDone(items);
            
            let isPrevStageDone = false
            if (sId === 0) {
                isPrevStageDone = true
            } else {
                isPrevStageDone = isStageDone(data[s.id - 1].items)
            }

            return (
                    <StageName
                    key={s.id}
                    name={s.step}>
                    {s.tasks.map((t)=> {
                        const { taskText, completed } = t;
                        return (             
                        <Item 
                        key={t.id} 
                        item={t.task} 
                        disabled={!isPrevStageDone}
                        completed={t.checked}/>
                        onChange={() => }
                )
            })}
            </StageName>
        )}
    )}
    </>
    )
}


