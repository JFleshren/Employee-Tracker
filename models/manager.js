// Import database functions
const { query } = require('../dbFunctions');
// ceate a manager class
class Manager {
    static async getAll() {
        const sql = 'SELECT * FROM manager';
        return await query(sql);
    }
  
}

module.exports = Manager;
