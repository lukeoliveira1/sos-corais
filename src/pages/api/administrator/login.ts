import api from "@/services/api";
import { AdministratorForm } from "@/types/Administrator";

export const loginAdministrator = async ({
    username,
    password
} : AdministratorForm) => {
    try {
        return await api.post<AdministratorForm>("login/", { username, password });
    } catch (error) {
        console.log(error) 
    }
}