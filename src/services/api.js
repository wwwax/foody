import axios from 'axios';

const BASE_URL = 'http://localhost:3333/menu';

function getAllMenuItems() {
    return axios.get(BASE_URL).then((res) => {
        return res.data;
    });
}

function getMenuItemById(id) {
    return axios.get(`${BASE_URL}/${id}`).then((res) => {
        return res.data;
    });
}

function deleteMenuItem(id) {
    return axios.delete(`${BASE_URL}/${id}`).then((res) => {
        return res.status === 200;
    });
}

function addMenuItem(item) {
    return axios.post(BASE_URL, item).then((res) => {
        return res.data;
    });
}

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };
