var models = require('../models/models.js');


// GET /quizes  muestra preguntas
exports.question = function(req, res){
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/index.ejs', {quizes: quizes});
	})

// GET /quizes/question  una sola pregunta

/*exports.question = function(req, res){
	models.Quiz.findAll().then(function(quiz){
		res.render('quizes/question', {pregunta: quiz[0].pregunta});
	})
};*/

// GET /quizes/:id  varias preguntas

exports.show = function(req, res){
	models.Quiz.find(req.params.quiId).then(function(quiz){
		res.render('quizes/show', {quiz: quiz});
	})
};


// GET  /quizes/answer  una sola pregunta/respuesta
/*exports.answer = function(req, res){
	models.Quiz.findAll().then(function(quiz){
		if (req.query.respuesta === quiz[0].respuesta){
			res.render('quizes/answer',{respuesta: 'Correcto'});
		} else{
			res.render('quizes/answer',{respuesta: 'Incorrecto'});
		}
	})
};*/

exports.answer = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		if (req.query.respuesta === quiz.respuesta){
			res.render('quizes/answer',{quiz: quiz, respuesta: 'Correcto'});
		} else{
			res.render('quizes/answer',{quiz: quiz, respuesta: 'Incorrecto'});
		}
	})
};





// GET /author
exports.author = function(req, res){
	res.render('author', {nombre: 'Pere Lluís Rovira Sanllehí'});
};
