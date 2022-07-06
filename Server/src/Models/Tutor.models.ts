//*****     TUTORS TABLE     *****//
export default function (sequelize: any, Sequelize: any) {
  var Tutors = sequelize.define(
    "tutors",
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      walletbalance: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: "0.00",
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "inactive",
      },
    },
    {
      freezeTableName: true,
    }
  );

  Tutors.associate = function (models: any) {
    models.users.hasOne(models.userSettings, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "userId",
    });
    models.users.hasMany(models.otp, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "userId",
    });
    models.users.hasMany(models.transactions, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "userId",
    });
  };
  return Tutors;
}
