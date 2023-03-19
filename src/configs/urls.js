const baseUrl = 'https://api.wisey.app/api/v1/core';

const courses = '/preview-courses';


const urls = {
    allCourses: {
        courses: courses
    },
    courseById: {
        course: (id) => `${courses}/${id}`
    },
    courseImg: {
        byCourse: '/cover.webp',
        byLesson: (lessonOrder) => `/lesson-${lessonOrder}.webp`
    }
}


export {
    baseUrl,
    urls
}