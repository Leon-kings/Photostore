// /* eslint-disable react-hooks/immutability */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // Import icons individually with proper syntax
// import Close from '@mui/icons-material/Close';
// import PhotoLibrary from '@mui/icons-material/PhotoLibrary';
// import LocationOn from '@mui/icons-material/LocationOn';
// import CalendarToday from '@mui/icons-material/CalendarToday';
// import CameraAlt from '@mui/icons-material/CameraAlt';
// import Explore from '@mui/icons-material/Explore';
// import ChevronLeft from '@mui/icons-material/ChevronLeft';
// import ChevronRight from '@mui/icons-material/ChevronRight';
// import Info from '@mui/icons-material/Info';
// import Person from '@mui/icons-material/Person';
// import FilterHdr from '@mui/icons-material/FilterHdr';
// import Terrain from '@mui/icons-material/Terrain';
// import Waves from '@mui/icons-material/Waves';
// import Landscape from '@mui/icons-material/Landscape';
// import NightsStay from '@mui/icons-material/NightsStay';
// import WbSunny from '@mui/icons-material/WbSunny';
// import Park from '@mui/icons-material/Park';
// import BeachAccess from '@mui/icons-material/BeachAccess';
// import Folder from '@mui/icons-material/Folder';
// import FolderOpen from '@mui/icons-material/FolderOpen';
// import Image from '@mui/icons-material/Image';
// import Collections from '@mui/icons-material/Collections';
// import DateRange from '@mui/icons-material/DateRange';
// import Place from '@mui/icons-material/Place';
// import GridView from '@mui/icons-material/GridView';
// import ViewCarousel from '@mui/icons-material/ViewCarousel';
// import ArrowBack from '@mui/icons-material/ArrowBack';
// import Fullscreen from '@mui/icons-material/Fullscreen';
// import FullscreenExit from '@mui/icons-material/FullscreenExit';
// import Favorite from '@mui/icons-material/Favorite';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import ZoomIn from '@mui/icons-material/ZoomIn';
// import ZoomOut from '@mui/icons-material/ZoomOut';

