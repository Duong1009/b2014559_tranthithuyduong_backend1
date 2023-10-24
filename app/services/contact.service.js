const { ObjectId } = require("mongodb");
class ContactService {
    constructor(client) {
        this.contact = client.db().collection("contacts");
    }
}

module.exports = ContactService;