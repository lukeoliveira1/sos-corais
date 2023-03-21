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
        return await api.post<RegistrationForm>("Registration/", {nameStudentOne, nameStudentTwo, nameAdvisorOne, nameAdvisorTwo, nameSchool, nameArticle, article}, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        });
    } catch (error) {
        console.log(error) 
    }
}