import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ADMIN_ROUTE, AUTH_ROUTE } from '../const';
import { $host } from '../api';

export const useAuthorization = (user, location) => {
    const navigate = useNavigate();

    useEffect(
        () => {
            if (!user.isAuth && location.pathname === ADMIN_ROUTE) {
                navigate(AUTH_ROUTE);
            }
            if (user.isAuth && location.pathname === AUTH_ROUTE) {
                navigate(ADMIN_ROUTE);
            }
        }, [user.isAuth]
    );
}