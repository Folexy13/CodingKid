/*************************************************************************
TUTOR SETTINGS TABLE
*************************************************************************/

export default function (sequelize: any, Sequelize: any) {
  var TutorSettings = sequelize.define(
    "tutorSettings",
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
  TutorSettings.associate = function (models: any) {
    models.tutorSettings.belongsTo(models.tutors, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "tutorId",
    });
  };

  return TutorSettings;
}
