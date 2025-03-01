import React from 'react';

const BibleReading = ({ verse, error }) => {
    return (
        <div id="verseContainer">
            {verse && (
                <>
                    <p>{verse.reference}</p>
                    <p>{verse.text}</p>
                </>
            )}
            <div id="errorContainer">
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default BibleReading;
