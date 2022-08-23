require('./config/config');
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// Configuracion global de rutas
app.use(cors({origin: 'http://localhost:5173', optionsSuccessStatus: '200'}));

app.use(require('./routes/index'));

let renderHTML = path.resolve(__dirname, '../public/index.html');
app.get('/', function (req, res) {
    res.sendFile(renderHTML);
})

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
}, (err) => {
    if (err) throw err;
    console.log("Base de datos online");
});

app.listen(process.env.PORT, ()=> {
    console.log("Started in port 3000");
})



// const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./routes");
// var cors = require('cors');

// mongoose
//   .connect("mongodb://localhost:27017/crudDB", { useNewUrlParser: true })
//   .then(() => {
//     const app = express();

// 	app.use(cors());
//     app.use(express.json());
//     app.use("/api", routes);
//     app.listen(5000, () => {
//       console.log("Server has started!");
//     });
//   });








// const express = require("express")
// const User = require("./models/User") // new
// const router = express.Router()

// // Get all posts
// router.get("/user", async (req, res) => {
// 	const user = await User.find()
// 	res.send(user)
// })

// router.post("/user", async (req, res) => {
// 	const user = new User({
// 		username: req.body.username,
// 		password: req.body.password,
// 	})
// 	await user.save()
// 	res.send(user)
// })

// module.exports = router