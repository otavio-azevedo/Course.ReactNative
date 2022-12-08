import api from '../api';

export async function getUserByName(userName) {
    try {
        const result = await api.get(`/users?login=${userName}`);
        return result.data[0];
    } catch (error) {
        console.log(error);
        return {};
    }
}