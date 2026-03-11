// /* eslint-disable react-hooks/immutability */
// /* eslint-disable no-unused-vars */
// // components/GalleryManagement.jsx
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// // Material Icons
// import {
//   // Navigation Icons
//   Dashboard as DashboardIcon,
//   PhotoLibrary as PhotoLibraryIcon,
//   Add as AddIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Close as CloseIcon,
//   Search as SearchIcon,
//   FilterList as FilterIcon,
//   Sort as SortIcon,
//   Refresh as RefreshIcon,
//   MoreVert as MoreVertIcon,

//   // Form Icons
//   Title as TitleIcon,
//   Description as DescriptionIcon,
//   LocationOn as LocationIcon,
//   Person as PersonIcon,
//   CalendarToday as CalendarIcon,
//   CameraAlt as CameraIcon,
//   Category as CategoryIcon,
//   Image as ImageIcon,
//   Link as LinkIcon,

//   // Status Icons
//   CheckCircle as CheckCircleIcon,
//   Warning as WarningIcon,
//   Error as ErrorIcon,
//   Info as InfoIcon,
//   PublishedWithChanges as PublishedIcon,
//   Drafts as DraftIcon,
//   Archive as ArchiveIcon,

//   // Action Icons
//   Save as SaveIcon,
//   Cancel as CancelIcon,
//   Upload as UploadIcon,
//   Preview as PreviewIcon,
//   Clear as ClearIcon,

//   // View Icons
//   GridView as GridViewIcon,
//   ViewList as ViewListIcon,
//   ViewModule as ViewModuleIcon,

//   // Responsive Icons
//   PhoneIphone as MobileIcon,
//   Tablet as TabletIcon,
//   DesktopWindows as DesktopIcon,

//   // Category Icons
//   Terrain as TerrainIcon,
//   BeachAccess as BeachAccessIcon,
//   WbSunny as WbSunnyIcon,
//   NightsStay as NightsStayIcon,
//   Landscape as LandscapeIcon,
//   Park as ParkIcon,
//   FilterHdr as FilterHdrIcon,
//   Waves as WavesIcon,
// } from "@mui/icons-material";

// // API Configuration
// const API_BASE_URL = "https://myalbumnode.onrender.com";
// const API_KEY = "demo-api-key";

// // API Service
// const apiService = {
//   /* GET ALL ALBUMS */
//   getAlbums: async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/gallery`);

//       toast.success("Albums loaded successfully");

//       return response.data;
//     } catch (error) {
//       toast.error("Failed to fetch albums");

//       return {
//         success: false,
//         error: error.response?.data?.message || error.message,
//       };
//     }
//   },

//   /* GET SINGLE ALBUM */
//   getAlbum: async (id) => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/gallery/${id}`);

//       return response.data;
//     } catch (error) {
//       toast.error("Failed to fetch album");

//       return {
//         success: false,
//         error: error.response?.data?.message || error.message,
//       };
//     }
//   },

//   /* CREATE ALBUM */
//   createAlbum: async (albumData) => {
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/gallery/create`,
//         albumData,
//       );

//       toast.success("Album created successfully");

//       return response.data;
//     } catch (error) {
//       toast.error("Failed to create album");

//       return {
//         success: false,
//         error: error.response?.data?.message || error.message,
//       };
//     }
//   },

//   /* UPDATE ALBUM */
//   updateAlbum: async (id, albumData) => {
//     try {
//       const response = await axios.put(
//         `${API_BASE_URL}/gallery/${id}`,
//         albumData,
//       );

//       toast.success("Album updated successfully");

//       return response.data;
//     } catch (error) {
//       toast.error("Failed to update album");

//       return {
//         success: false,
//         error: error.response?.data?.message || error.message,
//       };
//     }
//   },

//   /* DELETE ALBUM */
//   deleteAlbum: async (id) => {
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/gallery/${id}`);

//       toast.success("Album deleted successfully");

//       return response.data;
//     } catch (error) {
//       toast.error("Failed to delete album");

//       return {
//         success: false,
//         error: error.response?.data?.message || error.message,
//       };
//     }
//   },

//   /* UPLOAD IMAGE */
//   uploadImage: async (file, albumId) => {
//     try {
//       const formData = new FormData();
//       formData.append("image", file);

//       const response = await axios.post(
//         `${API_BASE_URL}/albums/${albumId}/upload`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${API_KEY}`,
//             "Content-Type": "multipart/form-data",
//           },
//         },
//       );

//       toast.success("Image uploaded successfully");

//       return response.data;
//     } catch (error) {
//       console.error("Upload Error:", error);
//       toast.error("Image upload failed");

//       return {
//         success: false,
//         error: error.response?.data?.message || error.message,
//       };
//     }
//   },

//   /* DELETE IMAGE */
//   deleteImage: async (imageId, albumId) => {
//     try {
//       const response = await axios.delete(
//         `${API_BASE_URL}/${albumId}/images/${imageId}`,
//       );

//       toast.success("Image deleted successfully");

//       return response.data;
//     } catch (error) {
//       toast.error("Failed to delete image");

//       return {
//         success: false,
//         error: error.response?.data?.message || error.message,
//       };
//     }
//   },
// };

// // Category options
// const categories = [
//   { value: "travel", label: "Travel", icon: <TerrainIcon /> },
//   { value: "beach", label: "Beach", icon: <BeachAccessIcon /> },
//   { value: "desert", label: "Desert", icon: <WbSunnyIcon /> },
//   { value: "mountains", label: "Mountains", icon: <TerrainIcon /> },
//   { value: "forest", label: "Forest", icon: <ParkIcon /> },
//   { value: "city", label: "City", icon: <FilterHdrIcon /> },
//   { value: "water", label: "Water", icon: <WavesIcon /> },
//   { value: "night", label: "Night", icon: <NightsStayIcon /> },
// ];

// // Status options
// const statusOptions = [
//   {
//     value: "published",
//     label: "Published",
//     icon: <PublishedIcon />,
//     color: "green",
//   },
//   { value: "draft", label: "Draft", icon: <DraftIcon />, color: "yellow" },
//   {
//     value: "archived",
//     label: "Archived",
//     icon: <ArchiveIcon />,
//     color: "gray",
//   },
// ];

// export const GalleryManagement = () => {
//   // State management
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [filterCategory, setFilterCategory] = useState("all");
//   const [sortBy, setSortBy] = useState("date");
//   const [viewMode, setViewMode] = useState("grid"); // grid, list, compact
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalMode, setModalMode] = useState("create"); // create, edit, view
//   const [formData, setFormData] = useState({
//     title: "",
//     location: "",
//     description: "",
//     photographer: "",
//     date: "",
//     category: "",
//     status: "draft",
//     tags: "",
//     coverImage: "",
//     images: [],
//   });
//   const [uploading, setUploading] = useState(false);
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(6);
//   const [screenSize, setScreenSize] = useState("desktop");

//   // Detect screen size for responsive design
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 480) setScreenSize("xsm");
//       else if (width < 640) setScreenSize("sm");
//       else if (width < 768) setScreenSize("md");
//       else if (width < 1024) setScreenSize("lg");
//       else setScreenSize("xl");
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Fetch albums on mount
//   useEffect(() => {
//     fetchAlbums();
//   }, []);

//   // Fetch albums from API
//   const fetchAlbums = async () => {
//     setLoading(true);
//     const response = await apiService.getAlbums();
//     if (response.success) {
//       setAlbums(response.data);
//       toast.success("Albums loaded successfully");
//     } else {
//       toast.error("Failed to load albums");
//     }
//     setLoading(false);
//   };

//   // Handle refresh
//   const handleRefresh = () => {
//     fetchAlbums();
//     toast.info("Refreshing data...", {
//       icon: <RefreshIcon />,
//     });
//   };

//   // Open create modal
//   const openCreateModal = () => {
//     setFormData({
//       title: "",
//       location: "",
//       description: "",
//       photographer: "",
//       date: new Date().toISOString().split("T")[0],
//       category: "",
//       status: "draft",
//       tags: "",
//       coverImage: "",
//       images: [],
//     });
//     setSelectedImages([]);
//     setModalMode("create");
//     setIsModalOpen(true);
//   };

//   // Open edit modal
//   const openEditModal = (album) => {
//     setSelectedAlbum(album);
//     setFormData({
//       title: album.title || "",
//       location: album.location || "",
//       description: album.description || "",
//       photographer: album.photographer || "",
//       date: album.date || "",
//       category: album.category || "",
//       status: album.status || "draft",
//       tags: album.tags ? album.tags.join(", ") : "",
//       coverImage: album.coverImage || "",
//       images: album.images || [],
//     });
//     setSelectedImages([]);
//     setModalMode("edit");
//     setIsModalOpen(true);
//   };

//   // Open view modal
//   const openViewModal = (album) => {
//     setSelectedAlbum(album);
//     setFormData({
//       title: album.title || "",
//       location: album.location || "",
//       description: album.description || "",
//       photographer: album.photographer || "",
//       date: album.date || "",
//       category: album.category || "",
//       status: album.status || "draft",
//       tags: album.tags ? album.tags.join(", ") : "",
//       coverImage: album.coverImage || "",
//       images: album.images || [],
//     });
//     setModalMode("view");
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedAlbum(null);
//     setSelectedImages([]);
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle image upload
//   const handleImageUpload = async (e) => {
//     const files = Array.from(e.target.files);
//     setUploading(true);

//     for (const file of files) {
//       const response = await apiService.uploadImage(file, selectedAlbum?.id);
//       if (response.success) {
//         setFormData((prev) => ({
//           ...prev,
//           images: [...prev.images, response.data],
//         }));
//         setSelectedImages((prev) => [...prev, response.data]);
//         toast.success(`Uploaded: ${file.name}`);
//       } else {
//         toast.error(`Failed to upload: ${file.name}`);
//       }
//     }

//     setUploading(false);
//   };

//   // Remove image
//   const handleRemoveImage = async (imageId) => {
//     if (modalMode === "edit" && selectedAlbum) {
//       const response = await apiService.deleteImage(imageId, selectedAlbum.id);
//       if (response.success) {
//         setFormData((prev) => ({
//           ...prev,
//           images: prev.images.filter((img) => img.id !== imageId),
//         }));
//         setSelectedImages((prev) => prev.filter((img) => img.id !== imageId));
//         toast.success("Image removed");
//       }
//     } else {
//       // For new album, just remove from state
//       setFormData((prev) => ({
//         ...prev,
//         images: prev.images.filter((img) => img.id !== imageId),
//       }));
//       setSelectedImages((prev) => prev.filter((img) => img.id !== imageId));
//     }
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const albumData = {
//       ...formData,
//       tags: formData.tags
//         .split(",")
//         .map((tag) => tag.trim())
//         .filter((tag) => tag),
//       updatedAt: new Date().toISOString(),
//     };

//     let response;

//     if (modalMode === "create") {
//       response = await apiService.createAlbum(albumData);
//       if (response.success) {
//         setAlbums((prev) => [response.data, ...prev]);
//         toast.success("Album created successfully");
//         closeModal();
//       }
//     } else if (modalMode === "edit" && selectedAlbum) {
//       response = await apiService.updateAlbum(selectedAlbum.id, albumData);
//       if (response.success) {
//         setAlbums((prev) =>
//           prev.map((album) =>
//             album.id === selectedAlbum.id ? { ...album, ...albumData } : album,
//           ),
//         );
//         toast.success("Album updated successfully");
//         closeModal();
//       }
//     }
//   };

//   // Handle delete album
//   const handleDeleteAlbum = async (album) => {
//     if (window.confirm(`Are you sure you want to delete "${album.title}"?`)) {
//       const response = await apiService.deleteAlbum(album.id);
//       if (response.success) {
//         setAlbums((prev) => prev.filter((a) => a.id !== album.id));
//         toast.success("Album deleted successfully");
//       }
//     }
//   };

//   // Filter and sort albums
//   const filteredAlbums = albums
//     .filter((album) => {
//       const matchesSearch =
//         album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         album.photographer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         album.location?.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesStatus =
//         filterStatus === "all" || album.status === filterStatus;
//       const matchesCategory =
//         filterCategory === "all" || album.category === filterCategory;
//       return matchesSearch && matchesStatus && matchesCategory;
//     })
//     .sort((a, b) => {
//       if (sortBy === "date") return new Date(b.date) - new Date(a.date);
//       if (sortBy === "title") return a.title.localeCompare(b.title);
//       if (sortBy === "views") return b.views - a.views;
//       if (sortBy === "likes") return b.likes - a.likes;
//       return 0;
//     });

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentAlbums = filteredAlbums.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredAlbums.length / itemsPerPage);

//   // Get status color
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "published":
//         return "text-green-400 bg-green-400/20 border-green-400/50";
//       case "draft":
//         return "text-yellow-400 bg-yellow-400/20 border-yellow-400/50";
//       case "archived":
//         return "text-gray-400 bg-gray-400/20 border-gray-400/50";
//       default:
//         return "text-gray-400 bg-gray-400/20 border-gray-400/50";
//     }
//   };

//   // Get category icon
//   const getCategoryIcon = (category) => {
//     const cat = categories.find((c) => c.value === category);
//     return cat?.icon || <PhotoLibraryIcon />;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 mt-4 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
//       {/* Header */}
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mb-6 sm:mb-8"
//       >
//         <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-4 items-center">
//           {/* Title Section - Responsive column spans */}
//           <div className="col-span-1 xsm:col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-10 flex items-center gap-3">
//             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
//               <PhotoLibraryIcon className="text-white text-xl sm:text-2xl" />
//             </div>
//             <div>
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
//                 Gallery Management
//               </h1>
//               <p className="text-xs sm:text-sm text-gray-400">
//                 Manage your albums and images
//               </p>
//             </div>
//           </div>

//           {/* Button Section - Responsive column spans and alignment */}
//           <div className="col-span-1 xsm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 flex xsm:justify-end md:justify-start lg:justify-end">
//             <button
//               onClick={openCreateModal}
//               className="w-full xsm:w-auto md:w-full lg:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
//             >
//               <AddIcon className="text-lg" />
//               <span className="hidden xsm:inline">Create New Album</span>
//               <span className="xsm:hidden">Create</span>
//             </button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Filters Bar - Responsive */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30 p-3 sm:p-4 mb-6"
//       >
//         <div className="grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
//           {/* Search - Takes more space on larger screens */}
//           <div className="col-span-1 xsm:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-5">
//             <div className="relative">
//               <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//               <input
//                 type="text"
//                 placeholder="Search albums..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
//               />
//             </div>
//           </div>

//           {/* Status Filter */}
//           <div className="col-span-1 xsm:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2">
//             <select
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm sm:text-base"
//             >
//               <option value="all">All Status</option>
//               {statusOptions.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                   {opt.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Category Filter */}
//           <div className="col-span-1 xsm:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2">
//             <select
//               value={filterCategory}
//               onChange={(e) => setFilterCategory(e.target.value)}
//               className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm sm:text-base"
//             >
//               <option value="all">All Categories</option>
//               {categories.map((cat) => (
//                 <option key={cat.value} value={cat.value}>
//                   {cat.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Sort By */}
//           <div className="col-span-1 xsm:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2">
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm sm:text-base"
//             >
//               <option value="date">Sort by Date</option>
//               <option value="title">Sort by Title</option>
//               <option value="views">Sort by Views</option>
//               <option value="likes">Sort by Likes</option>
//             </select>
//           </div>

//           {/* View Mode Toggle and Refresh - Grouped together */}
//           <div className="col-span-1 xsm:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
//             <div className="flex items-center gap-2">
//               {/* View Mode Toggle */}
//               <div className="flex items-center gap-1 bg-gray-700 rounded-lg p-1 flex-1">
//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`p-2 rounded-lg transition-colors flex-1 flex justify-center ${
//                     viewMode === "grid"
//                       ? "bg-purple-500 text-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   <GridViewIcon className="text-lg" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("list")}
//                   className={`p-2 rounded-lg transition-colors flex-1 flex justify-center ${
//                     viewMode === "list"
//                       ? "bg-purple-500 text-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   <ViewListIcon className="text-lg" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("compact")}
//                   className={`p-2 rounded-lg transition-colors flex-1 flex justify-center ${
//                     viewMode === "compact"
//                       ? "bg-purple-500 text-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   <ViewModuleIcon className="text-lg" />
//                 </button>
//               </div>

//               {/* Refresh Button */}
//               <button
//                 onClick={handleRefresh}
//                 className="p-2 bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors flex-shrink-0"
//               >
//                 <RefreshIcon
//                   className={`text-lg ${loading ? "animate-spin" : ""}`}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Results count */}
//         <div className="mt-3 text-xs sm:text-sm text-gray-400">
//           Showing {indexOfFirstItem + 1}-
//           {Math.min(indexOfLastItem, filteredAlbums.length)} of{" "}
//           {filteredAlbums.length} albums
//         </div>
//       </motion.div>

//       {/* Albums Grid - Responsive */}
//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
//         </div>
//       ) : (
//         <>
//           {/* Grid View */}
//           {viewMode === "grid" && (
//             <div className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
//               {currentAlbums.map((album, index) => (
//                 <motion.div
//                   key={album.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.05 }}
//                   className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-all"
//                 >
//                   {/* Cover Image */}
//                   <div className="relative aspect-square">
//                     <img
//                       src={
//                         album.coverImage || "https://via.placeholder.com/400"
//                       }
//                       alt={album.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />

//                     {/* Status Badge */}
//                     <div className="absolute top-2 right-2">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(album.status)}`}
//                       >
//                         {album.status}
//                       </span>
//                     </div>

//                     {/* Actions Overlay */}
//                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
//                       <button
//                         onClick={() => openViewModal(album)}
//                         className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                         title="View"
//                       >
//                         <PreviewIcon className="text-lg" />
//                       </button>
//                       <button
//                         onClick={() => openEditModal(album)}
//                         className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
//                         title="Edit"
//                       >
//                         <EditIcon className="text-lg" />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteAlbum(album)}
//                         className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//                         title="Delete"
//                       >
//                         <DeleteIcon className="text-lg" />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Album Info */}
//                   <div className="p-3 sm:p-4">
//                     <div className="flex items-start justify-between mb-2">
//                       <div>
//                         <h3 className="text-white font-semibold text-sm sm:text-base truncate">
//                           {album.title}
//                         </h3>
//                         <p className="text-gray-400 text-xs sm:text-sm truncate">
//                           {album.location}
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-pink-400 text-xs sm:text-sm font-semibold">
//                           {album.views?.toLocaleString()}
//                         </p>
//                         <p className="text-gray-500 text-xs">views</p>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between text-xs text-gray-400">
//                       <span className="flex items-center gap-1">
//                         <PersonIcon className="text-sm" />
//                         <span className="truncate max-w-[100px]">
//                           {album.photographer}
//                         </span>
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <ImageIcon className="text-sm" />
//                         {album.images?.length || 0} photos
//                       </span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* List View */}
//           {viewMode === "list" && (
//             <div className="space-y-3">
//               {currentAlbums.map((album, index) => (
//                 <motion.div
//                   key={album.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30 p-3 sm:p-4 flex flex-col xsm:flex-row items-start xsm:items-center gap-3 sm:gap-4"
//                 >
//                   <img
//                     src={album.coverImage || "https://via.placeholder.com/60"}
//                     alt={album.title}
//                     className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
//                   />

