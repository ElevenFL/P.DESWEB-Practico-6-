class BaseRepository {
  constructor() {
    this.items = [];
    this.nextId = 1;
  }

  getAll() {
    return [...this.items];
  }

  getById(id) {
    return this.items.find(item => item.id === id);
  }

  add(item) {
    const newItem = { ...item, id: this.nextId++ };
    this.items.push(newItem);
    return newItem;
  }

  update(id, updatedItem) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...updatedItem, id };
      return this.items[index];
    }
    return null;
  }

  delete(id) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      return this.items.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = BaseRepository;
