import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    CardActionArea,
    Grid,
    Rating,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {urls} from "../../configs";
import CardContent from "@mui/material/CardContent";
import ReactHlsPlayer from "react-hls-player";

const Lessons = ({lesson}) => {

    const {description, lessons, meta, title, previewImageLink} = lesson;

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

        return (
        <Box display="flex"
             flexDirection="column"
             alignItems="center">
            {lesson &&  <Card sx={{
                minWidth: 350,
                maxWidth: 850
            }}>
                <CardActionArea
                    sx={{
                        minHeight: 300,
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
                            minHeight: 200,
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
                        <Grid container
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                              spacing={{xs: 1, md: 1, lg: 1}}>
                            <Grid item
                                  xs="auto">
                                <Typography variant="body2" color="rgb(234, 85, 43)" border={2} borderRadius={3}
                                            padding={1}>
                                    {lesson.tags}
                                </Typography>
                            </Grid>
                            <Grid item
                                  xs="auto">
                                <Rating name="read-only" value={lesson.rating} readOnly/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>}
            {lessons && lessons.map(less => <Accordion key={less.id} expanded={expanded === `panel${less.order}`} onChange={handleChange(`panel${less.order}`)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Lesson {less.order}
                    </Typography>
                    <Typography sx={{ color: 'black' }}>{less.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ReactHlsPlayer
                        src={less.link}
                        autoPlay={false}
                        controls={true}
                        width="100%"
                        height="auto"
                    />,
                </AccordionDetails>
            </Accordion>)}
        </Box>
    );
};

export {
    Lessons
};
