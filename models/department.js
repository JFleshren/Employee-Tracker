// Import database functions
const { query } = require('../dbFunctions');

class Department {
    static async getAll() {
        const sql = 'SELECT * FROM department';
        return await query(sql);
    }

    static async getById(departmentId) {
        const sql = 'SELECT * FROM department WHERE id = ?';
        return await query(sql, [departmentId]);
    }
}

module.exports = Department;
