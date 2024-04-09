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

export const useDressCodeIntersectionObserver = () => {
    let options = {
        root: document.querySelector(styles.dressCode),
        rootMargin: "0px",
        threshold: 1.0,
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circles = document.querySelectorAll('.' + styles.circleMain);
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
export const useWineIntersectionObserver = () => {
    let timeouts = [];
    let options = {
        root: document.querySelector(styles.details),
        rootMargin: "0px",
        threshold: 1.0,
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            const wine = document.querySelector('.' + styles.wine);
            let timeout;
            if (entry.isIntersecting) {
                for (let i = 10; i < 43; i++) {
                    timeout = setTimeout(
                        () => {
                            wine.style.height = `${i}px`;
                        }, (i - 10) * 100
                    )
                    timeouts.push(timeout);
                }
            } else {
                timeouts.forEach(t => clearTimeout(t));
                timeouts = []
                wine.style.height = `10px`;
            }
        })
    }

    let observer = new IntersectionObserver(callback, options);
    setTimeout(
        () => {
            observer.observe(document.querySelector('.' + styles.svgContainer));
        }, 1000
    );

}