//Puerdo de acceso desde nuestro localhost
process.env.PORT = process.env.PORT || 3000;
//Entorno de desarrollo(dev, local, prod, test)
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//base de datos
let urlDB = "";
if (process.env.NODE_ENV === 'dev') {
    urlDB = "mongodb://localhost:27017/crudDB";
} else {
    urlDB = "here write the mongo connection with mongo atlas and other type of connection mode"
};
process.env.URLDB = urlDB;
//vencimiento token
process.env.CADUCIDAD_TOKEN = '48h';
//seed autentificacion
process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo';