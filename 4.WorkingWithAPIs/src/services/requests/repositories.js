import api from '../api';

export async function getRepoByUserId(id) {
    try {
        const result = await api.get(`/repos?userId=${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getRepoByName(userId,name) {
    try {
        const result = await api.get(`/repos?userId=${userId}&name=${name}`);
        return result.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function alterRepo(id, userId, name, data) {
    try {
        await api.put(`/repos/${id}`, {
            id: id,
            userId: userId,
            name: name,
            data: data
        });
        return 'success';
    } catch (error) {
        console.log(error);
        return 'error';
    }
}

export async function createRepo(userId, name, data) {
    try {
        await api.post(`/repos`, {
            userId: userId,
            name: name,
            data: data
        });
        return 'success';
    } catch (error) {
        console.log(error);
        return 'error';
    }
}

export async function deleteRepo(id) {
    try {
        await api.delete(`/repos/${id}`);
        return 'success';
    } catch (error) {
        console.log(error);
        return 'error';
    }
}