const { query } = require('../dbFunctions');
// ceate a employee class
class Employee {
    static async getAll() {
        const sql = 'SELECT * FROM employee';
        return await query(sql);
    }
        // create a employee
    static async create({ firstName, lastName, roleId, managerId }) {
        const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        return await query(sql, [firstName, lastName, roleId, managerId]);
    }
        // get employee by department
    static async getByDepartment(departmentId) {
        const sql = 'SELECT * FROM employee WHERE department_id = ?';
        return await query(sql, [departmentId]);
    }
    static async updateRole(employeeId, roleId) {
        const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
        return await query(sql, [roleId, employeeId]);
    }

}

module.exports = Employee;
