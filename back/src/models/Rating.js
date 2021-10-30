const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Definição da Model de Usuário com os atributos
const Rating = sequelize.define('Rating', {
    score: {
        type: DataTypes.INTEGER,
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
Rating.associate = function(models){
    Rating.belongsTo(models.User)
}

module.exports = Rating;