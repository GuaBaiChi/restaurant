// https://www.pexels.com/search/hotel%20room/
import { ROOM_PICS } from "./HotelImagesData";




export type Hotel = {
  name: string;
  description: string;
  imageUrl: string;
  phone: string;
  email: string;
  address: string;
}

export const hotelData: Hotel = {
  name: "A Restaurant Name",
  description: "Experience luxury at our beautiful resort.",
  imageUrl: "https://example.com/hotel-image.jpg",
  phone: "0-123-456-789",
  email: "AnEmail@Email.com",
  address: "an address",
};


export type Room = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Sample room data
export const rooms: Room[] = [
  {
    id: 1,
    name: 'Standard Room 1',
    description: 'A comfortable room with all basic amenities.',
    price: 100,
    imageUrl: ROOM_PICS[0].image
  },
  {
    id: 2,
    name: 'Deluxe Room 2',
    description: 'Indulge in luxury with our Deluxe Room. Experience spaciousness and elegance with additional amenities.',
    price: 150,
    imageUrl: ROOM_PICS[1].image
  },
  {
    id: 3,
    name: 'Deluxe Room 3',
    description: 'Experience unparalleled comfort and style in our Deluxe Room. Enjoy upgraded features and luxurious furnishings.',
    price: 200,
    imageUrl: ROOM_PICS[2].image
  },
  {
    id: 4,
    name: 'Deluxe Room 4',
    description: 'Step into luxury with our Deluxe Room. Immerse yourself in sophistication and relaxation with premium amenities.',
    price: 250,
    imageUrl: ROOM_PICS[3].image
  },
  {
    id: 5,
    name: 'Deluxe Room 5',
    description: 'Experience the pinnacle of luxury in our Deluxe Room. Revel in opulence and comfort with unparalleled amenities and personalized service.',
    price: 300,
    imageUrl: ROOM_PICS[4].image
  },
  {
    id: 6,
    name: 'Deluxe Room 6',
    description: 'Indulge in the ultimate luxury experience with our Deluxe Room. Elevate your stay with lavish amenities and exquisite attention to detail.',
    price: 350,
    imageUrl: ROOM_PICS[5].image
  },
  // Add more room data as needed
];

