module.exports = (sequelize, dataTypes) => {
  let alias = 'User';
  let cols = {
  idstat: {
    type: dataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  iduser: {
      type: dataTypes.STRING
  },
  nickname: {
      type: dataTypes.STRING
  },
  profile_image: {
      type: dataTypes.STRING
  },
  creation_date: {
      type: dataTypes.DATE
  },
  score: {
      type: dataTypes.INTEGER
  },

  }

  let config = {
    tableName: 'users',
    timestamps: false,
    underscore: true 
};

const User = sequelize.define(alias, cols, config);

return User;
}