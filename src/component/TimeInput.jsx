import React from 'react'
import styles from "./timer.module.css"
const TimeInput = ({setEndTime,setStartTime,starting,ending}) => {
  return (
    <div className={styles.input_div}>
        <input value={starting} type="number" placeholder='starting time' 
        onChange={(e)=>{
            setStartTime(e.target.value)
        }} />
        <input value={ending} type="number" placeholder='ending time'
          onChange={(e)=>{
            setEndTime(e.target.value)
        }}
        />
    </div>
  )
}

export default TimeInput