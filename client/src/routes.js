import { ADMIN_ROUTE, AUTH_ROUTE, PUBLIC_URL } from "./const";
import Admin from "./routes/Admin";
import Auth from "./routes/Auth";
import LinkSwitch from "./routes/LinkSwitch";
import Main from "./routes/Main";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: PUBLIC_URL,
        Component: Main
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: PUBLIC_URL +'/:link_uuid',
        Component: LinkSwitch
    }
]