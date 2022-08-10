const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "typeOperation",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }
  );
};