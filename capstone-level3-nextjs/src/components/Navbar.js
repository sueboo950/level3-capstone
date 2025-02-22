// components/Navbar.js

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/reading">Reading</Link>
                </li>
                <li>
                    <Link href="/prayer-request">Prayer Request</Link>
                </li>
                <li>
                    <Link href="/bible-trivia">Bible Trivia</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
