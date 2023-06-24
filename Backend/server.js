const app=require("./app")
const dotenv=require("dotenv")
const connetDatabase=require("./config/database")

//Handling Uncaugth Exception

process.on("unhandledRejection",(err)=>{
      console.log(`Error:${err.message}`)
      console.log(`shutting down the server due to Uncaught Exception`)
      process.exit(1)
})

dotenv.config({path:"config/config.env"})

connetDatabase()
const server=app.listen(process.env.PORT,()=>{
      console.log(`server is working http://localhost:${process.env.PORT}`)
})



//Unhandle Promise Rejection

process.on("unhandledRejection",err=>{
      console.log(`Error :  ${err.message}`)
      console.log(`shutting down the server due to Unhandled Promise Rejection`)
       server.close(()=>{
            process.exit(1)
       })
})