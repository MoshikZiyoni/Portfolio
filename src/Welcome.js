import React, { useState, useEffect } from 'react';

const Welcome = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "Heey... Welcome to my Portfolio";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '20vh',
            color: 'white',
            fontSize: '40px',
            overflow: 'hidden',
            paddingRight:'1rem'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '220px',
                // backgroundColor: '#101B1E',
                padding: '20px',
                boxSizing: 'border-box',
                paddingRight:'5rem'

            }}>
                {displayedText}
            </div>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '220px',
                background: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEUlEQVQIW2NkgAJGIG0MYgMAASwANtiKJ24AAAAASUVORK5CYII=")`,
                opacity: 0.5,
                paddingRight:'1rem'

            }}></div>
        </div>
    );
};

export default Welcome;