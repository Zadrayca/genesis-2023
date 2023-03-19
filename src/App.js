import React from "react";

import './App.css';
import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";
import {Header} from "./components";

function App() {
    return (
        <Grid container
        padding={3}
        flexDirection="column">
            <Header/>
            <Outlet/>
        </Grid>
    );
}

export default App;
