const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Questions extends Model {}

Questions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tvPreferences: {
      type: DataTypes.STRING,
    },
    favoriteTVShows: {
      type: DataTypes.STRING,
    },
    favoriteMoviesTypes: {
      type: DataTypes.STRING,
    },
    musicTypes: {
      type: DataTypes.STRING,
    },
    favoriteArtists: {
      type: DataTypes.STRING,
    },
    readingSelection: {
      type: DataTypes.STRING,
    },
    favoriteBooks: {
      type: DataTypes.STRING,
    },
    ideaOfFun: {
      type: DataTypes.STRING,
    },
    Hobbies: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "questions",
  }
);

module.exports = Questions;
