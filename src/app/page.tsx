'use client'
import React, {useEffect, useState} from 'react';
import {ICat} from "@/app/_types/ICat";
import {fetchCats} from "@/app/_http/catsApi";
import Card from "@/app/_components/Card/Card";
import Circle from "@/app/_components/Circle/Circle";

const Page = () => {
    const [page, setPage] = useState(0)
    const [cats, setCats] = useState<ICat[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetchCats(page)
            .then(res => {
                setCats(prevState => [...prevState, ...res])
                setIsLoading(false)
            })
            .catch(() => {
                setIsError(true)
                setIsLoading(false)
            })
    }, [page])
    useEffect(() => {
        const handleScroll = () => {
            const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight === scrollHeight) {
                handleScrollToBottom();
            }
        };

        const handleScrollToBottom = () => {
            console.log('end')
            setPage(prevState => prevState+1)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={'container'}>
                {
                    cats.map(cat =>
                        <Card cat={cat} key={cat.id}/>
                    )
                }
            </div>
            {isLoading && <Circle/>}
            {isError && <p className={'error'}>Произошла ошибка, перезагрузите страницу</p>}
        </>
    );
};

export default Page;