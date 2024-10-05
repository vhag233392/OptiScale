import React from 'react'
import "./Button.css"

function Button() {
    return (
    <button class="button">
    <div class="bgContainer">
        <span>Hover</span>
        <span>Hover</span>
    </div>
    <div class="arrowContainer">
        <svg
        width="25"
        height="25"
        viewBox="0 0 45 38"
        fill="max"
        >
        <path
            d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
            fill="black"
        ></path>
        </svg>
    </div>
    </button>

    )
}

export default Button
