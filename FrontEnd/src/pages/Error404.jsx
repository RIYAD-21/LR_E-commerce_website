import React from 'react';

export default function NotFound() {
    return (
        <div className="error404">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Please check the URL or return to the homepage.</p>
            <a href="/home">Return to Homepage</a>
        </div>
    );
}
