import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrayerRequestForm from './PrayerRequestForm';
import TriviaComponent from './TriviaComponent';

const HeroSection = () => {
    useEffect(() => {
        if (typeof document !== undefined) {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);

    return (
        <div className="hero-image" style={{ position: 'relative', overflow: 'hidden', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
                src="/prayerwithbible.png" // Path to the image in the public folder
                alt="Prayer with Bible"
                layout="fill"
                objectFit="cover"
                style={{ opacity: 0.6 }}
            />
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <div className="carousel-inner" style={{ height: '100%', width: '100%' }}>
                    <div className="carousel-item active" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
                        <div className="card" style={{ width: '20rem', textAlign: 'center', background: 'transparent', border: 'none' }}>
                            <div className="card-body">
                                <h5 className="card-title">Prayer Requests</h5>
                                <p className="card-text">Submit your prayer requests</p>
                                <Link href="/prayerrequests" passHref>
                                    <div className="card-link">Prayer Requests</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
                        <div className="card" style={{ width: '20rem', textAlign: 'center', background: 'transparent', border: 'none' }}>
                            <div className="card-body">
                                <h5 className="card-title">Bible Reading</h5>
                                <p className="card-text">Start your Bible reading journey</p>
                                <Link href="/biblereading" passHref>
                                    <div className="card-link">Bible Reading</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
                        <div className="card" style={{ width: '20rem', textAlign: 'center', background: 'transparent', border: 'none' }}>
                            <div className="card-body">
                                <h5 className="card-title">Bible Trivia</h5>
                                <p className="card-text">Test your Bible knowledge</p>
                                <Link href="/bibletrivia" passHref>
                                    <div className="card-link">Bible Trivia</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

const PrayerHeroSection = () => {
    useEffect(() => {
        console.log('HeroSection mounted');
        return () => {
            console.log('HeroSection unmounted');
        };
    }, []);

    return (
        <header>
            <div className="hero-image">
                <Image
                    src="/prayerwithbible.png" // Path to the image in the public folder
                    alt="Prayer with Bible"
                    layout="fill"
                    objectFit="cover"
                    style={{ opacity: 0.6 }}
                />
                <div className="hero-text">
                    <h1>Prayer Request</h1>
                    <div className="hero-paragraph">
                        <p></p>
                    </div>
                    <PrayerRequestForm />
                </div>
            </div>
        </header>
    );
};

const TriviaHeroSection = () => {
    const [showTrivia, setShowTrivia] = useState(false);

    useEffect(() => {
        console.log('HeroSection mounted');
        return () => {
            console.log('HeroSection unmounted');
        };
    }, []);

    return (
        <div>
            <header>
                <div className="hero-image">
                    <Image
                        src="/prayerwithbible.png" // Path to the image in the public folder
                        alt="Trivia Hero"
                        layout="fill"
                        objectFit="cover"
                        style={{ opacity: 0.6 }}
                    />
                    <div className="hero-text">
                        <h1>Bible Trivia</h1>
                        <div className="hero-paragraph">
                            <p>Test your knowledge with these Bible trivia questions!</p>
                        </div>
                        <div className="hero-form">
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    border: '2px solid purple',
                                    color: 'purple',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => setShowTrivia(true)}
                            >
                                Start Trivia
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {showTrivia && <TriviaComponent />}
        </div>
    );
};

const BibleReadingHeroSection = ({ onUserInputChange, onSubmit }) => {
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        console.log('HeroSection mounted');
        return () => {
            console.log('HeroSection unmounted');
        };
    }, []);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        if (onUserInputChange) {
            onUserInputChange(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <div>
            <header>
                <div className="hero-image">
                    <Image
                        src="/prayerwithbible.png" // Path to the image in the public folder
                        alt="Bible Reading Hero"
                        layout="fill"
                        objectFit="cover"
                        style={{ opacity: 0.6 }}
                    />
                    <div className="hero-text">
                        <h1>Bible Reading</h1>
                        <p>Search for Bible verses and keep them stored locally.</p>
                        <form onSubmit={handleSubmit} className="hero-form">
                            <input
                                type="text"
                                value={userInput}
                                onChange={handleInputChange}
                                placeholder="Enter keyword"
                                style={{
                                    padding: '10px',
                                    borderRadius: '5px',
                                    marginRight: '10px',
                                    border: '2px solid purple'
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: 'transparent',
                                    border: '2px solid purple',
                                    color: 'purple',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                            >
                                Fetch Verse
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        </div>
    );
};



export { HeroSection, PrayerHeroSection, TriviaHeroSection, BibleReadingHeroSection };
