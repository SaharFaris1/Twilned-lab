import React from 'react';

function Cards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-70 p-4 align-center">
            {/* Card 1 */}
            <div className=" flex rounded-lg overflow-hidden shadow-lg lg:w-200">
                
                <div className="p-4">
                    <h3 className="font-bold text-lg">Wooden Minimalistic Chairs</h3>
                    <p >SALE UP TO  <br /> <span className="text-lime-500"> 40% OFF</span></p>
                    <button className="mt-2 bg-yellow-500 text-black py-2 px-4 rounded">
                        Shop Now
                    </button>
                </div>
                <img
                    src="https://www.alrugaibfurniture.com/cdn/shop/files/TA42030.2BHF_main_1_540x.jpg?v=1723395529"
                    alt="Wooden Minimalistic Chairs"
                    className="w-full h-48"
                />
            </div>

            {/* Card 2 */}
            <div className=" w-100 rounded-lg overflow-hidden  shadow-lg">
                
                <div className="p-4 flex-col justify-center  items-center">
                    <h3 className="font-bold text-lg">PACK 5T-SHIRT FOR <br /> SUMMER</h3>
                    <p className="text-gray-700">Starting at <span className="text-red-600">$199.99</span></p>
                  
              
                </div>
                <img
                    src="https://www.realsimple.com/thmb/T8Ep_MPA7CDhtGJ-C2V32yDvD3A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/reuse-old-clothes-gettyimages-1316931901-e574c71950ed47c7a9bcce3d1c7911a0.jpg"
                    alt=""
                    className="w-full w-20 h-40 "
                />
            </div>
        </div>
    );
}

export default Cards;