//                   <div className="flex-1 min-w-0">
//                     <div className="flex flex-col xsm:flex-row xsm:items-center gap-2 xsm:gap-4">
//                       <div className="flex-1">
//                         <h3 className="text-white font-semibold text-sm sm:text-base truncate">
//                           {album.title}
//                         </h3>
//                         <p className="text-gray-400 text-xs sm:text-sm truncate">
//                           {album.location} • {album.photographer}
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-3 sm:gap-4">
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(album.status)}`}
//                         >
//                           {album.status}
//                         </span>

//                         <div className="flex items-center gap-2 text-xs text-gray-400">
//                           <span className="flex items-center gap-1">
//                             <VisibilityIcon className="text-sm" />
//                             {album.views?.toLocaleString()}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <ImageIcon className="text-sm" />
//                             {album.images?.length}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2 w-full xsm:w-auto justify-end">
//                     <button
//                       onClick={() => openViewModal(album)}
//                       className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
//                       title="View"
//                     >
//                       <PreviewIcon className="text-lg" />
//                     </button>
//                     <button
//                       onClick={() => openEditModal(album)}
//                       className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
//                       title="Edit"
//                     >
//                       <EditIcon className="text-lg" />
//                     </button>
//                     <button
//                       onClick={() => handleDeleteAlbum(album)}
//                       className="p-2 text-gray-400 hover:text-red-400 transition-colors"
//                       title="Delete"
//                     >
//                       <DeleteIcon className="text-lg" />
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Compact View */}
//           {viewMode === "compact" && (
//             <div className="grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
//               {currentAlbums.map((album, index) => (
//                 <motion.div
//                   key={album.id}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: index * 0.03 }}
//                   className="group relative"
//                 >
//                   <img
//                     src={album.coverImage || "https://via.placeholder.com/150"}
//                     alt={album.title}
//                     className="w-full aspect-square rounded-lg object-cover"
//                   />

//                   <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-1 p-1">
//                     <button
//                       onClick={() => openViewModal(album)}
//                       className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                     >
//                       <PreviewIcon className="text-xs sm:text-sm" />
//                     </button>
//                     <button
//                       onClick={() => openEditModal(album)}
//                       className="p-1 bg-purple-500 text-white rounded hover:bg-purple-600"
//                     >
//                       <EditIcon className="text-xs sm:text-sm" />
//                     </button>
//                   </div>

//                   <p className="text-white text-xs mt-1 truncate">
//                     {album.title}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Pagination - Responsive */}
//           {totalPages > 1 && (
//             <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-sm sm:text-base"
//               >
//                 Previous
//               </button>

//               <div className="flex items-center gap-1">
//                 {[...Array(totalPages)].map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCurrentPage(i + 1)}
//                     className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors text-sm sm:text-base ${
//                       currentPage === i + 1
//                         ? "bg-purple-500 text-white"
//                         : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                     }`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}
//               </div>

//               <button
//                 onClick={() =>
//                   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                 }
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-sm sm:text-base"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}

//       {/* Create/Edit Modal - Responsive */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeModal}
//               className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
//             />

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="fixed inset-2 xsm:inset-4 md:inset-6 lg:inset-10 z-50 overflow-y-auto"
//             >
//               <div className="min-h-full flex items-center justify-center">
//                 <div className="w-full max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/30 p-4 sm:p-6">
//                   {/* Modal Header */}
//                   <div className="flex items-center justify-between mb-4 sm:mb-6">
//                     <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
//                       {modalMode === "create"
//                         ? "Create New Album"
//                         : modalMode === "edit"
//                           ? "Edit Album"
//                           : "View Album"}
//                     </h2>
//                     <button
//                       onClick={closeModal}
//                       className="p-2 text-gray-400 bg-gradient-to-t from-red-500 to-red-700 rounded-lg transition-colors"
//                     >
//                       <CloseIcon />
//                     </button>
//                   </div>

//                   {/* Form */}
//                   <form
//                     onSubmit={handleSubmit}
//                     className="space-y-4 sm:space-y-6"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                       {/* Left Column */}
//                       <div className="space-y-4">
//                         {/* Title */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Title *
//                           </label>
//                           <div className="relative">
//                             <TitleIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="text"
//                               name="title"
//                               value={formData.title}
//                               onChange={handleInputChange}
//                               required
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter album title"
//                             />
//                           </div>
//                         </div>

//                         {/* Location */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Location
//                           </label>
//                           <div className="relative">
//                             <LocationIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="text"
//                               name="location"
//                               value={formData.location}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter location"
//                             />
//                           </div>
//                         </div>

//                         {/* Photographer */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Photographer
//                           </label>
//                           <div className="relative">
//                             <PersonIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="text"
//                               name="photographer"
//                               value={formData.photographer}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter photographer name"
//                             />
//                           </div>
//                         </div>

//                         {/* Date */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Date
//                           </label>
//                           <div className="relative">
//                             <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="date"
//                               name="date"
//                               value={formData.date}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                             />
//                           </div>
//                         </div>

//                         {/* Category */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Category
//                           </label>
//                           <div className="relative">
//                             <CategoryIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <select
//                               name="category"
//                               value={formData.category}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                             >
//                               <option value="">Select category</option>
//                               {categories.map((cat) => (
//                                 <option key={cat.value} value={cat.value}>
//                                   {cat.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                         </div>

//                         {/* Status */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Status
//                           </label>
//                           <div className="relative">
//                             <select
//                               name="status"
//                               value={formData.status}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                             >
//                               {statusOptions.map((opt) => (
//                                 <option key={opt.value} value={opt.value}>
//                                   {opt.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Right Column */}
//                       <div className="space-y-4">
//                         {/* Description */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Description
//                           </label>
//                           <div className="relative">
//                             <DescriptionIcon className="absolute left-3 top-3 text-gray-400 text-lg" />
//                             <textarea
//                               name="description"
//                               value={formData.description}
//                               onChange={handleInputChange}
//                               rows="4"
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter album description"
//                             />
//                           </div>
//                         </div>

//                         {/* Tags */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Tags (comma separated)
//                           </label>
//                           <div className="relative">
//                             <input
//                               type="text"
//                               name="tags"
//                               value={formData.tags}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="nature, travel, landscape"
//                             />
//                           </div>
//                         </div>

//                         {/* Cover Image URL */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Cover Image URL
//                           </label>
//                           <div className="relative">
//                             <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="url"
//                               name="coverImage"
//                               value={formData.coverImage}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="https://example.com/image.jpg"
//                             />
//                           </div>
//                         </div>

//                         {/* Image Upload */}
//                         {modalMode !== "view" && (
//                           <div>
//                             <label className="block text-gray-400 text-xs sm:text-sm mb-2">
//                               Upload Images
//                             </label>
//                             <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-purple-500 transition-colors">
//                               <input
//                                 type="file"
//                                 multiple
//                                 accept="image/*"
//                                 onChange={handleImageUpload}
//                                 className="hidden"
//                                 id="image-upload"
//                                 disabled={uploading}
//                               />
//                               <label
//                                 htmlFor="image-upload"
//                                 className="cursor-pointer flex flex-col items-center gap-2"
//                               >
//                                 <UploadIcon className="text-3xl text-gray-400" />
//                                 <span className="text-gray-400 text-sm">
//                                   {uploading
//                                     ? "Uploading..."
//                                     : "Click to upload images"}
//                                 </span>
//                                 <span className="text-gray-500 text-xs">
//                                   PNG, JPG, GIF up to 10MB
//                                 </span>
//                               </label>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Images Grid */}
//                     {formData.images.length > 0 && (
//                       <div>
//                         <h3 className="text-white font-semibold text-sm sm:text-base mb-3">
//                           Images ({formData.images.length})
//                         </h3>
//                         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
//                           {formData.images.map((image, idx) => (
//                             <div
//                               key={image.id || idx}
//                               className="relative group"
//                             >
//                               <img
//                                 src={image.thumbnail || image.url}
//                                 alt={image.title}
//                                 className="w-full aspect-square rounded-lg object-cover"
//                               />
//                               {modalMode !== "view" && (
//                                 <button
//                                   type="button"
//                                   onClick={() => handleRemoveImage(image.id)}
//                                   className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                                 >
//                                   <CloseIcon className="text-xs" />
//                                 </button>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Form Actions */}
//                     {modalMode !== "view" && (
//                       <div className="flex flex-col xsm:flex-row gap-3 justify-end pt-4">
//                         <button
//                           type="button"
//                           onClick={closeModal}
//                           className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
//                         >
//                           Cancel
//                         </button>
//                         <button
//                           type="submit"
//                           className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
//                         >
//                           {modalMode === "create"
//                             ? "Create Album"
//                             : "Save Changes"}
//                         </button>
//                       </div>
//                     )}
//                   </form>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// /* eslint-disable react-hooks/immutability */
// /* eslint-disable no-unused-vars */
// // components/GalleryManagement.jsx
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// // Material Icons
// import {
//   // Navigation Icons
//   Dashboard as DashboardIcon,
//   PhotoLibrary as PhotoLibraryIcon,
//   Add as AddIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Close as CloseIcon,
//   Search as SearchIcon,
//   FilterList as FilterIcon,
//   Sort as SortIcon,
//   Refresh as RefreshIcon,
//   MoreVert as MoreVertIcon,
//   Visibility as VisibilityIcon,
//   Favorite as FavoriteIcon,
//   Download as DownloadIcon,

//   // Form Icons
//   Title as TitleIcon,
//   Description as DescriptionIcon,
//   LocationOn as LocationIcon,
//   Person as PersonIcon,
//   CalendarToday as CalendarIcon,
//   CameraAlt as CameraIcon,
//   Category as CategoryIcon,
//   Image as ImageIcon,
//   Link as LinkIcon,
//   ColorLens as ColorIcon,
//   FormatQuote as FormatQuoteIcon,

//   // Status Icons
//   CheckCircle as CheckCircleIcon,
//   Warning as WarningIcon,
//   Error as ErrorIcon,
//   Info as InfoIcon,

//   // Action Icons
//   Save as SaveIcon,
//   Cancel as CancelIcon,
//   Upload as UploadIcon,
//   Preview as PreviewIcon,
//   Clear as ClearIcon,

//   // View Icons
//   GridView as GridViewIcon,
//   ViewList as ViewListIcon,
//   ViewModule as ViewModuleIcon,

//   // Category Icons
//   Terrain as TerrainIcon,
//   BeachAccess as BeachAccessIcon,
//   WbSunny as WbSunnyIcon,
//   NightsStay as NightsStayIcon,
//   Landscape as LandscapeIcon,
//   Park as ParkIcon,
//   FilterHdr as FilterHdrIcon,
//   Waves as WavesIcon,
// } from "@mui/icons-material";

// // API Configuration
// const API_BASE_URL = "https://myalbumnode.onrender.com";

// // API Service
// const apiService = {
//   /* GET ALL ALBUMS */
//   getAlbums: async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/gallery`);

//       // Log the response to see its structure (remove in production)
//       // console.log("API Response:", response.data);

//       // Handle different response structures
//       let albumsData = [];

//       if (Array.isArray(response.data)) {
//         // If response.data is directly an array
//         albumsData = response.data;
//       } else if (response.data && Array.isArray(response.data.data)) {
//         // If response has { data: [...] } structure
//         albumsData = response.data.data;
//       } else if (
//         response.data &&
//         response.data.albums &&
//         Array.isArray(response.data.albums)
//       ) {
//         // If response has { albums: [...] } structure
//         albumsData = response.data.albums;
//       } else if (
//         response.data &&
//         response.data.success &&
//         Array.isArray(response.data.albums)
//       ) {
//         // If response has { success: true, albums: [...] } structure
//         albumsData = response.data.albums;
//       } else if (response.data && typeof response.data === "object") {
//         // If it's an object but not an array, try to find any array property
//         for (let key in response.data) {
//           if (Array.isArray(response.data[key])) {
//             albumsData = response.data[key];
//             break;
//           }
//         }
//       }

//       // If we still don't have an array, return empty array
//       if (!Array.isArray(albumsData)) {
//         console.warn(
//           "Could not extract albums array from response:",
//           response.data,
//         );
//         albumsData = [];
//       }

//       toast.success("Albums loaded successfully");
//       return albumsData;
//     } catch (error) {
//       console.error("Error fetching albums:", error);
//       toast.error("Failed to fetch albums");
//       return []; // Return empty array on error
//     }
//   },

//   /* GET SINGLE ALBUM */
//   getAlbum: async (id) => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/gallery/${id}`);

//       // Extract album data from response
//       let albumData = null;

//       if (response.data && typeof response.data === "object") {
//         if (response.data.data) {
//           albumData = response.data.data;
//         } else if (response.data.album) {
//           albumData = response.data.album;
//         } else {
//           albumData = response.data;
//         }
//       }

//       return albumData;
//     } catch (error) {
//       console.error("Error fetching album:", error);
//       toast.error("Failed to fetch album");
//       return null;
//     }
//   },

//   /* CREATE ALBUM */
//   createAlbum: async (formData) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/gallery`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log(response.data);
//       // Extract created album from response
//       let newAlbum = null;

//       if (response.data && typeof response.data === "object") {
//         if (response.data.data) {
//           newAlbum = response.data.data;
//         } else if (response.data.album) {
//           newAlbum = response.data.album;
//         } else {
//           newAlbum = response.data;
//         }
//       }

//       toast.success("Album created successfully");
//       return newAlbum;
//     } catch (error) {
//       console.error("Error creating album:", error);
//       toast.error(error.response?.data?.message || "Failed to create album");
//       return null;
//     }
//   },

//   /* UPDATE ALBUM */
//   updateAlbum: async (id, formData) => {
//     try {
//       const response = await axios.put(
//         `${API_BASE_URL}/gallery/${id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         },
//       );

//       // Extract updated album from response
//       let updatedAlbum = null;

//       if (response.data && typeof response.data === "object") {
//         if (response.data.data) {
//           updatedAlbum = response.data.data;
//         } else if (response.data.album) {
//           updatedAlbum = response.data.album;
//         } else {
//           updatedAlbum = response.data;
//         }
//       }

//       toast.success("Album updated successfully");
//       return updatedAlbum;
//     } catch (error) {
//       console.error("Error updating album:", error);
//       toast.error(error.response?.data?.message || "Failed to update album");
//       return null;
//     }
//   },

