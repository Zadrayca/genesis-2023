import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {setupStore} from "./redux";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {appTheme} from "./appTheme";
import {Courses, MyCourse} from "./pages";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore();

root.render(
    <Provider store={store}>
        <ThemeProvider theme={appTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path={''} element={<App/>}>
                        <Route index element={<Courses/>}/>
                        <Route path={"course"} element={<MyCourse/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);
