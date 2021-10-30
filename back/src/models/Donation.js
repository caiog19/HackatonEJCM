const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Definição da Model de Usuário com os atributos
const Donation = sequelize.define('Donation', {
    doacao: {
        type: DataTypes.FLOAT
    }
},
{
    timestamps = false
});

// Definição das relações
Donation.associate = function(models){
    Donation.belongsTo(models.Animal)
    Donation.belongsTo(models.User)
}

module.exports = Donation;