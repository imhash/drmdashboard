import React, { useState, useEffect, useRef } from 'react';

// Path2D for a Heart SVG
const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
const SVG_PATH = new Path2D(heartSVG);

// Scaling Constants for Canvas
const SCALE = 0.1;
//export const OFFSET = 80;
export const canvasWidth = 1200;
export const canvasHeight = 400;

export function useCanvas(){
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);

    return [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ];
}