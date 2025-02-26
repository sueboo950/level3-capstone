// components/Navbar.js

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/biblereading">Reading</Link>
                </li>
                <li>
                    <Link href="/prayerrequest">Prayer Request</Link>
                </li>
                <li>
                    <Link href="/bibletrivia">Bible Trivia</Link>
                </li>
            </ul>
        </nav>
    );
};


const AboutNavbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/biblereading">Reading</Link>
                </li>
                <li>
                    <Link href="/prayerrequest">Prayer Request</Link>
                </li>
                <li>
                    <Link href="/bibletrivia">Bible Trivia</Link>
                </li>
            </ul>
        </nav>
    );
};


const ReadingNavbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/prayerrequest">Prayer Request</Link>
                </li>
                <li>
                    <Link href="/bibletrivia">Bible Trivia</Link>
                </li>
            </ul>
        </nav>
    );
};

const PrayerNavbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/reading">Reading</Link>
                </li>
                <li>
                    <Link href="/bibletrivia">Bible Trivia</Link>
                </li>
            </ul>
        </nav>
    );
};

const TriviaNavbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/reading">Reading</Link>
                </li>
                <li>
                    <Link href="/prayerrequest">Prayer Request</Link>
                </li>
            </ul>
        </nav>
    );
};



export { Navbar, AboutNavbar, ReadingNavbar, TriviaNavbar, PrayerNavbar };
