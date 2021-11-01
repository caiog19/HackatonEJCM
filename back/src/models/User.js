const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Definição da Model de Usuário com os atributos
const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },

    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },

    data_de_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    hash: {
		type: DataTypes.STRING
	},
    
	salt: {
		type: DataTypes.STRING
	}
},

{
    timestamps : false
});

// Definição das relações
User.associate = function(models){
    User.hasOne(models.Rating);
    User.hasMany(models.Donation);
    User.hasMany(models.Comment);
}

module.exports = User;