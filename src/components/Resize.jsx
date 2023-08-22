import React from 'react';

export default function Resize() {
    var start = performance.now();
    var renderedData = "<>";

    for (var i = 0; i < 60000; i++) {
        renderedData += "<div><img src='/24934.jpg' alt='Image 1'/><img src='/images.jpeg' alt='Image 2'/></div>";
    }
    renderedData += "</>";
    var end = performance.now();
    console.log(`MyComponent render time: ${end - start} milliseconds`);

    return (
        <div dangerouslySetInnerHTML={{__html: renderedData}}>
        </div>
    );
}