/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function Secret() {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div className="h-full bg-gray-900 dark:bg-light-background text-dark-primary dark:text-light-primary">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center text-7xl gap-y-16">
          <div className="flex flex-col items-center gap-y-2">
            <h1 className="font-black">Secret Page</h1>
            <h2 className="text-4xl">Click below for a suprise...</h2>
          </div>
          <button onClick={handleChange}>
            <img
              src="other/JeffFace.jpg"
              alt="Jeff's Face"
              className="w-32 h-10 rounded-full "
            />
          </button>
        </div>
        {show && (
          <div className="relative">
            <img
              src="other/JeffFace.jpg"
              alt="Jeff's Face"
              className="w-full h-full "
            />
          </div>
        )}
      </div>
    </div>
  );
}
