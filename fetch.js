// p=fetch("https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f")
// p.then((value)=>{
//     console.log(value.json())
//     return value.json()
// })
async function fetchData(){
    p=await fetch("https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f")
// p.then((value)=>{
//     return value.json()
// })
// console.log(p.json())
}

fetchData().then((data)=>{
    console
})