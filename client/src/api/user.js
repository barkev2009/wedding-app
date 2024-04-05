import { $authHost, $host } from ".";
import { setCookie } from "../utils/cookies";

export const loginAPI = async (login, password) => {
    const {data} = await $host.post('api/user', { login, password });
    setCookie(process.env.REACT_APP_LOCAL_STORAGE_KEY, data.token);
    return data;
}

export const checkAPI = async () => {
    const {data} = await $authHost.get('api/user');
    setCookie(process.env.REACT_APP_LOCAL_STORAGE_KEY, data.token);
    return data;
}