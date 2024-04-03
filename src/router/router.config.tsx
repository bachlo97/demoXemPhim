import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import UserTemplate from "@/templates/user/user.template";
import { TicketRoom } from "@/pages/ticket-room/ticket-room";

const Detail = lazy(() => import("@/pages/detail/detail"));
const Home = lazy(() => import("@/pages/home/home"));

const Login = lazy(() => import("@/pages/login/login"));
const Register = lazy(() => import("@/pages/register/register"));





export const router = createBrowserRouter([
    {
        element: <UserTemplate />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "detail",
                element: <Detail />,
            },
            {
                path: "ticketroom",
                element: <TicketRoom/>,
            },
        ],
    },
    {
        path: "*",
        element: <>Page not found</>,
    },
]);
