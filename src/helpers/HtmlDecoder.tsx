import React from 'react'

import he from "he";

const HtmlDecoder = ({ html, exerpt }: { html: string, exerpt?: boolean }) => {
    return (
        // Dangerously set innerHTML here.
        // {
        //     __html: exerpt ? he.decode(html).substring(0,200) : he.decode(html)
        // }
        <div dangerouslySetInnerHTML={{ __html: he.decode(html) }} />

    );
};



export default HtmlDecoder