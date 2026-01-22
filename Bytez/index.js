import express from "express"

const app = express();


app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.listen(port, ()=>{
    console.log("Server running on port:",port)
})

export default app;