//   /* DELETE ALBUM */
//   deleteAlbum: async (id) => {
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/gallery/${id}`);

//       toast.success("Album deleted successfully");
//       return { success: true };
//     } catch (error) {
//       console.error("Error deleting album:", error);
//       toast.error(error.response?.data?.message || "Failed to delete album");
//       return { success: false };
//     }
//   },

//   /* DELETE IMAGE */
//   deleteImage: async (albumId, imageId) => {
//     try {
//       const response = await axios.delete(
//         `${API_BASE_URL}/gallery/${albumId}/images/${imageId}`,
//       );

//       toast.success("Image deleted successfully");
//       return { success: true };
//     } catch (error) {
//       console.error("Error deleting image:", error);
//       toast.error(error.response?.data?.message || "Failed to delete image");
//       return { success: false };
//     }
//   },
// };

// // Color options for albums
// const colorOptions = [
//   { value: "#ef4444", label: "Red", class: "bg-red-500" },
//   { value: "#f97316", label: "Orange", class: "bg-orange-500" },
//   { value: "#eab308", label: "Yellow", class: "bg-yellow-500" },
//   { value: "#22c55e", label: "Green", class: "bg-green-500" },
//   { value: "#3b82f6", label: "Blue", class: "bg-blue-500" },
//   { value: "#6366f1", label: "Indigo", class: "bg-indigo-500" },
//   { value: "#a855f7", label: "Purple", class: "bg-purple-500" },
//   { value: "#ec4899", label: "Pink", class: "bg-pink-500" },
//   { value: "#6b7280", label: "Gray", class: "bg-gray-500" },
// ];

// // Icon options
// const iconOptions = [
//   { value: "terrain", label: "Terrain", icon: <TerrainIcon /> },
//   { value: "beach", label: "Beach", icon: <BeachAccessIcon /> },
//   { value: "sunny", label: "Sunny", icon: <WbSunnyIcon /> },
//   { value: "night", label: "Night", icon: <NightsStayIcon /> },
//   { value: "landscape", label: "Landscape", icon: <LandscapeIcon /> },
//   { value: "park", label: "Park", icon: <ParkIcon /> },
//   { value: "mountain", label: "Mountain", icon: <FilterHdrIcon /> },
//   { value: "waves", label: "Waves", icon: <WavesIcon /> },
// ];

// export const GalleryManagement = () => {
//   // State management
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("createdAt");
//   const [viewMode, setViewMode] = useState("grid"); // grid, list, compact
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalMode, setModalMode] = useState("create"); // create, edit, view
//   const [formData, setFormData] = useState({
//     title: "",
//     location: "",
//     description: "",
//     photographer: "",
//     date: "",
//     color: "#6366f1",
//     icon: "terrain",
//     coverImage: null,
//     images: [],
//   });
//   const [uploading, setUploading] = useState(false);
//   const [selectedFiles, setSelectedFiles] = useState({
//     coverImage: null,
//     images: [],
//   });
//   const [coverPreview, setCoverPreview] = useState(null);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(6);
//   const [screenSize, setScreenSize] = useState("desktop");

//   // Detect screen size for responsive design
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 480) setScreenSize("xsm");
//       else if (width < 640) setScreenSize("sm");
//       else if (width < 768) setScreenSize("md");
//       else if (width < 1024) setScreenSize("lg");
//       else setScreenSize("xl");
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Fetch albums on mount
//   useEffect(() => {
//     fetchAlbums();
//   }, []);

//   // Fetch albums from API
//   const fetchAlbums = async () => {
//     setLoading(true);
//     try {
//       const data = await apiService.getAlbums();
//       // Ensure we always set an array
//       setAlbums(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error("Error in fetchAlbums:", error);
//       setAlbums([]);
//       toast.error("Failed to load albums");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle refresh
//   const handleRefresh = () => {
//     fetchAlbums();
//     toast.info("Refreshing data...", {
//       icon: <RefreshIcon />,
//     });
//   };

//   // Open create modal
//   const openCreateModal = () => {
//     setFormData({
//       title: "",
//       location: "",
//       description: "",
//       photographer: "",
//       date: new Date().toISOString().split("T")[0],
//       color: "#6366f1",
//       icon: "terrain",
//       coverImage: null,
//       images: [],
//     });
//     setSelectedFiles({
//       coverImage: null,
//       images: [],
//     });
//     setCoverPreview(null);
//     setImagePreviews([]);
//     setModalMode("create");
//     setIsModalOpen(true);
//   };

//   // Open edit modal
//   const openEditModal = (album) => {
//     setSelectedAlbum(album);
//     setFormData({
//       title: album.title || "",
//       location: album.location || "",
//       description: album.description || "",
//       photographer: album.photographer || "",
//       date: album.date || "",
//       color: album.color || "#6366f1",
//       icon: album.icon || "terrain",
//       coverImage: album.coverImage || null,
//       images: album.images || [],
//     });
//     setCoverPreview(album.coverImage?.url || null);
//     setSelectedFiles({
//       coverImage: null,
//       images: [],
//     });
//     setImagePreviews([]);
//     setModalMode("edit");
//     setIsModalOpen(true);
//   };

//   // Open view modal
//   const openViewModal = (album) => {
//     setSelectedAlbum(album);
//     setFormData({
//       title: album.title || "",
//       location: album.location || "",
//       description: album.description || "",
//       photographer: album.photographer || "",
//       date: album.date || "",
//       color: album.color || "#6366f1",
//       icon: album.icon || "terrain",
//       coverImage: album.coverImage || null,
//       images: album.images || [],
//     });
//     setCoverPreview(album.coverImage?.url || null);
//     setModalMode("view");
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedAlbum(null);
//     setSelectedFiles({
//       coverImage: null,
//       images: [],
//     });
//     setCoverPreview(null);
//     setImagePreviews([]);
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle cover image selection
//   const handleCoverImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFiles((prev) => ({
//         ...prev,
//         coverImage: file,
//       }));

//       // Create preview
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setCoverPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle multiple images selection
//   const handleImagesChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length > 0) {
//       setSelectedFiles((prev) => ({
//         ...prev,
//         images: [...prev.images, ...files],
//       }));

//       // Create previews
//       files.forEach((file) => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setImagePreviews((prev) => [...prev, reader.result]);
//         };
//         reader.readAsDataURL(file);
//       });
//     }
//   };

//   // Remove selected image from preview
//   const handleRemoveSelectedImage = (index) => {
//     setSelectedFiles((prev) => ({
//       ...prev,
//       images: prev.images.filter((_, i) => i !== index),
//     }));
//     setImagePreviews((prev) => prev.filter((_, i) => i !== index));
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setUploading(true);

//     const formDataToSend = new FormData();

//     // Append text fields
//     formDataToSend.append("title", formData.title);
//     formDataToSend.append("location", formData.location || "");
//     formDataToSend.append("description", formData.description || "");
//     formDataToSend.append("photographer", formData.photographer || "");
//     formDataToSend.append("date", formData.date || "");
//     formDataToSend.append("color", formData.color);
//     formDataToSend.append("icon", formData.icon);

//     // Append cover image if new one selected
//     if (selectedFiles.coverImage) {
//       formDataToSend.append("coverImage", selectedFiles.coverImage);
//     }

//     // Append new images
//     selectedFiles.images.forEach((image) => {
//       formDataToSend.append("images", image);
//     });

//     let response;

//     try {
//       if (modalMode === "create") {
//         response = await apiService.createAlbum(formDataToSend);
//         if (response) {
//           setAlbums((prev) =>
//             Array.isArray(prev) ? [response, ...prev] : [response],
//           );
//           toast.success("Album created successfully");
//           closeModal();
//         }
//       } else if (modalMode === "edit" && selectedAlbum) {
//         response = await apiService.updateAlbum(
//           selectedAlbum._id,
//           formDataToSend,
//         );
//         if (response) {
//           setAlbums((prev) =>
//             Array.isArray(prev)
//               ? prev.map((album) =>
//                   album._id === selectedAlbum._id ? response : album,
//                 )
//               : [response],
//           );
//           toast.success("Album updated successfully");
//           closeModal();
//         }
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Operation failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // Handle delete album
//   const handleDeleteAlbum = async (album) => {
//     if (window.confirm(`Are you sure you want to delete "${album.title}"?`)) {
//       const response = await apiService.deleteAlbum(album._id);
//       if (response.success) {
//         setAlbums((prev) =>
//           Array.isArray(prev) ? prev.filter((a) => a._id !== album._id) : [],
//         );
//         toast.success("Album deleted successfully");
//       }
//     }
//   };

//   // Handle delete image from album
//   const handleDeleteImage = async (albumId, imageId) => {
//     if (window.confirm("Are you sure you want to delete this image?")) {
//       const response = await apiService.deleteImage(albumId, imageId);
//       if (response.success) {
//         // Update local state
//         setAlbums((prev) =>
//           Array.isArray(prev)
//             ? prev.map((album) => {
//                 if (album._id === albumId) {
//                   return {
//                     ...album,
//                     images: album.images.filter((img) => img._id !== imageId),
//                   };
//                 }
//                 return album;
//               })
//             : [],
//         );

//         // Update form data if modal is open
//         if (selectedAlbum && selectedAlbum._id === albumId) {
//           setFormData((prev) => ({
//             ...prev,
//             images: prev.images.filter((img) => img._id !== imageId),
//           }));
//         }

//         toast.success("Image deleted successfully");
//       }
//     }
//   };

//   // Filter and sort albums - with safety check for arrays
//   const filteredAlbums = Array.isArray(albums)
//     ? albums
//         .filter((album) => {
//           if (!album) return false;
//           const matchesSearch =
//             (album.title?.toLowerCase() || "").includes(
//               searchTerm.toLowerCase(),
//             ) ||
//             (album.photographer?.toLowerCase() || "").includes(
//               searchTerm.toLowerCase(),
//             ) ||
//             (album.location?.toLowerCase() || "").includes(
//               searchTerm.toLowerCase(),
//             );
//           return matchesSearch;
//         })
//         .sort((a, b) => {
//           if (!a || !b) return 0;
//           if (sortBy === "createdAt") {
//             return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
//           }
//           if (sortBy === "title") {
//             return (a.title || "").localeCompare(b.title || "");
//           }
//           if (sortBy === "views") {
//             return (b.statistics?.views || 0) - (a.statistics?.views || 0);
//           }
//           if (sortBy === "likes") {
//             return (b.statistics?.likes || 0) - (a.statistics?.likes || 0);
//           }
//           return 0;
//         })
//     : [];

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentAlbums = filteredAlbums.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredAlbums.length / itemsPerPage);

//   // Get icon component
//   const getIconComponent = (iconName) => {
//     const icon = iconOptions.find((i) => i.value === iconName);
//     return icon?.icon || <PhotoLibraryIcon />;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 mt-10 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mb-6 py-8 sm:mb-8"
//       >
//         <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-4 items-center">
//           {/* Title Section */}
//           <div className="col-span-1 xsm:col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-10 flex items-center gap-3">
//             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
//               <PhotoLibraryIcon className="text-white text-xl sm:text-2xl" />
//             </div>
//             <div>
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
//                 Gallery Management
//               </h1>
//               <p className="text-xs sm:text-sm text-gray-400">
//                 Manage your albums and images
//               </p>
//             </div>
//           </div>

//           {/* Create Button */}
//           <div className="col-span-1 xsm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 flex xsm:justify-end md:justify-start lg:justify-end">
//             <button
//               onClick={openCreateModal}
//               className="w-full xsm:w-auto md:w-full lg:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
//             >
//               <AddIcon className="text-lg" />
//               <span className="hidden xsm:inline">Create New Album</span>
//               <span className="xsm:hidden">Create</span>
//             </button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Filters Bar */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30 p-3 sm:p-4 mb-6"
//       >
//         <div className="grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
//           {/* Search */}
//           <div className="col-span-1 xsm:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-3">
//             <div className="relative">
//               <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//               <input
//                 type="text"
//                 placeholder="Search albums..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
//               />
//             </div>
//           </div>

//           {/* Sort By */}
//           <div className="col-span-1 xsm:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm sm:text-base"
//             >
//               <option value="createdAt">Sort by Date</option>
//               <option value="title">Sort by Title</option>
//               <option value="views">Sort by Views</option>
//               <option value="likes">Sort by Likes</option>
//             </select>
//           </div>

//           {/* View Mode Toggle and Refresh */}
//           <div className="col-span-1 xsm:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
//             <div className="flex items-center gap-2">
//               {/* View Mode Toggle */}
//               <div className="flex items-center gap-1 bg-gray-700 rounded-lg p-1 flex-1">
//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`p-2 rounded-lg transition-colors flex-1 flex justify-center ${
//                     viewMode === "grid"
//                       ? "bg-purple-500 text-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   <GridViewIcon className="text-lg" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("list")}
//                   className={`p-2 rounded-lg transition-colors flex-1 flex justify-center ${
//                     viewMode === "list"
//                       ? "bg-purple-500 text-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   <ViewListIcon className="text-lg" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("compact")}
//                   className={`p-2 rounded-lg transition-colors flex-1 flex justify-center ${
//                     viewMode === "compact"
//                       ? "bg-purple-500 text-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   <ViewModuleIcon className="text-lg" />
//                 </button>
//               </div>

//               {/* Refresh Button */}
//               <button
//                 onClick={handleRefresh}
//                 className="p-2 bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors flex-shrink-0"
//               >
//                 <RefreshIcon
//                   className={`text-lg ${loading ? "animate-spin" : ""}`}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Results count */}
//         <div className="mt-3 text-xs sm:text-sm text-gray-400">
//           Showing {filteredAlbums.length > 0 ? indexOfFirstItem + 1 : 0}-
//           {Math.min(indexOfLastItem, filteredAlbums.length)} of{" "}
//           {filteredAlbums.length} albums
//         </div>
//       </motion.div>

//       {/* Albums Grid */}
//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
//         </div>
//       ) : (
//         <>
//           {filteredAlbums.length === 0 ? (
//             <div className="text-center py-12">
//               <PhotoLibraryIcon className="text-6xl text-gray-600 mx-auto mb-4" />
//               <h3 className="text-xl text-white font-semibold mb-2">
//                 No Albums Found
//               </h3>
//               <p className="text-gray-400 mb-4">
//                 Get started by creating your first album
//               </p>
//               <button
//                 onClick={openCreateModal}
//                 className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Create New Album
//               </button>
//             </div>
//           ) : (
//             <>
//               {/* Grid View */}
//               {viewMode === "grid" && (
//                 <div className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
//                   {currentAlbums.map((album, index) => (
//                     <motion.div
//                       key={album._id}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-all"
//                       style={{ borderColor: album.color }}
//                     >
//                       {/* Cover Image */}
//                       <div className="relative aspect-square">
//                         <img
//                           src={
//                             album.coverImage?.url ||
//                             "https://via.placeholder.com/400"
//                           }
//                           alt={album.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                         />

//                         {/* Icon Overlay */}
//                         <div
//                           className="absolute top-2 left-2 w-8 h-8 rounded-lg flex items-center justify-center text-white"
//                           style={{ backgroundColor: album.color }}
//                         >
//                           {getIconComponent(album.icon)}
//                         </div>

//                         {/* Actions Overlay */}
//                         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
//                           <button
//                             onClick={() => openViewModal(album)}
//                             className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                             title="View"
//                           >
//                             <PreviewIcon className="text-lg" />
//                           </button>
//                           <button
//                             onClick={() => openEditModal(album)}
//                             className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
//                             title="Edit"
//                           >
//                             <EditIcon className="text-lg" />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteAlbum(album)}
//                             className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//                             title="Delete"
//                           >
//                             <DeleteIcon className="text-lg" />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Album Info */}
//                       <div className="p-3 sm:p-4">
//                         <div className="flex items-start justify-between mb-2">
//                           <div>
//                             <h3 className="text-white font-semibold text-sm sm:text-base truncate">
//                               {album.title}
//                             </h3>
//                             <p className="text-gray-400 text-xs sm:text-sm truncate">
//                               {album.location}
//                             </p>
//                           </div>
//                           <div className="text-right">
//                             <p className="text-pink-400 text-xs sm:text-sm font-semibold">
//                               {album.statistics?.views?.toLocaleString() || 0}
//                             </p>
//                             <p className="text-gray-500 text-xs">views</p>
//                           </div>
//                         </div>

//                         <div className="flex items-center justify-between text-xs text-gray-400">
//                           <span className="flex items-center gap-1">
//                             <PersonIcon className="text-sm" />
//                             <span className="truncate max-w-[100px]">
//                               {album.photographer || "Unknown"}
//                             </span>
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <ImageIcon className="text-sm" />
//                             {album.images?.length || 0} photos
//                           </span>
//                         </div>

//                         {/* Statistics */}
//                         <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
//                           <span className="flex items-center gap-1">
//                             <FavoriteIcon className="text-sm" />
//                             {album.statistics?.likes || 0}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <DownloadIcon className="text-sm" />
//                             {album.statistics?.downloads || 0}
//                           </span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}

//               {/* List View */}
//               {viewMode === "list" && (
//                 <div className="space-y-3">
//                   {currentAlbums.map((album, index) => (
//                     <motion.div
//                       key={album._id}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30 p-3 sm:p-4 flex flex-col xsm:flex-row items-start xsm:items-center gap-3 sm:gap-4"
//                       style={{ borderColor: album.color }}
//                     >
//                       <img
//                         src={
//                           album.coverImage?.url ||
//                           "https://via.placeholder.com/60"
//                         }
//                         alt={album.title}
//                         className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
//                       />

//                       <div className="flex-1 min-w-0">
//                         <div className="flex flex-col xsm:flex-row xsm:items-center gap-2 xsm:gap-4">
//                           <div className="flex-1">
//                             <div className="flex items-center gap-2">
//                               <div
//                                 className="w-5 h-5 rounded-lg flex items-center justify-center text-white text-xs"
//                                 style={{ backgroundColor: album.color }}
//                               >
//                                 {getIconComponent(album.icon)}
//                               </div>
//                               <h3 className="text-white font-semibold text-sm sm:text-base truncate">
//                                 {album.title}
//                               </h3>
//                             </div>
//                             <p className="text-gray-400 text-xs sm:text-sm truncate">
//                               {album.location} •{" "}
//                               {album.photographer || "Unknown"}
//                             </p>
//                           </div>

//                           <div className="flex items-center gap-3 sm:gap-4">
//                             <div className="flex items-center gap-2 text-xs text-gray-400">
//                               <span className="flex items-center gap-1">
//                                 <VisibilityIcon className="text-sm" />
//                                 {album.statistics?.views?.toLocaleString() || 0}
//                               </span>
//                               <span className="flex items-center gap-1">
//                                 <FavoriteIcon className="text-sm" />
//                                 {album.statistics?.likes || 0}
//                               </span>
//                               <span className="flex items-center gap-1">
//                                 <ImageIcon className="text-sm" />
//                                 {album.images?.length || 0}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-2 w-full xsm:w-auto justify-end">
//                         <button
//                           onClick={() => openViewModal(album)}
//                           className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
//                           title="View"
//                         >
//                           <PreviewIcon className="text-lg" />
//                         </button>
//                         <button
//                           onClick={() => openEditModal(album)}
//                           className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
//                           title="Edit"
//                         >
//                           <EditIcon className="text-lg" />
//                         </button>
//                         <button
//                           onClick={() => handleDeleteAlbum(album)}
//                           className="p-2 text-gray-400 hover:text-red-400 transition-colors"
//                           title="Delete"
//                         >
//                           <DeleteIcon className="text-lg" />
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}

//               {/* Compact View */}
//               {viewMode === "compact" && (
//                 <div className="grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
//                   {currentAlbums.map((album, index) => (
//                     <motion.div
//                       key={album._id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: index * 0.03 }}
//                       className="group relative"
//                     >
//                       <img
//                         src={
//                           album.coverImage?.url ||
//                           "https://via.placeholder.com/150"
//                         }
//                         alt={album.title}
//                         className="w-full aspect-square rounded-lg object-cover"
//                       />

//                       <div
//                         className="absolute top-1 left-1 w-5 h-5 rounded-lg flex items-center justify-center text-white text-xs"
//                         style={{ backgroundColor: album.color }}
//                       >
//                         {getIconComponent(album.icon)}
//                       </div>

//                       <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-1 p-1">
//                         <button
//                           onClick={() => openViewModal(album)}
//                           className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                         >
//                           <PreviewIcon className="text-xs sm:text-sm" />
//                         </button>
//                         <button
//                           onClick={() => openEditModal(album)}
//                           className="p-1 bg-purple-500 text-white rounded hover:bg-purple-600"
//                         >
//                           <EditIcon className="text-xs sm:text-sm" />
//                         </button>
//                       </div>

//                       <p className="text-white text-xs mt-1 truncate">
//                         {album.title}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
//                   <button
//                     onClick={() =>
//                       setCurrentPage((prev) => Math.max(prev - 1, 1))
//                     }
//                     disabled={currentPage === 1}
//                     className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-sm sm:text-base"
//                   >
//                     Previous
//                   </button>

//                   <div className="flex items-center gap-1">
//                     {[...Array(totalPages)].map((_, i) => (
//                       <button
//                         key={i}
//                         onClick={() => setCurrentPage(i + 1)}
//                         className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors text-sm sm:text-base ${
//                           currentPage === i + 1
//                             ? "bg-purple-500 text-white"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                       >
//                         {i + 1}
//                       </button>
//                     ))}
//                   </div>

//                   <button
//                     onClick={() =>
//                       setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                     }
//                     disabled={currentPage === totalPages}
//                     className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-sm sm:text-base"
//                   >
//                     Next
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </>
//       )}

//       {/* Create/Edit Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeModal}
//               className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
//             />

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="fixed inset-2 xsm:inset-4 md:inset-6 lg:inset-10 z-50 overflow-y-auto"
//             >
//               <div className="min-h-full flex items-center justify-center">
//                 <div className="w-full max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/30 p-4 sm:p-6">
//                   {/* Modal Header */}
//                   <div className="flex items-center justify-between mb-4 sm:mb-6">
//                     <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
//                       {modalMode === "create"
//                         ? "Create New Album"
//                         : modalMode === "edit"
//                           ? "Edit Album"
//                           : "View Album"}
//                     </h2>
//                     <div
//                       onClick={closeModal}
//                       className="p-2 text-gray-400 bg-red-500 rounded-lg transition-colors"
//                     >
//                       <CloseIcon />
//                     </div>
//                   </div>

//                   {/* Form */}
//                   <form
//                     onSubmit={handleSubmit}
//                     className="space-y-4 sm:space-y-6"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                       {/* Left Column */}
//                       <div className="space-y-4">
//                         {/* Title */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Title *
//                           </label>
//                           <div className="relative">
//                             <TitleIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="text"
//                               name="title"
//                               value={formData.title}
//                               onChange={handleInputChange}
//                               required
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter album title"
//                             />
//                           </div>
//                         </div>

//                         {/* Location */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Location
//                           </label>
//                           <div className="relative">
//                             <LocationIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="text"
//                               name="location"
//                               value={formData.location}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter location"
//                             />
//                           </div>
//                         </div>

//                         {/* Photographer */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Photographer
//                           </label>
//                           <div className="relative">
//                             <PersonIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="text"
//                               name="photographer"
//                               value={formData.photographer}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter photographer name"
//                             />
//                           </div>
//                         </div>

//                         {/* Date */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Date
//                           </label>
//                           <div className="relative">
//                             <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="date"
//                               name="date"
//                               value={formData.date}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                             />
//                           </div>
//                         </div>

//                         {/* Color Selection */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-2">
//                             Album Color
//                           </label>
//                           <div className="flex flex-wrap gap-2">
//                             {colorOptions.map((color) => (
//                               <button
//                                 key={color.value}
//                                 type="button"
//                                 onClick={() =>
//                                   !(modalMode === "view") &&
//                                   setFormData((prev) => ({
//                                     ...prev,
//                                     color: color.value,
//                                   }))
//                                 }
//                                 disabled={modalMode === "view"}
//                                 className={`w-8 h-8 rounded-lg ${color.class} ${
//                                   formData.color === color.value
//                                     ? "ring-2 ring-white scale-110"
//                                     : ""
//                                 } transition-all`}
//                                 title={color.label}
//                               />
//                             ))}
//                           </div>
//                         </div>

