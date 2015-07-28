// Definición del modelo de QUIZ

/*module.exports = function(sequelize, DataTypes){
	return sequelize.define('Quiz', 
		{ pregunta: DataTypes.STRING,
		  respuesta: DataTypes.STRING,
		});
}*/

// Definición del modelo Quiz con validación
module.exports = function(sequelize, DataTypes){
	return sequelize.define(
	  'Quiz', 
	  { pregunta: {
			type: DataTypes.STRING,
			validate: { notEmpty: {msg: "-> falta Pregunta"}}
		},
		  respuesta: {
			type: DataTypes.STRING,
			validate: { notEmpty: {msg: "-> falta Respuesta"}}
		}
	  }
	);
};

