const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate();

console.log("DB connection is working");

module.exports = sequelize;

// mysql://u02iy8lf3ado3klk:w9HnWwASmGLVESuytwat@b5rbdihsqiied2
