import { useState } from "react"

export const InputsObjects = () => {



    const [detail, setDetail] = useState({

        "name":"",
        "email":"",
        "adres":"",
        "telefon":""

    })


    const [isim,setIsım] = useState("")


    const handleSubmit=(e)=>{

        //sayfa yenilemesini kapat
        e.preventDefault();

        setIsım(detail.name)

    }

    const deneme=(e)=>{

        setDetail({...detail,name:e.target.value})
    }

  return (
    <div>



        <form onSubmit={handleSubmit}>
            <input type="text"  id="" placeholder="Name.." value={detail.name} onChange={deneme}/>
            <br />
            <input type="text"  id="" placeholder="Email.." value={detail.email} onChange={(e)=>setDetail({...detail,email:e.target.value})}/>
            <br />
            <input type="text"  id="" placeholder="Adres.." value={detail.adres} onChange={(e)=>setDetail({...detail,adres:e.target.value})}/>
            <br />
            <input type="text"  id="" placeholder="Telefon.." value={detail.telefon} onChange={(e)=>setDetail({...detail,telefon:e.target.value})}/>

            <br />

            <button type="submit">Submit</button>
        </form>

        <div>
            <h3>Name : {detail.name}</h3>
            <h3>Email : {detail.email}</h3>
            <h3>Adres : {detail.adres}</h3>
            <h3>Telefon : {detail.telefon}</h3>

            <br />

            <h1>İsim : {isim}</h1>
        </div>
        

    </div>
  )
}
