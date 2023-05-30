import React ,{useState} from "react";
import Image from 'next/image';
// import { user } from 'react-icons/heroicons-outline';


export default function otctradingcard({ cardData }) {

    const [isOnline, setIsOnline]=useState(false);


    const handleOnlineClick=()=>{
        setIsOnline(true);

    }
  return (
    <>
      <div className="py-1 bg-neutral-700 w-full"></div>

      <div className="mx-8  my-1">
        <div className="bg-dark-gray font-thin text-white text-sm">

<div className="flex text-end justify-end text-sm font-thin text-gray-300 "> {cardData.orders} : orders | 0 % Completion Rate
</div>

          <div className=" flex flex-row justify-between text-sm font-normal text-white my-3">
            {cardData.title}

            <div className="flex py-1" onClick={()=>handleOnlineClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
</svg></div>

          </div>


          <div className="my-3 flex flex-row ">
            <Image src={cardData.currency1image} alt="" width={32} height={32}/>
            <Image src={cardData.currency2image} alt=""  width={32} height={32} />
          </div> 

          <div className="flex flex-row justify-between">
            {" "}
            <p className="text-gray-300 ">Ratio:  1:1</p>
            <div className="flex gap-1 text-gray-300">
              Fess:{" "}
              <Image src={cardData.currency1image} alt="" className="mx-1"  width={24} height={24} />{" "}
              2.5%
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row "> 
                <p className="flex flex-row font-thin text-sm text-gray-300 ">
              Amount:{" "}
              </p>
              <p className="ml-2 font-normal text-white text-sm">
                {" "}
                {cardData.amount}
              </p>
              
              </div>
            
            <div className="flex flex-row gap-1">
              {" "}
              <Image
                src={cardData.currency1image}
                alt=""
                width={24} height={24}
              />{" "}
              2.5%
            </div>
          </div>


<div className="flex justify-end">
<button type="button" class="text-black bg-yellow-200 hover:bg-yellow-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Start Trade</button>


</div>
          {/* <p>Users: {cardData.numUsers}</p>

          <p>{cardData.isOnline ? "Online" : "Offline"}</p> */}
        </div>
      </div>
    </>
  );
}