// // Album data structure with unique IDs and more images
// const albums = [
//   { 
//     id: 1,
//     title: 'European Wanderlust',
//     location: 'Multiple Locations',
//     coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
//     color: '#059669',
//     icon: 'terrain',
//     description: 'A journey through the most beautiful spots in Europe',
//     date: '2024-06-15',
//     photographer: 'Sarah Johnson',
//     images: [
//       {
//         id: 101,
//         src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
//         title: 'Emerald Falls',
//         location: 'Plitvice Lakes, Croatia',
//         date: '2024-06-15',
//         description: 'A breathtaking view of the cascading waterfalls in Plitvice Lakes National Park.'
//       },
//       {
//         id: 102,
//         src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=300&fit=crop',
//         title: 'Amalfi Coast',
//         location: 'Positano, Italy',
//         date: '2024-06-18',
//         description: 'Colorful villages clinging to dramatic coastal cliffs.'
//       },
//       {
//         id: 103,
//         src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
//         title: 'Alpine Glory',
//         location: 'Swiss Alps, Switzerland',
//         date: '2024-06-20',
//         description: 'Majestic snow-capped peaks piercing through the clouds.'
//       },
//       {
//         id: 104,
//         src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
//         title: 'Mystic Forest',
//         location: 'Black Forest, Germany',
//         date: '2024-06-22',
//         description: 'Mystical morning fog rolling through the ancient Black Forest.'
//       },
//       {
//         id: 105,
//         src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba7b2?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba7b2?w=400&h=300&fit=crop',
//         title: 'Venice Canals',
//         location: 'Venice, Italy',
//         date: '2024-06-24',
//         description: 'Romantic gondola rides through the historic canals of Venice.'
//       },
//       {
//         id: 106,
//         src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&h=300&fit=crop',
//         title: 'Grand Canal Sunset',
//         location: 'Venice, Italy',
//         date: '2024-06-25',
//         description: 'Sunset over the Grand Canal with gondolas gliding peacefully.'
//       },
//       {
//         id: 107,
//         src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&h=300&fit=crop',
//         title: 'Cinque Terre',
//         location: 'Manarola, Italy',
//         date: '2024-06-27',
//         description: 'Colorful houses clinging to the cliffs of the Italian Riviera.'
//       },
//       {
//         id: 108,
//         src: 'https://images.unsplash.com/photo-1555400038-9e5e78c5e3a1?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1555400038-9e5e78c5e3a1?w=400&h=300&fit=crop',
//         title: 'Neuschwanstein Castle',
//         location: 'Bavaria, Germany',
//         date: '2024-06-29',
//         description: 'The fairytale castle that inspired Disney.'
//       },
//       {
//         id: 109,
//         src: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=400&h=300&fit=crop',
//         title: 'Eiffel Tower',
//         location: 'Paris, France',
//         date: '2024-07-02',
//         description: 'The iconic Eiffel Tower sparkling at night.'
//       },
//       {
//         id: 110,
//         src: 'https://images.unsplash.com/photo-1490642914619-7955a3fd483c?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1490642914619-7955a3fd483c?w=400&h=300&fit=crop',
//         title: 'Lavender Fields',
//         location: 'Provence, France',
//         date: '2024-07-05',
//         description: 'Endless rows of purple lavender in full bloom.'
//       },
//       {
//         id: 111,
//         src: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop',
//         title: 'Santorini Sunset',
//         location: 'Santorini, Greece',
//         date: '2024-07-08',
//         description: 'White-washed buildings against the deep blue Aegean Sea.'
//       },
//       {
//         id: 112,
//         src: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=400&h=300&fit=crop',
//         title: 'Edinburgh Castle',
//         location: 'Edinburgh, Scotland',
//         date: '2024-07-10',
//         description: 'Historic castle perched atop an extinct volcano.'
//       }
//     ]
//   },
//   { 
//     id: 2,
//     title: 'Tropical Paradise',
//     location: 'Indian Ocean & Pacific',
//     coverImage: 'https://images.unsplash.com/photo-1507525425510-56f8e2b7c9b2?w=400&h=400&fit=crop',
//     color: '#0891b2',
//     icon: 'beach',
//     description: 'Exploring the crystal clear waters of tropical islands',
//     date: '2024-07-20',
//     photographer: 'Michael Chen',
//     images: [
//       {
//         id: 201,
//         src: 'https://images.unsplash.com/photo-1507525425510-56f8e2b7c9b2?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1507525425510-56f8e2b7c9b2?w=400&h=300&fit=crop',
//         title: 'Tropical Dreams',
//         location: 'Maldives',
//         date: '2024-07-20',
//         description: 'Crystal clear waters and overwater bungalows in the heart of the Indian Ocean.'
//       },
//       {
//         id: 202,
//         src: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=400&h=300&fit=crop',
//         title: 'Bora Bora',
//         location: 'French Polynesia',
//         date: '2024-07-22',
//         description: 'The ultimate tropical paradise with overwater bungalows and Mount Otemanu.'
//       },
//       {
//         id: 203,
//         src: 'https://images.unsplash.com/photo-1544550581-5f7caf2f137e?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1544550581-5f7caf2f137e?w=400&h=300&fit=crop',
//         title: 'Phi Phi Islands',
//         location: 'Thailand',
//         date: '2024-07-25',
//         description: 'Limestone cliffs meeting emerald waters at Maya Bay.'
//       },
//       {
//         id: 204,
//         src: 'https://images.unsplash.com/photo-1548579143-4880bc8a3e7d?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1548579143-4880bc8a3e7d?w=400&h=300&fit=crop',
//         title: 'Anse Source d\'Argent',
//         location: 'Seychelles',
//         date: '2024-07-27',
//         description: 'Pristine white sand beaches and giant granite boulders.'
//       },
//       {
//         id: 205,
//         src: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=400&h=300&fit=crop',
//         title: 'Mauritius Sunset',
//         location: 'Mauritius',
//         date: '2024-07-29',
//         description: 'Spectacular sunset over the Indian Ocean with palm trees silhouetted.'
//       },
//       {
//         id: 206,
//         src: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=400&h=300&fit=crop',
//         title: 'Havelock Island',
//         location: 'Andaman Islands, India',
//         date: '2024-07-31',
//         description: 'Remote tropical paradise with white sand beaches in the Bay of Bengal.'
//       },
//       {
//         id: 207,
//         src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&h=300&fit=crop',
//         title: 'Palawan',
//         location: 'El Nido, Philippines',
//         date: '2024-08-02',
//         description: 'Limestone karsts and turquoise lagoons in the most beautiful island in the world.'
//       },
//       {
//         id: 208,
//         src: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=400&h=300&fit=crop',
//         title: 'Komodo Island',
//         location: 'Indonesia',
//         date: '2024-08-04',
//         description: 'Pink beaches and ancient dragons in this unique destination.'
//       },
//       {
//         id: 209,
//         src: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=400&h=300&fit=crop',
//         title: 'Fiji',
//         location: 'Yasawa Islands, Fiji',
//         date: '2024-08-07',
//         description: 'Friendly locals and pristine coral reefs.'
//       },
//       {
//         id: 210,
//         src: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=400&h=300&fit=crop',
//         title: 'Cook Islands',
//         location: 'Rarotonga, Cook Islands',
//         date: '2024-08-10',
//         description: 'Turquoise lagoon surrounded by volcanic peaks.'
//       },
//       {
//         id: 211,
//         src: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=400&h=300&fit=crop',
//         title: 'Great Barrier Reef',
//         location: 'Queensland, Australia',
//         date: '2024-08-13',
//         description: 'The world\'s largest coral reef system from above.'
//       },
//       {
//         id: 212,
//         src: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1589793907316-f940ecb7b5c5?w=400&h=300&fit=crop',
//         title: 'Zanzibar',
//         location: 'Tanzania',
//         date: '2024-08-16',
//         description: 'Spice islands with historic Stone Town.'
//       }
//     ]
//   },
//   { 
//     id: 3,
//     title: 'Desert Adventures',
//     location: 'Middle East & Africa',
//     coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop',
//     color: '#b45309',
//     icon: 'sunny',
//     description: 'Golden dunes and ancient cities across the world\'s great deserts',
//     date: '2024-05-10',
//     photographer: 'Ahmed Rahman',
//     images: [
//       {
//         id: 301,
//         src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop',
//         title: 'Sahara Sunset',
//         location: 'Merzouga, Morocco',
//         date: '2024-05-10',
//         description: 'Golden dunes of the Sahara desert at sunset with camel caravan.'
//       },
//       {
//         id: 302,
//         src: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&h=300&fit=crop',
//         title: 'Dubai Nights',
//         location: 'Dubai, UAE',
//         date: '2024-05-12',
//         description: 'The dazzling skyline of Dubai as the city lights up after sunset from the Burj Khalifa.'
//       },
//       {
//         id: 303,
//         src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=400&h=300&fit=crop',
//         title: 'Petra',
//         location: 'Petra, Jordan',
//         date: '2024-05-15',
//         description: 'Ancient city carved into rose-colored rock, the Treasury at dawn.'
//       },
//       {
//         id: 304,
//         src: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=400&h=300&fit=crop',
//         title: 'Wadi Rum',
//         location: 'Wadi Rum, Jordan',
//         date: '2024-05-17',
//         description: 'Martian-like landscapes of Wadi Rum desert with dramatic rock formations.'
//       },
//       {
//         id: 305,
//         src: 'https://images.unsplash.com/photo-1530577197743-7adf14294584?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1530577197743-7adf14294584?w=400&h=300&fit=crop',
//         title: 'Sheikh Zayed Mosque',
//         location: 'Abu Dhabi, UAE',
//         date: '2024-05-19',
//         description: 'Sheikh Zayed Grand Mosque at twilight with reflecting pools.'
//       },
//       {
//         id: 306,
//         src: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=400&h=300&fit=crop',
//         title: 'Desert Camp',
//         location: 'Wahiba Sands, Oman',
//         date: '2024-05-21',
//         description: 'Traditional Bedouin camp under the stars in the desert.'
//       },
//       {
//         id: 307,
//         src: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=400&h=300&fit=crop',
//         title: 'Death Valley',
//         location: 'California, USA',
//         date: '2024-05-23',
//         description: 'Mesquite Flat Sand Dunes at golden hour with dramatic shadows.'
//       },
//       {
//         id: 308,
//         src: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=400&h=300&fit=crop',
//         title: 'Atacama Desert',
//         location: 'San Pedro de Atacama, Chile',
//         date: '2024-05-25',
//         description: 'The driest desert on Earth with stunning salt flats and lagoons.'
//       },
//       {
//         id: 309,
//         src: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=400&h=300&fit=crop',
//         title: 'Namib Desert',
//         location: 'Namibia',
//         date: '2024-05-28',
//         description: 'The oldest desert in the world with the highest sand dunes.'
//       },
//       {
//         id: 310,
//         src: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=400&h=300&fit=crop',
//         title: 'Gobi Desert',
//         location: 'Mongolia',
//         date: '2024-06-01',
//         description: 'Flaming Cliffs where dinosaur fossils were discovered.'
//       },
//       {
//         id: 311,
//         src: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=400&h=300&fit=crop',
//         title: 'White Desert',
//         location: 'Egypt',
//         date: '2024-06-04',
//         description: 'Chalk rock formations sculpted by sandstorms.'
//       },
//       {
//         id: 312,
//         src: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=400&h=300&fit=crop',
//         title: 'Sonoran Desert',
//         location: 'Arizona, USA',
//         date: '2024-06-07',
//         description: 'Saguaro cacti standing tall against the desert sky.'
//       }
//     ]
//   },
//   { 
//     id: 4,
//     title: 'Northern Lights',
//     location: 'Nordic Countries',
//     coverImage: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=400&fit=crop',
//     color: '#6d28d9',
//     icon: 'nights',
//     description: 'Chasing the aurora borealis across the Arctic Circle',
//     date: '2024-09-05',
//     photographer: 'Erik Magnusson',
//     images: [
//       {
//         id: 401,
//         src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=300&fit=crop',
//         title: 'Aurora Borealis',
//         location: 'Jökulsárlón, Iceland',
//         date: '2024-09-05',
//         description: 'The Northern Lights dancing across the Icelandic sky above a glacier lagoon.'
//       },
//       {
//         id: 402,
//         src: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=400&h=300&fit=crop',
//         title: 'Tromsø Winter',
//         location: 'Tromsø, Norway',
//         date: '2024-09-08',
//         description: 'Arctic Cathedral under the northern lights in Norway\'s aurora capital.'
//       },
//       {
//         id: 403,
//         src: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=300&fit=crop',
//         title: 'Finnish Lapland',
//         location: 'Kakslauttanen, Finland',
//         date: '2024-09-10',
//         description: 'Glass igloos perfect for aurora viewing from the warmth of your bed.'
//       },
//       {
//         id: 404,
//         src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
//         title: 'Ice Hotel',
//         location: 'Jukkasjärvi, Sweden',
//         date: '2024-09-12',
//         description: 'The famous Ice Hotel in Swedish Lapland, rebuilt every year.'
//       },
//       {
//         id: 405,
//         src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
//         title: 'Greenland Ice',
//         location: 'Ilulissat, Greenland',
//         date: '2024-09-14',
//         description: 'Massive icebergs in Disko Bay under the northern lights.'
//       },
//       {
//         id: 406,
//         src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
//         title: 'Lofoten Islands',
//         location: 'Reine, Norway',
//         date: '2024-09-16',
//         description: 'Dramatic peaks rising from the Arctic Sea with fishing villages.'
//       },
//       {
//         id: 407,
//         src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
//         title: 'Faroe Islands',
//         location: 'Streymoy, Faroe Islands',
//         date: '2024-09-18',
//         description: 'Dramatic cliffs and waterfalls in the North Atlantic.'
//       },
//       {
//         id: 408,
//         src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
//         title: 'Svalbard',
//         location: 'Longyearbyen, Norway',
//         date: '2024-09-20',
//         description: 'Polar bears and Arctic wilderness in the world\'s northernmost town.'
//       },
//       {
//         id: 409,
//         src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
//         title: 'Abisko National Park',
//         location: 'Sweden',
//         date: '2024-09-23',
//         description: 'Blue hole phenomenon - one of the best places to see aurora.'
//       },
//       {
//         id: 410,
//         src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
//         title: 'Lake Inari',
//         location: 'Finland',
//         date: '2024-09-26',
//         description: 'Snow-covered trees reflecting the green lights.'
//       },
//       {
//         id: 411,
//         src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
//         title: 'Yukon',
//         location: 'Canada',
//         date: '2024-09-29',
//         description: 'Northern lights over the Canadian wilderness.'
//       },
//       {
//         id: 412,
//         src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
//         title: 'Alaska',
//         location: 'Fairbanks, USA',
//         date: '2024-10-02',
//         description: 'Aurora season in the last frontier.'
//       }
//     ]
//   },
//   { 
//     id: 5,
//     title: 'Asian Wonders',
//     location: 'Southeast & East Asia',
//     coverImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=400&fit=crop',
//     color: '#c2410c',
//     icon: 'temple',
//     description: 'Ancient temples and modern metropolises',
//     date: '2024-03-15',
//     photographer: 'Yuki Tanaka',
//     images: [
//       {
//         id: 501,
//         src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=300&fit=crop',
//         title: 'Angkor Wat',
//         location: 'Siem Reap, Cambodia',
//         date: '2024-03-15',
//         description: 'The largest religious monument in the world at sunrise.'
//       },
//       {
//         id: 502,
//         src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop',
//         title: 'Mount Fuji',
//         location: 'Japan',
//         date: '2024-03-18',
//         description: 'Japan\'s iconic peak with cherry blossoms in spring.'
//       },
//       {
//         id: 503,
//         src: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=300&fit=crop',
//         title: 'Bagan',
//         location: 'Myanmar',
//         date: '2024-03-21',
//         description: 'Thousands of ancient temples dotting the plains of Bagan.'
//       },
//       {
//         id: 504,
//         src: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
//         title: 'Great Wall',
//         location: 'Beijing, China',
//         date: '2024-03-24',
//         description: 'The Great Wall winding through misty mountains.'
//       },
//       {
//         id: 505,
//         src: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=400&h=300&fit=crop',
//         title: 'Tokyo Tower',
//         location: 'Tokyo, Japan',
//         date: '2024-03-27',
//         description: 'Neon-lit Tokyo skyline at night.'
//       },
//       {
//         id: 506,
//         src: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&h=300&fit=crop',
//         title: 'Ha Long Bay',
//         location: 'Vietnam',
//         date: '2024-03-30',
//         description: 'Emerald waters and limestone islands.'
//       },
//       {
//         id: 507,
//         src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
//         title: 'Kyoto',
//         location: 'Japan',
//         date: '2024-04-02',
//         description: 'Fushimi Inari Shrine with thousands of red torii gates.'
//       },
//       {
//         id: 508,
//         src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop',
//         title: 'Petronas Towers',
//         location: 'Kuala Lumpur, Malaysia',
//         date: '2024-04-05',
//         description: 'The iconic twin towers at dusk.'
//       },
//       {
//         id: 509,
//         src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
//         title: 'Ubud',
//         location: 'Bali, Indonesia',
//         date: '2024-04-08',
//         description: 'Tegalalang Rice Terraces in the heart of Bali.'
//       },
//       {
//         id: 510,
//         src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
//         title: 'Seoul',
//         location: 'South Korea',
//         date: '2024-04-11',
//         description: 'Gyeongbokgung Palace with modern Seoul in background.'
//       }
//     ]
//   },
//   { 
//     id: 6,
//     title: 'African Safari',
//     location: 'East & Southern Africa',
//     coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=400&fit=crop',
//     color: '#b45309',
//     icon: 'wildlife',
//     description: 'Wildlife encounters across the African savanna',
//     date: '2024-08-10',
//     photographer: 'Grace Mwangi',
//     images: [
//       {
//         id: 601,
//         src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop',
//         title: 'Elephant Herd',
//         location: 'Amboseli, Kenya',
//         date: '2024-08-10',
//         description: 'Elephants with Mount Kilimanjaro in the background.'
//       },
//       {
//         id: 602,
//         src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop',
//         title: 'Lion Pride',
//         location: 'Maasai Mara, Kenya',
//         date: '2024-08-13',
//         description: 'A pride of lions resting after a hunt.'
//       },
//       {
//         id: 603,
//         src: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=300&fit=crop',
//         title: 'Giraffe Silhouette',
//         location: 'Serengeti, Tanzania',
//         date: '2024-08-16',
//         description: 'Giraffe at sunset on the endless plains.'
//       },
//       {
//         id: 604,
//         src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop',
//         title: 'Leopard',
//         location: 'South Luangwa, Zambia',
//         date: '2024-08-19',
//         description: 'A leopard resting on a tree branch.'
//       },
//       {
//         id: 605,
//         src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop',
//         title: 'Zebra Migration',
//         location: 'Botswana',
//         date: '2024-08-22',
//         description: 'Thousands of zebras on their annual migration.'
//       },
//       {
//         id: 606,
//         src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop',
//         title: 'Mountain Gorilla',
//         location: 'Rwanda',
//         date: '2024-08-25',
//         description: 'A majestic silverback in the misty mountains.'
//       },
//       {
//         id: 607,
//         src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop',
//         title: 'Cheetah Speed',
//         location: 'Kruger, South Africa',
//         date: '2024-08-28',
//         description: 'A cheetah sprinting across the savanna.'
//       },
//       {
//         id: 608,
//         src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop',
//         title: 'Okavango Delta',
//         location: 'Botswana',
//         date: '2024-08-31',
//         description: 'Aerial view of the Okavango Delta from a helicopter.'
//       }
//     ]
//   },
//   { 
//     id: 7,
//     title: 'South American Journey',
//     location: 'South America',
//     coverImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=400&fit=crop',
//     color: '#059669',
//     icon: 'mountain',
//     description: 'From the Andes to the Amazon',
//     date: '2024-04-05',
//     photographer: 'Diego Morales',
//     images: [
//       {
//         id: 701,
//         src: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop',
//         title: 'Machu Picchu',
//         location: 'Peru',
//         date: '2024-04-05',
//         description: 'The lost city of the Incas shrouded in morning mist.'
//       },
//       {
//         id: 702,
//         src: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=400&h=300&fit=crop',
//         title: 'Christ Redeemer',
//         location: 'Rio de Janeiro, Brazil',
//         date: '2024-04-08',
//         description: 'Christ the Redeemer statue overlooking Rio.'
//       },
//       {
//         id: 703,
//         src: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop',
//         title: 'Amazon River',
//         location: 'Brazil',
//         date: '2024-04-11',
//         description: 'The mighty Amazon River winding through the rainforest.'
//       },
//       {
//         id: 704,
//         src: 'https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop',
//         title: 'Iguazu Falls',
//         location: 'Argentina/Brazil Border',
//         date: '2024-04-14',
//         description: 'The magnificent Iguazu Falls, one of the world\'s largest waterfall systems.'
//       },
//       {
//         id: 705,
//         src: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop',
//         title: 'Salar de Uyuni',
//         location: 'Bolivia',
//         date: '2024-04-17',
//         description: 'The world\'s largest salt flat reflecting the sky like a mirror.'
//       },
//       {
//         id: 706,
//         src: 'https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop',
//         title: 'Patagonia',
//         location: 'Chile/Argentina',
//         date: '2024-04-20',
//         description: 'Torres del Paine National Park with its iconic peaks.'
//       },
//       {
//         id: 707,
//         src: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop',
//         title: 'Galapagos',
//         location: 'Ecuador',
//         date: '2024-04-23',
//         description: 'Giant tortoises in their natural habitat.'
//       },
//       {
//         id: 708,
//         src: 'https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop',
//         title: 'Cartagena',
//         location: 'Colombia',
//         date: '2024-04-26',
//         description: 'Colorful colonial architecture in the walled city.'
//       }
//     ]
//   },
//   { 
//     id: 8,
//     title: 'North American Road Trip',
//     location: 'USA & Canada',
//     coverImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop',
//     color: '#2563eb',
//     icon: 'road',
//     description: 'Coast to coast across the diverse landscapes of North America',
//     date: '2024-07-01',
//     photographer: 'Alex Rivera',
//     images: [
//       {
//         id: 801,
//         src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
//         title: 'Golden Gate Bridge',
//         location: 'San Francisco, USA',
//         date: '2024-07-01',
//         description: 'The iconic Golden Gate Bridge shrouded in fog.'
//       },
//       {
//         id: 802,
//         src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
//         title: 'Grand Canyon',
//         location: 'Arizona, USA',
//         date: '2024-07-04',
//         description: 'Sunrise over the majestic Grand Canyon.'
//       },
//       {
//         id: 803,
//         src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
//         title: 'Banff',
//         location: 'Alberta, Canada',
//         date: '2024-07-07',
//         description: 'Moraine Lake with its stunning blue water.'
//       },
//       {
//         id: 804,
//         src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
//         title: 'New York City',
//         location: 'New York, USA',
//         date: '2024-07-10',
//         description: 'Manhattan skyline at sunset.'
//       },
//       {
//         id: 805,
//         src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
//         title: 'Yellowstone',
//         location: 'Wyoming, USA',
//         date: '2024-07-13',
//         description: 'Old Faithful geyser erupting.'
//       },
//       {
//         id: 806,
//         src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
//         title: 'Niagara Falls',
//         location: 'Ontario, Canada/New York, USA',
//         date: '2024-07-16',
//         description: 'The powerful Niagara Falls from the Canadian side.'
//       },
//       {
//         id: 807,
//         src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
//         title: 'Monument Valley',
//         location: 'Utah/Arizona, USA',
//         date: '2024-07-19',
//         description: 'Iconic red rock formations at dawn.'
//       },
//       {
//         id: 808,
//         src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
//         thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
//         title: 'Vancouver',
//         location: 'British Columbia, Canada',
//         date: '2024-07-22',
//         description: 'Stanley Park and the city skyline.'
//       }
//     ]
//   },
//     {
//     id: 7,
//     title: "South American Journey",
//     location: "South America",
//     coverImage:
//       "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=400&fit=crop",
//     color: "#059669",
//     icon: "mountain",
//     description: "From the Andes to the Amazon",
//     date: "2024-04-05",
//     photographer: "Diego Morales",
//     images: [
//       {
//         id: 701,
//         src: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
//         title: "Machu Picchu",
//         location: "Peru",
//         date: "2024-04-05",
//         description: "The lost city of the Incas shrouded in morning mist.",
//       },
//       {
//         id: 702,
//         src: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=400&h=300&fit=crop",
//         title: "Christ Redeemer",
//         location: "Rio de Janeiro, Brazil",
//         date: "2024-04-08",
//         description: "Christ the Redeemer statue overlooking Rio.",
//       },
//       {
//         id: 703,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Amazon River",
//         location: "Brazil",
//         date: "2024-04-11",
//         description: "The mighty Amazon River winding through the rainforest.",
//       },
//       {
//         id: 704,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Iguazu Falls",
//         location: "Argentina/Brazil Border",
//         date: "2024-04-14",
//         description:
//           "The magnificent Iguazu Falls, one of the world's largest waterfall systems.",
//       },
//       {
//         id: 705,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Salar de Uyuni",
//         location: "Bolivia",
//         date: "2024-04-17",
//         description:
//           "The world's largest salt flat reflecting the sky like a mirror.",
//       },
//       {
//         id: 706,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Patagonia",
//         location: "Chile/Argentina",
//         date: "2024-04-20",
//         description: "Torres del Paine National Park with its iconic peaks.",
//       },
//       {
//         id: 707,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Galapagos",
//         location: "Ecuador",
//         date: "2024-04-23",
//         description: "Giant tortoises in their natural habitat.",
//       },
//       {
//         id: 708,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Cartagena",
//         location: "Colombia",
//         date: "2024-04-26",
//         description: "Colorful colonial architecture in the walled city.",
//       },
//     ],
//   },
//   {
//     id: 8,
//     title: "North American Road Trip",
//     location: "USA & Canada",
//     coverImage:
//       "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
//     color: "#2563eb",
//     icon: "road",
//     description:
//       "Coast to coast across the diverse landscapes of North America",
//     date: "2024-07-01",
//     photographer: "Alex Rivera",
//     images: [
//       {
//         id: 801,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Golden Gate Bridge",
//         location: "San Francisco, USA",
//         date: "2024-07-01",
//         description: "The iconic Golden Gate Bridge shrouded in fog.",
//       },
//       {
//         id: 802,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Grand Canyon",
//         location: "Arizona, USA",
//         date: "2024-07-04",
//         description: "Sunrise over the majestic Grand Canyon.",
//       },
//       {
//         id: 803,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Banff",
//         location: "Alberta, Canada",
//         date: "2024-07-07",
//         description: "Moraine Lake with its stunning blue water.",
//       },
//       {
//         id: 804,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "New York City",
//         location: "New York, USA",
//         date: "2024-07-10",
//         description: "Manhattan skyline at sunset.",
//       },
//       {
//         id: 805,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Yellowstone",
//         location: "Wyoming, USA",
//         date: "2024-07-13",
//         description: "Old Faithful geyser erupting.",
//       },
//       {
//         id: 806,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Niagara Falls",
//         location: "Ontario, Canada/New York, USA",
//         date: "2024-07-16",
//         description: "The powerful Niagara Falls from the Canadian side.",
//       },
//       {
//         id: 807,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Monument Valley",
//         location: "Utah/Arizona, USA",
//         date: "2024-07-19",
//         description: "Iconic red rock formations at dawn.",
//       },
//       {
//         id: 808,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Vancouver",
//         location: "British Columbia, Canada",
//         date: "2024-07-22",
//         description: "Stanley Park and the city skyline.",
//       },
//     ],
//   },
//     {
//     id: 7,
//     title: "South American Journey",
//     location: "South America",
//     coverImage:
//       "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=400&fit=crop",
//     color: "#059669",
//     icon: "mountain",
//     description: "From the Andes to the Amazon",
//     date: "2024-04-05",
//     photographer: "Diego Morales",
//     images: [
//       {
//         id: 701,
//         src: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
//         title: "Machu Picchu",
//         location: "Peru",
//         date: "2024-04-05",
//         description: "The lost city of the Incas shrouded in morning mist.",
//       },
//       {
//         id: 702,
//         src: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=400&h=300&fit=crop",
//         title: "Christ Redeemer",
//         location: "Rio de Janeiro, Brazil",
//         date: "2024-04-08",
//         description: "Christ the Redeemer statue overlooking Rio.",
//       },
//       {
//         id: 703,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Amazon River",
//         location: "Brazil",
//         date: "2024-04-11",
//         description: "The mighty Amazon River winding through the rainforest.",
//       },
//       {
//         id: 704,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Iguazu Falls",
//         location: "Argentina/Brazil Border",
//         date: "2024-04-14",
//         description:
//           "The magnificent Iguazu Falls, one of the world's largest waterfall systems.",
//       },
//       {
//         id: 705,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Salar de Uyuni",
//         location: "Bolivia",
//         date: "2024-04-17",
//         description:
//           "The world's largest salt flat reflecting the sky like a mirror.",
//       },
//       {
//         id: 706,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Patagonia",
//         location: "Chile/Argentina",
//         date: "2024-04-20",
//         description: "Torres del Paine National Park with its iconic peaks.",
//       },
//       {
//         id: 707,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Galapagos",
//         location: "Ecuador",
//         date: "2024-04-23",
//         description: "Giant tortoises in their natural habitat.",
//       },
//       {
//         id: 708,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Cartagena",
//         location: "Colombia",
//         date: "2024-04-26",
//         description: "Colorful colonial architecture in the walled city.",
//       },
//     ],
//   },
//   {
//     id: 8,
//     title: "North American Road Trip",
//     location: "USA & Canada",
//     coverImage:
//       "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
//     color: "#2563eb",
//     icon: "road",
//     description:
//       "Coast to coast across the diverse landscapes of North America",
//     date: "2024-07-01",
//     photographer: "Alex Rivera",
//     images: [
//       {
//         id: 801,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Golden Gate Bridge",
//         location: "San Francisco, USA",
//         date: "2024-07-01",
//         description: "The iconic Golden Gate Bridge shrouded in fog.",
//       },
//       {
//         id: 802,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Grand Canyon",
//         location: "Arizona, USA",
//         date: "2024-07-04",
//         description: "Sunrise over the majestic Grand Canyon.",
//       },
//       {
//         id: 803,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Banff",
//         location: "Alberta, Canada",
//         date: "2024-07-07",
//         description: "Moraine Lake with its stunning blue water.",
//       },
//       {
//         id: 804,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "New York City",
//         location: "New York, USA",
//         date: "2024-07-10",
//         description: "Manhattan skyline at sunset.",
//       },
//       {
//         id: 805,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Yellowstone",
//         location: "Wyoming, USA",
//         date: "2024-07-13",
//         description: "Old Faithful geyser erupting.",
//       },
//       {
//         id: 806,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Niagara Falls",
//         location: "Ontario, Canada/New York, USA",
//         date: "2024-07-16",
//         description: "The powerful Niagara Falls from the Canadian side.",
//       },
//       {
//         id: 807,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Monument Valley",
//         location: "Utah/Arizona, USA",
//         date: "2024-07-19",
//         description: "Iconic red rock formations at dawn.",
//       },
//       {
//         id: 808,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Vancouver",
//         location: "British Columbia, Canada",
//         date: "2024-07-22",
//         description: "Stanley Park and the city skyline.",
//       },
//     ],
//   },
//     {
//     id: 7,
//     title: "South American Journey",
//     location: "South America",
//     coverImage:
//       "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=400&fit=crop",
//     color: "#059669",
//     icon: "mountain",
//     description: "From the Andes to the Amazon",
//     date: "2024-04-05",
//     photographer: "Diego Morales",
//     images: [
//       {
//         id: 701,
//         src: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
//         title: "Machu Picchu",
//         location: "Peru",
//         date: "2024-04-05",
//         description: "The lost city of the Incas shrouded in morning mist.",
//       },
//       {
//         id: 702,
//         src: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=400&h=300&fit=crop",
//         title: "Christ Redeemer",
//         location: "Rio de Janeiro, Brazil",
//         date: "2024-04-08",
//         description: "Christ the Redeemer statue overlooking Rio.",
//       },
//       {
//         id: 703,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Amazon River",
//         location: "Brazil",
//         date: "2024-04-11",
//         description: "The mighty Amazon River winding through the rainforest.",
//       },
//       {
//         id: 704,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Iguazu Falls",
//         location: "Argentina/Brazil Border",
//         date: "2024-04-14",
//         description:
//           "The magnificent Iguazu Falls, one of the world's largest waterfall systems.",
//       },
//       {
//         id: 705,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Salar de Uyuni",
//         location: "Bolivia",
//         date: "2024-04-17",
//         description:
//           "The world's largest salt flat reflecting the sky like a mirror.",
//       },
//       {
//         id: 706,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Patagonia",
//         location: "Chile/Argentina",
//         date: "2024-04-20",
//         description: "Torres del Paine National Park with its iconic peaks.",
//       },
//       {
//         id: 707,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Galapagos",
//         location: "Ecuador",
//         date: "2024-04-23",
//         description: "Giant tortoises in their natural habitat.",
//       },
//       {
//         id: 708,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Cartagena",
//         location: "Colombia",
//         date: "2024-04-26",
//         description: "Colorful colonial architecture in the walled city.",
//       },
//     ],
//   },
//   {
//     id: 8,
//     title: "North American Road Trip",
//     location: "USA & Canada",
//     coverImage:
//       "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
//     color: "#2563eb",
//     icon: "road",
//     description:
//       "Coast to coast across the diverse landscapes of North America",
//     date: "2024-07-01",
//     photographer: "Alex Rivera",
//     images: [
//       {
//         id: 801,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Golden Gate Bridge",
//         location: "San Francisco, USA",
//         date: "2024-07-01",
//         description: "The iconic Golden Gate Bridge shrouded in fog.",
//       },
//       {
//         id: 802,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Grand Canyon",
//         location: "Arizona, USA",
//         date: "2024-07-04",
//         description: "Sunrise over the majestic Grand Canyon.",
//       },
//       {
//         id: 803,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Banff",
//         location: "Alberta, Canada",
//         date: "2024-07-07",
//         description: "Moraine Lake with its stunning blue water.",
//       },
//       {
//         id: 804,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "New York City",
//         location: "New York, USA",
//         date: "2024-07-10",
//         description: "Manhattan skyline at sunset.",
//       },
//       {
//         id: 805,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Yellowstone",
//         location: "Wyoming, USA",
//         date: "2024-07-13",
//         description: "Old Faithful geyser erupting.",
//       },
//       {
//         id: 806,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Niagara Falls",
//         location: "Ontario, Canada/New York, USA",
//         date: "2024-07-16",
//         description: "The powerful Niagara Falls from the Canadian side.",
//       },
//       {
//         id: 807,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Monument Valley",
//         location: "Utah/Arizona, USA",
//         date: "2024-07-19",
//         description: "Iconic red rock formations at dawn.",
//       },
//       {
//         id: 808,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Vancouver",
//         location: "British Columbia, Canada",
//         date: "2024-07-22",
//         description: "Stanley Park and the city skyline.",
//       },
//     ],
//   },
//     {
//     id: 7,
//     title: "South American Journey",
//     location: "South America",
//     coverImage:
//       "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=400&fit=crop",
//     color: "#059669",
//     icon: "mountain",
//     description: "From the Andes to the Amazon",
//     date: "2024-04-05",
//     photographer: "Diego Morales",
//     images: [
//       {
//         id: 701,
//         src: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
//         title: "Machu Picchu",
//         location: "Peru",
//         date: "2024-04-05",
//         description: "The lost city of the Incas shrouded in morning mist.",
//       },
//       {
//         id: 702,
//         src: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=400&h=300&fit=crop",
//         title: "Christ Redeemer",
//         location: "Rio de Janeiro, Brazil",
//         date: "2024-04-08",
//         description: "Christ the Redeemer statue overlooking Rio.",
//       },
//       {
//         id: 703,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Amazon River",
//         location: "Brazil",
//         date: "2024-04-11",
//         description: "The mighty Amazon River winding through the rainforest.",
//       },
//       {
//         id: 704,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Iguazu Falls",
//         location: "Argentina/Brazil Border",
//         date: "2024-04-14",
//         description:
//           "The magnificent Iguazu Falls, one of the world's largest waterfall systems.",
//       },
//       {
//         id: 705,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Salar de Uyuni",
//         location: "Bolivia",
//         date: "2024-04-17",
//         description:
//           "The world's largest salt flat reflecting the sky like a mirror.",
//       },
//       {
//         id: 706,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Patagonia",
//         location: "Chile/Argentina",
//         date: "2024-04-20",
//         description: "Torres del Paine National Park with its iconic peaks.",
//       },
//       {
//         id: 707,
//         src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
//         title: "Galapagos",
//         location: "Ecuador",
//         date: "2024-04-23",
//         description: "Giant tortoises in their natural habitat.",
//       },
//       {
//         id: 708,
//         src: "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1508974575580-6c6667acf518?w=400&h=300&fit=crop",
//         title: "Cartagena",
//         location: "Colombia",
//         date: "2024-04-26",
//         description: "Colorful colonial architecture in the walled city.",
//       },
//     ],
//   },
//   {
//     id: 8,
//     title: "North American Road Trip",
//     location: "USA & Canada",
//     coverImage:
//       "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
//     color: "#2563eb",
//     icon: "road",
//     description:
//       "Coast to coast across the diverse landscapes of North America",
//     date: "2024-07-01",
//     photographer: "Alex Rivera",
//     images: [
//       {
//         id: 801,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Golden Gate Bridge",
//         location: "San Francisco, USA",
//         date: "2024-07-01",
//         description: "The iconic Golden Gate Bridge shrouded in fog.",
//       },
//       {
//         id: 802,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Grand Canyon",
//         location: "Arizona, USA",
//         date: "2024-07-04",
//         description: "Sunrise over the majestic Grand Canyon.",
//       },
//       {
//         id: 803,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Banff",
//         location: "Alberta, Canada",
//         date: "2024-07-07",
//         description: "Moraine Lake with its stunning blue water.",
//       },
//       {
//         id: 804,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "New York City",
//         location: "New York, USA",
//         date: "2024-07-10",
//         description: "Manhattan skyline at sunset.",
//       },
//       {
//         id: 805,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Yellowstone",
//         location: "Wyoming, USA",
//         date: "2024-07-13",
//         description: "Old Faithful geyser erupting.",
//       },
//       {
//         id: 806,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Niagara Falls",
//         location: "Ontario, Canada/New York, USA",
//         date: "2024-07-16",
//         description: "The powerful Niagara Falls from the Canadian side.",
//       },
//       {
//         id: 807,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Monument Valley",
//         location: "Utah/Arizona, USA",
//         date: "2024-07-19",
//         description: "Iconic red rock formations at dawn.",
//       },
//       {
//         id: 808,
//         src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
//         thumbnail:
//           "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
//         title: "Vancouver",
//         location: "British Columbia, Canada",
//         date: "2024-07-22",
//         description: "Stanley Park and the city skyline.",
//       },
//     ],
//   },
// ];

