/* module.exports = (sequelize, Sequelize) => {
  const Taille = sequelize.define(
    "Taille",
    {
      tail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qte: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false,
    }
  );
  return Taille;
}; */

module.exports = (sequelize, Sequelize) => {
  const Taille = sequelize.define(
    "Taille",
    {
      tail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qte: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false,
    }
  );
  return Taille;
};
