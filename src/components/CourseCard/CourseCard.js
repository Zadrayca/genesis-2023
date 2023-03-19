import {useDispatch} from "react-redux";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid, Rating} from '@mui/material';

import {urls} from "../../configs";
import {coursesActions} from "../../redux";
import {useNavigate} from "react-router-dom";

const CourseCard = ({course}) => {

    const {title, tags, rating, previewImageLink, lessonsCount, description, meta, id} = course;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const toCourse = () => {
        dispatch(coursesActions.setCourseId(id));
        navigate("/course");
    }

    console.log(id);
    return (
        <Card sx={{maxWidth: 350}}
              onClick={toCourse}>
                <CardActionArea
                    sx={{
                        minHeight: 400,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`${previewImageLink}${urls.courseImg.byCourse}`}
                        alt="course image"
                    />
                    <CardContent
                        sx={{
                            minHeight: 350,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around"
                        }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Skills: {meta.skills && meta.skills.join(", ")}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lessons: {lessonsCount}
                        </Typography>
                        <Grid container
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                              spacing={{xs: 1, md: 1, lg: 1}}>
                            <Grid item
                                  xs="auto">
                                <Typography variant="body2" color="rgb(234, 85, 43)" border={2} borderRadius={3}
                                            padding={1}>
                                    {tags}
                                </Typography>
                            </Grid>
                            <Grid item
                                  xs="auto">
                                <Rating name="read-only" value={rating} readOnly/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
        </Card>
    );
};

export {
    CourseCard
};
