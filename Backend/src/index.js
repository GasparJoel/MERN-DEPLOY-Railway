import app   from "./app.js";
import  "./db.js";
import { PORT } from "./config.js";



app.listen(PORT,()=>{
    console.log( `Server iniciado en el puerto ${PORT}`)
 })