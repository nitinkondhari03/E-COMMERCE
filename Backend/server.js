const {app}=require("./app")
const dotenv=require("dotenv")
const cloudinary=require("cloudinary")
const connetDatabase=require("./config/database")

//Handling Uncaugth Exception

process.on("unhandledRejection",(err)=>{
      console.log(`Error:${err.message}`)
      console.log(`shutting down the server due to Uncaught Exception`)
      process.exit(1)
})

dotenv.config({path:"config/config.env"})

connetDatabase()

cloudinary.config({
      cloud_name:process.env.CLOUDNARY_NAME,
      api_key:process.env.CLOUDNARY_API_KEY,
      api_secret:process.env.CLOUDNARY_API_SECRET
})

const server=app.listen(process.env.PORT,async()=>{
      try {
            await connetDatabase
            console.log(`server is working http://localhost:${process.env.PORT}`)
      } catch (error) {
            console.log(error)
      }
})



//Unhandle Promise Rejection

process.on("unhandledRejection",err=>{
      console.log(`Error :  ${err.message}`)
      console.log(`shutting down the server due to Unhandled Promise Rejection`)
       server.close(()=>{
            process.exit(1)
       })
})