// export const Gallery = () => {
//   // State management
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [viewMode, setViewMode] = useState('grid');
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [favorites, setFavorites] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Calculate albums for current page (8 per page)
//   const albumsPerPage = 8;
//   const totalPages = Math.ceil(albums.length / albumsPerPage);
//   const startIndex = (currentPage - 1) * albumsPerPage;
//   const visibleAlbums = albums.slice(startIndex, startIndex + albumsPerPage);

//   // Handle page change
//   const changePage = (direction) => {
//     setIsLoading(true);
//     const newPage = currentPage + direction;
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
      
//       setTimeout(() => {
//         setIsLoading(false);
//         toast.success(`📸 Page ${newPage} loaded!`);
//       }, 500);
      
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   // Open album
//   const openAlbum = (album) => {
//     setSelectedAlbum(album);
//     setViewMode('grid');
//     setZoomLevel(1);
//     document.body.style.overflow = 'hidden';
//     toast.info(`Exploring ${album.title}`);
//   };

//   // Close album
//   const closeAlbum = () => {
//     setSelectedAlbum(null);
//     setSelectedImage(null);
//     setZoomLevel(1);
//     document.body.style.overflow = 'unset';
//   };

//   // Open image view
//   const openImageView = (image) => {
//     setSelectedImage(image);
//     setViewMode('single');
//     setZoomLevel(1);
//   };

