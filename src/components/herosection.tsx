import React from "react";
import Image from "next/image";
 



const Hero: React.FC = () => {
  return (
    <div>
     
      
      <main className="w-[1440px] h-[440px] py-8 flex flex-col items-center justify-start">
        {/* Gray Background Section */}
        <div className="bg-gray-100 text-center w-[1440px] px-6 py-1 rounded-md mt-8">
          
          {/* Title */}
          <h1 className="text-sm font-bold">Hello Nike App</h1>
          <span className="block mt-1 text-sm">
            Download the app to access everything Nike. 
            <span className="font-bold underline ml-1">Get Your Great</span>
          </span>

        </div>
         {/* Image */}
    <div className="px-12">
      <Image 
        src="/shoeimage1.png" 
        alt="Nike App" 
        width={1334}
        height={700}
      />
    </div>
     {/* First Look Text */}
   <div className="flex justify-center items-center mt-12 w-auto h-auto bg-transparent">
  <span className="text-center text-[15px] font-bold">First Look</span>
    </div>
 {/* Nike Air Max Pulse Text */}
 <div className="flex justify-center items-center mt-4 w-[574px] h-[60px] bg-transparent">
      <span className="text-center text-[56px] font-bold">Nike Air Max Pulse</span>
    </div>

{/* Description Text */}
<div className="flex justify-center items-center mt-4 w-[511px] h-[48px] bg-transparent">
  <span className="text-center text-[15px] font-normal">
    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you past your limits &amp; help you go to the max.
  </span>
  </div>

  {/* Buttons Section */}
<div className="flex justify-center items-center space-x-4 mt-6">
  {/* Notify Me Button */}
  <button className="bg-black text-white rounded-[30px] py-[7.5px] px-[21.5px] w-[110.58px] h-[39px]">
    Notify Me
  </button>

  {/* Shop Air Max Button */}
  <button className="bg-black text-white rounded-[30px] py-[7.5px] px-[21.5px] w-[138.16px] h-[39px]">
    Shop Air Max
  </button>
</div>

  {/* New Section: Best of Air Max + Shop with Icons */}
<div className="flex justify-between items-center w-full px-12 mt-12">
  
  {/* Left Side: Best of Air Max */}
  <div className="flex items-center">
    <span className="text-[22px] font-bold">Best of Air Max</span>
  </div>

  {/* Right Side: Shop + Icons */}
  <div className="flex items-center space-x-4">
    <span className="text-[15px]">Shop</span>
    <Image
      src="/backward.png"
      alt="Backward Icon"
      width={6}
      height={6} />
    <Image
      src="/forward.png"
      alt="Forward Icon"
      width={6}
      height={6} />
  </div>

</div>


      </main>
    </div>
  );
};

export default Hero;

