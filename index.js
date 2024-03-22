const inquirer = require('inquirer');
const Department = require('./models/department');
const Role = require('./models/role');
const Employee = require('./models/employee');

// Main function to start the application
const main = async () => {
    let action = '';

    while (action !== 'Exit') {
        try {

    // Prompt user for actions
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    });

    // Perform action based on user's choice
    switch (action) {
        case 'View all departments':
            // Call Department.getAll() and display results
            const departments = await Department.getAll();
            console.table(departments);
            break;
        case 'View all roles':
            // Call Role.getAll() and display results
            const roles = await Role.getAll();
            console.table(roles);
            break;
        case 'View all employees':
            // Call Employee.getAll() and display results
            const employees = await Employee.getAll();
            console.table(employees);
            break;
        case 'Add a department':
            // Prompt user to enter department name
            const { name } = await inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:',
                validate: function (input) {
                    if (!input) {
                        return 'Department name cannot be empty';
                    }
                    return true;
                }
            });

            // Call Department.create() to add department to database
            await Department.create({ name });
            console.log('Department added successfully!');
            break;
        case 'Add a role':
            // Prompt user to enter role details
            const roleDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter the title of the role:'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter the salary for the role:'
                },
                {
                    type: 'input',
                    name: 'departmentId',
                    message: 'Enter the department ID for the role:'
                }
            ]);

            // Call Role.create() to add role to database
            await Role.create(roleDetails);
            console.log('Role added successfully!');
            break;
        case 'Add an employee':
            // Prompt user to enter employee details
            const employeeDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the first name of the employee:'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the last name of the employee:'
                },
                {
                    type: 'input',
                    name: 'roleId',
                    message: 'Enter the role ID for the employee:'
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'Enter the manager ID for the employee (if any):'
                }
            ]);

            // Call Employee.create() to add employee to database
            await Employee.create(employeeDetails);
            console.log('Employee added successfully!');
            break;
// Add a case for 'Update an employee role'
case 'Update an employee role':
    // Prompt user to select an employee and enter new role details
    const allEmployeesForUpdate = await Employee.getAll();
    const employeeChoicesForUpdate = allEmployeesForUpdate.map(employee => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id
    }));
        
    const { employeeId: selectedEmployeeId } = await inquirer.prompt({
        type: 'list',
        name: 'employeeId',
        message: 'Select the employee whose role you want to update:',
        choices: employeeChoicesForUpdate
    });

    const allRolesForUpdate = await Role.getAll();
    const roleChoicesForUpdate = allRolesForUpdate.map(role => ({
        name: role.title,
        value: role.id
    }));

    const {roleId: selectedRoleId} = await inquirer.prompt({
        type: 'list',
        name: 'roleId',
        message: 'Select the new role for the employee:',
        choices: roleChoicesForUpdate
    });

    // Call Employee.updateRole() to update employee's role
    await Employee.updateRole(selectedEmployeeId, selectedRoleId);
    console.log('Employee role updated successfully!');
    break;

            }
        } catch (error) {
            console.error('An error occurred:', error.message);
        }
    }

    console.log('Exiting...');
    process.exit();
};

//start the application
main();
