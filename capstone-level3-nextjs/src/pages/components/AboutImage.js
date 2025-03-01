import React from 'react';
import Image from 'next/image';

const AboutImage = () => (
    <div className="col-md-3">
        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
            <Image
                src="/sophia.png"
                alt="Image of Sophia"
                layout="fill"
                objectFit="contain"
                id="aboutimage"
            />
        </div>
    </div>
);

export default AboutImage;

