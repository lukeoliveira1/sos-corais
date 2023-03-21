import api from "@/services/api";
import { RegistrationForm } from "@/types/Registration";
import { IPagination } from "@/types/Pagination";

export const getRegistration = async () => {
    try {
        return await api.get<IPagination<RegistrationForm>>("Registration/");
    } catch (error) {
        console.log(error) 
    }
}