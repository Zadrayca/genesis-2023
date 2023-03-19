import {apiServiceCourse} from "./apiServices";
import {urls} from "../configs";

const courseService = {
    getAllCourses: () => apiServiceCourse.get(urls.allCourses.courses),
    getCourseById: (id) => apiServiceCourse.get(urls.courseById.course(id))
}

export {
    courseService
}