const mongoose=require("mongoose")


const connetDatabase=()=>{

      mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true,useUnifiedTopology:true})
      .then((data)=>{
                  console.log(`monodb connet with server ${data.connection.host}`)
            })

}

module.exports=connetDatabase


