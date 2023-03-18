import api from "@/services/api";
import { RegistrationForm } from "@/types/Registration";

export const getRegistration = async () => {
    try {
        return await api.get<RegistrationForm>("registration/");
    } catch (error) {
        console.log(error) 
    }
}