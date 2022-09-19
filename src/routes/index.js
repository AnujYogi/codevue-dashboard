import React from "react";
// import { AboutUs } from "../components/AboutUs";
// import { Home } from "../components/Home";
// import { PageNotFound } from "../components/PageNotFound";

const Home = React.lazy(() => import("../components/Home"))
const AboutUs = React.lazy(() => import("../components/AboutUs"))
const PageNotFound = React.lazy(() => import("../components/PageNotFound"))


const routes = [
    {
        component: <Home />,
        path: "/"
    },
    {
        component: <AboutUs />,
        path: "about"
    },
    {
        component: <PageNotFound />,
        path: "*"
    },
]

export default routes;