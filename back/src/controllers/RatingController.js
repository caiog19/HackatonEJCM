// Importação das models existentes e framework sequelize
require("../config/dotenv")();
const { response } = require('express');
const User = require('../models/User');
const Rating = require('../models/Rating');
const {validationResult} = require('express-validator');

// Criação da Rota que retorna todas as avaliações do banco de dados
const index = async(req,res) => {
    try {
        const ratings = await Rating.findAll();
        return res.status(200).json({ratings});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da Rota que retorna uma única avaliação específica do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const rating = await Rating.findByPk(id);
        return res.status(200).json({rating});
    }catch(err){
        return res.status(500).json({err});
    }
};


// Criação da Rota que cria novas avaliações no banco de dados
const create = async(req,res) => {
	try {
        const {user_id} = req.params;
        const user = await User.findByPk(user_id);
        validationResult(req).throw(); //validação
		const newRatingData = {
			score: req.body.score,
			descricao: req.body.descricao
		}
		const rating = await Rating.create(newRatingData);
        await rating.setUser(user);
		return res.status(201).json({rating: rating});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

// Criação da Rota que atualiza atributos de uma avaliação do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Rating.update(req.body, {where: {id: id}});
        if(updated) {
            const rating = await Rating.findByPk(id);
            return res.status(200).send(rating);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Avaliação não encontrada");
    }
};

// Criação da Rota que deleta uma avaliação específica do banco de dados
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Rating.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Avaliação deletada com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Avaliação não encontrada.");
    }
};

// Exportação da CRUD criada acima para routes
module.exports = {
    index,
    show,
    create,
    update,
    destroy
};