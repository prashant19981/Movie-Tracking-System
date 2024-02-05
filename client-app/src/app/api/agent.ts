import axios, { AxiosResponse } from "axios";
import { PaginatedResult } from "../models/paginatedResult";
import { store } from "../stores/store";

axios.defaults.baseURL = 'http://localhost:3030';

// Axios has data inside response.data, so we are extracting the data.
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    // define the CRUD operations of the database
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)

}

const Movies = {
    list:() => requests.get<PaginatedResult>(`/movies?search=${store.movieStore.searchQuery || 'Toy'}&page=${store.paginationStore.currentPage}&${store.movieStore.filterParams}`),
    //Add other API endpoints here
}

const agent = {
    Movies,
}

export default agent;