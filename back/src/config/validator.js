const { body } = require('express-validator');

const validationComment = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('conteudo').exists().withMessage('Comentário não pode ser nulo.').isLength({min : 1, max: 200}).withMessage('Por favor, preencha esse campo.')
            ]
        }
        case 'update': {
            return [
                body('conteudo').exists().withMessage('Comentário não pode ser nulo.').isLength({min : 1, max: 200}).withMessage('Por favor, preencha esse campo.')
            ]
        }
    }
}

const validationUser = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('nome').exists().withMessage("Nome não pode ser nulo.").isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo'),
                body('cpf').exists().withMessage("CPF não pode ser nulo.").isLength({min: 11, max: 11}).withMessage('Por favor, insira um CPF válido'),
                body('bairro').exists().withMessage("Endereço não pode ser nulo.").isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo'),
                body('data_de_nascimento').exists().withMessage("Data de Nascimento não pode ser nula.").isISO8601().withMessage('Por favor, insira uma data válida'),
                body('email').exists().withMessage("Email não pode ser nulo.").isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo').isEmail().withMessage('Precisa ser exemplo@exemplo'),
                body('senha').exists().withMessage("Senha não pode ser nula.").isLength({min: 1, max: 30}).withMessage('Por favor, preencha o campo'),

            ]  
        }
        case 'update': {
            return [
                body('name').optional().isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo'),
                body('cpf').optional().isLength({min: 11, max: 11}).withMessage('Por favor, preencha o campo'),// restringir por tamanho único
                body('bairro').optional().isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo'),
                body('data_de_nascimento').optional().isISO8601().withMessage('Por favor, insira uma data válida'),
                body('email').optional().isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo').isEmail().withMessage('Precisa ser exemplo@exemplo'),
                body('senha').optional().isLength({min: 1, max: 30}).withMessage('Por favor, preencha o campo')
            ]  
        }
    }
}

const validationAnimal = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('nome').exists().withMessage("Nome não pode ser nulo.").isLength({min: 1, max: 30}).withMessage('Por favor, insira um nome menor que 30 caracteres'),
                body('descricao').exists().withMessage("Descrição não pode ser nula.").isLength({min: 1, max: 200}).withMessage('Por favor, preencha o campo'),
                body('especie').exists().withMessage("Especie não pode ser nula.").isLength({min: 1, max: 30}).withMessage('Por favor, preencha o campo').isIn(['cao','gato','roedor']).withMessage('Por favor, insira uma espécie válida'), 
                body('raca').exists().withMessage("Raca não pode ser nula.").isLength({min: 1, max: 30}).withMessage('Por favor, preencha o campo'),
                body('porte').exists().withMessage("Porte não pode ser nulo.").isLength({min: 1, max: 20}).withMessage('Por favor, preencha o campo').isIn(['pequeno','médio','grande']).withMessage('Por favor, insira um porte válido'),
                body('rastreador').exists().withMessage("Rastreador não pode ser nulo.").isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo'),
                body('genero').exists().withMessage("Gênero não pode ser nulo.").isLength({min: 1, max: 10}).withMessage('Por favor, preencha o campo').isIn(['macho','fêmea']).withMessage('Por favor, insira um gênero válido'),
                body('idade').exists().withMessage("Idade não pode ser nula.").isLength({min: 0, max: 30}).withMessage('Por favor, preencha o campo')
            ]
        }
        case 'update': {
            return [
                body('nome').optional().isLength({min: 1, max: 30}).withMessage('Por favor, insira um nome menor que 30 caracteres'),
                body('descricao').optional().isLength({min: 1, max: 200}).withMessage('Por favor, preencha o campo'),
                body('especie').optional().isLength({min: 1, max: 30}).withMessage('Por favor, preencha o campo').isIn(['cao','gato','roedor']).withMessage('Por favor, insira uma espécie válido'),
                body('raca').optional().isLength({min: 1, max: 30}).withMessage('Por favor, preencha o campo'),
                body('porte').optional().isLength({min: 1, max: 20}).withMessage('Por favor, preencha o campo').isIn(['pequeno','médio','grande']).withMessage('Por favor, insira um porte válido'),
                body('rastreador').optional().isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo'),
                body('genero').optional().isLength({min: 1, max: 10}).withMessage('Por favor, preencha o campo').isIn(['macho','fêmea']).withMessage('Por favor, insira um genero válido'),
                body('idade').optional().isInt({min: 0, max: 30}).withMessage('Por favor, preencha o campo')
            ]
        }
    }
}

const validationRating = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('score').exists().withMessage("Avaliação não pode ser nula.").isInt({min: 0, max: 5}).withMessage('Por favor, insira uma nota inteira entre 0 e 5.'),
                body('descricao').exists().withMessage("Descrição da avaliação não pode ser nula").isLength({min: 1, max: 200}).withMessage('Por favor, preencha o campo')
            ]
        }
        case 'update': {
            return [
                body('score').optional().isInt({min: 0, max: 5}).withMessage('Por favor, insira uma nota inteira entre 0 e 5.'),
                body('descricao').optional().isLength({min: 1, max: 200}).withMessage('Por favor, preencha o campo')
            ]
        }
    }
}



module.exports = {
    validationComment,
    validationUser,
    validationAnimal,
    validationRating
}