import React, { useState, useEffect } from 'react';
import { handlePrayerRequest, loadLastPrayerRequest } from '../../controllers/handlePrayerRequest';

const PrayerRequestForm = () => {
    const [prayerRequest, setPrayerRequest] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        console.log('PrayerRequestForm mounted');
        loadLastPrayerRequest(setPrayerRequest, setResult);
        return () => {
            console.log('PrayerRequestForm unmounted');
        };
    }, []);

    const handleInputChange = (e) => {
        setPrayerRequest(e.target.value);
    };

    const handleSubmit = () => {
        handlePrayerRequest(prayerRequest, setResult);
    };

    return (
        <div>
            <input type="text" placeholder="Your Name.." /><br />
            <input type="text" placeholder="Your Phone Number.." /><br />
            <input type="text" placeholder="Your Email..." /><br />
            <textarea
                value={prayerRequest}
                onChange={handleInputChange}
                rows="4"
                placeholder="Your Prayer Request..."
                style={{ width: '200px', height: '100px' }}
            /><br />
            <button onClick={handleSubmit}>Click to Request Prayer</button>
            <div className="card">
                <div className="card-body">
                    <p>{result}</p>
                </div>
            </div>
        </div>
    );
};

export default PrayerRequestForm;
