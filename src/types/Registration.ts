export interface RegistrationForm {
  id?: number;
  nameStudentOne: string,
  nameStudentTwo: string,
  nameAdvisorOne: string,
  nameAdvisorTwo: string,
  nameSchool: string,
  nameArticle: string,
  emailHead: string,
  phoneNumberHead: string,
  article: File | null,
}