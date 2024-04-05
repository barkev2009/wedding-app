const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Link = sequelize.define(
    'link',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, allowNull: false, autoIncrement: true},
        link_uuid: {type: DataTypes.STRING, unique: true, allowNull: false},
        name: {type: DataTypes.STRING, allowNull: true, unique: false},
        allergy: {type: DataTypes.STRING, allowNull: true, defaultValue: 'Отсутствует', unique: false},
        gender: {type: DataTypes.STRING, allowNull: false, defaultValue: 'multi', unique: false}
    }
);

const VisitOption = sequelize.define(
    'visit_option',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, allowNull: false, autoIncrement: true},
        code: {type: DataTypes.STRING, unique: true, allowNull: false},
        value: {type: DataTypes.STRING, unique: false, allowNull: false}
    }
);

VisitOption.hasMany(Link);
Link.belongsTo(VisitOption);

module.exports = {
    Link, VisitOption
}