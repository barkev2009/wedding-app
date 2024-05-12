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

export const useGuestTimeIntersectionObserver = () => {
    let timeouts = [];
    let options = {
        root: document.querySelector(styles.programme),
        rootMargin: "0px",
        threshold: 1.0,
    };
    let guestTime, initialGuestTime, hourValue, minValue;
    setTimeout(
        () => {
            guestTime = document.querySelector('.guestTime');
            initialGuestTime = guestTime.innerHTML;
            hourValue = initialGuestTime.split(':')[0];
            minValue = initialGuestTime.split(':')[1];
        }, 1000
    )

    const callback = (entries) => {
        entries.forEach(entry => {
            let timeout;
            if (entry.isIntersecting) {
                guestTime.innerHTML = '00:00';
                for (let i = 0; i < Number(hourValue); i++) {
                    timeout = setTimeout(
                        () => {
                            guestTime.innerHTML = `${String(i + 1).padStart(2, '0')}:${guestTime.innerHTML.split(':')[1]}`;
                        }, i * minValue / hourValue * 40
                    )
                    timeouts.push(timeout);
                }
                for (let i = 0; i < Number(minValue); i++) {
                    timeout = setTimeout(
                        () => {
                            guestTime.innerHTML = `${guestTime.innerHTML.split(':')[0]}:${String(i + 1).padStart(2, '0')}`;
                        }, i * 40
                    )
                    timeouts.push(timeout);
                }
            } else {
                timeouts.forEach(t => clearTimeout(t));
                timeouts = []
                guestTime.innerHTML = initialGuestTime;
            }
        })
    }

    let observer = new IntersectionObserver(callback, options);
    setTimeout(
        () => {
            observer.observe(document.querySelector('.guestTime'));
        }, 1000
    );

}
export const useBanguetTimeIntersectionObserver = () => {
    let timeouts = [];
    let options = {
        root: document.querySelector(styles.programme),
        rootMargin: "0px",
        threshold: 1.0,
    };
    let guestTime, initialGuestTime, hourValue, minValue;
    setTimeout(
        () => {
            guestTime = document.querySelector('.banquetTime');
            initialGuestTime = guestTime.innerHTML;
            hourValue = initialGuestTime.split(':')[0];
            minValue = initialGuestTime.split(':')[1];
        }, 1000
    )

    const callback = (entries) => {
        entries.forEach(entry => {
            let timeout;
            if (entry.isIntersecting) {
                guestTime.innerHTML = '00:00';
                for (let i = 0; i < Number(hourValue); i++) {
                    timeout = setTimeout(
                        () => {
                            guestTime.innerHTML = `${String(i + 1).padStart(2, '0')}:${guestTime.innerHTML.split(':')[1]}`;
                        }, i * 50
                    )
                    timeouts.push(timeout);
                }
            } else {
                timeouts.forEach(t => clearTimeout(t));
                timeouts = []
                guestTime.innerHTML = initialGuestTime;
            }
        })
    }

    let observer = new IntersectionObserver(callback, options);
    setTimeout(
        () => {
            observer.observe(document.querySelector('.banquetTime'));
        }, 1000
    );

}
export const useDiscoTimeIntersectionObserver = () => {
    let timeouts = [];
    let options = {
        root: document.querySelector(styles.programme),
        rootMargin: "0px",
        threshold: 1.0,
    };
    let guestTime, initialGuestTime, hourValue, minValue;
    setTimeout(
        () => {
            guestTime = document.querySelector('.discoTime');
            initialGuestTime = guestTime.innerHTML;
            hourValue = initialGuestTime.split(':')[0];
            minValue = initialGuestTime.split(':')[1];
        }, 1000
    )

    const callback = (entries) => {
        entries.forEach(entry => {
            let timeout;
            if (entry.isIntersecting) {
                guestTime.innerHTML = '00:00';
                for (let i = 0; i < Number(hourValue); i++) {
                    timeout = setTimeout(
                        () => {
                            guestTime.innerHTML = `${String(i + 1).padStart(2, '0')}:${guestTime.innerHTML.split(':')[1]}`;
                        }, i * 50
                    )
                    timeouts.push(timeout);
                }
            } else {
                timeouts.forEach(t => clearTimeout(t));
                timeouts = []
                guestTime.innerHTML = initialGuestTime;
            }
        })
    }

    let observer = new IntersectionObserver(callback, options);
    setTimeout(
        () => {
            observer.observe(document.querySelector('.discoTime'));
        }, 1000
    );

}
export const useRegistrationTimeIntersectionObserver = () => {
    let timeouts = [];
    let options = {
        root: document.querySelector(styles.programme),
        rootMargin: "0px",
        threshold: 1.0,
    };
    let guestTime, initialGuestTime, hourValue, minValue;
    setTimeout(
        () => {
            guestTime = document.querySelector('.registrationTime');
            if (guestTime) {
                initialGuestTime = guestTime.innerHTML;
                hourValue = initialGuestTime.split(':')[0];
                minValue = initialGuestTime.split(':')[1];
            }
        }, 1000
    )

    const callback = (entries) => {
        entries.forEach(entry => {
            let timeout;
            if (entry.isIntersecting) {
                guestTime.innerHTML = '00:00';
                for (let i = 0; i < Number(hourValue); i++) {
                    timeout = setTimeout(
                        () => {
                            guestTime.innerHTML = `${String(i + 1).padStart(2, '0')}:${guestTime.innerHTML.split(':')[1]}`;
                        }, i * 50
                    )
                    timeouts.push(timeout);
                }
            } else {
                timeouts.forEach(t => clearTimeout(t));
                timeouts = []
                guestTime.innerHTML = initialGuestTime;
            }
        })
    }

    let observer = new IntersectionObserver(callback, options);
    setTimeout(
        () => {
            if (document.querySelector('.registrationTime')) {
                observer.observe(document.querySelector('.registrationTime'));
            }
        }, 1000
    );

}