// Importação das models existentes e framework sequelize
require("../config/dotenv")();
const { response } = require('express');
const Donation = require('../models/Donation');
const Animal = require('../models/Animal');
const User = require('../models/User');
const {validationResult} = require('express-validator');

// Criação da Rota que retorna todos as doações do banco de dados
const index = async(req,res) => {
    try {
        const donations = await Donation.findAll();
        return res.status(200).json({donations});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da Rota que retorna uma única doação específica do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const donation = await Donation.findByPk(id);
        return res.status(200).json({donation});
    }catch(err){
        return res.status(500).json({err});
    }
};


// Criação da Rota que cria novas doações no banco de dados
const create = async(req,res) => {
	try {
        const {user_id} = req.params;
        const {animal_id} = req.params;
        const user = await User.findByPk(user_id);
        const animal = await Animal.findByPk(animal_id);
		const newDonationData = {}
		const donation = await Donation.create(newDonationData);
        await donation.setUser(user);
        await donation.setAnimal(animal);
		return res.status(201).json({donation: donation});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

// Criação da Rota que atualiza atributos de uma doação do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Donation.update(req.body, {where: {id: id}});
        if(updated) {
            const donation = await Donation.findByPk(id);
            return res.status(200).send(donation);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Doação não encontrada");
    }
};

// Criação da Rota que deleta uma doação específica do banco de dados
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const donation = await Donation.findByPk(id);
        await Animal.destroy({where: {id: donation.AnimalId}});
        await donation.setUser(null);
        await donation.setAnimal(null);
        const deleted = await Donation.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Doação deletada com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Doação não encontrada.");
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