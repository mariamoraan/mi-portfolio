import React from 'react'

const Blob = ({fillColor="#A7C8C9", width="800px", height="800px"}) =>{
    return(
        <svg version="1.1" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg" className="blob" width={width} height={height}>
            <g transform="translate(403.68 525.22)">
            <path d="m378-206.9c97.4 157.4 152 350.9 81.9 447.7-70.2 96.7-265 96.7-438.1 84.1s-324.3-37.7-386.4-129.8-34.9-251.1 40.7-395.9c75.6-144.9 199.8-275.5 332-280.2s272.5 116.7 369.9 274.1" fill={fillColor}/>
            </g>
        </svg>
   )
}

export default Blob;