import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes }) {
    const readTime = (minutes) => {
        if (minutes < 30) {
            let roundedTime = Math.ceil(minutes / 5) * 5;
            let coffeeCups = '☕️'.repeat(parseInt(roundedTime / 5));
            return `${coffeeCups} ${minutes} min read`;
        } else {
            let roundedTime = Math.ceil(minutes / 10) * 10;
            let bentoBox = '🍱'.repeat(parseInt(roundedTime / 10));
            return `${bentoBox} ${minutes} min read`;
        }
    }

    return <article>
        <h3>{title}</h3>
        <small>{`${date} • ${readTime(minutes)}`}</small>
        <p>{preview}</p>
    </article>
}

export default Article;