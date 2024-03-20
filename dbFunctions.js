const pool = require('./connection');

// Function to perform a query
const query = async (sql, values) => {
    try {
        const [results, fields] = await pool.query(sql, values);
        return results;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
};

module.exports = {
    query
};