//   // Close image view
//   const closeImageView = () => {
//     setSelectedImage(null);
//     setViewMode('grid');
//     setZoomLevel(1);
//   };

//   // Navigate images
//   const navigateImage = (direction) => {
//     if (!selectedAlbum || !selectedImage) return;
    
//     const currentIndex = selectedAlbum.images.findIndex(img => img.id === selectedImage.id);
//     const newIndex = currentIndex + direction;
    
//     if (newIndex >= 0 && newIndex < selectedAlbum.images.length) {
//       setSelectedImage(selectedAlbum.images[newIndex]);
//       setZoomLevel(1);
//     }
//   };

//   // Toggle favorite
//   const toggleFavorite = (imageId) => {
//     if (favorites.includes(imageId)) {
//       setFavorites(favorites.filter(id => id !== imageId));
//       toast.info('Removed from favorites');
//     } else {
//       setFavorites([...favorites, imageId]);
//       toast.success('Added to favorites!');
//     }
//   };

//   // Zoom controls
//   const handleZoom = (direction) => {
//     if (direction === 'in' && zoomLevel < 3) {
//       setZoomLevel(prev => prev + 0.5);
//     } else if (direction === 'out' && zoomLevel > 1) {
//       setZoomLevel(prev => prev - 0.5);
//     }
//   };

