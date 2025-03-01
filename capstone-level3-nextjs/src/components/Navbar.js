import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand" passHref>
                Welcome to All Things Possible Through God!
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            Altarlife International Ministries
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link href="/" className="nav-link active" aria-current="page" passHref>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" className="nav-link" passHref>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/prayerrequests" className="nav-link" passHref>
                                    Prayer Requests
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/biblereading" className="nav-link" passHref>
                                    Bible Reading
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/bibletrivia" className="nav-link" passHref>
                                    Bible Trivia
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
