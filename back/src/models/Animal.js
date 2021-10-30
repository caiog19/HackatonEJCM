const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Definição da Model de Usuário com os atributos
const Animal = sequelize.define('Animal', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    especie: {
        type: DataTypes.STRING,
        allowNull: false
    },

    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },

    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    foto: {
        type: DataTypes.STRING,
        allowNull: false
    },

    porte: {
        type: DataTypes.STRING,
        allowNull: false
    },

    raca: {
        type: DataTypes.STRING,
        allowNull: false
    },

    rastreador: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
},

{
    timestamps = false
});

// Definição das relações
Animal.associate = function(models){
    Animal.hasOne(models.Donation)
    Animal.hasMany(models.Comment)
}

module.exports = Animal;