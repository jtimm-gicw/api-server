'use strict';

// A generic Collection class to handle CRUD operations for any Sequelize model
class Collection {

  // Constructor takes in a Sequelize model and stores it
  constructor(model) {
    this.model = model;
  }

  // CREATE: Adds a new record to the database using the model
  async create(json) {
    try {
      let record = await this.model.create(json); // Creates a new record with provided data
      return record;
    } catch (e) {
      console.error('Error creating data for model: ' + this.model.name);
      return e;
    }
  }

  // READ: Retrieves one record (if ID is provided) or all records
  async read(id, options = {}) {
    let records = null;

    try {
      if (id) {
        // If an ID is provided, find one specific record using "where"
        options['where'] = { id };
        records = await this.model.findOne(options);
      } else {
        // If no ID is given, return all records
        records = await this.model.findAll(options);
      }

      return records;
    } catch (e) {
      console.error('Error reading data for model: ' + this.model.name);
      return e;
    }
  }

  // UPDATE: Finds a record by ID and updates it with new values
  async update(id, json) {
    try {
      if (!id) throw new Error('No record ID provided for model: ' + this.model.name);

      let record = await this.model.findOne({ where: { id } }); // Find the record to update
      let updatedRecord = await record.update(json); // Apply updates
      return updatedRecord;
    } catch (e) {
      console.error('Error updating model: ' + this.model.name);
      return e;
    }
  }

  // DELETE: Finds a record by ID and deletes it
  async delete(id) {
    try {
      if (!id) throw new Error('No record ID provided for model: ' + this.model.name);

      let deletedRecord = await this.model.destroy({ where: { id } }); // Delete the record
      return deletedRecord;
    } catch (e) {
      console.error('Error deleting data for model: ' + this.model.name);
      return e;
    }
  }
}

// Export the Collection class so it can be reused with different models
module.exports = Collection;