//                         {/* Icon Selection */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-2">
//                             Album Icon
//                           </label>
//                           <div className="flex flex-wrap gap-2">
//                             {iconOptions.map((icon) => (
//                               <button
//                                 key={icon.value}
//                                 type="button"
//                                 onClick={() =>
//                                   !(modalMode === "view") &&
//                                   setFormData((prev) => ({
//                                     ...prev,
//                                     icon: icon.value,
//                                   }))
//                                 }
//                                 disabled={modalMode === "view"}
//                                 className={`w-10 h-10 rounded-lg flex items-center justify-center ${
//                                   formData.icon === icon.value
//                                     ? "bg-purple-500 text-white"
//                                     : "bg-gray-700 text-gray-400 hover:bg-gray-600"
//                                 } transition-colors`}
//                                 title={icon.label}
//                               >
//                                 {icon.icon}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Right Column */}
//                       <div className="space-y-4">
//                         {/* Description */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Description
//                           </label>
//                           <div className="relative">
//                             <DescriptionIcon className="absolute left-3 top-3 text-gray-400 text-lg" />
//                             <textarea
//                               name="description"
//                               value={formData.description}
//                               onChange={handleInputChange}
//                               rows="4"
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter album description"
//                             />
//                           </div>
//                         </div>

//                         {/* Cover Image Upload */}
//                         {modalMode !== "view" && (
//                           <div>
//                             <label className="block text-gray-400 text-xs sm:text-sm mb-2">
//                               Cover Image
//                             </label>
//                             <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-purple-500 transition-colors">
//                               <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleCoverImageChange}
//                                 className="hidden"
//                                 id="cover-image-upload"
//                                 disabled={uploading}
//                               />
//                               <label
//                                 htmlFor="cover-image-upload"
//                                 className="cursor-pointer flex flex-col items-center gap-2"
//                               >
//                                 <UploadIcon className="text-3xl text-gray-400" />
//                                 <span className="text-gray-400 text-sm">
//                                   Click to upload cover image
//                                 </span>
//                                 <span className="text-gray-500 text-xs">
//                                   PNG, JPG up to 5MB
//                                 </span>
//                               </label>
//                             </div>

//                             {/* Cover Preview */}
//                             {(coverPreview || formData.coverImage?.url) && (
//                               <div className="mt-2 relative inline-block">
//                                 <img
//                                   src={coverPreview || formData.coverImage?.url}
//                                   alt="Cover preview"
//                                   className="w-20 h-20 rounded-lg object-cover"
//                                 />
//                                 {modalMode !== "view" && (
//                                   <div
//                                     onClick={() => {
//                                       setSelectedFiles((prev) => ({
//                                         ...prev,
//                                         coverImage: null,
//                                       }));
//                                       setCoverPreview(null);
//                                     }}
//                                     className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full"
//                                   >
//                                     <CloseIcon className="text-xs" />
//                                   </div>
//                                 )}
//                               </div>
//                             )}
//                           </div>
//                         )}

//                         {/* Images Upload */}
//                         {modalMode !== "view" && (
//                           <div>
//                             <label className="block text-gray-400 text-xs sm:text-sm mb-2">
//                               Additional Images
//                             </label>
//                             <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-purple-500 transition-colors">
//                               <input
//                                 type="file"
//                                 multiple
//                                 accept="image/*"
//                                 onChange={handleImagesChange}
//                                 className="hidden"
//                                 id="images-upload"
//                                 disabled={uploading}
//                               />
//                               <label
//                                 htmlFor="images-upload"
//                                 className="cursor-pointer flex flex-col items-center gap-2"
//                               >
//                                 <UploadIcon className="text-3xl text-gray-400" />
//                                 <span className="text-gray-400 text-sm">
//                                   Click to upload images
//                                 </span>
//                                 <span className="text-gray-500 text-xs">
//                                   PNG, JPG, GIF up to 10MB each
//                                 </span>
//                               </label>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Images Grid - Existing and New */}
//                     {(formData.images?.length > 0 ||
//                       imagePreviews.length > 0) && (
//                       <div>
//                         <h3 className="text-white font-semibold text-sm sm:text-base mb-3">
//                           Images (
//                           {formData.images?.length + imagePreviews.length})
//                         </h3>
//                         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
//                           {/* Existing images */}
//                           {formData.images?.map((image, idx) => (
//                             <div
//                               key={image._id || idx}
//                               className="relative group"
//                             >
//                               <img
//                                 src={image.url}
//                                 alt={image.title || "Album image"}
//                                 className="w-full aspect-square rounded-lg object-cover"
//                               />
//                               {modalMode === "edit" && selectedAlbum && (
//                                 <div
//                                   onClick={() =>
//                                     handleDeleteImage(
//                                       selectedAlbum._id,
//                                       image._id,
//                                     )
//                                   }
//                                   className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                                 >
//                                   <CloseIcon className="text-xs" />
//                                 </div>
//                               )}
//                             </div>
//                           ))}

//                           {/* New image previews */}
//                           {imagePreviews.map((preview, idx) => (
//                             <div
//                               key={`preview-${idx}`}
//                               className="relative group"
//                             >
//                               <img
//                                 src={preview}
//                                 alt={`Preview ${idx + 1}`}
//                                 className="w-full aspect-square rounded-lg object-cover opacity-75"
//                               />
//                               <div
//                                 onClick={() => handleRemoveSelectedImage(idx)}
//                                 className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full"
//                               >
//                                 <CloseIcon className="text-xs" />
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Form Actions */}
//                     {modalMode !== "view" && (
//                       <div className="flex flex-col xsm:flex-row gap-3 justify-end pt-4">
//                         <button
//                           type="button"
//                           onClick={closeModal}
//                           className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
//                         >
//                           Cancel
//                         </button>
//                         <button
//                           type="submit"
//                           disabled={uploading}
//                           className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base disabled:opacity-50"
//                         >
//                           {uploading
//                             ? "Uploading..."
//                             : modalMode === "create"
//                               ? "Create Album"
//                               : "Save Changes"}
//                         </button>
//                       </div>
//                     )}
//                   </form>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// /* eslint-disable react-hooks/immutability */
// /* eslint-disable no-unused-vars */
// // components/GalleryManagement.jsx
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// // Material Icons
// import {
//   // Navigation Icons
//   Dashboard as DashboardIcon,
//   PhotoLibrary as PhotoLibraryIcon,
//   Add as AddIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Close as CloseIcon,
//   Search as SearchIcon,
//   FilterList as FilterIcon,
//   Sort as SortIcon,
//   Refresh as RefreshIcon,
//   MoreVert as MoreVertIcon,
//   Visibility as VisibilityIcon,
//   Favorite as FavoriteIcon,
//   Download as DownloadIcon,

//   // Form Icons
//   Title as TitleIcon,
//   Description as DescriptionIcon,
//   LocationOn as LocationIcon,
//   Person as PersonIcon,
//   CalendarToday as CalendarIcon,
//   CameraAlt as CameraIcon,
//   Category as CategoryIcon,
//   Image as ImageIcon,
//   Link as LinkIcon,
//   ColorLens as ColorIcon,
//   FormatQuote as FormatQuoteIcon,

//   // Status Icons
//   CheckCircle as CheckCircleIcon,
//   Warning as WarningIcon,
//   Error as ErrorIcon,
//   Info as InfoIcon,
//   CheckCircleOutline as SuccessIcon,
//   ErrorOutline as FailIcon,

//   // Action Icons
//   Save as SaveIcon,
//   Cancel as CancelIcon,
//   Upload as UploadIcon,
//   Preview as PreviewIcon,
//   Clear as ClearIcon,

//   // View Icons
//   GridView as GridViewIcon,
//   ViewList as ViewListIcon,
//   ViewModule as ViewModuleIcon,

//   // Category Icons
//   Terrain as TerrainIcon,
//   BeachAccess as BeachAccessIcon,
//   WbSunny as WbSunnyIcon,
//   NightsStay as NightsStayIcon,
//   Landscape as LandscapeIcon,
//   Park as ParkIcon,
//   FilterHdr as FilterHdrIcon,
//   Waves as WavesIcon,
// } from "@mui/icons-material";

// // API Configuration
// const API_BASE_URL = "https://myalbumnode.onrender.com";

// // API Service with enhanced error handling
// const apiService = {
//   /* GET ALL ALBUMS */
//   getAlbums: async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/gallery`);

//       console.log("Get Albums Response:", response.data);

//       // Handle different response structures
//       let albumsData = [];

//       if (Array.isArray(response.data)) {
//         albumsData = response.data;
//       } else if (response.data && Array.isArray(response.data.data)) {
//         albumsData = response.data.data;
//       } else if (response.data && response.data.albums && Array.isArray(response.data.albums)) {
//         albumsData = response.data.albums;
//       } else if (response.data && response.data.success && Array.isArray(response.data.albums)) {
//         albumsData = response.data.albums;
//       } else if (response.data && typeof response.data === 'object') {
//         for (let key in response.data) {
//           if (Array.isArray(response.data[key])) {
//             albumsData = response.data[key];
//             break;
//           }
//         }
//       }

//       return {
//         success: true,
//         data: albumsData,
//         message: "Albums loaded successfully"
//       };

//     } catch (error) {
//       console.error("Get Albums Error:", error);
//       console.error("Error Response:", error.response?.data);
//       console.error("Error Status:", error.response?.status);

//       return {
//         success: false,
//         data: [],
//         message: error.response?.data?.message || "Failed to fetch albums",
//         error: error.response?.data || error
//       };
//     }
//   },

//   /* GET SINGLE ALBUM */
//   getAlbum: async (id) => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/gallery/${id}`);

//       console.log("Get Album Response:", response.data);

//       let albumData = null;

//       if (response.data && typeof response.data === 'object') {
//         if (response.data.data) {
//           albumData = response.data.data;
//         } else if (response.data.album) {
//           albumData = response.data.album;
//         } else {
//           albumData = response.data;
//         }
//       }

//       return {
//         success: true,
//         data: albumData,
//         message: "Album loaded successfully"
//       };

//     } catch (error) {
//       console.error("Get Album Error:", error);
//       console.error("Error Response:", error.response?.data);

//       return {
//         success: false,
//         data: null,
//         message: error.response?.data?.message || "Failed to fetch album",
//         error: error.response?.data || error
//       };
//     }
//   },

//   /* CREATE ALBUM */
//   createAlbum: async (formData) => {
//     try {
//       // Log FormData contents for debugging
//       console.log("Creating album with FormData:");
//       for (let pair of formData.entries()) {
//         if (pair[1] instanceof File) {
//           console.log(pair[0], {
//             name: pair[1].name,
//             type: pair[1].type,
//             size: pair[1].size
//           });
//         } else {
//           console.log(pair[0], pair[1]);
//         }
//       }

//       const response = await axios.post(
//         `${API_BASE_URL}/gallery`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           // Add timeout
//           timeout: 30000,
//         }
//       );

//       console.log("Create Album Response:", response.data);

//       let newAlbum = null;

//       if (response.data && typeof response.data === 'object') {
//         if (response.data.data) {
//           newAlbum = response.data.data;
//         } else if (response.data.album) {
//           newAlbum = response.data.album;
//         } else {
//           newAlbum = response.data;
//         }
//       }

//       return {
//         success: true,
//         data: newAlbum,
//         message: "Album created successfully"
//       };

//     } catch (error) {
//       console.error("Create Album Error - Full:", error);
//       console.error("Create Album Error - Response:", error.response?.data);
//       console.error("Create Album Error - Status:", error.response?.status);
//       console.error("Create Album Error - Headers:", error.response?.headers);

//       // Get detailed error message
//       let errorMessage = "Failed to create album";
//       if (error.response?.data) {
//         if (typeof error.response.data === 'string') {
//           errorMessage = error.response.data;
//         } else if (error.response.data.message) {
//           errorMessage = error.response.data.message;
//         } else if (error.response.data.error) {
//           errorMessage = error.response.data.error;
//         }
//       }

//       return {
//         success: false,
//         data: null,
//         message: errorMessage,
//         error: error.response?.data || error
//       };
//     }
//   },

//   /* UPDATE ALBUM */
//   updateAlbum: async (id, formData) => {
//     try {
//       // Log FormData contents for debugging
//       console.log("Updating album with FormData:");
//       for (let pair of formData.entries()) {
//         if (pair[1] instanceof File) {
//           console.log(pair[0], {
//             name: pair[1].name,
//             type: pair[1].type,
//             size: pair[1].size
//           });
//         } else {
//           console.log(pair[0], pair[1]);
//         }
//       }

//       const response = await axios.put(
//         `${API_BASE_URL}/gallery/${id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           timeout: 30000,
//         }
//       );

//       console.log("Update Album Response:", response.data);

//       let updatedAlbum = null;

//       if (response.data && typeof response.data === 'object') {
//         if (response.data.data) {
//           updatedAlbum = response.data.data;
//         } else if (response.data.album) {
//           updatedAlbum = response.data.album;
//         } else {
//           updatedAlbum = response.data;
//         }
//       }

//       return {
//         success: true,
//         data: updatedAlbum,
//         message: "Album updated successfully"
//       };

//     } catch (error) {
//       console.error("Update Album Error:", error);
//       console.error("Error Response:", error.response?.data);

//       let errorMessage = "Failed to update album";
//       if (error.response?.data) {
//         if (typeof error.response.data === 'string') {
//           errorMessage = error.response.data;
//         } else if (error.response.data.message) {
//           errorMessage = error.response.data.message;
//         } else if (error.response.data.error) {
//           errorMessage = error.response.data.error;
//         }
//       }

//       return {
//         success: false,
//         data: null,
//         message: errorMessage,
//         error: error.response?.data || error
//       };
//     }
//   },

