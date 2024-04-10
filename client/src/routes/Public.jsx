import React from 'react';
import styles from '../screens/screen.module.css';
import Welcome from '../screens/Welcome';
import TimePlace from '../screens/TimePlace';
import DressCode from '../screens/DressCode';
import Programme from '../screens/Programme';
import Details from '../screens/Details';
import Form from '../screens/Form';
import Organization from '../screens/Organization';

const Public = ({ link }) => {
    return (
        <div className={[styles.publicContainer, styles.scrollSnap].join(' ')}>
            <Welcome link={link} />
            <TimePlace />
            <DressCode link={link} />
            <Programme />
            <Details link={link} />
            <Form link={link} />
            <Organization link={link} />
        </div>
    )
}

export default Public