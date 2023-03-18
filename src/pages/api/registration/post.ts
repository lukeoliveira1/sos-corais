import api from "@/services/api";
import { RegistrationForm } from "@/types/Registration";

export const postRegistration = async ({
    nameStudentOne,
    nameStudentTwo,
    nameAdvisorOne, 
    nameAdvisorTwo,
    nameSchool,
    nameArticle,
    article 
} : RegistrationForm) => {
    try {
        return await api.post<RegistrationForm>("registration/", {nameStudentOne, nameStudentTwo, nameAdvisorOne, nameAdvisorTwo, nameSchool, nameArticle, article});
    } catch (error) {
        console.log(error) 
    }
}