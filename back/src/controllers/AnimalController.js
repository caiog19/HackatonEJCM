// Importação das models existentes e framework sequelize
require("../config/dotenv")();
const { response } = require('express');
const Animal = require('../models/Animal');
const Donation = require('../models/Donation');
const Comment = require('../models/Comment');
const Photo = require('../models/Photo');
const {validationResult} = require('express-validator');

// Criação da Rota que retorna todos os animais do banco de dados
const index = async(req,res) => {
    try {
        const animals = await Animal.findAll();
        return res.status(200).json({animals});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da Rota que retorna um único animal específico do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const animal = await Animal.findByPk(id);
        return res.status(200).json({animal});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da Rota que retorna os animais filtrados por categoria
const search = async(req, res) => {
    const { term } = req.body;
    try {
        const results = await Service.findAll ({
            where: { especie: {[Op.eq]: term}
        }
        });
        return res.status(200).json(results);
    } catch (e) {
		return res.status(500).json('Nenhum Resultado foi encontrado.');
	}
};


// Criação da Rota que cria novos animais no banco de dados
const create = async(req,res) => {
	try {
        validationResult(req).throw(); //validação
		const newAnimalData = {
			nome: req.body.nome,
			descricao: req.body.descricao,
			idade: req.body.idade,
            genero: req.body.genero,
            especie: req.body.especie,
            porte: req.body.porte,
            rastreador: req.body.rastreador,
            raca: req.body.raca,
            foto: req.body.foto
		}
		const animal = await Animal.create(newAnimalData);
		return res.status(201).json({animal: animal});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

// Criação da Rota que atualiza atributos de um animal do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    try {
        if(req.file){
            console.log(req.file)
            req.body.foto = process.env.APP_URL + "/uploads/" + req.file.filename
        }
        else{
            req.body.foto = null
        }
        const [updated] = await Animal.update(req.body, {where: {id: id}});
        if(updated) {
            const animal = await Animal.findByPk(id);
            return res.status(200).send(animal);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Animal não encontrado");
    }
};

// Criação da Rota que deleta um animal específico do banco de dados
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        // const animal = await Animal.findByPk(id);
        // await Cart.destroy({where: {id: animal.CartId}});
        const deleted = await Animal.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Animal deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Animal não encontrado.");
    }
};

// Exportação da CRUD criada acima para routes
module.exports = {
    index,
    show,
    search,
    create,
    update,
    destroy
};