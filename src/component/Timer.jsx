import React, { useRef, useState } from "react";
import TimeInput from "./TimeInput";
import styles from "./timer.module.css"
const Timer = () => {
  const [starting, setStarting] = useState("");
  const [ending, setEnding] = useState("");
  const timerid = useRef(null);
  const [count, setCount] = useState(0);
  

  let setStartTime = (value) => {
    setStarting(Number(value));
  };
  let setEndTime = (value) => {
    setEnding(Number(value));
  };
 
  let start = (s,j) => {
   
   if (ending > starting && !timerid.current && count < ending) {
      let id = setInterval(() => {
       if(s==j-1){
        clearInterval(id);
      }
        setCount((prev)=>prev+1)
           
          
          s++;
      }, 1000);
      timerid.current=id
    }
  };
  let pause = () => {
    clearInterval(timerid.current);
    timerid.current=null;
  };
  let reset = () => {
    clearInterval(timerid);
    setStarting("");
    setEnding("");
    timerid.current=null;
    setCount(0);
  };

  return (
    <div>
      <TimeInput
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        starting={starting}
        ending={ending}
      />
      <h1>Timer</h1>
      <h2>{count}</h2>
      <div className={styles.button_div}>
      <button
        onClick={() => {
          if(count==0 && starting){
           setCount(starting)
          }
          if(count>starting && count<ending && starting<ending){
            start(count,ending);
          }else{
            start(starting,ending);
          }
         
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          pause();
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
      </div>
      
    </div>
  );
};

export default Timer;
