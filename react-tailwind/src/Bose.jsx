import React from 'react'

function Bose() {
  return (
    <div className="flex justify-center  ">
    <div className="flex w-4xl justify-between gap-5 rounded bg-gray-200 p-6 items-center  ">

        <div className="flex-col ">
            <h1 className="text-3xl">
                Bose Bluetooth  <br />Wireless Headphones
            </h1>
            <p className="text-gray-500"> nostrum quas quo quod cupiditate ullam sed fuga <br />  eum obcaecati dolore autem sunt unde.</p>
        </div>
        <div className=" flex-col p-3 gap-40">
           <p className="text-gray-400 "> $260.50</p>
           <p className="text-lime-400 text-2xl "> $219.05</p>
           <button className="bg-amber-300 w-25 h-10 rounded"> Shop Now</button>
        </div>
        <img className="" src="https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha" width={'200px'} alt="" srcset="" />
    </div>
    </div>
  )
}

export default Bose