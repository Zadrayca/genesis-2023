import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {coursesActions} from "../../redux";
import {Box, Grid, Pagination} from "@mui/material";
import {CourseCard} from "../../components";


const Courses = () => {

    const {courses, courseId, page} = useSelector(state => state.course);

    const dispatch = useDispatch();

    console.log(courseId);

    useEffect(() => {
        dispatch(coursesActions.getAllCourses())
    }, [dispatch]);

    const itemsPerPage = 10;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, courses.length);
    const itemsToShow = courses.slice(startIndex, endIndex);

    const handleChange = (event, value) => {
        dispatch(coursesActions.setPage(value))
    };

    return (
        <Box display="flex" flexDirection="column" width="100%">
            <Box display="flex"
                 flexDirection="column"
                 alignItems="center"
                 width="100%">
                <Pagination count={3} page={page} onChange={handleChange}/>
            </Box>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={{xs: 2, md: 3, lg: 4}}>
                {courses && itemsToShow.map(course =>
                    <Grid item
                          xs={10} sm={6} md={4} lg={3}
                          key={course.id}>
                        <CourseCard course={course}/>
                    </Grid>)}
            </Grid>
        </Box>

    );
};


export {
    Courses
};
