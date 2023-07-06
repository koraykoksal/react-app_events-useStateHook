
import { useState } from "react"

export const UseStateObject = () => {

    // const [Name, setName] = useState("Koray Koksal") 
    // const [Salary, setSalary] = useState(30000) 
    // const [Age, setAge] = useState(30) 

    const gelenDeger = document.getElementById('inputData')

    const [toggle, settoggle] = useState(false)

    const [kisi, setKisi] = useState({

        "name":"Koray Koksal",
        "age":30,
        "salary":30000

    })

    const handleToggle=()=>{

        
        settoggle(!toggle)  //toggle durumunu değiştir

        console.log(toggle);

        if(toggle){

            setKisi({
                "name":"ahmet dursun",
                "age":34,
                "salary":45000
            })
        }else{
            setKisi({
                "name":"ayşe dursun",
                "age":32,
                "salary":55000
            })
        }



    }




  return (
    <div>

        <h1>USE STATE OBJECT</h1>
        <h2>NAME : {kisi.name}</h2>
        <h2>SALARY : {kisi.salary}</h2>
        <h2>AGE : {kisi.age}</h2>

        <button onClick={()=>setKisi({...kisi,name:"Taşkın Koksal"})}>change name</button>
        <button onClick={()=>setKisi({...kisi, age: kisi.age + 1})}>inc age</button>
        <button onClick={()=>setKisi({...kisi, salary:kisi.salary + 100})}>inc salary</button>
        <button onClick={handleToggle}>FullChange</button>
    </div>
  )
}
