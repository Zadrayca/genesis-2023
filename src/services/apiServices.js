import axios from "axios";

import {baseUrl} from "../configs";

const accessTokenKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNWRkYTJhZS0wZjBiLTRjZjEtYWJhNS1mZTFmOWRlNWJlYTAiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MjA5NDAsImV4cCI6MTY3OTcyMDk0MH0.VmrMEUCJeDwE7puza3K-xkRo_uoEapGdQ2nw9JbSjXY';

const apiServiceCourse = axios.create({baseURL: baseUrl});

apiServiceCourse.interceptors.request.use((config) => {
    config.headers.Authorization = accessTokenKey;
    return config
});

export {
    apiServiceCourse
};