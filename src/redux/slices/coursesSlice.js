import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {courseService} from "../../services";


const initialState = {
    courses: [],
    courseId: null,
    lesson: null,
    page: 1,
    loading: false
}


const getAllCourses = createAsyncThunk(
    'coursesSlice/getAllCourses',
    async (_, thunkAPI) => {
        try {
            const {data} = await courseService.getAllCourses();
            console.log(data);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getCourseById = createAsyncThunk(
    'coursesSlice/getCourseById',
    async ({courseId}, thunkAPI) => {
        try {
            const {data} = await courseService.getCourseById(courseId);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const coursesSlice = createSlice({
    name: 'coursesSlice',
    initialState,
    reducers: {
        setCourseId:((state, action) =>{
            state.courseId = action.payload
        }),
        setPage:((state, action) =>{
            state.page = action.payload
        })
    },
    extraReducers: builder =>
        builder
            .addCase(getAllCourses.fulfilled, (state, action) => {
                state.courses = action.payload.courses
                state.loading = false;
            })
            .addCase(getAllCourses.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCourseById.fulfilled, (state, action) => {
                state.lesson = action.payload;
                state.loading = false;
            })
            .addCase(getCourseById.pending, (state) => {
                state.loading = true;
            })
});

const {
    reducer: coursesReducer,
    actions: {setCourseId, setPage}
} = coursesSlice;

const coursesActions = {
    getAllCourses,
    getCourseById,
    setCourseId,
    setPage
}

export {
    coursesReducer,
    coursesActions
}