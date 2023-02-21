const express = require('express');
const app=express()
app.get("/api",(req,res)=>{
    
    // console.log(req.headers.authentication)
    fetch("https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f")
    .then((response)=> response.json())
    .then((data)=>{
        // console.log(data.result.auditLog);
        let newdata=data.result.auditLog
        let newarr=[]
        for (let i=0; i<newdata.length;i++){
            // console.log(newdata[i].logId)
            let data_time=newdata[i].creationTimestamp
            let formatDate=data_time.split(' ').join('/')
            // console.log(formatDate)
           newarr.push (newObj={
                log_id:newdata[i].logId,
                Application_type:newdata[i].applicationType,
                Application_id:newdata[i].applicationId,
                action:newdata[i].actionType,
                action_details:newdata[i].actionType,
                Date_time:formatDate
            })
            // newarr.push(newObj)
            // for(let j=0 ;j<=newdata[i].length;j++){
            //     console.log(newdata[j])
            // }
            // break
        }
        // const newData = data.auditlog.map(ele => ele.logId)
        
        // res_data={
        //     log:data.result.auditLog[0]
        // }
        // // console.log(res_data)
        // for(let i=0;i<data.result.auditLog;i++){
        //     console.log(data.result.auditLog)
        //     break
        // }
    // hotel=data.map((x)=>x)
    // console.log("this is hotel data",x)
    // load(hotel,hotelList)
    // console.log("this is cominf from log",newarr)
    let sorted=newarr.sort((p1, p2) => 
        (p1.log_id > p2.log_id) ? 1 : (p1.log_id < p2.log_id) ? -1 : 0);
        console.log(sorted)
    res.send(newarr)
    })
})
app.post('/create-data',(req,res)=>{
    console.log(req.body)
})
app.listen(8080)