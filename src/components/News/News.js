import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Rating,
    Typography,
} from "@mui/material";
import React from "react";

const News = (props) => {
    const { title, description, urlToImage } = props.news;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                title={title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={urlToImage}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography>
                    <Rating name="read-only" value={4} readOnly />
                </Typography>
            </CardContent>
        </Card>
    );
};

export default News;
