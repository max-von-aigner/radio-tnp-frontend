"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  initial?: number;
  animate?: number;
  transition?: number;
}

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

const SvgComponent: React.FC<SvgComponentProps> = ({
  //   width = 178.834,
  //   height = 132.704,
  ...props
}) => {
  useEffect(() => {
    const path = document.querySelector("path") as SVGPathElement; // Type assertion
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      // Apply any animation or additional style changes here
    }
  }, []);
  const [animate, setAnimate] = useState(false);

  // Trigger the animation on component mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   width={width}
      //   height={height}
      viewBox="0 0 715.333 530.813"
      {...props}
    >
      <motion.path
        className="stroke-current text-black fill-none"
        d="M5094.21 1729.76c.09 23.94-5.69 45.6-18.23 65.68-3.7 5.92-7.21 12-10.26 18.26-13.75 28.19-25.87 57.28-41.34 84.48-14.97 26.31-34.26 50.22-60.16 66.78-15.36 9.81-32.6 16.81-49.36 24.26-43.3 19.24-84.38 43.83-134.01 46.31-38.5 1.92-76.78 8.2-115.14 12.73-16.98 2-33.89 4.53-50.86 6.69-31.71 4.05-63.37 8.79-95.2 11.68-15.86 1.45-25.74-9.22-24.93-24.84.55-10.39 3.43-20.64 5.1-30.98 5.18-31.99 11.02-63.71 28.45-91.97 2.4-3.89 3.03-9.11 3.64-13.83 3.74-29.12 8.87-58.2 10.41-87.45 1.81-34.37.63-68.91.32-103.38-.1-10.96-3.62-22.22-1.99-32.8 3.62-23.66 10.23-46.85 14.24-70.47 3.96-23.31 5.72-46.99 9.4-70.36 2.98-18.89 6.47-37.81 11.47-56.24 3.51-12.95 11.82-24.68 14.73-37.68 7.92-35.27 14.21-70.9 20.93-106.43 3.24-17.18 8.22-34.42 8.45-51.68.39-28.75 11.25-47.14 39.71-55.6 22.88-6.8 44.1-22.56 69.11-17.3 26.85 5.65 53.25 4.2 80.11 2.65 11.1-.64 22.76 2.08 33.62 5.17 31.99 9.12 62 22.2 81.81 50.83 6.13 8.85 9.18 19.92 15.71 28.37 19.06 24.67 39.1 48.59 58.9 72.69 11.18 13.6 22.94 26.73 33.91 40.49 33.31 41.78 37.68 93 45.37 142.88 2.75 17.84 1.43 36.27 3.22 54.31 3.86 38.96 8.53 77.84 12.87 116.75zm267.24-55.16c1.19-24.36 4.97-48.94 3-73.04-3.25-39.65-9.03-79.23-16.43-118.33-1.99-10.53-12.4-20.69-21.26-28.36-8.64-7.49-14.55-15.17-18.48-25.96-8.94-24.56-18.28-49.13-29.69-72.6-6.77-13.96-19.6-24.95-26.52-38.86-12.77-25.67-22.96-52.61-34.71-78.81-7.03-15.66-16.27-29.28-30.98-39.74-22.9-16.29-41.36-36.95-51.68-63.93-2.61-6.82-5.39-14.4-10.37-19.35-22.65-22.57-44.88-45.84-69.62-65.96-27.34-22.23-60.13-34.75-94.36-43.44-18.54-4.7-36.48-11.74-55-16.482-15.56-3.976-30.89-5.508-47.59-1.058-21.01 5.609-43.29 6.379-64.97 9.558-25.1 3.692-50.14 7.712-75.21 11.602-15.11 2.35-30.38 3.97-45.27 7.33-10.95 2.47-21.34 7.39-32.07 10.92-17.57 5.79-28.41 3.01-32.38-17.07-6.67-33.79-14.67-67.508-14.6-102.622.12-63.929-9.2-126.679-27.03-188.277-5.06-17.48-6.33-36.34-7.22-54.672-2.46-50.949-2.65-102.027-5.98-152.91-2.38-36.289-9.64-72.238-12.31-108.519-1.71-23.18-10.33-44.028-15.28-66-4.57-20.25-5.03-42.489 7.16-61.77 10.44-16.512 6.06-30.168-1.36-47.66-20.93-49.309-60.98-78.219-102.56-106.641-6.87-4.687-13.44-10.199-19-16.367-24.52-27.172-55.27-46.172-85.61-65.601-6.35-4.07-14.81-4.782-22.2-7.301-24.7-8.442-48.83-19.418-74.16-24.918-36.74-7.992-73.87-11.942-111.73-1.25-33.89 9.57-69.9 12.097-103.21 23.09-26.92 8.879-51.62 25-76.51 39.289-17.37 9.968-34.78 20.73-49.66 33.961-15.87 14.109-29.12 31.257-42.9 47.589-15.58 18.457-31.9 36.528-45.38 56.481-24.29 35.949-44.43 74.406-56.3 116.387-8.06 28.492-17.15 57.281-19.92 86.5-3.06 32.371-15.24 63.089-13.08 96.511 2.03 31.328-2.58 63.039-1.67 94.512 1.03 35.66 3.24 71.469 8.08 106.777 5.08 37.129 25.29 68.473 45.39 99.352a14098.54 14098.54 0 0 1 42.68 65.93c11.57 18 22.66 36.328 34.65 54.05 6.7 9.911 17.17 13.34 28.95 12.321 14.66-1.262 27.67 2.789 39.89 10.847 3.79 2.5 9.34 4.852 13.39 3.993 15.65-3.332 31.15-7.563 46.45-12.293 12.42-3.829 24.27-9.598 36.76-13.137 15.54-4.402 21.13-18.563 25.44-30.024 8.49-22.589 15.51-46.699 17.21-70.597 1.58-22.16-6.71-43.629-24.17-60.391-6.64-6.371-9.83-16.191-15.32-23.918-9.1-12.832-19.77-24.633-28.02-37.953-17.9-28.898-30.98-60.379-24.53-94.699 4.37-23.219-2.94-44.629-2.71-66.899.15-14.07 1.36-28.132 1.9-42.211.98-25.261-.25-50.82 3.24-75.73 4.03-28.738 8.88-58.199 19.43-84.969 11.27-28.609 37.72-46.871 64.66-59.601 27.6-13.051 53.6-2.45 73.59 19.379 13.21 14.421 28.21 24.5 45.59 33.711 32.84 17.402 48.46 50.121 60.35 83.562 7.71 21.668 12.97 44.387 17.28 67.027 3.36 17.629 3.57 35.86 5.16 53.832 3.53 39.891 7.06 79.77 10.55 119.661.24 2.66.16 5.347.16 8.027.01 33.121 0 66.242 0 99.371 0 25.98-.29 51.969.07 77.961.67 48.93 2.29 97.859 2.49 146.789.41 96.52.36 193.04 0 289.56-.13 35.54-1.57 71.08-2.6 106.62-.71 24.83-2.13 49.64-2.53 74.48-.45 27.76 1.25 55.62-.45 83.28-2.09 34.19-6.81 68.21-10.19 102.32-1.26 12.73-2.61 25.52-2.73 38.29-.36 37.59-.69 75.19.11 112.77.41 19.32 4.02 38.56 4.72 57.89.49 13.61-1.03 27.36-2.48 40.95-4.61 43.29-5.91 86.37 8.87 128.19 4.47 12.63-.59 18.66-10.58 25.7-38.6 27.2-76.98 13.45-115.72 1.39-26.15-8.14-51.12-21.89-79.52-19.99-12.91.86-25.52 5.61-38.42 7.59-28.01 4.29-55.09-1.94-79.79-13.7-26.73-12.73-52.59-28.04-76.69-45.21-15.87-11.31-28.16-27.73-41.7-42.18-16.46-17.57-32.41-35.62-48.84-53.22-16.1-17.26-23.52-38.68-28.77-60.84-9.63-40.67-3.08-81.26 2.26-121.76 1.48-11.27 3.6-22.46 5.44-33.68 4.72-28.75 19.41-42.63 48.26-41.32 18.15.83 36.18 5.64 54.12 9.31 29.6 6.06 54.38 22.72 80.15 37.22 18.04 10.16 36.45 13.51 56.48 4.04 20.06-9.48 42.03-15.35 61.11-26.35 18.04-10.41 34.67-24.16 49.53-38.85 10.37-10.25 4.88-24.96-1.71-35.57-18.41-29.63-36.72-59.62-58.45-86.76-9.75-12.18-27.54-17.93-41.72-26.54-3.72-2.26-8.71-3.41-11.18-6.58-24.78-31.85-62.13-48.13-91.82-74.05-18.54-16.18-42.22-25.43-69.62-13.89-17.42 7.33-36.9 10.18-55.71 13.75-25.55 4.85-46.6 17.91-68.05 31.74-16.62 10.72-35.86 17.71-54.49 24.93-28.43 11.01-45.87 32.84-61.02 57.66-8.42 13.78-17.96 26.86-26.51 40.57-3.18 5.1-5.92 10.86-7.21 16.69-6.32 28.67-21.53 52.23-40.62 73.85-6.07 6.87-11.08 14.68-16.72 21.95-12.62 16.27-24.47 33.26-38.25 48.51-17.29 19.14-16.8 40.09-12.05 63.31 5.6 27.37 11.33 55.03 13.02 82.81 2.97 49.12 21.5 90.18 50.82 129.4 23.97 32.05 50.36 61.34 77.96 89.86 19.38 20.02 37.09 42.68 59.56 58.43 34.51 24.19 70.61 48.17 109.48 63.5 39.58 15.61 80.41 30.3 123.8 36.03 26 3.43 50.78 15.27 76.58 21.3 24.18 5.64 48.95 11.66 73.53 11.98 30.31.39 59.42 5.34 88.74 11.42 40.31 8.36 81.06 11.93 122.32 11.11 14.31-.28 28.64 3.79 43.04 4.89 28.62 2.2 57.27 4.37 85.95 5.34 38.75 1.31 77.32 3.4 114.95 13.76 2.92.81 5.81 2.21 8.77 2.36 20.35 1.07 40.76 1.36 61.07 2.91 29.4 2.26 58.68 6.13 88.1 7.88 21.45 1.27 43.08 1.21 64.54.01 52.94-2.95 101.78-23.32 152.08-37.45 4.89-1.37 9.14-4.89 13.94-6.8 14.84-5.93 29.67-11.93 44.76-17.16 8.96-3.1 18.98-3.53 27.54-7.35 31.8-14.18 64.17-27.53 94.49-44.49 35.69-19.97 70-42.59 103.94-65.51 35.85-24.21 67.6-52.76 89.39-91.29 5.96-10.52 16.2-18.62 24.49-27.82 8.28-9.2 18.94-17.17 24.46-27.81 22.11-42.56 48.39-83.43 58.62-131.28 1.37-6.42.73-13.31.69-19.98-.2-28.23 5.92-53.82 22.1-78.23 8.58-12.93 9.95-31.25 12.37-47.46 1.89-12.66.38-25.83.38-38.78-.3-.02-.6-.04-.9-.05"
        style={{
          fill: "#1c1b1a",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeDasharray: 530.813,
        }}
        transform="matrix(.13333 0 0 -.13333 0 530.813)"

        //  fill="transparent"
        //   strokeWidth="12"
        //   stroke="rgba(255, 255, 255, 0.69)"
        //   strokeLinecap="round"
        //   initial={{ pathLength: 0 }}
        //   animate={{ pathLength: 1 }}
        //   transition={transition}
      />
      <path
        d="M447.328 3700.92c-.019-.5-.043-1.01-.062-1.51-18.102-1.28-36.203-3.62-54.297-3.59-24.309.06-45.703-5-66.996-18.54-57.094-36.33-115.438-70.76-173.938-104.82-45.351-26.4-79.562-63.83-99.422-110.88-20.398-48.32-34.59-99.47-48.55-150.19-4.95-17.99-7.18-39.88 4.046-56.97 17.989-27.38 26.43-57.68 32.832-88.89 3.375-16.45 10.028-32.55 4.688-50.25-2.961-9.81 1.012-18.37 9.328-25.72 16.898-14.95 30.527-32.36 41.7-52.49 16.55-29.82 33.105-60.02 59.269-83.42 6.933-6.2 12.355-15.08 16.039-23.77 19.035-44.84 52.555-79.04 85.125-113.26 19.086-20.05 43.633-35.06 66.445-51.32 10.149-7.24 21.453-14.38 33.297-17.44 48.086-12.41 96.691-22.77 144.887-34.78 27.105-6.76 53.254-12.78 79.371 4.2 7.133 4.64 17.578 5.27 26.601 5.7 22.278 1.07 41.032 9.66 58.93 22.44 13.707 9.79 28.949 17.44 43.606 25.88 10.441 6 23.152 9.7 31.125 18 14.808 15.43 29.203 32.17 39.656 50.69 24.058 42.6 48.722 83.81 83.832 119.19 19.414 19.56 24.39 37.84 3.223 68.59-5.852 8.5-8.559 19.11-14.118 27.86-12.578 19.81-22.34 42.68-46.062 52.32-19.375 7.87-35.59 19.52-52.227 32.15-13.551 10.29-33.539 13.84-51.25 16.39-15.437 2.22-31.711-.78-47.566-2.1-16.602-1.37-33.305-2.61-49.66-5.57-12.184-2.21-26.27-4.12-35.266-11.41-14.891-12.05-26.953-27.86-39.148-42.94-23.149-28.63-50.36-52.32-83.512-68.18-7.867-3.76-21.348-5.29-27.594-1.03-14.125 9.64-26.351 22.7-37.351 36.03-6.02 7.3-7.079 18.46-11.93 27-14.453 25.43-18.609 53.9-12.059 80.52 8.985 36.52 21.996 72.77 38.785 106.39 10.758 21.53 31.282 38.26 47.848 56.76 2.324 2.59 6.996 4.13 10.676 4.31 22.629 1.14 40.211 13.77 58.34 25.06 16.304 10.16 31.215 26.64 48.695 29.92 30.207 5.65 61.926 3.6 93.016 3.94 7.168.08 14.281-3.96 21.574-4.88 23.105-2.91 45.32-8.07 66.348-18.81 11.48-5.86 24.378-12.52 36.64-12.53 23.488-.02 41.36-11.95 61.422-20.49 36.418-15.51 74.098-28.03 111.129-42.13 17.727-6.75 35.879-13.58 38.262-36.52 1.226-11.84 3.593-23.79 2.89-35.55-1.832-30.75-6.707-61.39-7.34-92.13-.804-39.07 1.239-78.21 2.321-117.31.683-24.83 1.402-49.68 2.914-74.47 2.199-36.09 7-72.13 7.16-108.21.15-30.26-5.426-60.5-7.258-90.83-2.457-40.68-4.199-81.41-5.324-122.15-.449-16.31 2.977-32.75 2.16-49.01-1.695-33.88-5.262-67.67-7.652-101.52-2.926-41.42-5.754-82.85-8.008-124.31-1.492-27.47-2.117-54.99-2.746-82.5-1.629-71.07 3.902-142.29-5.246-213.2-1.981-15.37-1.555-31.02-2.926-46.49-1.281-14.41-4.16-28.69-5.129-43.12-2.219-33.1-3.953-66.24-5.418-99.38-2.035-46.06-4.348-92.13-5.176-138.22-.511-28.37 1.27-56.8 2.555-85.18.457-10.03.637-20.7 4.137-29.85 13.39-34.99 27.379-69.79 42.515-104.05 11.756-26.62 20.426-53.67 23.076-82.8 1.45-15.99 3.35-32.39 8.54-47.4 2.81-8.12 11.81-16.36 20.02-19.89 22.7-9.78 45.57-18.49 61.67-38.59 1.9-2.37 5.19-6.24 6.83-5.79 16.5 4.52 33.86 7.77 48.74 15.62 9.25 4.88 13.34 18.75 22.1 25.54 13.3 10.32 28.35 18.55 43.25 26.57 8.7 4.68 14.83 9.67 16.56 20.2 3.52 21.47 7.65 42.87 12.48 64.09 8.84 38.85 18.21 77.52 19.49 117.65 1.41 44.3 2.69 88.63 5.53 132.86 2.48 38.61 6.38 77.18 10.88 115.62 4.47 38.1 1.19 75.25-6.68 112.69-3.69 17.54-4.65 37.07-.82 54.37 3.87 17.46 4 33.29.38 50.33-4.09 19.21-9.7 39.03-8.46 58.18 1.4 21.55-3.06 41.5-6.35 62.05-1.46 9.07-2.41 18.34-2.33 27.51.08 10.55 1.55 21.08 2.43 31.62.95 11.42 1.83 22.86 2.87 34.28 3.48 38.11 8.38 76.15 10.08 114.34 1.32 29.64-2.34 59.46-1.91 89.18.39 27.79 3.18 55.55 5.09 83.32.41 6.1 2.2 12.15 2.27 18.24.22 20.95.15 41.91-.18 62.87-.46 30.2-1.52 60.39-1.83 90.59-.32 30.91.15 61.82-.06 92.73-.15 22.01-1.32 43.44 14.01 62.75 7.68 9.68 12.93 23.32 14.12 35.66 2.32 23.97-.14 48.37 1.45 72.45 2.57 39.08 7.34 78.02 10.13 117.09 1.56 21.88 12.83 34.75 34.65 33.8 11.63-.51 23.45-2.95 34.63-6.35 16.22-4.93 31.53-14.52 47.95-16.76 30.14-4.09 60.81-4.26 91.25-6.07 4.42-.27 9.03.12 13.21-1.02 21.32-5.84 42.24-4.61 63.75.03 18.86 4.07 37.34 13.1 57.81 6.67 5.49-1.72 12.5-.54 18.33 1.07 19.65 5.4 39.14 11.39 58.57 17.54 20.33 6.45 44.02 3.86 59.04 24.48 18.04 24.77 46.02 25.14 72.05 22.81 40.82-3.65 71.83 11.9 98.39 40.63 8.71 9.43 17.51 18.32 31.86 19.25 22.46 1.46 38.13 14.67 49.99 32.55 14.71 22.17 28.1 45.25 43.37 67.02 5.73 8.18 14.17 15.69 23.06 20.19 14.38 7.27 23.62 17.58 27.35 32.8 3.41 13.96 4.91 28.46 9.22 42.09 5.76 18.22 15.07 35.4 19.91 53.79 8.42 31.98 16.55 64.28 21.02 96.97 3.1 22.71 4.71 47.75-1.74 69.12-8.54 28.3-9.12 56.91-13.87 85.26-4.65 27.79-13.07 53.33-37.12 72.56-29.31 23.43-57.24 48.88-83.63 75.56-17.51 17.7-33.7 36.16-53.94 51.35-25.77 19.34-53.8 27.95-85.21 29.27-15.36.64-30.68 2.54-45.97 4.32-31.81 3.71-63.48 9.34-95.38 11.19-39.47 2.28-78.52-10.91-118.36-4.98-23.34 3.47-46.67 7.23-70.15 9.46-8.09.77-17.94-.54-24.62-4.7-13.68-8.53-25.36-20.2-38.63-29.48-11.06-7.73-23.58-13.34-34.82-20.84-22.55-15.04-28.32-31.03-22.34-57.91.75-3.4 1.45-7.49.29-10.55-7.14-18.84.78-34.76 10.38-49.51 6.54-10.04 6.12-18.91 3.87-29.88-1.89-9.25-2.48-20.81 1.48-28.81 9.59-19.39 20.57-38.58 34.09-55.35 9.14-11.35 22.4-23.22 35.84-26.46 27.39-6.57 48.75-22.41 71.81-36.2 7.91-4.73 18.71-11.51 25.82-9.4 22.38 6.66 44.28 15.8 65.17 26.36 35.19 17.8 69.76 35.78 110.66 36.97 27.17.79 44.72-16.52 29.6-45.22-8.52-16.18-17.38-32.2-26.67-47.94-8.37-14.18-16.03-29.19-26.7-41.49-16.35-18.83-35.1-35.56-52.66-53.35-16.79-17.02-36.17-28.58-60.27-32.38-10.16-1.6-21.01-4.36-29.55-9.76-49.17-31.07-104.49-39.06-160.54-42.89-26.43-1.8-53.21.92-79.79 2.41-11.26.63-22.44 3.16-33.6 5.19-8.13 1.48-16.12 3.76-24.25 5.29-20.59 3.91-41.79 5.74-61.7 11.82-27.39 8.36-53.54 19.78-82.12 25.52-24.8 4.99-48.26 17.12-71.95 26.96-41.42 17.19-82.62 34.92-123.81 52.66-35.2 15.17-70.327 30.5-105.335 46.09-13.86 6.17-27.496 12.9-40.887 20.02-13.02 6.93-25.395 15.06-38.406 21.99-16.418 8.74-33.102 17-49.867 25.05-6.922 3.33-14.161 6.55-21.61 8.12-14.515 3.04-29.457 4.13-43.914 7.38-27.656 6.22-54.187 18.66-83.66 14.32-1.703-.25-3.645-.05-5.27.53-39.699 14.05-81.222 13.88-122.449 15.31-25.691.89-51.437.17-77.164.17zM2977.08 1662.54c-1.57-.02-3.15-.04-4.72-.07-3.4 6.38-8.52 12.4-9.92 19.19-7.69 37.15-14.3 74.51-21.61 111.73-3.27 16.65-5.65 33.75-11.39 49.57-10.22 28.18-25.66 54.06-27.12 85.65-1.22 26.44-7.48 52.73-12.44 78.91-5.59 29.51-9.33 59.82-19.06 87.99-15.46 44.75-27.71 89.98-34.4 136.73-2.12 14.78-2.84 29.75-4.5 44.6-2.83 25.29-5.74 50.59-8.92 75.84-2.85 22.59-4.44 45.51-9.53 67.61-11.01 47.85-38.15 90.64-43.92 140.53-2.06 17.82-11.15 34.73-15.99 52.35-7.52 27.34-15.01 54.45-31.04 78.54-7.91 11.88-13.58 25.24-20.38 37.88-13.25 24.63-22.43 51.84-44.01 71.25-3.78 3.39-8.7 7.42-13.28 7.67-14.43.79-23.32 9.72-31.95 19.23-12.86 14.18-25.58 28.52-37.89 43.19-28.72 34.21-70.09 44.84-109.63 58.23-19.7 6.67-42.17 6.29-60.77 14.81-33.03 15.13-67.95 15.71-102.5 20.32-26.07 3.48-52.08 7.85-78.26 9.94-19.44 1.55-39.15.62-58.69-.19-20.71-.85-41.35-3.76-62.05-4.09-19.89-.32-39.82 1.52-59.74 2.38-3.56.15-7.13.25-10.7.21-26.39-.32-52.78-.56-79.17-1.12-9.7-.2-19.62-.08-29.04-2.05-33.7-7.09-67.77-13.22-100.72-23-61.94-18.39-122.24-41.64-178.73-73.35-23.56-13.22-46.6-28.03-67.63-44.9-19.19-15.38-36.07-33.88-52.67-52.17-28.82-31.77-46.8-68.97-54.65-111.49-6.55-35.53-15.53-70.6-23.03-105.96-1.27-5.99-2.06-12.84-.44-18.55 5.45-19.23 11.56-38.32 18.42-57.1 6.13-16.78 13.28-33.21 20.55-49.54 7.57-17.01 15.45-33.9 23.89-50.49 7.08-13.92 14.34-27.9 23.02-40.84 12.17-18.16 25.73-35.38 38.69-53 9.37-12.75 21.14-24.38 27.68-38.45 22.21-47.83 49.26-92.08 86.71-129.55 5.36-5.36 10.63-10.84 16.3-15.86 28.55-25.27 56.95-50.73 86-75.42 8.79-7.47 18.79-16.14 29.42-18.24 21.43-4.22 43.65-5.35 65.58-5.8 20.2-.42 37.99 7.22 54.26 19.92 12.59 9.84 26.38 19.66 41.26 24.69 21.3 7.19 31.95 23.73 42.98 40.27 2.94 4.41 2.77 13.02.61 18.31-8.31 20.37-8.7 33.34 11.47 53.39 24.52 24.35 50.34 47.4 75.88 70.71 6.09 5.57 12.91 10.59 20.07 14.68 12.99 7.41 23.4 15.88 26.95 31.81 7.26 32.58.88 62.37-13.17 92.07-15.18 32.08-43.51 42.04-74.41 49-17.8 4-35.76 7.27-53.51 11.48-11.32 2.68-24.1 11.79-33.22 8.81-30.45-9.92-59.58-23.9-89.07-36.66-2.96-1.28-5.63-4.49-7.24-7.45-9.2-16.91-24.94-22.59-42.3-27.39-16.12-4.46-31.41-11.87-47.11-17.87-5.58-2.13-11.24-5.44-16.95-5.63-28.22-.92-57.63 42.54-51.36 73.84 1.84 9.19 1.13 19.12.19 28.57-1.34 13.48-4.44 26.78-5.93 40.25-2.62 23.53 6.9 44.38 14.19 66.08 10.58 31.53 30.27 54.98 57.18 72.87 38.12 25.33 77.01 48.15 105.22 87.1 17.95 24.79 44.74 43.09 78.39 50.06 33.62 6.96 67.01 13.74 101.25 14.63 21.22.55 42.5-1.53 63.75-2.43.45-.02.9.01 1.34-.05 34.78-4.46 69.6-8.65 104.32-13.56 9.03-1.28 18.91-3.99 20.42-15.3 1.05-7.88.68-16.08.01-24.06-2.38-28.06-6.44-56.03-7.47-84.13-1.32-35.75-.32-71.6-.32-107.4 0-54.91-.02-109.82.04-164.73.01-4.4.78-8.8.91-13.21.56-19.08 1.88-38.18 1.32-57.23-1.04-34.94-4.4-69.84-4.62-104.77-.3-46.79 1.8-93.59 2.08-140.39.06-10.8-4.01-21.57-4.55-32.44-.91-18.33-.32-36.74-.72-55.11-.49-22.69-1.25-45.38-2.09-68.06-.84-22.57-2.57-45.12-2.7-67.68-.12-19.9 2.96-39.89 1.94-59.7-2.68-52.47-9.27-104.84-9.69-157.29-.45-55.5-4.43-110.6-8.63-165.8-4.05-53.27-7.2-106.61-10.81-159.91-.81-11.88-.33-24.11-3.09-35.55-11.03-45.74-21.56-91.37-46.53-132.73-25.29-41.88-49.22-84.23-86.15-117.47-18.06-16.239-38.94-24.97-62.91-26.001-38.05-1.64-65.11 17.211-84.97 47.831-5.61 8.66-11.72 18.25-13.19 28.08-4.07 27.35-7.21 54.99-8.1 82.61-.89 27.51 3.07 55.21 1.76 82.67-1.07 22.56-4.94 45.4-10.85 67.23-8.06 29.74-5.76 58.03 3.77 86.61 9.55 28.63 19.61 56.94 37.08 81.99 10.18 14.6 17.55 32.19 30.45 43.62 17.7 15.67 31.4 33.33 39.75 54.62 10.28 26.23 26.54 47.31 47.07 66.02 5.95 5.43 10.14 13.2 13.88 20.54 6.63 13.02 2.51 19.39-11.94 21.22-15.81 2-29.56 6.76-35.51 24.29-1.96 5.78-7.19 12.2-12.61 14.71-13.53 6.26-21.03 16.73-26.36 29.73-5.01 12.23-15.97 16.75-26.86 13.68-20.47-5.76-42.14-11.27-59.69-22.52-31.25-20.03-60.5-43.41-89.26-67-20.01-16.41-39.31-34.22-56.21-53.75-19.71-22.77-39.07-46.62-53.92-72.65-23.55-41.28-42.01-85.11-52.56-132.04-6.45-28.74-17.28-56.55-23.09-85.38-4.76-23.59-6.11-48.04-6.83-72.18-.44-14.75 3.89-29.58 4.67-44.44.59-11.2 3.15-20.6 12.06-27.95 21.38-17.64 34.64-40.01 42.4-66.82 4.28-14.78 12.43-28.98 21.25-41.77 15.91-23.06 34.8-44.08 50.21-67.431 11.66-17.668 19.01-38.129 29.84-56.41 7.98-13.469 20.48-24.438 27.46-38.278 16.1-31.972 41.44-56.441 68.72-76.551 34.94-25.769 74.1-46.242 112.86-66.261 26.07-13.469 54.47-17.61 83.06-3.297 9.59 4.797 20.81 6.289 31.2 9.539 8.99 2.809 18.08 5.449 26.73 9.09 12.39 5.211 24.49 11.129 36.58 17.019 12.43 6.039 25.18 11.629 36.92 18.821 18.22 11.148 36.03 23.039 53.43 35.449 20.06 14.301 41.99 27.172 58.48 44.961 16.99 18.32 28.67 41.64 42.16 63.097 9.69 15.442 23.19 24.633 40.8 28.571 18.25 4.082 29.8 15.543 35.35 33.311 4.52 14.49 6.32 30.86 14.4 43.01 22.37 33.62 32.04 70.93 29.98 109.61-2.21 41.51 15.51 79.37 15.77 119.88.2 31.99.33 63.99-.35 95.96-.57 26.96-2.66 53.89-3.52 80.85-.68 21.49 1.05 43.15-1.1 64.45-3.09 30.73-3.94 61 3.65 91.17 6 23.82 10.7 47.03 3.18 72.27-7.9 26.53-12.01 55.27.73 81.32 8.73 17.86 16.48 34.96 19.29 54.98 4.11 29.33 13.31 58.04 16.19 87.42 4.65 47.47 5.7 95.28 8.79 142.91.64 9.91 2.66 19.95 5.64 29.43 2.75 8.75 11.18 10.34 17.85 3.94 4.72-4.54 8.41-10.14 12.66-15.18 14.99-17.8 28.15-36.02 33.73-59.77 10.36-44.07 21.18-88.21 35.25-131.2 25.63-78.31 37.15-158.52 39.5-240.51.56-19.76 3.1-39.48 5.09-59.18 2.52-24.92 5.51-49.79 8.09-74.7 1.32-12.72 2.89-25.47 3.12-38.22.48-27.83.17-55.67.2-83.5.02-23.15-1.24-46.38.41-69.42 1.88-26.2 6.3-52.23 9.71-78.32 3.87-29.56 7.29-59.19 11.96-88.62 3.07-19.33 10.4-38.22 11.57-57.56 1.72-28.19 9.78-52.75 26.62-75.42 7.6-10.21 11.9-22.97 17.15-34.81 8.24-18.55 14-38.531 24.48-55.66 13.88-22.691 31.02-43.43 47.41-64.5 3.45-4.43 9.99-9.719 14.67-9.328 18.34 1.488 31.55-8.223 46.11-16.543 13.38-7.648 27.87-16.207 42.59-17.848 14.95-1.652 26.95-5.461 38-14.921 7.65-6.551 15.86-12.461 23.86-18.59 29.37-22.508 60.83-41.739 97.45-48.789 28.37-5.469 46.81-1.641 54.24 30.66 5.59 24.328 10.86 48.328 14 73.238 3.95 31.34 15.77 61.691 19.58 93.031 3.48 28.711 1.2 58.168.73 87.28-.33 20.8-3.66 41.68-2.51 62.35 2.29 40.87 6.3 81.66 10.48 122.39 2.37 23.06 6.65 45.92 9.78 68.92 3.12 23.03 6.08 46.09 8.72 69.19 1.55 13.58.01 27.94 3.84 40.76 19.05 63.65 13.36 130.04 22.92 194.7 3.2 21.67 4.57 43.61 7.86 65.27 3.58 23.48 7.43 46.36 3.63 70.67-3.73 23.88-6.41 49.33-2.17 72.76 8.47 46.74 7.48 93.93 11.73 140.8 1.95 21.52-1.31 43.51-2.2 65.29-.07 1.78-.02 3.58-.21 5.35-1.69 15.71-5.11 31.45-4.81 47.12.74 37.16 3.52 74.28 4.84 111.44.37 10.49-2.81 21.16-2.02 31.57 1.72 22.74 4.87 45.38 7.6 68.03 1.16 9.55 2.53 19.08 4.18 28.56 2.91 16.69 7.09 33.22 8.93 50.02 2.5 22.78 1.09 46.17 5.29 68.55 9.4 50.14 19 100.08 19.19 151.36.06 14.56 1.4 29.14 2.68 43.66 1.03 11.79 2.48 23.57 4.42 35.24 3.58 21.55 9.17 42.87 11.16 64.54 2.85 31.05 14.54 58.32 30.73 84.1 13.42 21.36 35.93 31.46 56.58 43.62 10.8 6.37 21.31 12.68 22.79 26.56 3.08 28.78 24.85 34.87 45.04 19.81 17.76-13.26 32.79-30.27 48.54-46.11 5.81-5.84 12.55-12.35 14.85-19.79 6.12-19.85 13.45-40.27 14.09-60.65 1.05-33.49-3.11-67.12-4.4-100.72-.41-10.47 3.54-21.44 1.66-31.47-3.27-17.44-9.58-34.31-14.52-51.45-5.9-20.49-10.79-41.66-3-62.14 10.59-27.81 10.8-56.66 13.3-85.48.8-9.17 3.24-19.47 8.45-26.73 12.27-17.12 26.81-32.58 40.13-48.97 9.4-11.56 18.02-23.75 27.51-35.23 6.04-7.32 13.62-10.56 23.47-6.41 10.16 4.28 21.01 7 31.02 11.58 9.71 4.44 21.23 8.34 27.51 16.09 11.43 14.08 21.33 30.06 28.65 46.67 10.65 24.18 17.51 50 27.67 74.42 18.32 44.06 23.13 90.56 26.08 137.31 1.62 25.79-.5 51.79.51 77.65 1.02 26.24-4.53 50.27-16.94 73.43-5.22 9.74-9.06 21.29-9.63 32.23-1.55 29.49-11.82 55.74-27.86 79.53-21.73 32.23-44.9 63.52-67.9 94.88-15.53 21.17-34.4 39.34-57.4 51.98-58.8 32.29-122.56 52.39-185.98 73.06-37.35 12.18-75.54 14.07-113.54 3.27-16.27-4.63-31.38-13.43-47.7-17.77-37.15-9.89-71.05-26.59-103.45-46.56-29.95-18.46-58.84-38.55-76.51-70.36-12.54-22.57-24.54-45.44-36.21-68.47-2.68-5.27-3.36-11.67-4.37-17.64-4.4-25.83-8.36-51.73-12.9-77.53-4.38-24.94-11.09-49.62-13.49-74.73-2.87-30.07-1.7-60.49-3.34-90.71-1.05-19.28-1.36-39.22-6.64-57.52-12.58-43.59-2.83-88.17-8.83-131.99-3.71-27.13-3.53-54.77-5.42-82.17-1.54-22.33-8.58-44.56 1.42-66.91 2.3-5.15.76-12.27.15-18.4-1.23-12.65-3.46-25.2-4.49-37.86-1.32-16.3-1.88-32.67-2.74-49.02-.82-15.43-4.22-31.27-1.9-46.23 5.73-37.06 5.81-73.84 1.98-110.98-1.41-13.77-.54-27.81-.18-41.72.28-10.96 4.13-22.59 1.56-32.69-5.09-19.93-8.66-39.02-7.68-60.18 1.42-30.75-2.26-61.79-4.69-92.64-2.1-26.72-4.99-53.41-8.59-79.98-1.32-9.73-5.67-19.06-8.64-28.58"
        style={{
          fill: "#1c1b1a",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 530.813)"
      />
    </svg>
  );
};
export default SvgComponent;
