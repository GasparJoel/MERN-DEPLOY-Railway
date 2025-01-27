 import express from "express"; 
 import cors from "cors";

 import Product from "./models/product.model.js";

 const app = express()

 app.use(express.json())
 app.use(cors())


 app.get("/products", async(req,res)=>{
    const product= await Product.find()
    res.json(product)
 })

 app.post("/products", async(req,res)=>{
    const {name,price,description} = req.body
     

   const NewProduct= await Product.create({
      name,
      price,
      description
   })
   res.json(NewProduct)
})

 //MOngoose 

 
export default app
