import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/prayerwithbible.png"
        alt="Prayer with Bible"
        width={600}
        height={400}
        layout="responsive"
      />
      <h1 className={styles.title}>Welcome to All Things Possible Through God!</h1>
      <button className={styles.button}>
      <Link href="../pages/prayerrequest">Click to Request Prayer</Link>
      </button>
    </div>
  );
};

export default HeroSection;
