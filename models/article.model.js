module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define(
    "Article",
    {
      tittle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prix: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      taille: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      nom: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      couleur: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      tissu: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      doublure: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      details: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      conseils: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      tailleetcoupe: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false,
    }
  );
  Article.associate = (models) => {
    Article.hasMany(models.image, {
      as: "images",
      foreignKey: "articleId",
    });
  };
  Article.associate = (models) => {
    Article.hasMany(models.taille, {
      as: "tailles",
      foreignKey: "articleId",
    });
  };
  return Article;
};
