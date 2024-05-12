import React from 'react';
import Welcome from '../screens/Welcome';
import TimePlace from '../screens/TimePlace';
import DressCode from '../screens/DressCode';
import Programme from '../screens/Programme';
import Details from '../screens/Details';
import Form from '../screens/Form';
import Organization from '../screens/Organization';
import Start from '../screens/Start';

const Public = ({ link }) => {
    return (
        <div className={['publicContainer', 'scrollSnap'].join(' ')}>
            <Start />
            <Welcome link={link} />
            <TimePlace />
            <DressCode link={link} />
            <Programme link={link} />
            <Details link={link} />
            <Form link={link} />
            <Organization link={link} />
        </div>
    )
}

export default Public