import styles from '../screens/screen.module.css';

export const clickDressHandler = (e) => {
    const ITER = 20, SCALE_COUNT = 100;
    const newElem = document.createElement('div');
    let target = e.target;
    if (!e.target.classList.contains(styles.purple) && !e.target.classList.contains(styles.greenc) && !e.target.classList.contains(styles.brown) && !e.target.classList.contains(styles.coffee)) {
        target = e.target.parentNode;
    }
    newElem.classList.add(styles.circle);

    const color = window.getComputedStyle(target).backgroundColor;
    newElem.style.border = `5px solid ${color}`;
    target.appendChild(newElem);
    for (let i = 1; i < SCALE_COUNT; i++) {
        setTimeout(
            () => {
                newElem.style.transform = `scale(${i})`;
            }, ITER * i
        );
    }
    setTimeout(
        () => {
            newElem.style.transition = 'all 0s';
            newElem.style.transform = 'scale(1)';
            newElem.style.border = 'none';
        }, SCALE_COUNT * ITER
    );
}