/*************************************************************************
STUDENT SETTINGS TABLE
*************************************************************************/

export default function (sequelize: any, Sequelize: any) {
  var StudentSettings = sequelize.define(
    "studentSettings",
    {
      twoFa: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  StudentSettings.associate = function (models: any) {
    models.studentSettings.belongsTo(models.students, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "studentId",
    });
  };

  return StudentSettings;
}
