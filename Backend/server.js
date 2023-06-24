const app=require("./app")
const dotenv=require("dotenv")
const connetDatabase=require("./config/database")

dotenv.config({path:"config/config.env"})

connetDatabase()
app.listen(process.env.PORT,()=>{
      console.log(`server is working http://localhost:${process.env.PORT}`)
})