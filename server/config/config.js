//===================
//Puerto
//===================

process.env.PORT = process.env.PORT || 3000;

//===================
//Entorno
//===================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=====================
//Vencimiento del token
//=====================
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//=====================
//SEED de autenticacion
//=====================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//===================
//Base de  Datos
//===================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
//mongodb://cafe-user:123456a@ds215502.mlab.com:15502/cafe
process.env.URLDB = urlDB;

//===================
//Google Client ID
//===================
process.env.CLIENT_ID = process.env.CLIENT_ID || '385859324281-027tgu4ji4uo9l85i17lq167pe9j9tfv.apps.googleusercontent.com';