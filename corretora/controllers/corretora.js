const db = [];

let ultimoId = 0;

function getIndice(id){
    const indice = db.findIndex(el =>  el.id == id)

        if (indice != -1){
            return indice
        } else {
            console.log('Id inválido.')
            return -1;
        }
};

const modelo = (body, id = ++ultimoId) => {
    
    if (body.nome != ""){
        return {
            id,
            nome: body.nome
        };
    }

    console.log('Dados inválidos.')
    ultimoId--;
};

const criar = (body) => {
    const novo = modelo(body);

    if (novo){
        db.push(novo);
        return {status: 201, message:'Registro criado com sucesso.'}
    }
};

const listar = () => {
    if (db.length == 0){
        console.log('Nenhum registro encontrado.')
        return false
    }

    db.forEach(el => console.log(el))
    return true;
};

const atualizar = (body) => {
    if (listar()){
        const id = parseInt(body, id)

        const indice = getIndice(id)

        if (indice > -1){
            const novo = modelo(body, id)
            
            if (novo) {
                db[indice] = novo;
                console.log('Atualizado com sucesso.')
            }
        }
    }
};

const remover = (body) => {
    if (listar()){
    const indice = getIndice(id);

        if (indice > -1){
            db.splice(indice,1)
            console.log('Removido com sucesso.')
        }
    }
};

const showAll = () => db;

module.exports = {criar, listar, atualizar, remover, showAll}