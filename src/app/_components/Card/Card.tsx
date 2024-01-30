import React, {FC, useEffect, useState} from 'react';
import {ICat} from "@/app/_types/ICat";
import Image from "next/image";
import heart from './heart.svg';
import heartFill from './heart-fill.svg';
import s from './Card.module.css';

interface CardProps {
    cat: ICat
}
const Card: FC<CardProps> = ({cat}) => {
    const handleLike = () => {
        // @ts-ignore
        const likes = JSON.parse(localStorage.getItem('likes'))
        if (cat.id in likes) {
            delete likes[cat.id]
        } else {
            likes[cat.id] = true
        }
        localStorage.setItem('likes', JSON.stringify(likes))
        setLiked(likes)
    }
    const [liked, setLiked] = useState({})
    useEffect(() => {
        if (!localStorage.getItem('likes')) {
            localStorage.setItem('likes', JSON.stringify({}))
        }
        // @ts-ignore
        const likes = JSON.parse(localStorage.getItem('likes'))
        setLiked(likes)
    }, []);
    const [isMouseEntered, setIsMouseEntered] = useState(false)
    const handleMouseMove = () => {
        setIsMouseEntered(!isMouseEntered)
    }
    return (
        <div className={s.card}>
            <Image src={cat.url} alt={cat.url} className={s.img} fill={true} unoptimized={true}/>
            <button className={s.btn} onClick={handleLike} onMouseEnter={handleMouseMove} onMouseLeave={handleMouseMove}>
                <Image src={cat.id in liked || isMouseEntered ? heartFill : heart} alt={'В любимые'} className={s.like}/>
            </button>
        </div>
    );
};

export default Card;