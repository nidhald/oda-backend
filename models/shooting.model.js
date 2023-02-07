module.exports = (sequelize, Sequelize) => {
    const Shooting = sequelize.define(
      "Shooting",
      {
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      },
      {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
      }
    );
    return Shooting;
  };
  