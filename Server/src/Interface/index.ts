//Basic auth details
export interface AuthUser {
  email: string;
  phone?: string;
  password: string;
}

//Onboarding Tutors
export interface Tutors {
  ipAddress: string;
  meansOfId: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  role: "MENTOR" | "TUTOR";
  likedinProfile: string;
  availability: string;
  modeOfTeaching: "OFFLINE" | "ONLINE" | "HYBRID";
  teachSelfLearning: Boolean;
  phone: string;
  location: string;
}

//Onboarding Student
export interface Students {
  firstName: string;
  lastName: string;
  middleName?: string;
  age: string;
  modeOfLearning: "OFFLINE" | "ONLINE" | "HYBRID";
  location: string;
  parentName: string;
  parentNum: string;
  parentEmail?: string;
}