//   /* DELETE ALBUM */
//   deleteAlbum: async (id) => {
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/gallery/${id}`);

//       console.log("Delete Album Response:", response.data);

//       return {
//         success: true,
//         message: "Album deleted successfully"
//       };

//     } catch (error) {
//       console.error("Delete Album Error:", error);
//       console.error("Error Response:", error.response?.data);

//       return {
//         success: false,
//         message: error.response?.data?.message || "Failed to delete album",
//         error: error.response?.data || error
//       };
//     }
//   },

//   /* DELETE IMAGE */
//   deleteImage: async (albumId, imageId) => {
//     try {
//       const response = await axios.delete(
//         `${API_BASE_URL}/gallery/${albumId}/images/${imageId}`
//       );

//       console.log("Delete Image Response:", response.data);

//       return {
//         success: true,
//         message: "Image deleted successfully"
//       };

//     } catch (error) {
//       console.error("Delete Image Error:", error);
//       console.error("Error Response:", error.response?.data);

//       return {
//         success: false,
//         message: error.response?.data?.message || "Failed to delete image",
//         error: error.response?.data || error
//       };
//     }
//   },
// };

// // Color options for albums
// const colorOptions = [
//   { value: "#ef4444", label: "Red", class: "bg-red-500" },
//   { value: "#f97316", label: "Orange", class: "bg-orange-500" },
//   { value: "#eab308", label: "Yellow", class: "bg-yellow-500" },
//   { value: "#22c55e", label: "Green", class: "bg-green-500" },
//   { value: "#3b82f6", label: "Blue", class: "bg-blue-500" },
//   { value: "#6366f1", label: "Indigo", class: "bg-indigo-500" },
//   { value: "#a855f7", label: "Purple", class: "bg-purple-500" },
//   { value: "#ec4899", label: "Pink", class: "bg-pink-500" },
//   { value: "#6b7280", label: "Gray", class: "bg-gray-500" },
// ];

// // Icon options
// const iconOptions = [
//   { value: "terrain", label: "Terrain", icon: <TerrainIcon /> },
//   { value: "beach", label: "Beach", icon: <BeachAccessIcon /> },
//   { value: "sunny", label: "Sunny", icon: <WbSunnyIcon /> },
//   { value: "night", label: "Night", icon: <NightsStayIcon /> },
//   { value: "landscape", label: "Landscape", icon: <LandscapeIcon /> },
//   { value: "park", label: "Park", icon: <ParkIcon /> },
//   { value: "mountain", label: "Mountain", icon: <FilterHdrIcon /> },
//   { value: "waves", label: "Waves", icon: <WavesIcon /> },
// ];

// export const GalleryManagement = () => {
//   // State management
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("createdAt");
//   const [viewMode, setViewMode] = useState("grid");
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalMode, setModalMode] = useState("create");
//   const [formData, setFormData] = useState({
//     title: "",
//     location: "",
//     description: "",
//     photographer: "",
//     date: "",
//     color: "#6366f1",
//     icon: "terrain",
//     coverImage: null,
//     images: [],
//   });
//   const [uploading, setUploading] = useState(false);
//   const [selectedFiles, setSelectedFiles] = useState({
//     coverImage: null,
//     images: [],
//   });
//   const [coverPreview, setCoverPreview] = useState(null);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(6);
//   const [screenSize, setScreenSize] = useState("desktop");

//   // Success/Fail Modal States
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showFailModal, setShowFailModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [modalDetails, setModalDetails] = useState("");
//   const [errorDetails, setErrorDetails] = useState(null);

//   // Detect screen size for responsive design
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 480) setScreenSize("xsm");
//       else if (width < 640) setScreenSize("sm");
//       else if (width < 768) setScreenSize("md");
//       else if (width < 1024) setScreenSize("lg");
//       else setScreenSize("xl");
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Fetch albums on mount
//   useEffect(() => {
//     fetchAlbums();
//   }, []);

//   // Fetch albums from API
//   const fetchAlbums = async () => {
//     setLoading(true);
//     try {
//       const response = await apiService.getAlbums();
//       if (response.success) {
//         setAlbums(Array.isArray(response.data) ? response.data : []);
//         showSuccess("Albums Loaded", response.message);
//       } else {
//         setAlbums([]);
//         showFail("Failed to Load Albums", response.message, response.error);
//       }
//     } catch (error) {
//       console.error("Error in fetchAlbums:", error);
//       setAlbums([]);
//       showFail("Error", "An unexpected error occurred while loading albums", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Show Success Modal
//   const showSuccess = (title, message) => {
//     setModalMessage(title);
//     setModalDetails(message);
//     setErrorDetails(null);
//     setShowSuccessModal(true);

//     setTimeout(() => {
//       setShowSuccessModal(false);
//     }, 3000);
//   };

//   // Show Fail Modal
//   const showFail = (title, message, error = null) => {
//     setModalMessage(title);
//     setModalDetails(message);
//     setErrorDetails(error);
//     setShowFailModal(true);

//     setTimeout(() => {
//       setShowFailModal(false);
//     }, 5000);
//   };

//   // Validate files before upload
//   const validateFiles = () => {
//     const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
//     const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

//     if (selectedFiles.coverImage) {
//       if (selectedFiles.coverImage.size > MAX_FILE_SIZE) {
//         showFail("File Too Large", "Cover image must be less than 10MB");
//         return false;
//       }
//       if (!ALLOWED_TYPES.includes(selectedFiles.coverImage.type)) {
//         showFail("Invalid File Type", "Cover image must be JPEG, PNG, GIF, or WEBP");
//         return false;
//       }
//     }

//     for (let file of selectedFiles.images) {
//       if (file.size > MAX_FILE_SIZE) {
//         showFail("File Too Large", `Image ${file.name} must be less than 10MB`);
//         return false;
//       }
//       if (!ALLOWED_TYPES.includes(file.type)) {
//         showFail("Invalid File Type", `${file.name} must be JPEG, PNG, GIF, or WEBP`);
//         return false;
//       }
//     }

//     return true;
//   };

//   // Handle refresh
//   const handleRefresh = () => {
//     fetchAlbums();
//   };

//   // Open create modal
//   const openCreateModal = () => {
//     setFormData({
//       title: "",
//       location: "",
//       description: "",
//       photographer: "",
//       date: new Date().toISOString().split("T")[0],
//       color: "#6366f1",
//       icon: "terrain",
//       coverImage: null,
//       images: [],
//     });
//     setSelectedFiles({
//       coverImage: null,
//       images: [],
//     });
//     setCoverPreview(null);
//     setImagePreviews([]);
//     setModalMode("create");
//     setIsModalOpen(true);
//   };

//   // Open edit modal
//   const openEditModal = (album) => {
//     setSelectedAlbum(album);
//     setFormData({
//       title: album.title || "",
//       location: album.location || "",
//       description: album.description || "",
//       photographer: album.photographer || "",
//       date: album.date || new Date().toISOString().split("T")[0],
//       color: album.color || "#6366f1",
//       icon: album.icon || "terrain",
//       coverImage: album.coverImage || null,
//       images: album.images || [],
//     });
//     setCoverPreview(album.coverImage?.url || null);
//     setSelectedFiles({
//       coverImage: null,
//       images: [],
//     });
//     setImagePreviews([]);
//     setModalMode("edit");
//     setIsModalOpen(true);
//   };

//   // Open view modal
//   const openViewModal = (album) => {
//     setSelectedAlbum(album);
//     setFormData({
//       title: album.title || "",
//       location: album.location || "",
//       description: album.description || "",
//       photographer: album.photographer || "",
//       date: album.date || "",
//       color: album.color || "#6366f1",
//       icon: album.icon || "terrain",
//       coverImage: album.coverImage || null,
//       images: album.images || [],
//     });
//     setCoverPreview(album.coverImage?.url || null);
//     setModalMode("view");
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedAlbum(null);
//     setSelectedFiles({
//       coverImage: null,
//       images: [],
//     });
//     setCoverPreview(null);
//     setImagePreviews([]);
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle cover image selection
//   const handleCoverImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFiles(prev => ({
//         ...prev,
//         coverImage: file
//       }));

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setCoverPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle multiple images selection
//   const handleImagesChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length > 0) {
//       setSelectedFiles(prev => ({
//         ...prev,
//         images: [...prev.images, ...files]
//       }));

//       files.forEach(file => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setImagePreviews(prev => [...prev, reader.result]);
//         };
//         reader.readAsDataURL(file);
//       });
//     }
//   };

//   // Remove selected image from preview
//   const handleRemoveSelectedImage = (index) => {
//     setSelectedFiles(prev => ({
//       ...prev,
//       images: prev.images.filter((_, i) => i !== index)
//     }));
//     setImagePreviews(prev => prev.filter((_, i) => i !== index));
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate title
//     if (!formData.title || formData.title.trim() === "") {
//       showFail("Validation Error", "Title is required");
//       return;
//     }

//     // Validate files
//     if (!validateFiles()) {
//       return;
//     }

//     setUploading(true);

//     const formDataToSend = new FormData();

//     // Append all text fields (send empty strings instead of null)
//     formDataToSend.append("title", formData.title.trim());
//     formDataToSend.append("location", formData.location || "");
//     formDataToSend.append("description", formData.description || "");
//     formDataToSend.append("photographer", formData.photographer || "");
//     formDataToSend.append("date", formData.date || new Date().toISOString().split('T')[0]);
//     formDataToSend.append("color", formData.color || "#6366f1");
//     formDataToSend.append("icon", formData.icon || "terrain");

//     // Initialize statistics (if your schema expects it)
//     formDataToSend.append("statistics[views]", "0");
//     formDataToSend.append("statistics[likes]", "0");
//     formDataToSend.append("statistics[downloads]", "0");

//     // Append cover image if new one selected
//     if (selectedFiles.coverImage) {
//       formDataToSend.append("coverImage", selectedFiles.coverImage);
//     }

//     // Append new images
//     selectedFiles.images.forEach((image) => {
//       formDataToSend.append("images", image);
//     });

//     // Log FormData for debugging
//     console.log("Submitting FormData:");
//     for (let pair of formDataToSend.entries()) {
//       if (pair[1] instanceof File) {
//         console.log(pair[0], {
//           name: pair[1].name,
//           type: pair[1].type,
//           size: pair[1].size
//         });
//       } else {
//         console.log(pair[0], pair[1]);
//       }
//     }

//     try {
//       let response;

//       if (modalMode === "create") {
//         response = await apiService.createAlbum(formDataToSend);
//         if (response.success) {
//           setAlbums((prev) => Array.isArray(prev) ? [response.data, ...prev] : [response.data]);
//           showSuccess("Success!", response.message);
//           closeModal();
//         } else {
//           showFail("Creation Failed", response.message, response.error);
//         }
//       } else if (modalMode === "edit" && selectedAlbum) {
//         response = await apiService.updateAlbum(selectedAlbum._id, formDataToSend);
//         if (response.success) {
//           setAlbums((prev) =>
//             Array.isArray(prev)
//               ? prev.map((album) =>
//                   album._id === selectedAlbum._id ? response.data : album
//                 )
//               : [response.data]
//           );
//           showSuccess("Success!", response.message);
//           closeModal();
//         } else {
//           showFail("Update Failed", response.message, response.error);
//         }
//       }
//     } catch (error) {
//       console.error("Error in handleSubmit:", error);
//       showFail("Error", "An unexpected error occurred", error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   // Handle delete album
//   const handleDeleteAlbum = async (album) => {
//     if (window.confirm(`Are you sure you want to delete "${album.title}"?`)) {
//       const response = await apiService.deleteAlbum(album._id);
//       if (response.success) {
//         setAlbums((prev) =>
//           Array.isArray(prev)
//             ? prev.filter((a) => a._id !== album._id)
//             : []
//         );
//         showSuccess("Deleted!", response.message);
//       } else {
//         showFail("Delete Failed", response.message, response.error);
//       }
//     }
//   };

//   // Handle delete image from album
//   const handleDeleteImage = async (albumId, imageId) => {
//     if (window.confirm("Are you sure you want to delete this image?")) {
//       const response = await apiService.deleteImage(albumId, imageId);
//       if (response.success) {
//         setAlbums((prev) =>
//           Array.isArray(prev)
//             ? prev.map((album) => {
//                 if (album._id === albumId) {
//                   return {
//                     ...album,
//                     images: album.images.filter((img) => img._id !== imageId),
//                   };
//                 }
//                 return album;
//               })
//             : []
//         );

//         if (selectedAlbum && selectedAlbum._id === albumId) {
//           setFormData((prev) => ({
//             ...prev,
//             images: prev.images.filter((img) => img._id !== imageId),
//           }));
//         }

//         showSuccess("Image Deleted", response.message);
//       } else {
//         showFail("Delete Failed", response.message, response.error);
//       }
//     }
//   };

//   // Filter and sort albums
//   const filteredAlbums = Array.isArray(albums)
//     ? albums
//         .filter((album) => {
//           if (!album) return false;
//           const matchesSearch =
//             (album.title?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
//             (album.photographer?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
//             (album.location?.toLowerCase() || "").includes(searchTerm.toLowerCase());
//           return matchesSearch;
//         })
//         .sort((a, b) => {
//           if (!a || !b) return 0;
//           if (sortBy === "createdAt") {
//             return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
//           }
//           if (sortBy === "title") {
//             return (a.title || "").localeCompare(b.title || "");
//           }
//           if (sortBy === "views") {
//             return (b.statistics?.views || 0) - (a.statistics?.views || 0);
//           }
//           if (sortBy === "likes") {
//             return (b.statistics?.likes || 0) - (a.statistics?.likes || 0);
//           }
//           return 0;
//         })
//     : [];

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentAlbums = filteredAlbums.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredAlbums.length / itemsPerPage);

//   // Get icon component
//   const getIconComponent = (iconName) => {
//     const icon = iconOptions.find(i => i.value === iconName);
//     return icon?.icon || <PhotoLibraryIcon />;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 mt-4 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
//       {/* Success Modal */}
//       <AnimatePresence>
//         {showSuccessModal && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
//               onClick={() => setShowSuccessModal(false)}
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5, y: -50 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.5, y: -50 }}
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-md"
//             >
//               <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-1">
//                 <div className="bg-gray-900 rounded-xl p-6 text-center">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 0.2, type: "spring" }}
//                     className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
//                   >
//                     <SuccessIcon className="text-white text-4xl" />
//                   </motion.div>

//                   <h3 className="text-2xl font-bold text-white mb-2">
//                     {modalMessage}
//                   </h3>

//                   <p className="text-gray-300 mb-6">
//                     {modalDetails}
//                   </p>

//                   <button
//                     onClick={() => setShowSuccessModal(false)}
//                     className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
//                   >
//                     Continue
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Fail Modal */}
//       <AnimatePresence>
//         {showFailModal && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
//               onClick={() => setShowFailModal(false)}
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5, y: -50 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.5, y: -50 }}
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-md"
//             >
//               <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-1">
//                 <div className="bg-gray-900 rounded-xl p-6 text-center">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 0.2, type: "spring" }}
//                     className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
//                   >
//                     <FailIcon className="text-white text-4xl" />
//                   </motion.div>

//                   <h3 className="text-2xl font-bold text-white mb-2">
//                     {modalMessage}
//                   </h3>

//                   <p className="text-gray-300 mb-4">
//                     {modalDetails}
//                   </p>

//                   {errorDetails && (
//                     <div className="mb-4 p-3 bg-red-500/20 rounded-lg text-left">
//                       <p className="text-red-200 text-xs font-mono break-all">
//                         {typeof errorDetails === 'string' ? errorDetails : JSON.stringify(errorDetails, null, 2)}
//                       </p>
//                     </div>
//                   )}

//                   <div className="flex gap-3 justify-center">
//                     <button
//                       onClick={() => setShowFailModal(false)}
//                       className="px-6 py-2 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
//                     >
//                       Close
//                     </button>
//                     <button
//                       onClick={() => {
//                         setShowFailModal(false);
//                         fetchAlbums();
//                       }}
//                       className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
//                     >
//                       Retry
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Rest of your component remains the same... */}
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mb-6 sm:mb-8"
//       >
//         <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-4 items-center">
//           {/* Title Section */}
//           <div className="col-span-1 xsm:col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-10 flex items-center gap-3">
//             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
//               <PhotoLibraryIcon className="text-white text-xl sm:text-2xl" />
//             </div>
//             <div>
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
//                 Gallery Management
//               </h1>
//               <p className="text-xs sm:text-sm text-gray-400">
//                 Manage your albums and images
//               </p>
//             </div>
//           </div>

//           {/* Create Button */}
//           <div className="col-span-1 xsm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 flex xsm:justify-end md:justify-start lg:justify-end">
//             <button
//               onClick={openCreateModal}
//               className="w-full xsm:w-auto md:w-full lg:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
//             >
//               <AddIcon className="text-lg" />
//               <span className="hidden xsm:inline">Create New Album</span>
//               <span className="xsm:hidden">Create</span>
//             </button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Filters Bar */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30 p-3 sm:p-4 mb-6"
//       >
//         <div className="grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
//           {/* Search */}
//           <div className="col-span-1 xsm:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-3">
//             <div className="relative">
//               <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//               <input
//                 type="text"
//                 placeholder="Search albums..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
//               />
//             </div>
//           </div>

//           {/* Sort By */}
//           <div className="col-span-1 xsm:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm sm:text-base"
//             >
//               <option value="createdAt">Sort by Date</option>
//               <option value="title">Sort by Title</option>
//               <option value="views">Sort by Views</option>
//               <option value="likes">Sort by Likes</option>
//             </select>
//           </div>

//           {/* View Mode Toggle and Refresh */}
//           <div className="col-span-1 xsm:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
//             <div className="flex items-center gap-2">
//               {/* View Mode Toggle */}
//               <div className="flex items-center gap-1 bg-gray-700 rounded-lg p-1 flex-1">
//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`p-2 rounded-lg transition-colors flex-1 flex justify-center ${
//                     viewMode === "grid"
//                       ? "bg-purple-500 text-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   <GridViewIcon className="text-lg" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("list")}
//                   className={`p-2 rounded-lg transition-colors flex-1 flex justify-center ${
//                     viewMode === "list"
//                       ? "bg-purple-500 text-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   <ViewListIcon className="text-lg" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("compact")}
//                   className={`p-2 rounded-lg transition-colors flex-1 flex justify-center ${
//                     viewMode === "compact"
//                       ? "bg-purple-500 text-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   <ViewModuleIcon className="text-lg" />
//                 </button>
//               </div>

//               {/* Refresh Button */}
//               <button
//                 onClick={handleRefresh}
//                 className="p-2 bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors flex-shrink-0"
//               >
//                 <RefreshIcon
//                   className={`text-lg ${loading ? "animate-spin" : ""}`}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Results count */}
//         <div className="mt-3 text-xs sm:text-sm text-gray-400">
//           Showing {filteredAlbums.length > 0 ? indexOfFirstItem + 1 : 0}-
//           {Math.min(indexOfLastItem, filteredAlbums.length)} of{" "}
//           {filteredAlbums.length} albums
//         </div>
//       </motion.div>

//       {/* Albums Grid */}
//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
//         </div>
//       ) : (
//         <>
//           {filteredAlbums.length === 0 ? (
//             <div className="text-center py-12">
//               <PhotoLibraryIcon className="text-6xl text-gray-600 mx-auto mb-4" />
//               <h3 className="text-xl text-white font-semibold mb-2">No Albums Found</h3>
//               <p className="text-gray-400 mb-4">Get started by creating your first album</p>
//               <button
//                 onClick={openCreateModal}
//                 className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Create New Album
//               </button>
//             </div>
//           ) : (
//             <>
//               {/* Grid View */}
//               {viewMode === "grid" && (
//                 <div className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
//                   {currentAlbums.map((album, index) => (
//                     <motion.div
//                       key={album._id}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-all"
//                       style={{ borderColor: album.color }}
//                     >
//                       {/* Cover Image */}
//                       <div className="relative aspect-square">
//                         <img
//                           src={album.coverImage?.url || "https://via.placeholder.com/400"}
//                           alt={album.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                         />

//                         {/* Icon Overlay */}
//                         <div
//                           className="absolute top-2 left-2 w-8 h-8 rounded-lg flex items-center justify-center text-white"
//                           style={{ backgroundColor: album.color }}
//                         >
//                           {getIconComponent(album.icon)}
//                         </div>

//                         {/* Actions Overlay */}
//                         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
//                           <button
//                             onClick={() => openViewModal(album)}
//                             className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                             title="View"
//                           >
//                             <PreviewIcon className="text-lg" />
//                           </button>
//                           <button
//                             onClick={() => openEditModal(album)}
//                             className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
//                             title="Edit"
//                           >
//                             <EditIcon className="text-lg" />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteAlbum(album)}
//                             className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//                             title="Delete"
//                           >
//                             <DeleteIcon className="text-lg" />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Album Info */}
//                       <div className="p-3 sm:p-4">
//                         <div className="flex items-start justify-between mb-2">
//                           <div>
//                             <h3 className="text-white font-semibold text-sm sm:text-base truncate">
//                               {album.title}
//                             </h3>
//                             <p className="text-gray-400 text-xs sm:text-sm truncate">
//                               {album.location}
//                             </p>
//                           </div>
//                           <div className="text-right">
//                             <p className="text-pink-400 text-xs sm:text-sm font-semibold">
//                               {album.statistics?.views?.toLocaleString() || 0}
//                             </p>
//                             <p className="text-gray-500 text-xs">views</p>
//                           </div>
//                         </div>

//                         <div className="flex items-center justify-between text-xs text-gray-400">
//                           <span className="flex items-center gap-1">
//                             <PersonIcon className="text-sm" />
//                             <span className="truncate max-w-[100px]">
//                               {album.photographer || "Unknown"}
//                             </span>
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <ImageIcon className="text-sm" />
//                             {album.images?.length || 0} photos
//                           </span>
//                         </div>

//                         {/* Statistics */}
//                         <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
//                           <span className="flex items-center gap-1">
//                             <FavoriteIcon className="text-sm" />
//                             {album.statistics?.likes || 0}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <DownloadIcon className="text-sm" />
//                             {album.statistics?.downloads || 0}
//                           </span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}

//               {/* List View */}
//               {viewMode === "list" && (
//                 <div className="space-y-3">
//                   {currentAlbums.map((album, index) => (
//                     <motion.div
//                       key={album._id}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30 p-3 sm:p-4 flex flex-col xsm:flex-row items-start xsm:items-center gap-3 sm:gap-4"
//                       style={{ borderColor: album.color }}
//                     >
//                       <img
//                         src={album.coverImage?.url || "https://via.placeholder.com/60"}
//                         alt={album.title}
//                         className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
//                       />

//                       <div className="flex-1 min-w-0">
//                         <div className="flex flex-col xsm:flex-row xsm:items-center gap-2 xsm:gap-4">
//                           <div className="flex-1">
//                             <div className="flex items-center gap-2">
//                               <div
//                                 className="w-5 h-5 rounded-lg flex items-center justify-center text-white text-xs"
//                                 style={{ backgroundColor: album.color }}
//                               >
//                                 {getIconComponent(album.icon)}
//                               </div>
//                               <h3 className="text-white font-semibold text-sm sm:text-base truncate">
//                                 {album.title}
//                               </h3>
//                             </div>
//                             <p className="text-gray-400 text-xs sm:text-sm truncate">
//                               {album.location} • {album.photographer || "Unknown"}
//                             </p>
//                           </div>

//                           <div className="flex items-center gap-3 sm:gap-4">
//                             <div className="flex items-center gap-2 text-xs text-gray-400">
//                               <span className="flex items-center gap-1">
//                                 <VisibilityIcon className="text-sm" />
//                                 {album.statistics?.views?.toLocaleString() || 0}
//                               </span>
//                               <span className="flex items-center gap-1">
//                                 <FavoriteIcon className="text-sm" />
//                                 {album.statistics?.likes || 0}
//                               </span>
//                               <span className="flex items-center gap-1">
//                                 <ImageIcon className="text-sm" />
//                                 {album.images?.length || 0}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-2 w-full xsm:w-auto justify-end">
//                         <button
//                           onClick={() => openViewModal(album)}
//                           className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
//                           title="View"
//                         >
//                           <PreviewIcon className="text-lg" />
//                         </button>
//                         <button
//                           onClick={() => openEditModal(album)}
//                           className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
//                           title="Edit"
//                         >
//                           <EditIcon className="text-lg" />
//                         </button>
//                         <button
//                           onClick={() => handleDeleteAlbum(album)}
//                           className="p-2 text-gray-400 hover:text-red-400 transition-colors"
//                           title="Delete"
//                         >
//                           <DeleteIcon className="text-lg" />
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}

//               {/* Compact View */}
//               {viewMode === "compact" && (
//                 <div className="grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
//                   {currentAlbums.map((album, index) => (
//                     <motion.div
//                       key={album._id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: index * 0.03 }}
//                       className="group relative"
//                     >
//                       <img
//                         src={album.coverImage?.url || "https://via.placeholder.com/150"}
//                         alt={album.title}
//                         className="w-full aspect-square rounded-lg object-cover"
//                       />

//                       <div
//                         className="absolute top-1 left-1 w-5 h-5 rounded-lg flex items-center justify-center text-white text-xs"
//                         style={{ backgroundColor: album.color }}
//                       >
//                         {getIconComponent(album.icon)}
//                       </div>

