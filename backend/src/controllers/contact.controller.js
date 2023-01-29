const { ContactService } = require('../services');

let _contactService = null;

class ContactController {
    constructor() {
        _contactService = new ContactService();
    }

    async getAll(req, res) {
        const contacts = await _contactService.getAll();
        return res.send(contacts);
    }

    async getById(req, res) {
        const { contactId } = req.params;
        const contact = await _contactService.getById(contactId);
        return res.send(contact);
    }

    async create(req, res) {
        const { body } = req;
        const createdContact = await _contactService.create(body);
        return res.send(createdContact);
    }

    async delete(req, res) {
        const { contactId } = req.params;
        const deletedContact = await _contactService.delete(contactId);
        return res.send(deletedContact);
    }
}

module.exports = ContactController;