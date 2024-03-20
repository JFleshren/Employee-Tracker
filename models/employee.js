// Import database functions
const { query } = require('../dbFunctions');

class Employee {
    static async getAll() {
        const sql = 'SELECT * FROM employee';
        return await query(sql);
    }

    static async getByDepartment(departmentId) {
        const sql = 'SELECT * FROM employee WHERE department_id = ?';
        return await query(sql, [departmentId]);
    }

}

module.exports = Employee;
