import React from 'react';

const cards = [
    {
        image: 'https://m.media-amazon.com/images/I/81ak0gHCXOL.__AC_SY300_SX300_QL70_ML2_.jpg',
        title: 'Electronics',
        list: ['TV Televisions', 'Air Conditioners', 'Washing Machines', 'Office Electronics']
    },
    {
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXTOkbPI5SSUrHCPiWGsP--VppN4XSzf9VuX-P1P7n37WV4S5zuBAvhC3zBeFQR3YKAgntFkuLHrXYF-0pHLtWsObnT5tWTqZQBTX2-0dcXyvEeL1_OmSH9C4AOQASvlBHDWRqaVgTRg&usqp=CAc',
        title: 'Clothing',
        list: ['Womens', 'Men’s', 'Bags & Backpacks', 'Accessories']
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1viGacT98Y4YHHQpY2IUS-tQSxKurgwzvvTwPECDJ2XxLT9bVQ4BsyTE-bv_liVVCOgNYGK9DUiCZS2g_ru-1tOyOTp3esRsIpBDz3_1pInNhBo3gXE2xUvD8FCeAPT6cAtCpVsmM1A&usqp=CAc',
        title: 'Computers',
        list: ['Desktop PC', 'Laptop', 'PC Gaming', 'PC Components']
    },
    {
        image: 'https://www.alrugaibfurniture.com/cdn/shop/files/TA42030.2BHF_main_1_540x.jpg?v=1723395529',
        title: 'Home & Kitchen',
        list: ['Furnitures', 'Cookwares', 'Utensils & Gadgets', 'Garden Tools']
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGUni-xxhBU5OPC6W6CUX3tyvxxNcYVjCHw&s',
        title: 'Health & Beauty',
        list: ['Makeup', 'Skin Care', 'Hair Care', 'Tools & Equipment']
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHtH6LwaDo5JyxzPi7t_-dR8gWxBNqJxd5A&s',
        title: 'Jewelry & Watches',
        list: ['Necklace', 'Watch', 'Bracelets', 'Accessories']
    }
];

function Cards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 p-4">
            {cards.map((card, index) => (
                <div key={index} className="border flex justify-evenly shadow-lg h-70 overflow-hidden">
                    <img className="w-40" src={card.image}  alt={card.title}  />
                    
                    <div className="p-4 flex-col justify-between">
                        <h2 className="font-bold text-lg">{card.title}</h2>
                        <ul className="list-disc list-none text-gray-500 list-inside">
                            {card.list.map((item, idx) => (
                                <li  key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;