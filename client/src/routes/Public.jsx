import React from 'react';
import styles from '../screens/screen.module.css';
import Welcome from '../screens/Welcome';
import TimePlace from '../screens/TimePlace';
import DressCode from '../screens/DressCode';

const Public = ({ link }) => {
    return (
        <div className={styles.publicContainer}>
            <Welcome link={link} />
            <TimePlace />
            <DressCode link={link} />
        </div>
    )
}

export default Public