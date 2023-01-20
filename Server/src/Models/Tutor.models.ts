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
      names: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      course: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        defaultValue: [],
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
      modeOfTeaching: {
        type: Sequelize.ENUM("ONLINE", "HYBRID"),
        defaultValue: "ONLINE",
      },
      gender: {
        type: Sequelize.ENUM("Male", "Female"),
        defaultValue: "Male",
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "inactive",
      },
      resume: {
        type: Sequelize.STRING,
      },
      likedinProfile: {
        type: Sequelize.STRING,
      },
      nextOfKinFirstName: {
        type: Sequelize.STRING,
      },
      nextOfKinLastName: {
        type: Sequelize.STRING,
      },
      nextOfKinPhone: {
        type: Sequelize.STRING,
      },
      nextOfKinEmail: {
        type: Sequelize.STRING,
      },
      nextOfKinAddress: {
        type: Sequelize.STRING,
      },
      ipAddress: {
        type: Sequelize.STRING,
      },
      meansOfId: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.ENUM("MENTOR", "TUTOR"),
        defaultValue: "MENTOR",
      },
      lastLogin: Sequelize.DATE,
    },
    {
      freezeTableName: true,
    }
  );

  Tutors.associate = function (models: any) {
    models.tutors.hasOne(models.tutorSettings, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "tutorId",
    });
    models.tutors.hasMany(models.otp, {
      onDelete: "cascade",
      targetKey: "id",
      foreignKey: "tutorId",
    });
  };
  return Tutors;
}
