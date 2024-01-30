'use client'
import React, {useEffect, useState} from 'react';
import {ICat} from "@/app/_types/ICat";
import {fetchOneCat} from "@/app/_http/catsApi";
import Card from "@/app/_components/Card/Card";
import Circle from "@/app/_components/Circle/Circle";

const Page = () => {
    const [cats, setCats] = useState<ICat[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        // @ts-ignore
        const likes = JSON.parse(localStorage.getItem('likes'))
        const arr = Object.keys(likes)
        const reqs = arr.map(id => fetchOneCat(id))
        Promise.all(reqs).then(res => {
            setCats(res.flat())
            setIsLoading(false)
        })
            .catch(() => {
                setIsError(true)
                setIsLoading(false)
            })
    }, []);
    return (
        <div className={'container'}>
            {
                cats.map(cat =>
                    <Card cat={cat} key={cat.id}/>
                )
            }
            {isLoading && <Circle/>}
            {isError && <p className={'error'}>Произошла ошибка, перезагрузите страницу</p>}
        </div>
    );
};

export default Page;