//   // Get icon component based on string
//   const getIcon = (iconName) => {
//     switch(iconName) {
//       case 'terrain': return <Terrain />;
//       case 'beach': return <BeachAccess />;
//       case 'sunny': return <WbSunny />;
//       case 'nights': return <NightsStay />;
//       default: return <PhotoLibrary />;
//     }
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (selectedImage) {
//         if (e.key === 'ArrowLeft') navigateImage(-1);
//         if (e.key === 'ArrowRight') navigateImage(1);
//         if (e.key === 'Escape') closeImageView();
//         if (e.key === '+' || e.key === '=') handleZoom('in');
//         if (e.key === '-' || e.key === '_') handleZoom('out');
//       } else if (selectedAlbum) {
//         if (e.key === 'Escape') closeAlbum();
//       }
//     };
    
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [selectedImage, selectedAlbum]);

//   return (
//     <div className="min-h-screen py-6 sm:py-8 lg:py-12 w-full mt-4 rounded-2xl relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-900">
//       {/* Animated background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-8 sm:mb-12"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400">
//               Photo Albums
//             </span>
//           </h1>
          
//           {/* Stats */}
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
//               <span className="text-white font-semibold flex items-center gap-2">
//                 <Collections className="text-pink-400" style={{ fontSize: 20 }} />
//                 {albums.length} Albums
//               </span>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
//               <span className="text-white font-semibold flex items-center gap-2">
//                 <Image className="text-purple-400" style={{ fontSize: 20 }} />
//                 {albums.reduce((acc, album) => acc + album.images.length, 0)} Photos
//               </span>
//             </div>
//           </div>
          
