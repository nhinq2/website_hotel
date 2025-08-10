import React from 'react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      title: "Deluxe Room",
      price: "Từ 800K / đêm",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Luxury Suite Room",
      price: "Từ 700K / đêm",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Premium Room",
      price: "Từ 900K / đêm",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Executive Suite",
      price: "Từ 1200K / đêm",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-0">
          {rooms.map((room) => (
            <div key={room.id} className="relative group cursor-pointer overflow-hidden">
              {/* Room Image */}
              <div className="h-96 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${room.image}')` }}
                ></div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-3xl font-light mb-4">{room.title}</h3>
                  <p className="text-lg mb-6 opacity-90">{room.price}</p>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-3 text-sm font-semibold tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300">
                    ĐẶT PHÒNG NGAY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;