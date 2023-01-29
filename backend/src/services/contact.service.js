const { ContactRepository } = require('../repositories');

class ContactService {
    constructor() {
        this.repository = new ContactRepository();
    }

    async getAll() {
        return await this.repository.getAll();
    }

    async getById(id) {
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = 'Se debe enviar el id del contacto';
            return error;
        }
        
        if (id.length !== 24) {
            const error = new Error();
            error.status = 400;
            error.message = 'El id debe ser en formato Id de MongoDb';
            return error;
        }

        const currentEntity = await this.repository.getById(id);

        if (!currentEntity) {
            const error = new Error();
            error.status = 404;
            error.message = 'El contacto no existe';
            return error;
        }

        return currentEntity;
    }

    async create(entity) {
        if (entity.name === undefined || entity.email === undefined || entity.phone === undefined || entity.address === undefined) {
            const error = new Error();
            error.status = 400;
            error.message = 
                'Todos los campos son obligatorios';
            return error;
        }


        return await this.repository.create(entity);
    }

    async delete(id) {
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = 'Se debe enviar el id del contacto';
            return error;
        }

        if (id.length !== 24) {
            const error = new Error();
            error.status = 400;
            error.message = 'El id del contacto debe tener 24 caracteres';
            return error;
        }

        const currentEntity = await this.repository.getById(id);

        if (!currentEntity) {
            const error = new Error();
            error.status = 404;
            error.message = 'El contacto no existe';
            return error;
        }

        return await this.repository.delete(id);
    }
}

module.exports = ContactService;