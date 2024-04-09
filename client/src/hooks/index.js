import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, AUTH_ROUTE } from '../const';
import styles from '../screens/screen.module.css';

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

export const useIntersectionObserver = () => {
    let options = {
        root: document.querySelector(styles.dressCode),
        rootMargin: "0px",
        threshold: 1.0,
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('VISIBLE');
                const circles = document.querySelectorAll('.' + styles.circle);
                circles.forEach(
                    (circle, idx) => {
                        setTimeout(
                            () => {
                                circle.style.transform = 'scale(1.2)';
                                setTimeout(
                                    () => {
                                        circle.style.transform = 'scale(1)';
                                    }, 400
                                );
                            }, 200 * (idx + 1)
                        );
                    }
                )
            }
        })
    }

    let observer = new IntersectionObserver(callback, options);
    setTimeout(
        () => {
            observer.observe(document.querySelector('.' + styles.circles));
        }, 1000
    );
    
}