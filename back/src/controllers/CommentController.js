// Importação das models existentes e framework sequelize
require("../config/dotenv")();
const { response } = require('express');
const User = require('../models/User');
const Comment = require('../models/Comment');
const Animal = require('../models/Animal');
const {validationResult} = require('express-validator');

// Criação da Rota que retorna todos os comentários do banco de dados
const index = async(req,res) => {
    try {
        const comments = await Comment.findAll();
        return res.status(200).json({comments});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da Rota que retorna um único comentário específico do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        return res.status(200).json({comment});
    }catch(err){
        return res.status(500).json({err});
    }
};


// Criação da Rota que cria novos comentários no banco de dados
const create = async(req,res) => {
	try {
        const {user_id} = req.params;
        const {animal_id} = req.params;
        const user = await User.findByPk(user_id);
        const animal = await User.findByPk(animal_id);
        
        validationResult(req).throw(); //validação
		const newCommentData = {
			conteudo: req.body.conteudo,
		}
		const comment = await Comment.create(newCommentData);
        await comment.setUser(user);
        await comment.setAnimal(animal);
		return res.status(201).json({comment: comment});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

// Criação da Rota que atualiza atributos de um comentário do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Comment.update(req.body, {where: {id: id}});
        if(updated) {
            const comment = await Comment.findByPk(id);
            return res.status(200).send(comment);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Comentário não encontrado");
    }
};

// Criação da Rota que deleta um comentário específico do banco de dados
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        await comment.setUser(null);
        await comment.setAnimal(null);
        const deleted = await Comment.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Comentário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Comentário não encontrado.");
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