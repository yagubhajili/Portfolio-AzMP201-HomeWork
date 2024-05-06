import axios from "axios";
import { BASE_URL, FAKE_STORE_URL, } from "./api";





export const getAllData = async (endPoint) => {
    let res = await axios(BASE_URL + endPoint);
    let data = res.data;
    return data;
};

export const getAllDataFromFakeStore = async (endPoint) => {
    let res = await axios(FAKE_STORE_URL + endPoint);
    let data = res.data;
    return data;
};

export const deleteById = async (endPoint, id) => {
    let res = await axios.delete(BASE_URL + endPoint + id);
    let data = res.data;
    return data;
};

export const getDataById = async (endPoint, id) => {
    let res = await axios(FAKE_STORE_URL + endPoint + id);
    let data = res.data;
    return data;
};


export const getDataByIdNorth = async (endPoint, id) => {
    let res = await axios(BASE_URL + endPoint + id);
    let data = res.data;
    return data;
};