// Features
import beach from "./assets/images/features/beach-umbrella.png";
import deal from "./assets/images/features/deal.png";
import Location from "./assets/images/Icons/location.png";
import medal from "./assets/images/features/medal.png";






// Featured Destinations
import Taj from "./assets/images/cards/Taj.avif";
import Havelock from "./assets/images/cards/Havelock.jpg";
import Barcelona from "./assets/images/cards/Barcelona.jpeg";
import Rome from "./assets/images/cards/rome.jpeg";
import bali from "./assets/images/cards/bali-8838762_1280.jpg";
import paris from "./assets/images/cards/paris.jpg";
import swiss from "./assets/images/cards/swiss.jpg";
import Kyoto from "./assets/images/cards/Kyoto.jpeg";






// Icons
import locationIcon from "./assets/images/Icons/location.png";
import star from "./assets/images/Icons/star.png";
import time from "./assets/images/Icons/time.png";


// Contact Page
import call from "./assets/images/social/call.png";
import mail from "./assets/images/social/mail.png";
import globe from "./assets/images/social/globe.png";







const destinations = [
  {
    id: 1,
    title: "Taj Mahatlal, India",
    image: Taj,
    rating: 5.0,
    location: "Agra, India",
    price: 999,
    days: 1,
    nights: 2,
    type: "Adventure Tours",
  },
  {
    id: 2,
    title: "Havelock Island",
    image: Havelock,
    rating: 4.5,
    location: "Andaman, India",
    price: 1299,
    days: 2,
    nights: 4,
    type: "Adventure Tours",
  },
  {
    id: 3,
    title: "Barcelona, Indonesia",
    image: Barcelona,
    rating: 4.7,
    location: "Spain",
    price:1999,
    days: 3,
    nights: 5,
    type: "Adventure Tours",
  },
  {
    id: 4,
    title: "Rome",
    image: Rome,
    rating: 4.8,
    location: "Italy",
    price: 1499,
    days: 3,
    nights: 5,
    type: "Adventure Tours",
  },
  {
    id: 5,
    title: "Bali",
    image: bali,
    rating: 4.6,
    location: "Indonesia",
    price: 1999,
    days: 5,
    nights: 10,
    type: "Adventure Tours",
  },
  {
    id: 6,
    title: "Paris",
    image: paris,
    rating: 4.9,
    location: "France",
    price: 2499,
    days: 1,
    nights: 3,
    type: "Cultural Tours",
  },
  {
    id: 7,
    title: "Swiss Alps",
    image: swiss,
    rating: 4.7,
    location: "Switzerland",
    price: 2999,
    days: 2,
    nights: 4,
    type: "Adventure Tours",
  },
  {
    id: 8,
    title: "Kyoto",
    image: Kyoto,
    rating: 4.5,
    location: "Japan",
    price: 1999,
    days:'1',
    nights: '2',
    type: "Cultural Tours",
  },
];


let features = [
  {
    id: 1,
    title: "Discover the possibilities",
    image: beach,
    content:
      "Write nearly half a million attractions, hotels & more, you're sure to find joy.",
  },
  {
    id: 2,
    title: "Enjoy deals & delights",
    image: deal,
    content:
      "Quality activities. Great prices. Plus, earn Credits, coupons to save more.",
  },
  {
    id: 3,
    title: "Exploring made easiest",
    image: Location,
    content:
      "Book last minute, skip lines & amp; get free cancellation for easier exploring",
  },
  {
    id: 4,
    title: "Travel you can trust",
    image: medal,
    content:
      "Read reviews & get reliable customer support. We're with you at every step.",
  },
];




// Contact Us Data
const contactUs = [
  {
    id: 1,
    title: "Call Us",
    description: 'Our travel experts are just a call away. Reach out to us for instant assistance, personalized tour planning, or any queries regarding your travel bookings.',
    image: call,
    contact: "+91 7674938299",
    icon: "fa-solid fa-phone",
  },
  {
    id: 2,
    title: "Email Us",
    description: "Have questions or need a customized travel package? Drop us an email and our team will get back to you with the best options tailored to your needs.",
    image: mail,
    contact: "gouthamsomaraju11@gmail.com",
    icon: "fa-solid fa-envelope",
  },
  {
    id: 3,
    title: "Social Media",
    description: "Stay connected with us through social media. Follow our journey, explore new destinations, and get the latest travel updates and offers!",
    image: globe,
    contact: "github.com/GouthamSomaraju",
    icon: "fa-brands fa-linkedin  fa-brands fa-github",
  },
];

// Upcoming Places (new, unique)
import bangkok from './scroll/tour/bangkok.png';
import cancun from './scroll/tour/cancun.png';
import phiPhi from './scroll/tour/Phi-Phi island.avif';
import coorg from './scroll/tour/Coorg & Talacauvery, Karnataka.webp';
import manikarnika from './scroll/tour/Manikarnika Ghat.jpeg';
import tokyo from './scroll/tour/Tokyo.png';

const upcomingPlaces = [
  {
    id: 1,
    title: 'Bangkok, Thailand',
    image: bangkok,
    description: `A vibrant city known for its ornate shrines and lively street life.\nExplore floating markets, grand palaces, and bustling night bazaars.\nBangkok offers a unique blend of tradition and modernity.`,
  },
  {
    id: 2,
    title: 'Cancun, Mexico',
    image: cancun,
    description: `Famous for its white sand beaches and turquoise waters.\nCancun is a gateway to ancient Mayan ruins and vibrant nightlife.\nPerfect for both relaxation and adventure seekers.`,
  },
  {
    id: 3,
    title: 'Phi-Phi Islands, Thailand',
    image: phiPhi,
    description: `A tropical paradise with crystal-clear waters and dramatic cliffs.\nIdeal for snorkeling, diving, and island hopping.\nExperience breathtaking sunsets and vibrant marine life.`,
  },
  {
    id: 4,
    title: 'Coorg & Talacauvery, Karnataka',
    image: coorg,
    description: `Known as the Scotland of India, Coorg is lush and green.\nTalacauvery is the source of the river Cauvery, surrounded by hills.\nEnjoy coffee plantations, waterfalls, and serene landscapes.`,
  },
  {
    id: 5,
    title: 'Manikarnika Ghat, Varanasi',
    image: manikarnika,
    description: `One of the oldest and most sacred ghats in Varanasi.\nWitness ancient rituals on the banks of the Ganges.\nA place of deep spiritual significance and timeless tradition.`,
  },
  {
    id: 6,
    title: 'Tokyo, Japan',
    image: tokyo,
    description: `A dazzling metropolis blending tradition and technology.\nVisit ancient temples, cherry blossom parks, and neon-lit districts.\nTokyo is a city that never ceases to amaze.`,
  },
];

import bangkokImg from './scroll/tour/bangkok.png';

export const images = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLJuthokCNkpBg2JjTQfh_eWaNgeMuY2xwv4v9MsDbxnwQm7z-LlLOnIwGH-DfovfJj6Rx43P6rs9g6pz0WvKaw',
    title: "Title 1",
    text: "Description 1"
  },
  {
    src: bangkokImg,
    title: "Title 2",
    text: "Description 2"
  },
  {
    src: bangkokImg,
    title: "Title 3",
    text: "Description 3"
  },
  {
    src: bangkokImg,
    title: "Title 4",
    text: "Description 4"
  },
  {
    src: bangkokImg,
    title: "Title 5",
    text: "Description 5"
  },
  {
    src: bangkokImg,
    title: "Title 6",
    text: "Description 6"
  }
];


export { destinations, features, locationIcon, star, time, contactUs, upcomingPlaces };