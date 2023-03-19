import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {coursesActions} from "../../redux";
import {Box} from "@mui/material";
import {Lessons} from "../../components";


const MyCourse = () => {

    const {courseId, lesson,} = useSelector(state => state.course);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(coursesActions.getCourseById({courseId: courseId}))
    }, [dispatch, courseId]);

    console.log(lesson);
    console.log(courseId);

    return (
        <Box>
            {lesson && <Lessons lesson={lesson}/>}
        </Box>
    );
};

export {
    MyCourse
};
