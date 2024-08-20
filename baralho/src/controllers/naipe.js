const db = [];
let nextId = 1;

const model = (body, id = nextId++) => {
    if(
        body.cor != undefined &&
        body.nome != undefined &&
        body.cor != "" &&
        body.nome != ""
    ){
        return {
            id,
            nome: body.nome,
            cor: body.cor
        }
    }
};

const store = (body) => {
    const novo = model(body)
    if(novo) {
        db.push(novo)
        return 201
    }
    return 400
};

const index = () => {
    return db
};

const show = (id) => {
    const naipe = db.find(el => el.id == id)
};

const update = (body, id) => {
    const index = db.findIndex(el => el.id == id)
    const novo = model(body, id)

    if(index!= -1 && novo){
        db[index] = novo
        return 200;
    }
    return 400;
};

const destroy = (id) => {
    const index = db.findIndex(el => el.id == id)

    if(index != -1){
        db.splice(index, 1)
        return 200;
    }
    return 404;
};

module.exports = {store, index, show, update, destroy}