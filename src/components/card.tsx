import React from 'react';
import Image from "next/image";


const Card: React.FC = () => {
  return (
    <div className='mt-[800px]'>
    <div className="flex justify-between px-12 space-x-8">

      {/* First Card */}
      <div className="w-[441.36px] h-[441.36px] ">
        <Image 
          src="/shoeimage2.png" 
          alt="Nike Air Max Pulse" 
          className="object-cover"
          width={441.36}   
          height={441.36}  
        />
        <div className="mt-2 flex justify-between items-center w-full">
          <div>
            <h2 className="text-[15px] font-bold w-[131px] h-[24px] whitespace-nowrap">
              Nike Air Max Pulse
            </h2>
            <p className="text-[15px] text-[#757575] w-[109px] h-[24px]">
              Womens Shoes
            </p>
          </div>
          <span className="text-[15px] font-bold">₹ 13 995</span>
        </div>
      </div>

      {/* Second Card */}
      <div className="w-[441.36px] h-[441.36px]">
        <Image
          src="/shoeimage3.png" 
          alt="Nike Air Max Pulse" 
          className="object-cover"
          width={441.36}   
          height={441.36}  
        />
        <div className="mt-2 flex justify-between items-center">
          <div>
            <h2 className="text-[15px] font-bold w-[131px] h-[24px] whitespace-nowrap">
              Nike Air Max Pulse
            </h2>
            <p className="text-[15px] text-[#757575] w-[88px] h-[24px]">
              Mens Shoes
            </p>
          </div>
          <span className="text-[15px] font-bold">₹ 13 995</span>
        </div>
      </div>

      {/* Third Card */}
      <div className="w-[441.36px] h-[441.36px]">
        <Image 
          src="/shoeimage4.png" 
          alt="Nike Air Max 97 SE" 
          className="object-cover"
          width={441.36}   
          height={441.36}  
        />
        <div className="mt-2 flex justify-between items-center">
          <div>
            <h2 className="text-[15px] font-bold w-[132px] h-[24px] whitespace-nowrap">
              Nike Air Max 97 SE
            </h2>
            <p className="text-[15px] text-[#757575] w-[88px] h-[24px]">
              Mens Shoes
            </p>
          </div>
          <span className="text-[15px] font-bold">₹ 16 995</span>
        </div>
      </div>

    </div>
    {/* Featured Heading */}
    
    <h2 className=" mt-20 ml-[48px] text-[22px] font-bold text-left">Featured</h2>

    {/* Image Section */}
    <div className="mt-6 ml-[48px]">
        <Image
          src="/image1.png" 
          alt="Featured Image"
          className="object-cover"
          width={1344}
          height={700}
        />
       <div className="mt-[48px] flex flex-col items-center justify-center">

       {/* Heading */}
   <h1 className="text-[54px] font-bold opacity-100" style={{ width: "806px", height: "60px", textAlign: "center", whiteSpace: "nowrap" }}>
  STEP INTO WHAT FEELS GOOD
   </h1>

     {/* Subheading */}
       <p className="text-15px mt-[24px]" style={{ width: "473px", height: "24px", textAlign: "center", whiteSpace: "nowrap" }}>
  Cause everyone should know the feeling of running in that perfect pair.
  </p>
   </div>
     {/* Button */}
     <div className='mt-[37.5px]'>
   <button className="bg-black text-white rounded-full px-6 py-3 text-lg block mx-auto">
  Find Your Shoe
</button>
     </div>

    {/* Gear Up Heading */}
<div className="mt-16">
  <h2 className="text-2xl font-bold opacity-100" style={{ width: "90.9px", height: "27px", fontSize: "23px", left: "48px" }}>
    Gear Up
  </h2>
</div>
    
    {/* Cards */}
{/*     
    <div className='flex justify-between items-center'>
    <div className="mt-24 flex justify-between"> */}
  {/* Left Column (First Card) */}
  {/* <div className=" w-[300px]">
    <Image 
      src="/image2.png" 
      alt="Nike Dri-FIT ADV TechKnit Ultra" 
      width={300} 
      height={300} 
      className="object-cover"
    />
    <div className="text-center"> */}
      {/* Flex container for product name and price */}
      {/* <div className="flex justify-between items-center mt-6">
      <p className="text-15px font-bold">Nike Dri-FIT ADV TechKnit Ultra</p>
      <p className="text-15px font-semibold">₹ 3 895</p>
      </div>
      {/* Product description below */}
      {/* <p className="text-left text-16px w-[203.37px] h-[48px]">Mens Short-Sleeve <br /> Running Top</p>
       */}
    </div>
  {/* </div> */} 

  {/* Left Column (Second Card) */}
  {/* <div className="w-[300px]">
    <Image 
      src="/image3.png" 
      alt="Nike Dri-FIT Challenger" 
      width={300} 
      height={300} 
      className="object-cover"
    />
    <div className="text-center"> */}
  {/* Flex container for product name and price */}
  {/* <div className="flex justify-between items-center mt-6">
    <p className="text-15px font-bold">Nike Dri-FIT Challenger</p>
    <p className="text-15px font-semibold">₹ 3 895</p>
  </div> */}

  {/* Product description below */}
  {/* <p className="text-left text-16px w-[224.43px] h-[48px]">
    Mens Short-Sleeve<br />Running Top
  </p>
</div>
  </div>
  </div>
   */}

  {/* Right Column (First Card) */}
  {/* <div className='flex justify-between items-center'>
  <div className="mt-24 flex justify-between">
  <div className=" w-[300px] ">
    <Image 
      src="/image4.png" 
      alt="Nike Dri-FIT ADV Run Division" 
      width={300} 
      height={300} 
      className="object-cover"
    />
    <div className="text-center">
      <div className="flex justify-between items-center mt-6">
      <p className=" text-15px font-bold">Nike Dri-FIT ADV Run Division</p>
      <p className="text-15px font-semibold">₹ 5 295</p>
      </div> */}
      {/* Product description remains below */}
      {/* <p className="text-left text-16px w-[224.43px] h-48px">Womens Long-Sleeve <br /> Running Top</p>
      
    </div>
    </div>
  </div> */}

  {/* Right Column (Second Card) */}
  {/* <div className="w-[300px] flex justify-between">
    <Image 
      src="/image5.png" 
      alt="Nike Fast" 
      width={300} 
      height={300} 
      className="object-cover"
    />
   <div className="text-left"> */}
  {/* Flex container for product name and price */}
  {/* <div className="flex justify-between items-center mt-6">
    <p className="text-15px font-bold">Nike Fast</p>
    <p className="text-15px font-semibold">₹ 3 795</p>
  </div> */}

  {/* Product description remains below */}
  {/* <p className="text-16px w-[224.39px] h-48px">Womens Mid-Rise 7/8 Running Leggings with Pockets</p>
</div>
</div>
  </div>
</div> */}

{/* Cards */}
<div className="mt-24 flex justify-between ml-[48px]">
  {/* First Card */}
  <div className='flex justify-between gap-4'>
  <div className="w-[300px]">
    <Image src="/image2.png" alt="Nike Dri-FIT ADV TechKnit Ultra" width={300} height={300} className="object-cover" />
    <div className="text-center mt-6">
      <div className="flex justify-between items-center">
        <p className="text-15px font-bold">Nike Dri-FIT ADV TechKnit Ultra</p>
        <p className="text-15px font-semibold">₹ 3 895</p>
      </div>
      <p className="text-left text-16px">Mens Short-Sleeve <br /> Running Top</p>
    </div>
  </div>

  {/* Second Card */}
  <div className="w-[300px]">
    <Image src="/image3.png" alt="Nike Dri-FIT Challenger" width={300} height={300} className="object-cover" />
    <div className="text-center mt-6">
      <div className="flex justify-between items-center">
        <p className="text-15px font-bold">Nike Dri-FIT Challenger</p>
        <p className="text-15px font-semibold">₹ 3 895</p>
      </div>
      <p className="text-left text-16px">Mens Short-Sleeve <br /> Running Top</p>
    </div>
  </div>
  </div>

  {/* Third Card */}
  <div className='flex justify-between gap-4'>
  <div className="w-[300px]">
    <Image src="/image4.png" alt="Nike Dri-FIT ADV Run Division" width={300} height={300} className="object-cover" />
    <div className="text-center mt-6">
      <div className="flex justify-between items-center">
        <p className="text-15px font-bold">Nike Dri-FIT ADV Run Division</p>
        <p className="text-15px font-semibold">₹ 5 295</p>
      </div>
      <p className="text-left text-16px">Womens Long-Sleeve <br /> Running Top</p>
    </div>
  </div>

  {/* Fourth Card */}
  <div className="w-[300px]">
    <Image src="/image5.png" alt="Nike Fast" width={300} height={300} className="object-cover" />
    <div className="text-center mt-6">
      <div className="flex justify-between items-center">
        <p className="text-15px font-bold">Nike Fast</p>
        <p className="text-15px font-semibold">₹ 3 795</p>
      </div>
      <p className="text-left text-16px">Womens Mid-Rise 7/8 Running Leggings with Pockets</p>
    </div>
    </div>
  </div>
</div>

</div>


    
   
  );
};

export default Card;
