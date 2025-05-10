const PersonasRepository = require('../data-access/personasRepository');

class PersonasService {
  constructor() {
    this.repository = new PersonasRepository();
  }

  validatePersona(persona) {
    if (!persona.nombre || !persona.apellido) {
      throw new Error('Nombre y apellido son requeridos');
    }
    if (typeof persona.edad !== 'number' || persona.edad < 0) {
      throw new Error('Edad debe ser un número positivo');
    }
  }

  getAllPersonas() {
    return this.repository.getAll();
  }

  getPersonaById(id) {
    return this.repository.getById(id);
  }

  createPersona(personaData) {
    this.validatePersona(personaData);
    return this.repository.add(personaData);
  }

  updatePersona(id, personaData) {
    this.validatePersona(personaData);
    return this.repository.update(id, personaData);
  }

  deletePersona(id) {
    return this.repository.delete(id);
  }
}

module.exports = PersonasService;
