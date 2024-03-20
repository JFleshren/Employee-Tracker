const { query } = require('../dbFunctions');
// ceate a Role class
class Role {
    static async getAll() {
        const sql = 'SELECT * FROM role';
        return await query(sql);
    }

    static async getByDepartment(departmentId) {
        const sql = 'SELECT * FROM role WHERE department_id = ?';
        return await query(sql, [departmentId]);
    }

}

module.exports = Role;
