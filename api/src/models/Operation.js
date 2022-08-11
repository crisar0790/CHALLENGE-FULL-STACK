const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "operation",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};