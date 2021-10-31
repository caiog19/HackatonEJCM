// Importação dos controllers existentes 
const { Router } = require('express');
const UserController = require('../controllers/UserController');
const AnimalController = require('../controllers/AnimalController');
const CommentController = require('../controllers/CommentController');
const RatingController = require('../controllers/RatingController');
const DonationController = require('../controllers/DonationController');
const validator = require('../config/validator');
//const path = require('path');
//const multer = require('multer');
//const storage = require("../config/files");


// Criando a instância router
const router = Router();

// Criando instância para upload de fotos
//const upload = multer({ storage: storage,
//	fileFilter: function (req, file, cb) {
//	        const ext = path.extname(file.originalname);
//	        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
//	            return cb(new Error('Extensão de arquivo não suportada!'), false);
//	        }
//	        cb(null, true);
//	    },
//	    limits:{
//	        fileSize: 2048 * 2048
//	    }

// });
 
// Criando instância para upload de múltiplas fotos 
//const allUploads = upload.fields([{ name: 'photo', maxCount: 6 }]);


// Rotas para CRUD de User
router.get('/user',UserController.index);
router.get('/user/:id',UserController.show);
router.post('/user', validator.validationUser('create'), UserController.create);
router.put('/user/:id' ,validator.validationUser('update'), UserController.update);
router.delete('/user/:id', UserController.destroy);


// Rotas para CRUD de Animal
router.get('/animal',AnimalController.index);
router.get('/animal/:id',AnimalController.show);
router.get('/search',AnimalController.search); //procura os servicos pelo body key "term"
router.post('/animal', validator.validationAnimal('create'), AnimalController.create);
router.put('/animal/:id', validator.validationAnimal('update'), AnimalController.update); 
router.delete('/animal/:id', AnimalController.destroy); 


// Rotas para CRUD de Comment
router.get('/comment',CommentController.index);
router.get('/comment/:id',CommentController.show);
router.post('/comment/animal/:animal_id/user/:user_id',validator.validationComment('create'), CommentController.create);
router.put('/comment/:id',validator.validationComment('update'), CommentController.update);
router.delete('/comment/:id', CommentController.destroy);


// Rotas para CRUD de Rating
router.get('/rating',RatingController.index);
router.get('/rating/:id',RatingController.show);
router.post('/rating/user/:user_id', validator.validationRating('create'), RatingController.create);
router.put('/rating/:id', validator.validationRating('update'), RatingController.update);
router.delete('/rating/:id/user/:user_id', RatingController.destroy);


// Rotas para CRUD de Doação
router.get('/donation/user/:user_id',DonationController.index);
router.get('/donation/user/:user_id',DonationController.show);
router.post('/donation/user/:user_id',DonationController.create);
router.put('/donation/animal/:animal_id/user/:user_id',DonationController.update);
router.delete('/donation/animal/:animal_id/user/:user_id',DonationController.destroy);




// Exportação das rotas criadas
module.exports = router;
