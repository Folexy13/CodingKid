/*************************************************************************
OTP TABLE
*************************************************************************/

export default function (sequelize: any, Sequelize: any) {
  var Otp = sequelize.define(
    "otp",
    {
      otp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expirationTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      verifiedAt: Sequelize.DATE,
    },
    {
      freezeTableName: true,
    }
  );
  Otp.associate = function (models: any) {
    models.otp.belongsTo(models.tutors, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "tutorId",
    });
    models.otp.belongsTo(models.students, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "studentId",
    });
  };

  return Otp;
}
