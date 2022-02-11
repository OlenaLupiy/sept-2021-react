import axios from "axios";
import baseURL from "../configs/urls";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODQwYjRhMTMwOTM5ZTEyM2Y1MmM3YmYxMzhjODFhOCIsInN1YiI6IjYyMDI0ZDhhYjg3YWVjMDBmNjJkODNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YHJREWFH0v1SHBmflMZqH0Eza9qF7qfSFSKPMgS6mPY'
    },
    params:{
        limit:5
    }
    });