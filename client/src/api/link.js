import { $authHost, $host } from ".";
import { PUBLIC_URL } from "../const";
import { setCookie } from "../utils/cookies";

export const createAPI = async (name) => {
    const { data } = await $authHost.post('api/link', { name });
    // console.log('createAPI', data);
    return data;
}

export const createManyAPI = async (names) => {
    const dataArray = [];
    let resp, name;
    for (let i = 0; i < names.length; i++) {
        name = names[i]
        if (name !== '') {
            resp = await $authHost.post('api/link', { name });
            dataArray.push(resp.data);
        }
    }
    // console.log('createManyAPI', dataArray.length);
    return dataArray;
}

export const editAPI = async ({ link_uuid, name, allergy, code, gender, link_sent, send_telegram, is_official }) => {
    const { data } = await $host.put('api/link/' + link_uuid, { name, allergy, code, gender, link_sent, send_telegram, is_official });
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
    const { data } = await $authHost.get('api/link/' + link_uuid.replace(`${PUBLIC_URL}/`, ''));
    setCookie('link', JSON.stringify(data));
    // console.log('getLink', data);
    return data;
}

export const getVisitOptions = async () => {
    const { data } = await $host.get('api/visit_options/');
    // console.log('getVisitOptions', data);
    return data;
}