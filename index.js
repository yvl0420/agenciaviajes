import express, {json} from 'express';
import router from './routers/index.js';
import db from './config/db.js';


const app = express();

const port = process.env.PORT || 3000;

//Conectar a la BBDD
db.authenticate()
    .then(()=> console.log('Conectado a la base de datos'))
    .catch(err=>console.log(err));

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));

//Habilitar pug
app.set('view engine', 'pug');

app.use((req,res,next) => {
    const year = new Date().getFullYear();
    res.locals.year = year;
    res.locals.nombreP  = 'Agencia de Viajes';
    next();
});

app.use(express.urlencoded({ extended: true }));

//Definir la carpeta publica
app.use(express.static('public'));

app.use("/", router);
