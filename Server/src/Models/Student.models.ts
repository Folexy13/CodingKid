//*****     STUDENT TABLE     *****//
export default function (sequelize: any, Sequelize: any) {
  var Student = sequelize.define(
    "students",
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1,
      },
      names: {
        type: Sequelize.STRING,
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
        type: Sequelize.ENUM("Male", "Female"),
        defaultValue: "Male",
      },
      course: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        defaultValue: [],
      },
      type: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "inactive",
      },
      lastLogin: Sequelize.DATE,
    },
    {
      freezeTableName: true,
    }
  );

  Student.associate = function (models: any) {
    models.students.hasOne(models.studentSettings, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "studentId",
    });
    models.students.hasMany(models.otp, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "studentId",
    });
  };
  return Student;
}
