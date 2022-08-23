const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); //hace que un campo sea unico


const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
	nombre: {
		type: String,
		required: [true, 'El nombre es necesario'],
	},
	email: {
		type: String,
		unique: true,
		required: [true, "El correo es necesario"],
	},
	password: {
		type: String,
		required: [true, "Le contraseña es obligatoria"],
	},
}); 

// elimina la key password del objeto que retorna al momento de crear un usuario
usuarioSchema.methods.toJSON = function() {
	const user = this;
	const userObject = user.toObject();
	delete userObject.password;
	return userObject;
};

usuarioSchema.plugin(uniqueValidator, {
	message: '{PATH} debe de ser único'
})
module.exports = mongoose.model('Usuario', usuarioSchema)



// const schema = mongoose.Schema({
// 	username: String,
// 	password: String,
// })

// module.exports = mongoose.model("User", schema)