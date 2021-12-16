import React from 'react'

const Blob = ({fillColor='var(--light-blue)', w="50vh", h="50vh"}) =>{
    return(
        <svg className="blob" id="visual" viewBox="0 0 900 900" width={w} height={h} version="1.1">
            <g transform="translate(359.6156122111272 544.8528911967237)">
                <path d="M334.9 -427.6C377 -363.7 315.1 -204.2 355.6 -51.3C396.1 101.5 539 247.6 502.5 270.5C465.9 293.3 249.8 192.9 121.3 168C-7.2 143.1 -48.1 193.7 -79.7 193.3C-111.2 192.9 -133.6 141.4 -185.4 89C-237.2 36.5 -318.5 -17 -326.9 -73C-335.3 -129 -270.8 -187.4 -204.2 -247C-137.6 -306.6 -68.8 -367.3 38.8 -413.5C146.3 -459.7 292.7 -491.5 334.9 -427.6" fill={fillColor}>
            </path></g>
        </svg>
   )
}

export default Blob;