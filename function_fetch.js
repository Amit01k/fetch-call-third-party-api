function allhotel(){
    fetch("https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data.result.auditLog);
    // hotel=data.map((x)=>x)
    // console.log("this is hotel data",x)
    // load(hotel,hotelList)
    })
    
    }
    allhotel();