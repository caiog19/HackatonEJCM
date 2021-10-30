const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

// Definição da Model de Usuário com os atributos
const Comment = sequelize.define('Comment', {
    conteudo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    data_hora: {
        type: DataTypes.DATE,
        allowNull: false
    }
},

{
    timestamps = false
});

// Definição das relações
Comment.associate = function(models){
    Comment.belongsTo(models.User)
    Comment.belongsTo(models.Animal)
}

module.exports = Comment;