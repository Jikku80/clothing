const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("clothing","admin","",{dialect: "mysql", host: "mysqldb.cq2mb4dfo7dp.us-east-1.rds.amazonaws.com", password: "admindatabase"});

module.exports = sequelize;