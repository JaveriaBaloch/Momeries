const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const fileUpload = require('express-fileupload');
const { MongoClient} = require('mongodb');
let allMemories = []

const main = async(data) =>{
    const uri = "mongodb+srv://javi:javi@imageupload.u2a2mre.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri)
    try{
    await client.connect()
    console.log("connected")
        await client.db("ImageUpload").collection("test2").insertOne(data)
        }
    catch(err){
        console.log(err)
        }
    finally{
        await client.close()
    }
}
// main().catch(console.err)
const insertData = async(data)=>{
    const uri = "mongodb+srv://javi:javi@imageupload.u2a2mre.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri)
    try{
    await client.connect()
    const add = await client.db("ImageUpload").collection("test4").insertOne(data)
    }
    catch(err){
        console.log(err)
        }
    finally{
        await client.close()
    }
}
const showAllMemories = async()=>{
    const uri = "mongodb+srv://javi:javi@imageupload.u2a2mre.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri)
    try{
    client.connect()
    console.log("connected")
       return client.db("ImageUpload").collection("test4").find({"_id": {$exists : true}}).toArray()
       
        }
    catch(err){
        console.log(err)
        }
    finally{
       client.close()
    }
}
const app = express()
app.use(fileUpload());
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.get("/",(req, res)=>{
    const a = showAllMemories().catch(console.log)
    a.then(function(result) { // "Some User token"
        res.send(result)
     })
    
})
app.post('/uploadMemory', (req,res)=>{
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
      }
      const file = req.files.file;
      const date = new Date()
      const img = date.getTime()+file.name 
      file.mv(`${__dirname}/client/src/uploads/${img}`, err => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }  
      })
      const data = JSON.parse(JSON.stringify(req.body))
      const tags = JSON.parse(JSON.stringify(req.body['memory[tags]'])).split(",")
      data['memory[tags]'] = tags
     const uploadData = {
        data,img:img,
      }
      const action = "addMemory"
      insertData(uploadData).catch(console.err)
})

app.listen(3001,()=>{
    console.log("Hi")
})