//                       <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-1 p-1">
//                         <button
//                           onClick={() => openViewModal(album)}
//                           className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                         >
//                           <PreviewIcon className="text-xs sm:text-sm" />
//                         </button>
//                         <button
//                           onClick={() => openEditModal(album)}
//                           className="p-1 bg-purple-500 text-white rounded hover:bg-purple-600"
//                         >
//                           <EditIcon className="text-xs sm:text-sm" />
//                         </button>
//                       </div>

//                       <p className="text-white text-xs mt-1 truncate">
//                         {album.title}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
//                   <button
//                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                     disabled={currentPage === 1}
//                     className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-sm sm:text-base"
//                   >
//                     Previous
//                   </button>

//                   <div className="flex items-center gap-1">
//                     {[...Array(totalPages)].map((_, i) => (
//                       <button
//                         key={i}
//                         onClick={() => setCurrentPage(i + 1)}
//                         className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors text-sm sm:text-base ${
//                           currentPage === i + 1
//                             ? "bg-purple-500 text-white"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                       >
//                         {i + 1}
//                       </button>
//                     ))}
//                   </div>

//                   <button
//                     onClick={() =>
//                       setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                     }
//                     disabled={currentPage === totalPages}
//                     className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-sm sm:text-base"
//                   >
//                     Next
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </>
//       )}

//       {/* Create/Edit/View Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeModal}
//               className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
//             />

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="fixed inset-2 xsm:inset-4 md:inset-6 lg:inset-10 z-50 overflow-y-auto"
//             >
//               <div className="min-h-full flex items-center justify-center">
//                 <div className="w-full max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/30 p-4 sm:p-6">
//                   {/* Modal Header */}
//                   <div className="flex items-center justify-between mb-4 sm:mb-6">
//                     <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
//                       {modalMode === "create"
//                         ? "Create New Album"
//                         : modalMode === "edit"
//                           ? "Edit Album"
//                           : "View Album"}
//                     </h2>
//                     <button
//                       onClick={closeModal}
//                       className="p-2 text-gray-400 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
//                     >
//                       <CloseIcon />
//                     </button>
//                   </div>

//                   {/* Form */}
//                   <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                       {/* Left Column */}
//                       <div className="space-y-4">
//                         {/* Title */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Title *
//                           </label>
//                           <div className="relative">
//                             <TitleIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="text"
//                               name="title"
//                               value={formData.title}
//                               onChange={handleInputChange}
//                               required
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter album title"
//                             />
//                           </div>
//                         </div>

//                         {/* Location */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Location
//                           </label>
//                           <div className="relative">
//                             <LocationIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="text"
//                               name="location"
//                               value={formData.location}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter location"
//                             />
//                           </div>
//                         </div>

//                         {/* Photographer */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Photographer
//                           </label>
//                           <div className="relative">
//                             <PersonIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="text"
//                               name="photographer"
//                               value={formData.photographer}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter photographer name"
//                             />
//                           </div>
//                         </div>

//                         {/* Date */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Date
//                           </label>
//                           <div className="relative">
//                             <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//                             <input
//                               type="date"
//                               name="date"
//                               value={formData.date}
//                               onChange={handleInputChange}
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                             />
//                           </div>
//                         </div>

//                         {/* Color Selection */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-2">
//                             Album Color
//                           </label>
//                           <div className="flex flex-wrap gap-2">
//                             {colorOptions.map((color) => (
//                               <button
//                                 key={color.value}
//                                 type="button"
//                                 onClick={() => !(modalMode === "view") && setFormData(prev => ({ ...prev, color: color.value }))}
//                                 disabled={modalMode === "view"}
//                                 className={`w-8 h-8 rounded-lg ${color.class} ${
//                                   formData.color === color.value
//                                     ? "ring-2 ring-white scale-110"
//                                     : ""
//                                 } transition-all`}
//                                 title={color.label}
//                               />
//                             ))}
//                           </div>
//                         </div>

//                         {/* Icon Selection */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-2">
//                             Album Icon
//                           </label>
//                           <div className="flex flex-wrap gap-2">
//                             {iconOptions.map((icon) => (
//                               <button
//                                 key={icon.value}
//                                 type="button"
//                                 onClick={() => !(modalMode === "view") && setFormData(prev => ({ ...prev, icon: icon.value }))}
//                                 disabled={modalMode === "view"}
//                                 className={`w-10 h-10 rounded-lg flex items-center justify-center ${
//                                   formData.icon === icon.value
//                                     ? "bg-purple-500 text-white"
//                                     : "bg-gray-700 text-gray-400 hover:bg-gray-600"
//                                 } transition-colors`}
//                                 title={icon.label}
//                               >
//                                 {icon.icon}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Right Column */}
//                       <div className="space-y-4">
//                         {/* Description */}
//                         <div>
//                           <label className="block text-gray-400 text-xs sm:text-sm mb-1">
//                             Description
//                           </label>
//                           <div className="relative">
//                             <DescriptionIcon className="absolute left-3 top-3 text-gray-400 text-lg" />
//                             <textarea
//                               name="description"
//                               value={formData.description}
//                               onChange={handleInputChange}
//                               rows="4"
//                               disabled={modalMode === "view"}
//                               className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-sm sm:text-base"
//                               placeholder="Enter album description"
//                             />
//                           </div>
//                         </div>

//                         {/* Cover Image Upload */}
//                         {modalMode !== "view" && (
//                           <div>
//                             <label className="block text-gray-400 text-xs sm:text-sm mb-2">
//                               Cover Image
//                             </label>
//                             <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-purple-500 transition-colors">
//                               <input
//                                 type="file"
//                                 accept="image/jpeg,image/png,image/gif,image/webp"
//                                 onChange={handleCoverImageChange}
//                                 className="hidden"
//                                 id="cover-image-upload"
//                                 disabled={uploading}
//                               />
//                               <label
//                                 htmlFor="cover-image-upload"
//                                 className="cursor-pointer flex flex-col items-center gap-2"
//                               >
//                                 <UploadIcon className="text-3xl text-gray-400" />
//                                 <span className="text-gray-400 text-sm">
//                                   Click to upload cover image
//                                 </span>
//                                 <span className="text-gray-500 text-xs">
//                                   PNG, JPG, GIF, WEBP up to 10MB
//                                 </span>
//                               </label>
//                             </div>

//                             {/* Cover Preview */}
//                             {(coverPreview || formData.coverImage?.url) && (
//                               <div className="mt-2 relative inline-block">
//                                 <img
//                                   src={coverPreview || formData.coverImage?.url}
//                                   alt="Cover preview"
//                                   className="w-20 h-20 rounded-lg object-cover"
//                                 />
//                                 {modalMode !== "view" && (
//                                   <button
//                                     type="button"
//                                     onClick={() => {
//                                       setSelectedFiles(prev => ({ ...prev, coverImage: null }));
//                                       setCoverPreview(null);
//                                     }}
//                                     className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full"
//                                   >
//                                     <CloseIcon className="text-xs" />
//                                   </button>
//                                 )}
//                               </div>
//                             )}
//                           </div>
//                         )}

//                         {/* Images Upload */}
//                         {modalMode !== "view" && (
//                           <div>
//                             <label className="block text-gray-400 text-xs sm:text-sm mb-2">
//                               Additional Images
//                             </label>
//                             <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-purple-500 transition-colors">
//                               <input
//                                 type="file"
//                                 multiple
//                                 accept="image/jpeg,image/png,image/gif,image/webp"
//                                 onChange={handleImagesChange}
//                                 className="hidden"
//                                 id="images-upload"
//                                 disabled={uploading}
//                               />
//                               <label
//                                 htmlFor="images-upload"
//                                 className="cursor-pointer flex flex-col items-center gap-2"
//                               >
//                                 <UploadIcon className="text-3xl text-gray-400" />
//                                 <span className="text-gray-400 text-sm">
//                                   Click to upload images
//                                 </span>
//                                 <span className="text-gray-500 text-xs">
//                                   PNG, JPG, GIF, WEBP up to 10MB each
//                                 </span>
//                               </label>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Images Grid - Existing and New */}
//                     {(formData.images?.length > 0 || imagePreviews.length > 0) && (
//                       <div>
//                         <h3 className="text-white font-semibold text-sm sm:text-base mb-3">
//                           Images ({formData.images?.length + imagePreviews.length})
//                         </h3>
//                         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
//                           {/* Existing images */}
//                           {formData.images?.map((image, idx) => (
//                             <div key={image._id || idx} className="relative group">
//                               <img
//                                 src={image.url}
//                                 alt={image.title || "Album image"}
//                                 className="w-full aspect-square rounded-lg object-cover"
//                               />
//                               {modalMode === "edit" && selectedAlbum && (
//                                 <button
//                                   type="button"
//                                   onClick={() => handleDeleteImage(selectedAlbum._id, image._id)}
//                                   className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                                 >
//                                   <CloseIcon className="text-xs" />
//                                 </button>
//                               )}
//                             </div>
//                           ))}

//                           {/* New image previews */}
//                           {imagePreviews.map((preview, idx) => (
//                             <div key={`preview-${idx}`} className="relative group">
//                               <img
//                                 src={preview}
//                                 alt={`Preview ${idx + 1}`}
//                                 className="w-full aspect-square rounded-lg object-cover opacity-75"
//                               />
//                               <button
//                                 type="button"
//                                 onClick={() => handleRemoveSelectedImage(idx)}
//                                 className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full"
//                               >
//                                 <CloseIcon className="text-xs" />
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Form Actions */}
//                     {modalMode !== "view" && (
//                       <div className="flex flex-col xsm:flex-row gap-3 justify-end pt-4">
//                         <button
//                           type="button"
//                           onClick={closeModal}
//                           className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
//                         >
//                           Cancel
//                         </button>
//                         <button
//                           type="submit"
//                           disabled={uploading}
//                           className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base disabled:opacity-50 flex items-center gap-2"
//                         >
//                           {uploading ? (
//                             <>
//                               <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                               Uploading...
//                             </>
//                           ) : (
//                             modalMode === "create" ? "Create Album" : "Save Changes"
//                           )}
//                         </button>
//                       </div>
//                     )}
//                   </form>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
// components/GalleryManagement.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

