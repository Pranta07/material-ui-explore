import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import News from "../News/News";

const Newspaper = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/everything?q=bitcoin&apiKey=aafd38ac724446ac8538d32c92c1b109"
        )
            .then((res) => res.json())
            .then((data) => setArticles(data.articles));
    }, []);
    return (
        <div>
            <CircularProgress color="secondary" />
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    {articles.map((article) => (
                        <Grid item xs={6} sm={6} md={3}>
                            <News news={article}></News>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default Newspaper;