//           {/* Page navigation */}
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <button
//               onClick={() => changePage(-1)}
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
//             >
//               <ChevronLeft className="text-white" />
//             </button>
            
//             <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
//               <span className="text-white font-semibold flex items-center gap-2">
//                 <Collections className="text-pink-400" style={{ fontSize: 20 }} />
//                 Page {currentPage} of {totalPages}
//               </span>
//             </div>
            
//             <button
//               onClick={() => changePage(1)}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
//             >
//               <ChevronRight className="text-white" />
//             </button>
//           </div>
          
//           <div className="flex items-center justify-center gap-2 mb-3">
//             <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
//             <CameraAlt className="text-pink-400 text-2xl animate-bounce" />
//             <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
//           </div>
          
//           <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4">
//             Explore beautiful collections of photographs from around the world
//           </p>
//         </motion.div>

//         {/* Albums Grid - Pentagon Shape */}
//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//               className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
//             />
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
//             {visibleAlbums.map((album, index) => (
//               <motion.div
//                 key={album.id}
//                 initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
//                 animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="w-full cursor-pointer group"
//                 onClick={() => openAlbum(album)}
//               >
//                 <div className="relative">
//                   {/* Pentagon Shape SVG */}
//                   <svg viewBox="0 0 200 220" className="w-full h-auto drop-shadow-2xl">
//                     <defs>
//                       <clipPath id={`pentagonClip-${album.id}`}>
//                         <polygon points="100 10, 190 55, 190 155, 100 200, 10 155, 10 55" />
//                       </clipPath>
                      
//                       <linearGradient id={`pentagonGradient-${album.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
//                         <stop offset="0%" stopColor={album.color} stopOpacity="0.9" />
//                         <stop offset="100%" stopColor={album.color} stopOpacity="0.5" />
//                       </linearGradient>
//                     </defs>

//                     {/* Pentagon background */}
//                     <polygon
//                       points="100 10, 190 55, 190 155, 100 200, 10 155, 10 55"
//                       fill={`url(#pentagonGradient-${album.id})`}
//                       stroke="white"
//                       strokeWidth="3"
//                       className="transition-all duration-300 group-hover:stroke-amber-400"
//                     />
                    
//                     {/* Cover Image */}
//                     <image
//                       href={album.coverImage}
//                       clipPath={`url(#pentagonClip-${album.id})`}
//                       width="200"
//                       height="220"
//                       preserveAspectRatio="xMidYMid slice"
//                       className="transition-transform duration-700 group-hover:scale-110"
//                     />
                    
//                     {/* Overlay */}
//                     <g className="opacity-0 group-hover:opacity-100 transition-all duration-300">
//                       <polygon
//                         points="100 10, 190 55, 190 155, 100 200, 10 155, 10 55"
//                         fill="rgba(0,0,0,0.7)"
//                       />
                      
//                       <foreignObject x="20" y="40" width="160" height="120">
//                         <div className="flex flex-col items-center justify-center h-full text-white">
//                           <Folder className="text-4xl text-amber-400 mb-2" />
//                           <h3 className="font-bold text-sm text-center text-amber-400">
//                             {album.title}
//                           </h3>
//                           <p className="text-xs text-center mt-1 text-gray-300">
//                             {album.images.length} photos
//                           </p>
//                           <div className="flex items-center gap-1 mt-2 text-xs">
//                             <Place className="text-pink-400 text-sm" />
//                             <span className="truncate">{album.location}</span>
//                           </div>
//                         </div>
//                       </foreignObject>
//                     </g>
                    
//                     {/* Image count badge */}
//                     <foreignObject x="70" y="10" width="60" height="24">
//                       <div className="bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center justify-center gap-1 border border-white/20">
//                         <Image className="text-white text-xs" />
//                         <span className="text-white text-xs font-semibold">{album.images.length}</span>
//                       </div>
//                     </foreignObject>
//                   </svg>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* Album Modal - Grid View */}
//         <AnimatePresence>
//           {selectedAlbum && viewMode === 'grid' && (
//             <>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={closeAlbum}
//                 className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50"
//               />

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="fixed inset-4 md:inset-6 lg:inset-8 z-50 overflow-y-auto"
//               >
//                 <div className="min-h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 p-6">
                  
//                   {/* Album header */}
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center gap-4">
//                       <button
//                         onClick={closeAlbum}
//                         className="text-white hover:text-pink-400 transition-colors bg-black/50 rounded-full p-2"
//                       >
//                         <ArrowBack className="text-2xl" />
//                       </button>
//                       <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
//                           <FolderOpen className="text-amber-400" />
//                           {selectedAlbum.title}
//                         </h2>
//                         <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
//                           <span className="flex items-center gap-1">
//                             <Place className="text-pink-400 text-sm" />
//                             {selectedAlbum.location}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <Person className="text-purple-400 text-sm" />
//                             {selectedAlbum.photographer}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <Image className="text-blue-400 text-sm" />
//                             {selectedAlbum.images.length} photos
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                     <button
//                       onClick={closeAlbum}
//                       className="text-white bg-gradient-to-t from-red-500 to-red-700 transition-colors rounded-full p-2"
//                     >
//                       <Close className="text-2xl" />
//                     </button>
//                   </div>

//                   {/* Image grid */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
//                     {selectedAlbum.images.map((image, idx) => (
//                       <motion.div
//                         key={image.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: idx * 0.1 }}
//                         onClick={() => openImageView(image)}
//                         className="group cursor-pointer"
//                       >
//                         <div className="relative overflow-hidden rounded-xl shadow-2xl">
//                           <img
//                             src={image.thumbnail}
//                             alt={image.title}
//                             className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                             loading="lazy"
//                           />
                          
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <div className="absolute bottom-0 left-0 right-0 p-4">
//                               <h3 className="text-white font-semibold text-lg mb-1">
//                                 {image.title}
//                               </h3>
//                               <p className="text-gray-300 text-sm flex items-center gap-1">
//                                 <Place className="text-pink-400 text-sm" />
//                                 {image.location}
//                               </p>
//                             </div>
//                           </div>
                          
//                           <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm border border-white/20">
//                             #{idx + 1}
//                           </div>
                          
        
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>

//         {/* Single Image View */}
//         <AnimatePresence>
//           {selectedImage && viewMode === 'single' && (
//             <>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={closeImageView}
//                 className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-[60]"
//               />

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="fixed inset-0 z-[60] flex items-center justify-center p-4"
//               >
//                 <div className="relative w-full h-full max-w-6xl mx-auto flex flex-col">
                  
