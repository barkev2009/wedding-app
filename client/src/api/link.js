import { $authHost, $host } from ".";
import { setCookie } from "../utils/cookies";

export const createAPI = async (name) => {
    const { data } = await $authHost.post('api/link', { name });
    // console.log('createAPI', data);
    return data;
}

export const editAPI = async ({ link_uuid, name, allergy, code, gender }) => {
    const { data } = await $host.put('api/link/' + link_uuid, { name, allergy, code, gender });
    // console.log('editAPI', data);
    return data;
}

export const deleteAPI = async (link_uuid) => {
    const { data } = await $authHost.delete('api/link/' + link_uuid);
    // console.log('deleteAPI', data);
    return data;
}

export const getAllLinks = async () => {
    const { data } = await $authHost.get('api/link');
    // console.log('getAllLinks', data);
    return data;
}

export const getLink = async (link_uuid) => {
    const { data } = await $authHost.get('api/link/' + link_uuid);
    setCookie('link', JSON.stringify(data));
    // console.log('getLink', data);
    return data;
}

export const getVisitOptions = async () => {
    const { data } = await $host.get('api/visit_options/');
    // console.log('getVisitOptions', data);
    return data;
}