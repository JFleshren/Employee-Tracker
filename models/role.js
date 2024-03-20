const { query } = require('../dbFunctions');
// ceate a role class
class Role {
    static async getAll() {
        const sql = 'SELECT * FROM role';
        return await query(sql);
    }
        // create a role
    static async create({ title, salary, departmentId }) {
        const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
        return await query(sql, [title, salary, departmentId]);
    }
    // get role by department
    static async getByDepartment(departmentId) {
        const sql = 'SELECT * FROM role WHERE department_id = ?';
        return await query(sql, [departmentId]);
    }

}

module.exports = Role;
