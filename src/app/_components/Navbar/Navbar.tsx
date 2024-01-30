import React from 'react';
import Link from "next/link";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <Link href={'/'} className={s.link}>Все котики</Link>
            <Link href={'/favorites'} className={s.link}>Любимые котики</Link>
        </nav>
    );
};

export default Navbar;