//                   {/* Header */}
//                   <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={closeImageView}
//                           className="text-white hover:text-pink-400 transition-colors bg-black/50 rounded-full p-2"
//                         >
//                           <ArrowBack className="text-2xl" />
//                         </button>
//                         <div className="text-white ml-2">
//                           <h3 className="font-bold">{selectedImage.title}</h3>
//                           <p className="text-sm text-gray-300">{selectedImage.location}</p>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => handleZoom('out')}
//                           disabled={zoomLevel <= 1}
//                           className="text-white hover:text-blue-400 transition-colors bg-black/50 rounded-full p-2 disabled:opacity-50"
//                         >
//                           <ZoomOut />
//                         </button>
//                         <span className="text-white bg-black/50 rounded-full px-3 py-1">
//                           {zoomLevel}x
//                         </span>
//                         <button
//                           onClick={() => handleZoom('in')}
//                           disabled={zoomLevel >= 3}
//                           className="text-white hover:text-blue-400 transition-colors bg-black/50 rounded-full p-2 disabled:opacity-50"
//                         >
//                           <ZoomIn />
//                         </button>
                 
                        
//                         <button
//                           onClick={closeImageView}
//                           className="text-white bg-gradient-to-t from-red-500 to-red-700 transition-colors rounded-full p-2"
//                         >
//                           <Close className="text-2xl" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Image container with zoom */}
//                   <div className="flex-1 flex items-center justify-center overflow-hidden">
//                     <motion.div
//                       animate={{ scale: zoomLevel }}
//                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                       className="relative"
//                     >
//                       <img
//                         src={selectedImage.src}
//                         alt={selectedImage.title}
//                         className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
//                       />
//                     </motion.div>
//                   </div>

//                   {/* Navigation arrows */}
//                   {selectedAlbum && (
//                     <>
//                       {selectedAlbum.images.findIndex(img => img.id === selectedImage.id) > 0 && (
//                         <button
//                           onClick={() => navigateImage(-1)}
//                           className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-pink-600 transition-all backdrop-blur-sm border border-white/20"
//                         >
//                           <ChevronLeft className="text-3xl" />
//                         </button>
//                       )}
                      
//                       {selectedAlbum.images.findIndex(img => img.id === selectedImage.id) < selectedAlbum.images.length - 1 && (
//                         <button
//                           onClick={() => navigateImage(1)}
//                           className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-purple-600 transition-all backdrop-blur-sm border border-white/20"
//                         >
//                           <ChevronRight className="text-3xl" />
//                         </button>
//                       )}
//                     </>
//                   )}

//                   {/* Image info footer */}
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
//                     <div className="max-w-3xl mx-auto text-center">
//                       <p className="text-gray-300 mb-2">
//                         {selectedImage.description}
//                       </p>
//                       <div className="flex items-center justify-center gap-4 text-sm">
//                         <span className="flex items-center gap-1 text-gray-300">
//                           <Place className="text-pink-400" />
//                           {selectedImage.location}
//                         </span>
//                         <span className="flex items-center gap-1 text-gray-300">
//                           <CalendarToday className="text-blue-400" />
//                           {new Date(selectedImage.date).toLocaleDateString('en-US', { 
//                             month: 'long', 
//                             day: 'numeric', 
//                             year: 'numeric' 
//                           })}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0%, 100% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// };


















/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import icons individually with proper syntax
import Close from '@mui/icons-material/Close';
import PhotoLibrary from '@mui/icons-material/PhotoLibrary';
import LocationOn from '@mui/icons-material/LocationOn';
import CalendarToday from '@mui/icons-material/CalendarToday';
import CameraAlt from '@mui/icons-material/CameraAlt';
import Explore from '@mui/icons-material/Explore';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Info from '@mui/icons-material/Info';
import Person from '@mui/icons-material/Person';
import FilterHdr from '@mui/icons-material/FilterHdr';
import Terrain from '@mui/icons-material/Terrain';
import Waves from '@mui/icons-material/Waves';
import Landscape from '@mui/icons-material/Landscape';
import NightsStay from '@mui/icons-material/NightsStay';
import WbSunny from '@mui/icons-material/WbSunny';
import Park from '@mui/icons-material/Park';
import BeachAccess from '@mui/icons-material/BeachAccess';
import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import Image from '@mui/icons-material/Image';
import Collections from '@mui/icons-material/Collections';
import DateRange from '@mui/icons-material/DateRange';
import Place from '@mui/icons-material/Place';
import GridView from '@mui/icons-material/GridView';
import ViewCarousel from '@mui/icons-material/ViewCarousel';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Fullscreen from '@mui/icons-material/Fullscreen';
import FullscreenExit from '@mui/icons-material/FullscreenExit';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ZoomIn from '@mui/icons-material/ZoomIn';
import ZoomOut from '@mui/icons-material/ZoomOut';

