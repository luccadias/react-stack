import axiosInstance from './config/axios'

export async function apiGet(){
    return axiosInstance.get('/')
}