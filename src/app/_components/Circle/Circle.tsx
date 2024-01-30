import React from 'react';
import icon from './arrow-clockwise.svg'
import Image from "next/image";
import s from './Circle.module.css';

const Circle = () => {
    return (
        <div className={s.cont}>
            <Image src={icon} alt={'Загрузка'} className={s.icon}/>
            <p>Подождите, идет загрузка...</p>
        </div>
    );
};

export default Circle;