export const Gallery = () => {
  // State management
  const [albums, setAlbums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch albums from API
  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('https://myalbumnode.onrender.com/gallery');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && Array.isArray(data.data)) {
        // Transform API data to match our component structure
        const transformedAlbums = data.data.map((album, index) => ({
          id: album._id || index,
          _id: album._id,
          title: album.title || 'Untitled Album',
          location: album.location || 'Unknown Location',
          coverImage: album.coverImage?.url || album.coverImage || 'https://via.placeholder.com/400x400?text=No+Image',
          color: album.color || '#6366f1',
          icon: album.icon || 'terrain',
          description: album.description || '',
          date: album.date || new Date().toISOString().split('T')[0],
          photographer: album.photographer || 'Unknown',
          images: (album.images || []).map((img, imgIndex) => ({
            id: img._id || `${album._id}-${imgIndex}`,
            src: img.url || img,
            thumbnail: img.url || img,
            title: img.title || `${album.title || 'Image'} ${imgIndex + 1}`,
            location: album.location || 'Unknown Location',
            date: album.date || new Date().toISOString().split('T')[0],
            description: album.description || '',
            url: img.url,
            public_id: img.public_id
          })),
          createdAt: album.createdAt,
          updatedAt: album.updatedAt
        }));
        
        setAlbums(transformedAlbums);
        toast.success(`📸 Loaded ${transformedAlbums.length} albums!`);
      } else {
        throw new Error('Invalid data structure received from API');
      }
    } catch (err) {
      setError(err.message);
      toast.error(`Failed to load albums: ${err.message}`);
      console.error('Error fetching albums:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate albums for current page (8 per page)
  const albumsPerPage = 8;
  const totalPages = Math.ceil(albums.length / albumsPerPage);
  const startIndex = (currentPage - 1) * albumsPerPage;
  const visibleAlbums = albums.slice(startIndex, startIndex + albumsPerPage);

  // Handle page change
  const changePage = (direction) => {
    setIsLoading(true);
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      
      setTimeout(() => {
        setIsLoading(false);
        toast.success(`📸 Page ${newPage} loaded!`);
      }, 500);
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Open album
  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setViewMode('grid');
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
    toast.info(`Exploring ${album.title}`);
  };

  // Close album
  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedImage(null);
    setZoomLevel(1);
    document.body.style.overflow = 'unset';
  };

  // Open image view
  const openImageView = (image) => {
    setSelectedImage(image);
    setViewMode('single');
    setZoomLevel(1);
  };

  // Close image view
  const closeImageView = () => {
    setSelectedImage(null);
    setViewMode('grid');
    setZoomLevel(1);
  };

  // Navigate images
  const navigateImage = (direction) => {
    if (!selectedAlbum || !selectedImage) return;
    
    const currentIndex = selectedAlbum.images.findIndex(img => img.id === selectedImage.id);
    const newIndex = currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < selectedAlbum.images.length) {
      setSelectedImage(selectedAlbum.images[newIndex]);
      setZoomLevel(1);
    }
  };

  // Toggle favorite
  const toggleFavorite = (imageId) => {
    if (favorites.includes(imageId)) {
      setFavorites(favorites.filter(id => id !== imageId));
      toast.info('Removed from favorites');
    } else {
      setFavorites([...favorites, imageId]);
      toast.success('Added to favorites!');
    }
  };

  // Zoom controls
  const handleZoom = (direction) => {
    if (direction === 'in' && zoomLevel < 3) {
      setZoomLevel(prev => prev + 0.5);
    } else if (direction === 'out' && zoomLevel > 1) {
      setZoomLevel(prev => prev - 0.5);
    }
  };

  // Get icon component based on string
  const getIcon = (iconName) => {
    switch(iconName?.toLowerCase()) {
      case 'terrain': return <Terrain />;
      case 'beach': return <BeachAccess />;
      case 'sunny': return <WbSunny />;
      case 'nights': return <NightsStay />;
      case 'mountain': return <FilterHdr />;
      case 'wildlife': return <Park />;
      case 'road': return <Explore />;
      case 'temple': return <Landscape />;
      default: return <PhotoLibrary />;
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowLeft') navigateImage(-1);
        if (e.key === 'ArrowRight') navigateImage(1);
        if (e.key === 'Escape') closeImageView();
        if (e.key === '+' || e.key === '=') handleZoom('in');
        if (e.key === '-' || e.key === '_') handleZoom('out');
      } else if (selectedAlbum) {
        if (e.key === 'Escape') closeAlbum();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedAlbum]);

  // Calculate total photos count
  const totalPhotos = albums.reduce((acc, album) => acc + (album.images?.length || 0), 0);

  // Retry loading if error
  const handleRetry = () => {
    fetchAlbums();
  };

  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-12 w-full mt-4 rounded-2xl relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400">
              Photo Gallery
            </span>
          </h1>
          
          {/* Stats */}
          {!isLoading && !error && albums.length > 0 && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-white font-semibold flex items-center gap-2">
                  <Collections className="text-pink-400" style={{ fontSize: 20 }} />
                  {albums.length} Albums
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-white font-semibold flex items-center gap-2">
                  <Image className="text-purple-400" style={{ fontSize: 20 }} />
                  {totalPhotos} Photos
                </span>
              </div>
            </div>
          )}
          
          {/* Page navigation */}
          {!isLoading && !error && albums.length > 0 && totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <div
                onClick={() => changePage(-1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="text-white" />
              </div>
              
              <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white font-semibold">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
              
              <button
                onClick={() => changePage(1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="text-white" />
              </button>
            </div>
          )}
          
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <CameraAlt className="text-pink-400 text-2xl animate-bounce" />
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
          
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Explore beautiful collections of photographs from around the world
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col justify-center items-center h-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mb-4"
            />
            <p className="text-gray-300">Loading albums...</p>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="text-center py-12">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-red-400 text-lg mb-4">Error: {error}</p>
              <button
                onClick={handleRetry}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && albums.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 max-w-md mx-auto">
              <PhotoLibrary className="text-6xl text-gray-500 mx-auto mb-4" />
              <p className="text-gray-300 text-lg mb-2">No albums found</p>
              <p className="text-gray-400">Check back later for new content</p>
            </div>
          </div>
        )}

        {/* Albums Grid */}
        {!isLoading && !error && albums.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
            {visibleAlbums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="w-full cursor-pointer group"
                onClick={() => openAlbum(album)}
              >
                <div className="relative">
                  {/* Pentagon Shape SVG */}
                  <svg viewBox="0 0 200 220" className="w-full h-auto drop-shadow-2xl">
                    <defs>
                      <clipPath id={`pentagonClip-${album.id}`}>
                        <polygon points="100 10, 190 55, 190 155, 100 200, 10 155, 10 55" />
                      </clipPath>
                      
                      <linearGradient id={`pentagonGradient-${album.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={album.color} stopOpacity="0.9" />
                        <stop offset="100%" stopColor={album.color} stopOpacity="0.5" />
                      </linearGradient>
                    </defs>

                    {/* Pentagon background */}
                    <polygon
                      points="100 10, 190 55, 190 155, 100 200, 10 155, 10 55"
                      fill={`url(#pentagonGradient-${album.id})`}
                      stroke="white"
                      strokeWidth="3"
                      className="transition-all duration-300 group-hover:stroke-amber-400"
                    />
                    
                    {/* Cover Image */}
                    <image
                      href={album.coverImage}
                      clipPath={`url(#pentagonClip-${album.id})`}
                      width="200"
                      height="220"
                      preserveAspectRatio="xMidYMid slice"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <g className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <polygon
                        points="100 10, 190 55, 190 155, 100 200, 10 155, 10 55"
                        fill="rgba(0,0,0,0.7)"
                      />
                      
                      <foreignObject x="20" y="40" width="160" height="120">
                        <div className="flex flex-col items-center justify-center h-full text-white">
                          <Folder className="text-4xl text-amber-400 mb-2" />
                          <h3 className="font-bold text-sm text-center text-amber-400">
                            {album.title}
                          </h3>
                          <p className="text-xs text-center mt-1 text-gray-300">
                            {album.images?.length || 0} photos
                          </p>
                          <div className="flex items-center gap-1 mt-2 text-xs">
                            <Place className="text-pink-400 text-sm" />
                            <span className="truncate">{album.location}</span>
                          </div>
                        </div>
                      </foreignObject>
                    </g>
                    
                    {/* Image count badge */}
                    <foreignObject x="70" y="10" width="60" height="24">
                      <div className="bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center justify-center gap-1 border border-white/20">
                        <Image className="text-white text-xs" />
                        <span className="text-white text-xs font-semibold">{album.images?.length || 0}</span>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Album Modal - Grid View */}
        <AnimatePresence>
          {selectedAlbum && viewMode === 'grid' && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeAlbum}
                className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-4 md:inset-6 lg:inset-8 z-50 overflow-y-auto"
              >
                <div className="min-h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 p-6">
                  
                  {/* Album header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        onClick={closeAlbum}
                        className="text-white hover:text-pink-400 transition-colors bg-black/50 rounded-full p-2"
                      >
                        <ArrowBack className="text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                          <FolderOpen className="text-amber-400" />
                          {selectedAlbum.title}
                        </h2>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            <Place className="text-pink-400 text-sm" />
                            {selectedAlbum.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Person className="text-purple-400 text-sm" />
                            {selectedAlbum.photographer}
                          </span>
                          <span className="flex items-center gap-1">
                            <Image className="text-blue-400 text-sm" />
                            {selectedAlbum.images?.length || 0} photos
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={closeAlbum}
                      className="text-white bg-gradient-to-t from-red-500 to-red-700 transition-colors rounded-full p-2"
                    >
                      <Close className="text-2xl" />
                    </div>
                  </div>

                  {/* Image grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {selectedAlbum.images?.map((image, idx) => (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => openImageView(image)}
                        className="group cursor-pointer"
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-2xl">
                          <img
                            src={image.thumbnail}
                            alt={image.title}
                            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-white font-semibold text-lg mb-1">
                                {image.title}
                              </h3>
                              <p className="text-gray-300 text-sm flex items-center gap-1">
                                <Place className="text-pink-400 text-sm" />
                                {image.location}
                              </p>
                            </div>
                          </div>
                          
                          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm border border-white/20">
                            #{idx + 1}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Single Image View */}
        <AnimatePresence>
          {selectedImage && viewMode === 'single' && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeImageView}
                className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-[60]"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4"
              >
                <div className="relative w-full h-full max-w-6xl mx-auto flex flex-col">
                  
                  {/* Header */}
                  <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          onClick={closeImageView}
                          className="text-white hover:text-pink-400 transition-colors bg-black/50 rounded-full p-2"
                        >
                          <ArrowBack className="text-2xl" />
                        </div>
                        <div className="text-white ml-2">
                          <h3 className="font-bold">{selectedImage.title}</h3>
                          <p className="text-sm text-gray-300">{selectedImage.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div
                          onClick={() => handleZoom('out')}
                          disabled={zoomLevel <= 1}
                          className="text-white hover:text-blue-400 transition-colors bg-black/50 rounded-full p-2 disabled:opacity-50"
                        >
                          <ZoomOut />
                        </div>
                        <span className="text-white bg-black/50 rounded-full px-3 py-1">
                          {zoomLevel}x
                        </span>
                        <div
                          onClick={() => handleZoom('in')}
                          disabled={zoomLevel >= 3}
                          className="text-white hover:text-blue-400 transition-colors bg-black/50 rounded-full p-2 disabled:opacity-50"
                        >
                          <ZoomIn />
                        </div>
                        
                        <div
                          onClick={closeImageView}
                          className="text-white bg-gradient-to-t from-red-500 to-red-700 transition-colors rounded-full p-2"
                        >
                          <Close className="text-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image container with zoom */}
                  <div className="flex-1 flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={{ scale: zoomLevel }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="relative"
                    >
                      <img
                        src={selectedImage.src}
                        alt={selectedImage.title}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                      />
                    </motion.div>
                  </div>

                  {/* Navigation arrows */}
                  {selectedAlbum && selectedAlbum.images && (
                    <>
                      {selectedAlbum.images.findIndex(img => img.id === selectedImage.id) > 0 && (
                        <div
                          onClick={() => navigateImage(-1)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-pink-600 transition-all backdrop-blur-sm border border-white/20"
                        >
                          <ChevronLeft className="text-3xl" />
                        </div>
                      )}
                      
                      {selectedAlbum.images.findIndex(img => img.id === selectedImage.id) < selectedAlbum.images.length - 1 && (
                        <div
                          onClick={() => navigateImage(1)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-purple-600 transition-all backdrop-blur-sm border border-white/20"
                        >
                          <ChevronRight className="text-3xl" />
                        </div>
                      )}
                    </>
                  )}

                  {/* Image info footer */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="max-w-3xl mx-auto text-center">
                      <p className="text-gray-300 mb-2">
                        {selectedImage.description}
                      </p>
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-300">
                          <Place className="text-pink-400" />
                          {selectedImage.location}
                        </span>
                        <span className="flex items-center gap-1 text-gray-300">
                          <CalendarToday className="text-blue-400" />
                          {new Date(selectedImage.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};