// Material Icons
import {
  // Navigation Icons
  Dashboard as DashboardIcon,
  PhotoLibrary as PhotoLibraryIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Close as CloseIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  Refresh as RefreshIcon,
  MoreVert as MoreVertIcon,
  Visibility as VisibilityIcon,
  Favorite as FavoriteIcon,
  Download as DownloadIcon,

  // Form Icons
  Title as TitleIcon,
  Description as DescriptionIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  CalendarToday as CalendarIcon,
  CameraAlt as CameraIcon,
  Category as CategoryIcon,
  Image as ImageIcon,
  Link as LinkIcon,
  ColorLens as ColorIcon,
  FormatQuote as FormatQuoteIcon,

  // Status Icons
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  CheckCircleOutline as SuccessIcon,
  ErrorOutline as FailIcon,

  // Action Icons
  Save as SaveIcon,
  Cancel as CancelIcon,
  Upload as UploadIcon,
  Preview as PreviewIcon,
  Clear as ClearIcon,

  // View Icons
  GridView as GridViewIcon,
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,

  // Category Icons
  Terrain as TerrainIcon,
  BeachAccess as BeachAccessIcon,
  WbSunny as WbSunnyIcon,
  NightsStay as NightsStayIcon,
  Landscape as LandscapeIcon,
  Park as ParkIcon,
  FilterHdr as FilterHdrIcon,
  Waves as WavesIcon,

  // Sidebar Icons
  Menu as MenuIcon,
  Logout as LogoutIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Dns as DnsIcon,
  ContactMail as ContactMailIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";

// API Configuration
const API_BASE_URL = "https://myalbumnode.onrender.com";

// API Service with enhanced error handling
const apiService = {
  /* GET ALL ALBUMS */
  getAlbums: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/gallery`);

      // Handle different response structures
      let albumsData = [];

      if (Array.isArray(response.data)) {
        albumsData = response.data;
      } else if (response.data && Array.isArray(response.data.data)) {
        albumsData = response.data.data;
      } else if (
        response.data &&
        response.data.albums &&
        Array.isArray(response.data.albums)
      ) {
        albumsData = response.data.albums;
      } else if (
        response.data &&
        response.data.success &&
        Array.isArray(response.data.albums)
      ) {
        albumsData = response.data.albums;
      } else if (response.data && typeof response.data === "object") {
        for (let key in response.data) {
          if (Array.isArray(response.data[key])) {
            albumsData = response.data[key];
            break;
          }
        }
      }

      return {
        success: true,
        data: albumsData,
        message: "Albums loaded successfully",
      };
    } catch (error) {
      return {
        success: false,
        data: [],
        message: error.response?.data?.message || "Failed to fetch albums",
        error: error.response?.data || error,
      };
    }
  },

  /* GET SINGLE ALBUM */
  getAlbum: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/gallery/${id}`);

      let albumData = null;

      if (response.data && typeof response.data === "object") {
        if (response.data.data) {
          albumData = response.data.data;
        } else if (response.data.album) {
          albumData = response.data.album;
        } else {
          albumData = response.data;
        }
      }

      return {
        success: true,
        data: albumData,
        message: "Album loaded successfully",
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: error.response?.data?.message || "Failed to fetch album",
        error: error.response?.data || error,
      };
    }
  },

  /* CREATE ALBUM */
  createAlbum: async (formData) => {
    try {
      // Log FormData contents for debugging
      console.log("Creating album with FormData:");
      for (let pair of formData.entries()) {
        if (pair[1] instanceof File) {
          console.log(pair[0], {
            name: pair[1].name,
            type: pair[1].type,
            size: pair[1].size,
          });
        } else {
          console.log(pair[0], pair[1]);
        }
      }

      const response = await axios.post(`${API_BASE_URL}/gallery`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      let newAlbum = null;

      if (response.data && typeof response.data === "object") {
        if (response.data.data) {
          newAlbum = response.data.data;
        } else if (response.data.album) {
          newAlbum = response.data.album;
        } else {
          newAlbum = response.data;
        }
      }

      return {
        success: true,
        data: newAlbum,
        message: "Album created successfully",
      };
    } catch (error) {
      // Get detailed error message
      let errorMessage = "Failed to create album";
      if (error.response?.data) {
        if (typeof error.response.data === "string") {
          errorMessage = error.response.data;
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.data.error) {
          errorMessage = error.response.data.error;
        }
      }

      return {
        success: false,
        data: null,
        message: errorMessage,
        error: error.response?.data || error,
      };
    }
  },

  /* UPDATE ALBUM */
  updateAlbum: async (id, formData) => {
    try {
      // Log FormData contents for debugging

      for (let pair of formData.entries()) {
        if (pair[1] instanceof File) {
          console.log(pair[0], {
            name: pair[1].name,
            type: pair[1].type,
            size: pair[1].size,
          });
        } else {
          console.log(pair[0], pair[1]);
        }
      }

      const response = await axios.put(
        `${API_BASE_URL}/gallery/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 30000,
        },
      );

      let updatedAlbum = null;

      if (response.data && typeof response.data === "object") {
        if (response.data.data) {
          updatedAlbum = response.data.data;
        } else if (response.data.album) {
          updatedAlbum = response.data.album;
        } else {
          updatedAlbum = response.data;
        }
      }

      return {
        success: true,
        data: updatedAlbum,
        message: "Album updated successfully",
      };
    } catch (error) {
      let errorMessage = "Failed to update album";
      if (error.response?.data) {
        if (typeof error.response.data === "string") {
          errorMessage = error.response.data;
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.data.error) {
          errorMessage = error.response.data.error;
        }
      }

      return {
        success: false,
        data: null,
        message: errorMessage,
        error: error.response?.data || error,
      };
    }
  },

  /* DELETE ALBUM */
  deleteAlbum: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/gallery/${id}`);

      return {
        success: true,
        message: "Album deleted successfully",
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Failed to delete album",
        error: error.response?.data || error,
      };
    }
  },

  /* DELETE IMAGE */
  deleteImage: async (albumId, imageId) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/gallery/${albumId}/images/${imageId}`,
      );
      return {
        success: true,
        message: "Image deleted successfully",
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Failed to delete image",
        error: error.response?.data || error,
      };
    }
  },
};

// Sidebar Component
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      id: "overview",
      label: "Overview",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      id: "admin",
      label: "Admin Management",
      icon: <AdminPanelSettingsIcon />,
      path: "/admin/management",
    },
    {
      id: "ip",
      label: "IP Management",
      icon: <DnsIcon />,
      path: "/ip/management",
    },
    {
      id: "contacts",
      label: "Contacts Management",
      icon: <ContactMailIcon />,
      path: "/contacts/management",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`fixed top-0 left-0 h-full w-64 xsm:w-72 bg-gradient-to-b from-gray-900 to-gray-800 border-r border-purple-500/30 z-50 shadow-2xl`}
      >
        <div className="p-4 xsm:p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 xsm:gap-3">
              <div className="w-8 h-8 xsm:w-10 xsm:h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <PhotoLibraryIcon className="text-white text-lg xsm:text-xl" />
              </div>
              <h1 className="text-lg xsm:text-xl font-bold text-white">
                Gallery<span className="text-purple-400">Dash</span>
              </h1>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 xsm:p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronLeftIcon className="text-lg xsm:text-xl" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1 xsm:space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center gap-2 xsm:gap-3 px-3 xsm:px-4 py-2 xsm:py-3 rounded-lg transition-all text-sm xsm:text-base ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="text-base xsm:text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/");
              }}
              className="w-full flex items-center gap-2 xsm:gap-3 px-3 xsm:px-4 py-2 xsm:py-3 rounded-lg transition-all text-sm xsm:text-base text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
            >
              <LogoutIcon className="text-base xsm:text-lg" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Menu Button - shown when sidebar is closed */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-40 p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white lg:hidden"
        >
          <MenuIcon />
        </button>
      )}
    </>
  );
};

// Color options for albums
const colorOptions = [
  { value: "#ef4444", label: "Red", class: "bg-red-500" },
  { value: "#f97316", label: "Orange", class: "bg-orange-500" },
  { value: "#eab308", label: "Yellow", class: "bg-yellow-500" },
  { value: "#22c55e", label: "Green", class: "bg-green-500" },
  { value: "#3b82f6", label: "Blue", class: "bg-blue-500" },
  { value: "#6366f1", label: "Indigo", class: "bg-indigo-500" },
  { value: "#a855f7", label: "Purple", class: "bg-purple-500" },
  { value: "#ec4899", label: "Pink", class: "bg-pink-500" },
  { value: "#6b7280", label: "Gray", class: "bg-gray-500" },
];

// Icon options
const iconOptions = [
  { value: "terrain", label: "Terrain", icon: <TerrainIcon /> },
  { value: "beach", label: "Beach", icon: <BeachAccessIcon /> },
  { value: "sunny", label: "Sunny", icon: <WbSunnyIcon /> },
  { value: "night", label: "Night", icon: <NightsStayIcon /> },
  { value: "landscape", label: "Landscape", icon: <LandscapeIcon /> },
  { value: "park", label: "Park", icon: <ParkIcon /> },
  { value: "mountain", label: "Mountain", icon: <FilterHdrIcon /> },
  { value: "waves", label: "Waves", icon: <WavesIcon /> },
];

export const GalleryManagement = () => {
  // State management
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    photographer: "",
    date: "",
    color: "#6366f1",
    icon: "terrain",
    coverImage: null,
    images: [],
  });
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState({
    coverImage: null,
    images: [],
  });
  const [coverPreview, setCoverPreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [screenSize, setScreenSize] = useState("desktop");

  // Success/Fail Modal States
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalDetails, setModalDetails] = useState("");
  const [errorDetails, setErrorDetails] = useState(null);

  // Detect screen size for responsive design
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setScreenSize("xsm");
      else if (width < 640) setScreenSize("sm");
      else if (width < 768) setScreenSize("md");
      else if (width < 1024) setScreenSize("lg");
      else setScreenSize("xl");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch albums on mount
  useEffect(() => {
    fetchAlbums();
  }, []);

  // Fetch albums from API
  const fetchAlbums = async () => {
    setLoading(true);
    try {
      const response = await apiService.getAlbums();
      if (response.success) {
        setAlbums(Array.isArray(response.data) ? response.data : []);
        showSuccess("Albums Loaded", response.message);
      } else {
        setAlbums([]);
        showFail("Failed to Load Albums", response.message, response.error);
      }
    } catch (error) {
      console.error("Error in fetchAlbums:", error);
      setAlbums([]);
      showFail(
        "Error",
        "An unexpected error occurred while loading albums",
        error,
      );
    } finally {
      setLoading(false);
    }
  };

  // Show Success Modal
  const showSuccess = (title, message) => {
    setModalMessage(title);
    setModalDetails(message);
    setErrorDetails(null);
    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  // Show Fail Modal
  const showFail = (title, message, error = null) => {
    setModalMessage(title);
    setModalDetails(message);
    setErrorDetails(error);
    setShowFailModal(true);

    setTimeout(() => {
      setShowFailModal(false);
    }, 5000);
  };

  // Validate files before upload
  const validateFiles = () => {
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    const ALLOWED_TYPES = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
    ];

    if (selectedFiles.coverImage) {
      if (selectedFiles.coverImage.size > MAX_FILE_SIZE) {
        showFail("File Too Large", "Cover image must be less than 10MB");
        return false;
      }
      if (!ALLOWED_TYPES.includes(selectedFiles.coverImage.type)) {
        showFail(
          "Invalid File Type",
          "Cover image must be JPEG, PNG, GIF, or WEBP",
        );
        return false;
      }
    }

    for (let file of selectedFiles.images) {
      if (file.size > MAX_FILE_SIZE) {
        showFail("File Too Large", `Image ${file.name} must be less than 10MB`);
        return false;
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        showFail(
          "Invalid File Type",
          `${file.name} must be JPEG, PNG, GIF, or WEBP`,
        );
        return false;
      }
    }

    return true;
  };

  // Handle refresh
  const handleRefresh = () => {
    fetchAlbums();
  };

  // Open create modal
  const openCreateModal = () => {
    setFormData({
      title: "",
      location: "",
      description: "",
      photographer: "",
      date: new Date().toISOString().split("T")[0],
      color: "#6366f1",
      icon: "terrain",
      coverImage: null,
      images: [],
    });
    setSelectedFiles({
      coverImage: null,
      images: [],
    });
    setCoverPreview(null);
    setImagePreviews([]);
    setModalMode("create");
    setIsModalOpen(true);
  };

  // Open edit modal
  const openEditModal = (album) => {
    setSelectedAlbum(album);
    setFormData({
      title: album.title || "",
      location: album.location || "",
      description: album.description || "",
      photographer: album.photographer || "",
      date: album.date || new Date().toISOString().split("T")[0],
      color: album.color || "#6366f1",
      icon: album.icon || "terrain",
      coverImage: album.coverImage || null,
      images: album.images || [],
    });
    setCoverPreview(album.coverImage?.url || null);
    setSelectedFiles({
      coverImage: null,
      images: [],
    });
    setImagePreviews([]);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  // Open view modal
  const openViewModal = (album) => {
    setSelectedAlbum(album);
    setFormData({
      title: album.title || "",
      location: album.location || "",
      description: album.description || "",
      photographer: album.photographer || "",
      date: album.date || "",
      color: album.color || "#6366f1",
      icon: album.icon || "terrain",
      coverImage: album.coverImage || null,
      images: album.images || [],
    });
    setCoverPreview(album.coverImage?.url || null);
    setModalMode("view");
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlbum(null);
    setSelectedFiles({
      coverImage: null,
      images: [],
    });
    setCoverPreview(null);
    setImagePreviews([]);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle cover image selection
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFiles((prev) => ({
        ...prev,
        coverImage: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle multiple images selection
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setSelectedFiles((prev) => ({
        ...prev,
        images: [...prev.images, ...files],
      }));

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews((prev) => [...prev, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Remove selected image from preview
  const handleRemoveSelectedImage = (index) => {
    setSelectedFiles((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate title
    if (!formData.title || formData.title.trim() === "") {
      showFail("Validation Error", "Title is required");
      return;
    }

    // Validate files
    if (!validateFiles()) {
      return;
    }

    setUploading(true);

    const formDataToSend = new FormData();

    // Append all text fields (send empty strings instead of null)
    formDataToSend.append("title", formData.title.trim());
    formDataToSend.append("location", formData.location || "");
    formDataToSend.append("description", formData.description || "");
    formDataToSend.append("photographer", formData.photographer || "");
    formDataToSend.append(
      "date",
      formData.date || new Date().toISOString().split("T")[0],
    );
    formDataToSend.append("color", formData.color || "#6366f1");
    formDataToSend.append("icon", formData.icon || "terrain");

    // Initialize statistics (if your schema expects it)
    formDataToSend.append("statistics[views]", "0");
    formDataToSend.append("statistics[likes]", "0");
    formDataToSend.append("statistics[downloads]", "0");

    // Append cover image if new one selected
    if (selectedFiles.coverImage) {
      formDataToSend.append("coverImage", selectedFiles.coverImage);
    }

    // Append new images
    selectedFiles.images.forEach((image) => {
      formDataToSend.append("images", image);
    });

    // Log FormData for debugging
   
    for (let pair of formDataToSend.entries()) {
      if (pair[1] instanceof File) {
        console.log(pair[0], {
          name: pair[1].name,
          type: pair[1].type,
          size: pair[1].size,
        });
      } else {
        console.log(pair[0], pair[1]);
      }
    }

    try {
      let response;

      if (modalMode === "create") {
        response = await apiService.createAlbum(formDataToSend);
        if (response.success) {
          setAlbums((prev) =>
            Array.isArray(prev) ? [response.data, ...prev] : [response.data],
          );
          showSuccess("Success!", response.message);
          closeModal();
        } else {
          showFail("Creation Failed", response.message, response.error);
        }
      } else if (modalMode === "edit" && selectedAlbum) {
        response = await apiService.updateAlbum(
          selectedAlbum._id,
          formDataToSend,
        );
        if (response.success) {
          setAlbums((prev) =>
            Array.isArray(prev)
              ? prev.map((album) =>
                  album._id === selectedAlbum._id ? response.data : album,
                )
              : [response.data],
          );
          showSuccess("Success!", response.message);
          closeModal();
        } else {
          showFail("Update Failed", response.message, response.error);
        }
      }
    } catch (error) {
   
      showFail("Error", "An unexpected error occurred", error);
    } finally {
      setUploading(false);
    }
  };

  // Handle delete album
  const handleDeleteAlbum = async (album) => {
    if (window.confirm(`Are you sure you want to delete "${album.title}"?`)) {
      const response = await apiService.deleteAlbum(album._id);
      if (response.success) {
        setAlbums((prev) =>
          Array.isArray(prev) ? prev.filter((a) => a._id !== album._id) : [],
        );
        showSuccess("Deleted!", response.message);
      } else {
        showFail("Delete Failed", response.message, response.error);
      }
    }
  };

  // Handle delete image from album
  const handleDeleteImage = async (albumId, imageId) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      const response = await apiService.deleteImage(albumId, imageId);
      if (response.success) {
        setAlbums((prev) =>
          Array.isArray(prev)
            ? prev.map((album) => {
                if (album._id === albumId) {
                  return {
                    ...album,
                    images: album.images.filter((img) => img._id !== imageId),
                  };
                }
                return album;
              })
            : [],
        );

        if (selectedAlbum && selectedAlbum._id === albumId) {
          setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((img) => img._id !== imageId),
          }));
        }

        showSuccess("Image Deleted", response.message);
      } else {
        showFail("Delete Failed", response.message, response.error);
      }
    }
  };

  // Filter and sort albums
  const filteredAlbums = Array.isArray(albums)
    ? albums
        .filter((album) => {
          if (!album) return false;
          const matchesSearch =
            (album.title?.toLowerCase() || "").includes(
              searchTerm.toLowerCase(),
            ) ||
            (album.photographer?.toLowerCase() || "").includes(
              searchTerm.toLowerCase(),
            ) ||
            (album.location?.toLowerCase() || "").includes(
              searchTerm.toLowerCase(),
            );
          return matchesSearch;
        })
        .sort((a, b) => {
          if (!a || !b) return 0;
          if (sortBy === "createdAt") {
            return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
          }
          if (sortBy === "title") {
            return (a.title || "").localeCompare(b.title || "");
          }
          if (sortBy === "views") {
            return (b.statistics?.views || 0) - (a.statistics?.views || 0);
          }
          if (sortBy === "likes") {
            return (b.statistics?.likes || 0) - (a.statistics?.likes || 0);
          }
          return 0;
        })
    : [];

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAlbums = filteredAlbums.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAlbums.length / itemsPerPage);

  // Get icon component
  const getIconComponent = (iconName) => {
    const icon = iconOptions.find((i) => i.value === iconName);
    return icon?.icon || <PhotoLibraryIcon />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-10 w-full from-slate-900 via-gray-900 to-slate-900">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : ""}`}
      >
        <div className="p-3 xsm:p-4 sm:p-5 md:p-6 lg:p-8">
          {/* Success Modal */}
          <AnimatePresence>
            {showSuccessModal && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                  onClick={() => setShowSuccessModal(false)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: -50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: -50 }}
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-[90%] xsm:max-w-md"
                >
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-1">
                    <div className="bg-gray-900 rounded-xl p-4 xsm:p-6 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-16 h-16 xsm:w-20 xsm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 xsm:mb-4"
                      >
                        <SuccessIcon className="text-white text-2xl xsm:text-4xl" />
                      </motion.div>

                      <h3 className="text-lg xsm:text-2xl font-bold text-white mb-1 xsm:mb-2">
                        {modalMessage}
                      </h3>

                      <p className="text-sm xsm:text-base text-gray-300 mb-4 xsm:mb-6">
                        {modalDetails}
                      </p>

                      <button
                        onClick={() => setShowSuccessModal(false)}
                        className="px-4 xsm:px-6 py-1.5 xsm:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm xsm:text-base"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Fail Modal */}
          <AnimatePresence>
            {showFailModal && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                  onClick={() => setShowFailModal(false)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: -50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: -50 }}
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-[90%] xsm:max-w-md"
                >
                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-1">
                    <div className="bg-gray-900 rounded-xl p-4 xsm:p-6 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-16 h-16 xsm:w-20 xsm:h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 xsm:mb-4"
                      >
                        <FailIcon className="text-white text-2xl xsm:text-4xl" />
                      </motion.div>

                      <h3 className="text-lg xsm:text-2xl font-bold text-white mb-1 xsm:mb-2">
                        {modalMessage}
                      </h3>

                      <p className="text-sm xsm:text-base text-gray-300 mb-3 xsm:mb-4">
                        {modalDetails}
                      </p>

                      {errorDetails && (
                        <div className="mb-3 xsm:mb-4 p-2 xsm:p-3 bg-red-500/20 rounded-lg text-left overflow-auto max-h-32">
                          <p className="text-red-200 text-[10px] xsm:text-xs font-mono break-all">
                            {typeof errorDetails === "string"
                              ? errorDetails
                              : JSON.stringify(errorDetails, null, 2)}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-col xsm:flex-row gap-2 xsm:gap-3 justify-center">
                        <button
                          onClick={() => setShowFailModal(false)}
                          className="px-4 xsm:px-6 py-1.5 xsm:py-2 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors text-sm xsm:text-base"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {
                            setShowFailModal(false);
                            fetchAlbums();
                          }}
                          className="px-4 xsm:px-6 py-1.5 xsm:py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm xsm:text-base"
                        >
                          Retry
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 xsm:mb-5 sm:mb-6 md:mb-8"
          >
            <div className="flex flex-col xsm:flex-row items-start xsm:items-center justify-between gap-3 xsm:gap-4">
              {/* Title Section */}
              <div className="flex items-center gap-2 xsm:gap-3">
                <div className="w-8 h-8 xsm:w-10 xsm:h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg xsm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhotoLibraryIcon className="text-white text-lg xsm:text-xl sm:text-2xl" />
                </div>
                <div>
                  <h1 className="text-lg xsm:text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Gallery Management
                  </h1>
                  <p className="text-xs xsm:text-sm text-gray-400">
                    Manage your albums and images
                  </p>
                </div>
              </div>

              {/* Create Button */}
              <button
                onClick={openCreateModal}
                className="w-full xsm:w-auto px-3 xsm:px-4 sm:px-6 py-1.5 xsm:py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1 xsm:gap-2 text-xs xsm:text-sm sm:text-base"
              >
                <AddIcon className="text-base xsm:text-lg sm:text-xl" />
                <span className="hidden xsm:inline">Create New Album</span>
                <span className="xsm:hidden">Create</span>
              </button>
            </div>
          </motion.div>

          {/* Filters Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg xsm:rounded-xl border border-purple-500/30 p-2 xsm:p-3 sm:p-4 mb-4 xsm:mb-5 sm:mb-6"
          >
            <div className="flex flex-col xsm:flex-row gap-2 xsm:gap-3">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <SearchIcon className="absolute left-2 xsm:left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base xsm:text-lg" />
                  <input
                    type="text"
                    placeholder="Search albums..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 xsm:pl-10 pr-2 xsm:pr-4 py-1.5 xsm:py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-xs xsm:text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 xsm:flex-none px-2 xsm:px-3 py-1.5 xsm:py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-xs xsm:text-sm sm:text-base"
                >
                  <option value="createdAt">Date</option>
                  <option value="title">Title</option>
                  <option value="views">Views</option>
                  <option value="likes">Likes</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1 xsm:p-1.5 rounded-lg transition-colors ${
                      viewMode === "grid"
                        ? "bg-purple-500 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <GridViewIcon className="text-base xsm:text-lg" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1 xsm:p-1.5 rounded-lg transition-colors ${
                      viewMode === "list"
                        ? "bg-purple-500 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <ViewListIcon className="text-base xsm:text-lg" />
                  </button>
                  <button
                    onClick={() => setViewMode("compact")}
                    className={`p-1 xsm:p-1.5 rounded-lg transition-colors ${
                      viewMode === "compact"
                        ? "bg-purple-500 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <ViewModuleIcon className="text-base xsm:text-lg" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-2 xsm:mt-3 text-[10px] xsm:text-xs sm:text-sm text-gray-400">
              Showing {filteredAlbums.length > 0 ? indexOfFirstItem + 1 : 0}-
              {Math.min(indexOfLastItem, filteredAlbums.length)} of{" "}
              {filteredAlbums.length} albums
            </div>
          </motion.div>

          {/* Albums Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-48 xsm:h-56 sm:h-64">
              <div className="w-8 h-8 xsm:w-10 xsm:h-10 sm:w-12 sm:h-12 border-3 xsm:border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {filteredAlbums.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 xsm:py-10 sm:py-12"
                >
                  <PhotoLibraryIcon className="text-4xl xsm:text-5xl sm:text-6xl text-gray-600 mx-auto mb-2 xsm:mb-3 sm:mb-4" />
                  <h3 className="text-lg xsm:text-xl sm:text-2xl text-white font-semibold mb-1 xsm:mb-2">
                    No Albums Found
                  </h3>
                  <p className="text-xs xsm:text-sm sm:text-base text-gray-400 mb-3 xsm:mb-4">
                    Get started by creating your first album
                  </p>
                  <button
                    onClick={openCreateModal}
                    className="px-3 xsm:px-4 sm:px-6 py-1.5 xsm:py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-xs xsm:text-sm sm:text-base"
                  >
                    Create New Album
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Grid View */}
                  {viewMode === "grid" && (
                    <div className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xsm:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      {currentAlbums.map((album, index) => (
                        <motion.div
                          key={album._id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="group bg-gray-800/50 backdrop-blur-sm rounded-lg xsm:rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-all"
                          style={{ borderColor: album.color }}
                        >
                          {/* Cover Image */}
                          <div className="relative aspect-square">
                            <img
                              src={
                                album.coverImage?.url ||
                                "https://via.placeholder.com/400"
                              }
                              alt={album.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Icon Overlay */}
                            <div
                              className="absolute top-1 xsm:top-2 left-1 xsm:left-2 w-5 h-5 xsm:w-6 xsm:h-6 sm:w-8 sm:h-8 rounded-md xsm:rounded-lg flex items-center justify-center text-white"
                              style={{ backgroundColor: album.color }}
                            >
                              <span className="text-xs xsm:text-sm sm:text-base">
                                {getIconComponent(album.icon)}
                              </span>
                            </div>

                            {/* Actions Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 xsm:gap-2">
                              <button
                                onClick={() => openViewModal(album)}
                                className="p-1 xsm:p-1.5 sm:p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                title="View"
                              >
                                <PreviewIcon className="text-xs xsm:text-sm sm:text-base" />
                              </button>
                              <button
                                onClick={() => openEditModal(album)}
                                className="p-1 xsm:p-1.5 sm:p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                                title="Edit"
                              >
                                <EditIcon className="text-xs xsm:text-sm sm:text-base" />
                              </button>
                              <button
                                onClick={() => handleDeleteAlbum(album)}
                                className="p-1 xsm:p-1.5 sm:p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                title="Delete"
                              >
                                <DeleteIcon className="text-xs xsm:text-sm sm:text-base" />
                              </button>
                            </div>
                          </div>

                          {/* Album Info */}
                          <div className="p-2 xsm:p-3 sm:p-4">
                            <div className="flex items-start justify-between mb-1 xsm:mb-2">
                              <div>
                                <h3 className="text-white font-semibold text-xs xsm:text-sm sm:text-base truncate max-w-[100px] xsm:max-w-[120px] sm:max-w-[150px]">
                                  {album.title}
                                </h3>
                                <p className="text-gray-400 text-[10px] xsm:text-xs sm:text-sm truncate max-w-[100px] xsm:max-w-[120px] sm:max-w-[150px]">
                                  {album.location}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-pink-400 text-[10px] xsm:text-xs sm:text-sm font-semibold">
                                  {album.statistics?.views?.toLocaleString() ||
                                    0}
                                </p>
                                <p className="text-gray-500 text-[8px] xsm:text-[10px] sm:text-xs">
                                  views
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[8px] xsm:text-[10px] sm:text-xs text-gray-400">
                              <span className="flex items-center gap-0.5 xsm:gap-1">
                                <PersonIcon className="text-[10px] xsm:text-xs sm:text-sm" />
                                <span className="truncate max-w-[50px] xsm:max-w-[70px] sm:max-w-[100px]">
                                  {album.photographer || "Unknown"}
                                </span>
                              </span>
                              <span className="flex items-center gap-0.5 xsm:gap-1">
                                <ImageIcon className="text-[10px] xsm:text-xs sm:text-sm" />
                                {album.images?.length || 0}
                              </span>
                            </div>

                            {/* Statistics */}
                            <div className="flex items-center gap-1 xsm:gap-2 sm:gap-3 mt-1 xsm:mt-2 text-[8px] xsm:text-[10px] sm:text-xs text-gray-500">
                              <span className="flex items-center gap-0.5 xsm:gap-1">
                                <FavoriteIcon className="text-[10px] xsm:text-xs sm:text-sm" />
                                {album.statistics?.likes || 0}
                              </span>
                              <span className="flex items-center gap-0.5 xsm:gap-1">
                                <DownloadIcon className="text-[10px] xsm:text-xs sm:text-sm" />
                                {album.statistics?.downloads || 0}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* List View */}
                  {viewMode === "list" && (
                    <div className="space-y-2 xsm:space-y-3">
                      {currentAlbums.map((album, index) => (
                        <motion.div
                          key={album._id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-gray-800/50 backdrop-blur-sm rounded-lg xsm:rounded-xl border border-purple-500/30 p-2 xsm:p-3 sm:p-4 flex flex-col xsm:flex-row items-start xsm:items-center gap-2 xsm:gap-3 sm:gap-4"
                          style={{ borderColor: album.color }}
                        >
                          <img
                            src={
                              album.coverImage?.url ||
                              "https://via.placeholder.com/60"
                            }
                            alt={album.title}
                            className="w-8 h-8 xsm:w-10 xsm:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg object-cover"
                          />

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col xsm:flex-row xsm:items-center gap-1 xsm:gap-2 sm:gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-1 xsm:gap-2">
                                  <div
                                    className="w-3 h-3 xsm:w-4 xsm:h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center text-white text-[8px] xsm:text-[10px] sm:text-xs"
                                    style={{ backgroundColor: album.color }}
                                  >
                                    {getIconComponent(album.icon)}
                                  </div>
                                  <h3 className="text-white font-semibold text-xs xsm:text-sm sm:text-base truncate">
                                    {album.title}
                                  </h3>
                                </div>
                                <p className="text-gray-400 text-[10px] xsm:text-xs sm:text-sm truncate">
                                  {album.location} •{" "}
                                  {album.photographer || "Unknown"}
                                </p>
                              </div>

                              <div className="flex items-center gap-2 xsm:gap-3 sm:gap-4">
                                <div className="flex items-center gap-1 xsm:gap-2 text-[8px] xsm:text-[10px] sm:text-xs text-gray-400">
                                  <span className="flex items-center gap-0.5 xsm:gap-1">
                                    <VisibilityIcon className="text-[10px] xsm:text-xs sm:text-sm" />
                                    {album.statistics?.views?.toLocaleString() ||
                                      0}
                                  </span>
                                  <span className="flex items-center gap-0.5 xsm:gap-1">
                                    <FavoriteIcon className="text-[10px] xsm:text-xs sm:text-sm" />
                                    {album.statistics?.likes || 0}
                                  </span>
                                  <span className="flex items-center gap-0.5 xsm:gap-1">
                                    <ImageIcon className="text-[10px] xsm:text-xs sm:text-sm" />
                                    {album.images?.length || 0}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 xsm:gap-2 w-full xsm:w-auto justify-end">
                            <button
                              onClick={() => openViewModal(album)}
                              className="p-1 xsm:p-1.5 text-gray-400 hover:text-blue-400 transition-colors"
                              title="View"
                            >
                              <PreviewIcon className="text-sm xsm:text-base sm:text-lg" />
                            </button>
                            <button
                              onClick={() => openEditModal(album)}
                              className="p-1 xsm:p-1.5 text-gray-400 hover:text-purple-400 transition-colors"
                              title="Edit"
                            >
                              <EditIcon className="text-sm xsm:text-base sm:text-lg" />
                            </button>
                            <button
                              onClick={() => handleDeleteAlbum(album)}
                              className="p-1 xsm:p-1.5 text-gray-400 hover:text-red-400 transition-colors"
                              title="Delete"
                            >
                              <DeleteIcon className="text-sm xsm:text-base sm:text-lg" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Compact View */}
                  {viewMode === "compact" && (
                    <div className="grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1 xsm:gap-2 sm:gap-3">
                      {currentAlbums.map((album, index) => (
                        <motion.div
                          key={album._id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.03 }}
                          className="group relative"
                        >
                          <img
                            src={
                              album.coverImage?.url ||
                              "https://via.placeholder.com/150"
                            }
                            alt={album.title}
                            className="w-full aspect-square rounded-lg object-cover"
                          />

                          <div
                            className="absolute top-0.5 xsm:top-1 left-0.5 xsm:left-1 w-3 h-3 xsm:w-4 xsm:h-4 rounded-md flex items-center justify-center text-white text-[6px] xsm:text-[8px] sm:text-[10px]"
                            style={{ backgroundColor: album.color }}
                          >
                            {getIconComponent(album.icon)}
                          </div>

                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-0.5 xsm:gap-1 p-1">
                            <button
                              onClick={() => openViewModal(album)}
                              className="p-0.5 xsm:p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                              <PreviewIcon className="text-[8px] xsm:text-[10px] sm:text-xs" />
                            </button>
                            <button
                              onClick={() => openEditModal(album)}
                              className="p-0.5 xsm:p-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                            >
                              <EditIcon className="text-[8px] xsm:text-[10px] sm:text-xs" />
                            </button>
                          </div>

                          <p className="text-white text-[8px] xsm:text-[10px] sm:text-xs mt-0.5 xsm:mt-1 truncate">
                            {album.title}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex flex-wrap items-center justify-center gap-1 xsm:gap-2 mt-4 xsm:mt-5 sm:mt-6 md:mt-8">
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="px-2 xsm:px-3 sm:px-4 py-1 xsm:py-1.5 sm:py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-[10px] xsm:text-xs sm:text-sm"
                      >
                        Previous
                      </button>

                      <div className="flex items-center gap-0.5 xsm:gap-1">
                        {[...Array(totalPages)].map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-5 h-5 xsm:w-6 xsm:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors text-[8px] xsm:text-[10px] sm:text-xs md:text-sm ${
                              currentPage === i + 1
                                ? "bg-purple-500 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages),
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="px-2 xsm:px-3 sm:px-4 py-1 xsm:py-1.5 sm:py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-[10px] xsm:text-xs sm:text-sm"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {/* Create/Edit/View Modal */}
          <AnimatePresence>
            {isModalOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeModal}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="fixed inset-2 xsm:inset-4 md:inset-6 lg:inset-10 z-50 overflow-y-auto"
                >
                  <div className="min-h-full flex items-center justify-center">
                    <div className="w-full max-w-[95%] xsm:max-w-[90%] sm:max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg xsm:rounded-xl border border-purple-500/30 p-3 xsm:p-4 sm:p-5 md:p-6">
                      {/* Modal Header */}
                      <div className="flex items-center justify-between mb-3 xsm:mb-4 sm:mb-5 md:mb-6">
                        <h2 className="text-base xsm:text-lg sm:text-xl md:text-2xl font-bold text-white">
                          {modalMode === "create"
                            ? "Create New Album"
                            : modalMode === "edit"
                              ? "Edit Album"
                              : "View Album"}
                        </h2>
                        <div
                          onClick={closeModal}
                          className="p-1 xsm:p-1.5 sm:p-2 text-gray-400 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
                        >
                          <CloseIcon className="text-base xsm:text-lg sm:text-xl" />
                        </div>
                      </div>

                      {/* Form */}
                      <form
                        onSubmit={handleSubmit}
                        className="space-y-3 xsm:space-y-4 sm:space-y-5 md:space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xsm:gap-4 sm:gap-5 md:gap-6">
                          {/* Left Column */}
                          <div className="space-y-3 xsm:space-y-4">
                            {/* Title */}
                            <div>
                              <label className="block text-gray-400 text-[10px] xsm:text-xs sm:text-sm mb-0.5 xsm:mb-1">
                                Title *
                              </label>
                              <div className="relative">
                                <TitleIcon className="absolute left-2 xsm:left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm xsm:text-base sm:text-lg" />
                                <input
                                  type="text"
                                  name="title"
                                  value={formData.title}
                                  onChange={handleInputChange}
                                  required
                                  disabled={modalMode === "view"}
                                  className="w-full pl-8 xsm:pl-10 pr-2 xsm:pr-4 py-1 xsm:py-1.5 sm:py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-xs xsm:text-sm sm:text-base"
                                  placeholder="Enter album title"
                                />
                              </div>
                            </div>

                            {/* Location */}
                            <div>
                              <label className="block text-gray-400 text-[10px] xsm:text-xs sm:text-sm mb-0.5 xsm:mb-1">
                                Location
                              </label>
                              <div className="relative">
                                <LocationIcon className="absolute left-2 xsm:left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm xsm:text-base sm:text-lg" />
                                <input
                                  type="text"
                                  name="location"
                                  value={formData.location}
                                  onChange={handleInputChange}
                                  disabled={modalMode === "view"}
                                  className="w-full pl-8 xsm:pl-10 pr-2 xsm:pr-4 py-1 xsm:py-1.5 sm:py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-xs xsm:text-sm sm:text-base"
                                  placeholder="Enter location"
                                />
                              </div>
                            </div>

                            {/* Photographer */}
                            <div>
                              <label className="block text-gray-400 text-[10px] xsm:text-xs sm:text-sm mb-0.5 xsm:mb-1">
                                Photographer
                              </label>
                              <div className="relative">
                                <PersonIcon className="absolute left-2 xsm:left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm xsm:text-base sm:text-lg" />
                                <input
                                  type="text"
                                  name="photographer"
                                  value={formData.photographer}
                                  onChange={handleInputChange}
                                  disabled={modalMode === "view"}
                                  className="w-full pl-8 xsm:pl-10 pr-2 xsm:pr-4 py-1 xsm:py-1.5 sm:py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-xs xsm:text-sm sm:text-base"
                                  placeholder="Enter photographer name"
                                />
                              </div>
                            </div>

                            {/* Date */}
                            <div>
                              <label className="block text-gray-400 text-[10px] xsm:text-xs sm:text-sm mb-0.5 xsm:mb-1">
                                Date
                              </label>
                              <div className="relative">
                                <CalendarIcon className="absolute left-2 xsm:left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm xsm:text-base sm:text-lg" />
                                <input
                                  type="date"
                                  name="date"
                                  value={formData.date}
                                  onChange={handleInputChange}
                                  disabled={modalMode === "view"}
                                  className="w-full pl-8 xsm:pl-10 pr-2 xsm:pr-4 py-1 xsm:py-1.5 sm:py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50 text-xs xsm:text-sm sm:text-base"
                                />
                              </div>
                            </div>

                            {/* Color Selection */}
                            <div>
                              <label className="block text-gray-400 text-[10px] xsm:text-xs sm:text-sm mb-1 xsm:mb-2">
                                Album Color
                              </label>
                              <div className="flex flex-wrap gap-1 xsm:gap-2">
                                {colorOptions.map((color) => (
                                  <button
                                    key={color.value}
                                    type="button"
                                    onClick={() =>
                                      !(modalMode === "view") &&
                                      setFormData((prev) => ({
                                        ...prev,
                                        color: color.value,
                                      }))
                                    }
                                    disabled={modalMode === "view"}
                                    className={`w-5 h-5 xsm:w-6 xsm:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg ${color.class} ${
                                      formData.color === color.value
                                        ? "ring-1 xsm:ring-2 ring-white scale-110"
                                        : ""
                                    } transition-all`}
                                    title={color.label}
                                  />
                                ))}
                              </div>
                            </div>

                            {/* Icon Selection */}
                            <div>
                              <label className="block text-gray-400 text-[10px] xsm:text-xs sm:text-sm mb-1 xsm:mb-2">
                                Album Icon
                              </label>
                              <div className="flex flex-wrap gap-1 xsm:gap-2">
                                {iconOptions.map((icon) => (
                                  <button
                                    key={icon.value}
                                    type="button"
                                    onClick={() =>
                                      !(modalMode === "view") &&
                                      setFormData((prev) => ({
                                        ...prev,
                                        icon: icon.value,
                                      }))
                                    }
                                    disabled={modalMode === "view"}
                                    className={`w-6 h-6 xsm:w-7 xsm:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center ${
                                      formData.icon === icon.value
                                        ? "bg-purple-500 text-white"
                                        : "bg-gray-700 text-gray-400 hover:bg-gray-600"
                                    } transition-colors text-xs xsm:text-sm sm:text-base`}
                                    title={icon.label}
                                  >
                                    {icon.icon}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-3 xsm:space-y-4">
                            {/* Description */}
                            <div>
                              <label className="block text-gray-400 text-[10px] xsm:text-xs sm:text-sm mb-0.5 xsm:mb-1">
                                Description
                              </label>
                              <div className="relative">
                                <DescriptionIcon className="absolute left-2 xsm:left-3 top-2 xsm:top-3 text-gray-400 text-sm xsm:text-base sm:text-lg" />
                                <textarea
                                  name="description"
                                  value={formData.description}
                                  onChange={handleInputChange}
                                  rows={screenSize === "xsm" ? "3" : "4"}
                                  disabled={modalMode === "view"}
                                  className="w-full pl-8 xsm:pl-10 pr-2 xsm:pr-4 py-1 xsm:py-1.5 sm:py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 disabled:opacity-50 text-xs xsm:text-sm sm:text-base"
                                  placeholder="Enter album description"
                                />
                              </div>
                            </div>

                            {/* Cover Image Upload */}
                            {modalMode !== "view" && (
                              <div>
                                <label className="block text-gray-400 text-[10px] xsm:text-xs sm:text-sm mb-1 xsm:mb-2">
                                  Cover Image
                                </label>
                                <div className="border-2 border-dashed border-gray-600 rounded-lg p-2 xsm:p-3 sm:p-4 text-center hover:border-purple-500 transition-colors">
                                  <input
                                    type="file"
                                    accept="image/jpeg,image/png,image/gif,image/webp"
                                    onChange={handleCoverImageChange}
                                    className="hidden"
                                    id="cover-image-upload"
                                    disabled={uploading}
                                  />
                                  <label
                                    htmlFor="cover-image-upload"
                                    className="cursor-pointer flex flex-col items-center gap-1 xsm:gap-2"
                                  >
                                    <UploadIcon className="text-xl xsm:text-2xl sm:text-3xl text-gray-400" />
                                    <span className="text-gray-400 text-[10px] xsm:text-xs sm:text-sm">
                                      Click to upload cover image
                                    </span>
                                    <span className="text-gray-500 text-[8px] xsm:text-[10px] sm:text-xs">
                                      PNG, JPG, GIF, WEBP up to 10MB
                                    </span>
                                  </label>
                                </div>

                                {/* Cover Preview */}
                                {(coverPreview || formData.coverImage?.url) && (
                                  <div className="mt-1 xsm:mt-2 relative inline-block">
                                    <img
                                      src={
                                        coverPreview || formData.coverImage?.url
                                      }
                                      alt="Cover preview"
                                      className="w-12 h-12 xsm:w-14 xsm:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg object-cover"
                                    />
                                    {modalMode !== "view" && (
                                      <div
                                     
                                        onClick={() => {
                                          setSelectedFiles((prev) => ({
                                            ...prev,
                                            coverImage: null,
                                          }));
                                          setCoverPreview(null);
                                        }}
                                        className="absolute -top-1 xsm:-top-2 -right-1 xsm:-right-2 p-0.5 xsm:p-1 bg-red-500 text-white rounded-full"
                                      >
                                        <CloseIcon className="text-[8px] xsm:text-[10px] sm:text-xs" />
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Images Upload */}
                            {modalMode !== "view" && (
                              <div>
                                <label className="block text-gray-400 text-[10px] xsm:text-xs sm:text-sm mb-1 xsm:mb-2">
                                  Additional Images
                                </label>
                                <div className="border-2 border-dashed border-gray-600 rounded-lg p-2 xsm:p-3 sm:p-4 text-center hover:border-purple-500 transition-colors">
                                  <input
                                    type="file"
                                    multiple
                                    accept="image/jpeg,image/png,image/gif,image/webp"
                                    onChange={handleImagesChange}
                                    className="hidden"
                                    id="images-upload"
                                    disabled={uploading}
                                  />
                                  <label
                                    htmlFor="images-upload"
                                    className="cursor-pointer flex flex-col items-center gap-1 xsm:gap-2"
                                  >
                                    <UploadIcon className="text-xl xsm:text-2xl sm:text-3xl text-gray-400" />
                                    <span className="text-gray-400 text-[10px] xsm:text-xs sm:text-sm">
                                      Click to upload images
                                    </span>
                                    <span className="text-gray-500 text-[8px] xsm:text-[10px] sm:text-xs">
                                      PNG, JPG, GIF, WEBP up to 10MB each
                                    </span>
                                  </label>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Images Grid - Existing and New */}
                        {(formData.images?.length > 0 ||
                          imagePreviews.length > 0) && (
                          <div>
                            <h3 className="text-white font-semibold text-xs xsm:text-sm sm:text-base mb-2 xsm:mb-3">
                              Images (
                              {formData.images?.length + imagePreviews.length})
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 xsm:gap-2 sm:gap-3">
                              {/* Existing images */}
                              {formData.images?.map((image, idx) => (
                                <div
                                  key={image._id || idx}
                                  className="relative group"
                                >
                                  <img
                                    src={image.url}
                                    alt={image.title || "Album image"}
                                    className="w-full aspect-square rounded-lg object-cover"
                                  />
                                  {modalMode === "edit" && selectedAlbum && (
                                    <div
                                     
                                      onClick={() =>
                                        handleDeleteImage(
                                          selectedAlbum._id,
                                          image._id,
                                        )
                                      }
                                      className="absolute -top-1 xsm:-top-2 -right-1 xsm:-right-2 p-0.5 xsm:p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                      <CloseIcon className="text-[8px] xsm:text-[10px] sm:text-xs" />
                                    </div>
                                  )}
                                </div>
                              ))}

                              {/* New image previews */}
                              {imagePreviews.map((preview, idx) => (
                                <div
                                  key={`preview-${idx}`}
                                  className="relative group"
                                >
                                  <img
                                    src={preview}
                                    alt={`Preview ${idx + 1}`}
                                    className="w-full aspect-square rounded-lg object-cover opacity-75"
                                  />
                                  <div
                                   
                                    onClick={() =>
                                      handleRemoveSelectedImage(idx)
                                    }
                                    className="absolute -top-1 xsm:-top-2 -right-1 xsm:-right-2 p-0.5 xsm:p-1 bg-red-500 text-white rounded-full"
                                  >
                                    <CloseIcon className="text-[8px] xsm:text-[10px] sm:text-xs" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Form Actions */}
                        {modalMode !== "view" && (
                          <div className="flex flex-col xsm:flex-row gap-2 xsm:gap-3 justify-end pt-2 xsm:pt-3 sm:pt-4">
                            <button
                              type="button"
                              onClick={closeModal}
                              className="px-3 xsm:px-4 sm:px-5 md:px-6 py-1.5 xsm:py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-xs xsm:text-sm sm:text-base"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              disabled={uploading}
                              className="px-3 xsm:px-4 sm:px-5 md:px-6 py-1.5 xsm:py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-xs xsm:text-sm sm:text-base disabled:opacity-50 flex items-center gap-1 xsm:gap-2"
                            >
                              {uploading ? (
                                <>
                                  <div className="w-3 h-3 xsm:w-4 xsm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                  <span className="hidden xsm:inline">
                                    Uploading...
                                  </span>
                                  <span className="xsm:hidden">...</span>
                                </>
                              ) : modalMode === "create" ? (
                                "Create Album"
                              ) : (
                                "Save Changes"
                              )}
                            </button>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
