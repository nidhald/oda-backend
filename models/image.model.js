module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define(
    "Image",
    {
      imageName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      /*         email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        }, */
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false,
    }
  );
  Image.associate = (models) => {
    Image.belongsTo(models.Article, {
      as: 'Article',
      foreignKey: 'articleId'
    });
  };
  return Image;
};
