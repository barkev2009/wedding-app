import { ADMIN_ROUTE, AUTH_ROUTE } from "./const";
import Admin from "./routes/Admin";
import Auth from "./routes/Auth";
import LinkSwitch from "./routes/LinkSwitch";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: '/:link_uuid',
        Component: LinkSwitch
    }
]