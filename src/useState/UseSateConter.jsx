import { useState } from "react";





export const UseSateConter = () => {

    // let count = 0;
    let mess="";
    const[count,setCount]=useState(0)
    //artır
    const handleINC=()=>{

        setCount(count + 1)
    }

    //temizle
    const handleCLR=()=>{
        setCount(0)

    }

    //Azalt
    const handleDEC=()=>{

        if (count <= 0) {
            alert("count can not be less than 0")
          } else {
            setCount(count - 1)
          }
    }


  return (
    <div>

        <h1>USE STATE HOOK</h1>
        <h2>Count : {count}</h2>
        <p>{mess}</p>
        <button onClick={handleINC}>INC</button>
        <button onClick={handleCLR}>CLR</button>
        <button onClick={handleDEC}>DEC</button>

    </div>
  )
}
