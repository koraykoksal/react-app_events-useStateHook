

export const Events = () => {


    let message = "Events"

    const firstFunc=(e)=>{

        alert("Hello React")

        console.log(e);


    }

    const handleChange=(e)=>{

        console.log(e.target.name);
        message = "State"

    }

  return (
    <div>

        <h1>{message}</h1>

        <button onClick={firstFunc}>Click Me</button>

        {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
        <button onClick={() => alert("Deneme")}>Save</button>


      <button onClick={handleChange}>Change</button>



    </div>
  )
}
