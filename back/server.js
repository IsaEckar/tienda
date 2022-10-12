const app = require("./app")
const connectDatabase = require("./config/database")


//SETERAR EL ARCHIVO DE CONFIGURACION
const dotenv = require("dotenv")
dotenv.config({path:'back/config/config.env'})

//configurar base de datos 
connectDatabase();


//llamemos al servidor
const server=app.listen(process.env.PORT, () => {
    console.log(`servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})
