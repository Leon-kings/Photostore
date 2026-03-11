// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect } from "react";
// import { useAuth } from "../../App";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "react-toastify";

// // Material Icons
// import {
//   Delete as DeleteIcon,
//   Refresh as RefreshIcon,
//   Search as SearchIcon,
//   FilterList as FilterIcon,
//   Public as PublicIcon,
//   Computer as ComputerIcon,
//   AccessTime as TimeIcon,
//   LocationOn as LocationIcon,
//   Info as InfoIcon,
//   Warning as WarningIcon,
//   CheckCircle as CheckCircleIcon,
//   ArrowUpward as ArrowUpIcon,
//   ArrowDownward as ArrowDownIcon,
//   Clear as ClearIcon,
//   Language as LanguageIcon,
// } from "@mui/icons-material";

// const API_BASE_URL = "https://myalbumnode.onrender.com";

// export const IPManagement = () => {
//   const { token, isAdmin } = useAuth();
//   const [visitors, setVisitors] = useState([]);
//   const [filteredVisitors, setFilteredVisitors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterCountry, setFilterCountry] = useState("");
//   const [sortConfig, setSortConfig] = useState({ key: "timestamp", direction: "desc" });
//   const [selectedVisitors, setSelectedVisitors] = useState([]);
//   const [stats, setStats] = useState({
//     total: 0,
//     uniqueCountries: 0,
//     today: 0,
//     uniqueIPs: 0
//   });
//   const [countries, setCountries] = useState([]);
//   const [confirmDelete, setConfirmDelete] = useState(null);
//   const [deleteAllConfirm, setDeleteAllConfirm] = useState(false);

//   // Fetch visitors on component mount
//   useEffect(() => {
//     if (isAdmin) {
//       fetchVisitors();
//     }
//   }, [isAdmin]);

//   // Filter and sort visitors when dependencies change
//   useEffect(() => {
//     if (visitors && visitors.length > 0) {
//       filterAndSortVisitors();
//     } else {
//       setFilteredVisitors([]);
//     }
//   }, [visitors, searchTerm, filterCountry, sortConfig]);

//   // Calculate stats when visitors change
//   useEffect(() => {
//     if (visitors && visitors.length > 0) {
//       calculateStats();
//       extractCountries();
//     } else {
//       setStats({
//         total: 0,
//         uniqueCountries: 0,
//         today: 0,
//         uniqueIPs: 0
//       });
//       setCountries([]);
//     }
//   }, [visitors]);

//   // Fetch all visitors from API
//   const fetchVisitors = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`${API_BASE_URL}/api/visitors`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Check if response.data exists and has the expected structure
//       if (response.data && response.data.success) {
//         // Ensure visitors is an array
//         const visitorsData = Array.isArray(response.data.visitors) ? response.data.visitors : [];
//         setVisitors(visitorsData);
        
//         toast.success(
//           <div className="flex items-center gap-2">
//             <CheckCircleIcon className="text-white" />
//             <span>Loaded {visitorsData.length} visitors</span>
//           </div>,
//           {
//             icon: false,
//             style: {
//               background: "linear-gradient(135deg, #10b981, #059669)",
//               color: "white",
//             },
//             autoClose: 2000,
//           }
//         );
//       } else {
//         // Handle case where response doesn't have expected structure
//         setVisitors([]);
//         toast.info("No visitors found", {
//           autoClose: 2000,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching visitors:", error);
      
//       // Check if it's a 404 error (endpoint doesn't exist)
//       if (error.response && error.response.status === 404) {
//         toast.error(
//           <div className="flex items-center gap-2">
//             <WarningIcon className="text-white" />
//             <span>API endpoint not found. Please create /api/visitors on your backend</span>
//           </div>,
//           {
//             icon: false,
//             style: {
//               background: "linear-gradient(135deg, #ef4444, #dc2626)",
//               color: "white",
//             },
//             autoClose: 5000,
//           }
//         );
//       } else {
//         toast.error(
//           <div className="flex items-center gap-2">
//             <WarningIcon className="text-white" />
//             <span>Failed to load visitors: {error.message}</span>
//           </div>,
//           {
//             icon: false,
//             style: {
//               background: "linear-gradient(135deg, #ef4444, #dc2626)",
//               color: "white",
//             },
//           }
//         );
//       }
      
//       // Set empty array to prevent undefined errors
//       setVisitors([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Filter and sort visitors
//   const filterAndSortVisitors = () => {
//     if (!visitors || visitors.length === 0) {
//       setFilteredVisitors([]);
//       return;
//     }

//     let filtered = [...visitors];

//     // Apply search filter
//     if (searchTerm) {
//       filtered = filtered.filter(
//         (visitor) =>
//           (visitor.ip?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
//           (visitor.location?.city?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
//           (visitor.location?.country?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
//           (visitor.userAgent?.toLowerCase() || '').includes(searchTerm.toLowerCase())
//       );
//     }

//     // Apply country filter
//     if (filterCountry) {
//       filtered = filtered.filter(
//         (visitor) => visitor.location?.country === filterCountry
//       );
//     }

//     // Apply sorting
//     filtered.sort((a, b) => {
//       let aValue = getNestedValue(a, sortConfig.key);
//       let bValue = getNestedValue(b, sortConfig.key);

//       // Handle null/undefined values
//       if (aValue === null || aValue === undefined) aValue = '';
//       if (bValue === null || bValue === undefined) bValue = '';

//       if (aValue < bValue) {
//         return sortConfig.direction === "asc" ? -1 : 1;
//       }
//       if (aValue > bValue) {
//         return sortConfig.direction === "asc" ? 1 : -1;
//       }
//       return 0;
//     });

//     setFilteredVisitors(filtered);
//   };

//   // Helper to get nested object values
//   const getNestedValue = (obj, path) => {
//     if (!obj || !path) return '';
//     return path.split('.').reduce((current, key) => current?.[key], obj) || '';
//   };

//   // Calculate statistics
//   const calculateStats = () => {
//     if (!visitors || visitors.length === 0) {
//       setStats({
//         total: 0,
//         uniqueCountries: 0,
//         today: 0,
//         uniqueIPs: 0
//       });
//       return;
//     }

//     const total = visitors.length;
//     const uniqueCountries = new Set(visitors.map(v => v.location?.country).filter(Boolean)).size;
//     const today = visitors.filter(v => {
//       const today = new Date().toDateString();
//       const visitDate = v.timestamp ? new Date(v.timestamp).toDateString() : null;
//       return today === visitDate;
//     }).length;
//     const uniqueIPs = new Set(visitors.map(v => v.ip).filter(Boolean)).size;

//     setStats({ total, uniqueCountries, today, uniqueIPs });
//   };

//   // Extract unique countries for filter
//   const extractCountries = () => {
//     if (!visitors || visitors.length === 0) {
//       setCountries([]);
//       return;
//     }

//     const countrySet = new Set();
//     visitors.forEach(visitor => {
//       if (visitor.location?.country) {
//         countrySet.add(visitor.location.country);
//       }
//     });
//     setCountries(Array.from(countrySet).sort());
//   };

//   // Handle sort
//   const handleSort = (key) => {
//     setSortConfig({
//       key,
//       direction:
//         sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc",
//     });
//   };

//   // Get sort icon
//   const getSortIcon = (key) => {
//     if (sortConfig.key !== key) return null;
//     return sortConfig.direction === "asc" ? (
//       <ArrowUpIcon className="w-4 h-4" />
//     ) : (
//       <ArrowDownIcon className="w-4 h-4" />
//     );
//   };

//   // Delete single visitor
//   const deleteVisitor = async (id, ip) => {
//     setDeleting(true);
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/api/visitors/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.data && response.data.success) {
//         setVisitors(visitors.filter(v => v._id !== id));
//         setConfirmDelete(null);
//         toast.success(
//           <div className="flex items-center gap-2">
//             <CheckCircleIcon className="text-white" />
//             <span>Deleted IP: {ip}</span>
//           </div>,
//           {
//             icon: false,
//             style: {
//               background: "linear-gradient(135deg, #ef4444, #dc2626)",
//               color: "white",
//             },
//           }
//         );
//       }
//     } catch (error) {
//       console.error("Error deleting visitor:", error);
//       toast.error(
//         <div className="flex items-center gap-2">
//           <WarningIcon className="text-white" />
//           <span>Failed to delete {ip}</span>
//         </div>,
//         {
//           icon: false,
//           style: {
//             background: "linear-gradient(135deg, #ef4444, #dc2626)",
//             color: "white",
//           },
//         }
//       );
//     } finally {
//       setDeleting(false);
//     }
//   };

//   // Delete multiple visitors
//   const deleteMultipleVisitors = async () => {
//     if (selectedVisitors.length === 0) return;
    
//     setDeleting(true);
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/api/visitors/bulk`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         data: { ids: selectedVisitors }
//       });

//       if (response.data && response.data.success) {
//         setVisitors(visitors.filter(v => !selectedVisitors.includes(v._id)));
//         setSelectedVisitors([]);
//         setDeleteAllConfirm(false);
//         toast.success(
//           <div className="flex items-center gap-2">
//             <CheckCircleIcon className="text-white" />
//             <span>Deleted {selectedVisitors.length} visitors</span>
//           </div>,
//           {
//             icon: false,
//             style: {
//               background: "linear-gradient(135deg, #ef4444, #dc2626)",
//               color: "white",
//             },
//           }
//         );
//       }
//     } catch (error) {
//       console.error("Error deleting visitors:", error);
//       toast.error(
//         <div className="flex items-center gap-2">
//           <WarningIcon className="text-white" />
//           <span>Failed to delete selected visitors</span>
//         </div>,
//         {
//           icon: false,
//           style: {
//             background: "linear-gradient(135deg, #ef4444, #dc2626)",
//             color: "white",
//           },
//         }
//       );
//     } finally {
//       setDeleting(false);
//     }
//   };

//   // Delete all visitors
//   const deleteAllVisitors = async () => {
//     setDeleting(true);
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/api/visitors/all`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.data && response.data.success) {
//         setVisitors([]);
//         setFilteredVisitors([]);
//         setSelectedVisitors([]);
//         setDeleteAllConfirm(false);
//         toast.success(
//           <div className="flex items-center gap-2">
//             <CheckCircleIcon className="text-white" />
//             <span>Deleted all visitors</span>
//           </div>,
//           {
//             icon: false,
//             style: {
//               background: "linear-gradient(135deg, #ef4444, #dc2626)",
//               color: "white",
//             },
//           }
//         );
//       }
//     } catch (error) {
//       console.error("Error deleting all visitors:", error);
//       toast.error(
//         <div className="flex items-center gap-2">
//           <WarningIcon className="text-white" />
//           <span>Failed to delete all visitors</span>
//         </div>,
//         {
//           icon: false,
//           style: {
//             background: "linear-gradient(135deg, #ef4444, #dc2626)",
//             color: "white",
//           },
//         }
//       );
//     } finally {
//       setDeleting(false);
//     }
//   };

//   // Toggle select all
//   const toggleSelectAll = () => {
//     if (!filteredVisitors || filteredVisitors.length === 0) return;
    
//     if (selectedVisitors.length === filteredVisitors.length) {
//       setSelectedVisitors([]);
//     } else {
//       setSelectedVisitors(filteredVisitors.map(v => v._id));
//     }
//   };

//   // Toggle select single
//   const toggleSelect = (id) => {
//     setSelectedVisitors(prev =>
//       prev.includes(id)
//         ? prev.filter(visitorId => visitorId !== id)
//         : [...prev, id]
//     );
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setSearchTerm("");
//     setFilterCountry("");
//   };

//   // Format date
//   const formatDate = (dateString) => {
//     if (!dateString) return 'Unknown';
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleString();
//     } catch (error) {
//       return 'Invalid date';
//     }
//   };

//   // Get browser icon based on user agent
//   const getBrowserIcon = (userAgent) => {
//     if (!userAgent) return "💻";
//     if (userAgent.includes("Chrome")) return "🌐";
//     if (userAgent.includes("Firefox")) return "🦊";
//     if (userAgent.includes("Safari")) return "🧭";
//     if (userAgent.includes("Edge")) return "📱";
//     if (userAgent.includes("Opera")) return "🎭";
//     return "💻";
//   };

//   if (!isAdmin) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <WarningIcon className="text-6xl text-red-500 mb-4" />
//           <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
//           <p className="text-gray-400">You don't have permission to view this page.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8"
//         >
//           <h1 className="text-3xl font-bold text-white mb-2">IP Address Management</h1>
//           <p className="text-gray-400">View and delete tracked visitor IP addresses</p>
//         </motion.div>

//         {/* Stats Cards */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
//         >
//           <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-400 text-sm">Total Visitors</p>
//                 <p className="text-2xl font-bold text-white">{stats.total}</p>
//               </div>
//               <PublicIcon className="text-blue-400 text-3xl" />
//             </div>
//           </div>

//           <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-400 text-sm">Unique IPs</p>
//                 <p className="text-2xl font-bold text-white">{stats.uniqueIPs}</p>
//               </div>
//               <ComputerIcon className="text-green-400 text-3xl" />
//             </div>
//           </div>

//           <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-400 text-sm">Countries</p>
//                 <p className="text-2xl font-bold text-white">{stats.uniqueCountries}</p>
//               </div>
//               <LanguageIcon className="text-purple-400 text-3xl" />
//             </div>
//           </div>

//           <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-400 text-sm">Today</p>
//                 <p className="text-2xl font-bold text-white">{stats.today}</p>
//               </div>
//               <TimeIcon className="text-yellow-400 text-3xl" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Filters and Actions */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 mb-6"
//         >
//           <div className="flex flex-col md:flex-row gap-4">
//             {/* Search */}
//             <div className="flex-1 relative">
//               <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search IP, location, or browser..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
//               />
//             </div>

//             {/* Country Filter */}
//             <div className="relative min-w-[200px]">
//               <FilterIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <select
//                 value={filterCountry}
//                 onChange={(e) => setFilterCountry(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
//               >
//                 <option value="">All Countries</option>
//                 {countries.map(country => (
//                   <option key={country} value={country}>{country}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Clear Filters */}
//             {(searchTerm || filterCountry) && (
//               <button
//                 onClick={clearFilters}
//                 className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2"
//               >
//                 <ClearIcon className="w-4 h-4" />
//                 Clear Filters
//               </button>
//             )}

//             {/* Refresh */}
//             <button
//               onClick={fetchVisitors}
//               disabled={loading}
//               className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
//             >
//               <RefreshIcon className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
//               Refresh
//             </button>

//             {/* Bulk Delete */}
//             {selectedVisitors.length > 0 && (
//               <button
//                 onClick={() => setDeleteAllConfirm('selected')}
//                 disabled={deleting}
//                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2"
//               >
//                 <DeleteIcon className="w-4 h-4" />
//                 Delete Selected ({selectedVisitors.length})
//               </button>
//             )}

//             {/* Delete All */}
//             {visitors.length > 0 && (
//               <button
//                 onClick={() => setDeleteAllConfirm('all')}
//                 disabled={deleting}
//                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2"
//               >
//                 <DeleteIcon className="w-4 h-4" />
//                 Delete All
//               </button>
//             )}
//           </div>
//         </motion.div>

//         {/* Visitors Table */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden"
//         >
//           {loading ? (
//             <div className="flex items-center justify-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-900/50">
//                   <tr>
//                     <th className="px-4 py-3 text-left">
//                       <input
//                         type="checkbox"
//                         checked={filteredVisitors.length > 0 && selectedVisitors.length === filteredVisitors.length}
//                         onChange={toggleSelectAll}
//                         disabled={filteredVisitors.length === 0}
//                         className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
//                       />
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 cursor-pointer" onClick={() => handleSort('ip')}>
//                       <div className="flex items-center gap-1">
//                         IP Address {getSortIcon('ip')}
//                       </div>
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 cursor-pointer" onClick={() => handleSort('location.country')}>
//                       <div className="flex items-center gap-1">
//                         Location {getSortIcon('location.country')}
//                       </div>
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">
//                       Browser
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 cursor-pointer" onClick={() => handleSort('timestamp')}>
//                       <div className="flex items-center gap-1">
//                         Visited {getSortIcon('timestamp')}
//                       </div>
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">
//                       Page
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-700">
//                   <AnimatePresence>
//                     {!filteredVisitors || filteredVisitors.length === 0 ? (
//                       <tr>
//                         <td colSpan="7" className="px-4 py-8 text-center text-gray-400">
//                           No visitors found
//                         </td>
//                       </tr>
//                     ) : (
//                       filteredVisitors.map((visitor, index) => (
//                         <motion.tr
//                           key={visitor._id || index}
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           transition={{ delay: index * 0.05 }}
//                           className="hover:bg-gray-700/30 transition-colors"
//                         >
//                           <td className="px-4 py-3">
//                             <input
//                               type="checkbox"
//                               checked={selectedVisitors.includes(visitor._id)}
//                               onChange={() => toggleSelect(visitor._id)}
//                               className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
//                             />
//                           </td>
//                           <td className="px-4 py-3">
//                             <div className="flex items-center gap-2">
//                               <ComputerIcon className="text-blue-400 w-4 h-4" />
//                               <span className="text-white font-mono text-sm">{visitor.ip || 'Unknown'}</span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-3">
//                             {visitor.location ? (
//                               <div className="flex items-center gap-2">
//                                 <LocationIcon className="text-red-400 w-4 h-4" />
//                                 <div>
//                                   <div className="text-white text-sm">
//                                     {visitor.location.city || 'Unknown'}, {visitor.location.country || 'Unknown'}
//                                   </div>
//                                   <div className="text-gray-400 text-xs">
//                                     {visitor.location.org || ''}
//                                   </div>
//                                 </div>
//                               </div>
//                             ) : (
//                               <span className="text-gray-400 text-sm">Unknown</span>
//                             )}
//                           </td>
//                           <td className="px-4 py-3">
//                             <div className="flex items-center gap-2">
//                               <span className="text-xl">{getBrowserIcon(visitor.userAgent)}</span>
//                               <span className="text-gray-300 text-sm truncate max-w-[150px]">
//                                 {visitor.userAgent ? visitor.userAgent.substring(0, 30) + '...' : 'Unknown'}
//                               </span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-3">
//                             <div className="flex items-center gap-2">
//                               <TimeIcon className="text-yellow-400 w-4 h-4" />
//                               <span className="text-gray-300 text-sm">{formatDate(visitor.timestamp)}</span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-3">
//                             <span className="text-gray-300 text-sm">{visitor.page || '/'}</span>
//                           </td>
//                           <td className="px-4 py-3">
//                             {confirmDelete === visitor._id ? (
//                               <div className="flex items-center gap-2">
//                                 <button
//                                   onClick={() => deleteVisitor(visitor._id, visitor.ip)}
//                                   disabled={deleting}
//                                   className="text-green-400 hover:text-green-300 text-xs font-medium"
//                                 >
//                                   Confirm
//                                 </button>
//                                 <button
//                                   onClick={() => setConfirmDelete(null)}
//                                   className="text-red-400 hover:text-red-300 text-xs font-medium"
//                                 >
//                                   Cancel
//                                 </button>
//                               </div>
//                             ) : (
//                               <button
//                                 onClick={() => setConfirmDelete(visitor._id)}
//                                 className="text-red-400 hover:text-red-300 transition-colors"
//                                 title="Delete"
//                               >
//                                 <DeleteIcon className="w-5 h-5" />
//                               </button>
//                             )}
//                           </td>
//                         </motion.tr>
//                       ))
//                     )}
//                   </AnimatePresence>
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </motion.div>

//         {/* Delete Confirmation Modal */}
//         <AnimatePresence>
//           {deleteAllConfirm && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
//               onClick={() => setDeleteAllConfirm(false)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <WarningIcon className="text-red-500 text-3xl" />
//                   <h3 className="text-xl font-bold text-white">Confirm Deletion</h3>
//                 </div>
                
//                 <p className="text-gray-300 mb-6">
//                   {deleteAllConfirm === 'all' 
//                     ? `Are you sure you want to delete all ${visitors.length} visitors? This action cannot be undone.`
//                     : `Are you sure you want to delete ${selectedVisitors.length} selected visitors? This action cannot be undone.`
//                   }
//                 </p>

//                 <div className="flex justify-end gap-3">
//                   <button
//                     onClick={() => setDeleteAllConfirm(false)}
//                     className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={deleteAllConfirm === 'all' ? deleteAllVisitors : deleteMultipleVisitors}
//                     disabled={deleting}
//                     className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
//                   >
//                     {deleting ? (
//                       <>
//                         <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
//                         <span>Deleting...</span>
//                       </>
//                     ) : (
//                       <>
//                         <DeleteIcon className="w-4 h-4" />
//                         <span>Delete</span>
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

























/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useAuth } from "../../App";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Material Icons
import {
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Public as PublicIcon,
  Computer as ComputerIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  ArrowUpward as ArrowUpIcon,
  ArrowDownward as ArrowDownIcon,
  Clear as ClearIcon,
  Language as LanguageIcon,
  // Sidebar Icons
  Dashboard as DashboardIcon,
  Collections as CollectionsIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Dns as DnsIcon,
  ContactMail as ContactMailIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";

const API_BASE_URL = "https://myalbumnode.onrender.com";

// Sidebar Component
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useNavigate();

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
                <DnsIcon className="text-white text-lg xsm:text-xl" />
              </div>
              <h1 className="text-lg xsm:text-xl font-bold text-white">
                IP<span className="text-purple-400">Manager</span>
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

export const IPManagement = () => {
  const { token, isAdmin } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "timestamp", direction: "desc" });
  const [selectedVisitors, setSelectedVisitors] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    uniqueCountries: 0,
    today: 0,
    uniqueIPs: 0
  });
  const [countries, setCountries] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [deleteAllConfirm, setDeleteAllConfirm] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");

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

  // Fetch visitors on component mount
  useEffect(() => {
    if (isAdmin) {
      fetchVisitors();
    }
  }, [isAdmin]);

  // Filter and sort visitors when dependencies change
  useEffect(() => {
    if (visitors && visitors.length > 0) {
      filterAndSortVisitors();
    } else {
      setFilteredVisitors([]);
    }
  }, [visitors, searchTerm, filterCountry, sortConfig]);

  // Calculate stats when visitors change
  useEffect(() => {
    if (visitors && visitors.length > 0) {
      calculateStats();
      extractCountries();
    } else {
      setStats({
        total: 0,
        uniqueCountries: 0,
        today: 0,
        uniqueIPs: 0
      });
      setCountries([]);
    }
  }, [visitors]);

  // Fetch all visitors from API
  const fetchVisitors = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/visitors`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if response.data exists and has the expected structure
      if (response.data && response.data.success) {
        // Ensure visitors is an array
        const visitorsData = Array.isArray(response.data.visitors) ? response.data.visitors : [];
        setVisitors(visitorsData);
        
        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="text-white" />
            <span>Loaded {visitorsData.length} visitors</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #10b981, #059669)",
              color: "white",
            },
            autoClose: 2000,
          }
        );
      } else {
        // Handle case where response doesn't have expected structure
        setVisitors([]);
        toast.info("No visitors found", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error fetching visitors:", error);
      
      // Check if it's a 404 error (endpoint doesn't exist)
      if (error.response && error.response.status === 404) {
        toast.error(
          <div className="flex items-center gap-2">
            <WarningIcon className="text-white" />
            <span>API endpoint not found. Please create /api/visitors on your backend</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
            autoClose: 5000,
          }
        );
      } else {
        toast.error(
          <div className="flex items-center gap-2">
            <WarningIcon className="text-white" />
            <span>Failed to load visitors: {error.message}</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
          }
        );
      }
      
      // Set empty array to prevent undefined errors
      setVisitors([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort visitors
  const filterAndSortVisitors = () => {
    if (!visitors || visitors.length === 0) {
      setFilteredVisitors([]);
      return;
    }

    let filtered = [...visitors];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (visitor) =>
          (visitor.ip?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
          (visitor.location?.city?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
          (visitor.location?.country?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
          (visitor.userAgent?.toLowerCase() || '').includes(searchTerm.toLowerCase())
      );
    }

    // Apply country filter
    if (filterCountry) {
      filtered = filtered.filter(
        (visitor) => visitor.location?.country === filterCountry
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue = getNestedValue(a, sortConfig.key);
      let bValue = getNestedValue(b, sortConfig.key);

      // Handle null/undefined values
      if (aValue === null || aValue === undefined) aValue = '';
      if (bValue === null || bValue === undefined) bValue = '';

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredVisitors(filtered);
  };

  // Helper to get nested object values
  const getNestedValue = (obj, path) => {
    if (!obj || !path) return '';
    return path.split('.').reduce((current, key) => current?.[key], obj) || '';
  };

  // Calculate statistics
  const calculateStats = () => {
    if (!visitors || visitors.length === 0) {
      setStats({
        total: 0,
        uniqueCountries: 0,
        today: 0,
        uniqueIPs: 0
      });
      return;
    }

    const total = visitors.length;
    const uniqueCountries = new Set(visitors.map(v => v.location?.country).filter(Boolean)).size;
    const today = visitors.filter(v => {
      const today = new Date().toDateString();
      const visitDate = v.timestamp ? new Date(v.timestamp).toDateString() : null;
      return today === visitDate;
    }).length;
    const uniqueIPs = new Set(visitors.map(v => v.ip).filter(Boolean)).size;

    setStats({ total, uniqueCountries, today, uniqueIPs });
  };

  // Extract unique countries for filter
  const extractCountries = () => {
    if (!visitors || visitors.length === 0) {
      setCountries([]);
      return;
    }

    const countrySet = new Set();
    visitors.forEach(visitor => {
      if (visitor.location?.country) {
        countrySet.add(visitor.location.country);
      }
    });
    setCountries(Array.from(countrySet).sort());
  };

  // Handle sort
  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc",
    });
  };

  // Get sort icon
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? (
      <ArrowUpIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
    ) : (
      <ArrowDownIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
    );
  };

  // Delete single visitor
  const deleteVisitor = async (id, ip) => {
    setDeleting(true);
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/visitors/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.success) {
        setVisitors(visitors.filter(v => v._id !== id));
        setConfirmDelete(null);
        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="text-white" />
            <span>Deleted IP: {ip}</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
          }
        );
      }
    } catch (error) {
      console.error("Error deleting visitor:", error);
      toast.error(
        <div className="flex items-center gap-2">
          <WarningIcon className="text-white" />
          <span>Failed to delete {ip}</span>
        </div>,
        {
          icon: false,
          style: {
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "white",
          },
        }
      );
    } finally {
      setDeleting(false);
    }
  };

  // Delete multiple visitors
  const deleteMultipleVisitors = async () => {
    if (selectedVisitors.length === 0) return;
    
    setDeleting(true);
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/visitors/bulk`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: { ids: selectedVisitors }
      });

      if (response.data && response.data.success) {
        setVisitors(visitors.filter(v => !selectedVisitors.includes(v._id)));
        setSelectedVisitors([]);
        setDeleteAllConfirm(false);
        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="text-white" />
            <span>Deleted {selectedVisitors.length} visitors</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
          }
        );
      }
    } catch (error) {
      console.error("Error deleting visitors:", error);
      toast.error(
        <div className="flex items-center gap-2">
          <WarningIcon className="text-white" />
          <span>Failed to delete selected visitors</span>
        </div>,
        {
          icon: false,
          style: {
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "white",
          },
        }
      );
    } finally {
      setDeleting(false);
    }
  };

  // Delete all visitors
  const deleteAllVisitors = async () => {
    setDeleting(true);
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/visitors/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.success) {
        setVisitors([]);
        setFilteredVisitors([]);
        setSelectedVisitors([]);
        setDeleteAllConfirm(false);
        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="text-white" />
            <span>Deleted all visitors</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
          }
        );
      }
    } catch (error) {
      console.error("Error deleting all visitors:", error);
      toast.error(
        <div className="flex items-center gap-2">
          <WarningIcon className="text-white" />
          <span>Failed to delete all visitors</span>
        </div>,
        {
          icon: false,
          style: {
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "white",
          },
        }
      );
    } finally {
      setDeleting(false);
    }
  };

  // Toggle select all
  const toggleSelectAll = () => {
    if (!filteredVisitors || filteredVisitors.length === 0) return;
    
    if (selectedVisitors.length === filteredVisitors.length) {
      setSelectedVisitors([]);
    } else {
      setSelectedVisitors(filteredVisitors.map(v => v._id));
    }
  };

  // Toggle select single
  const toggleSelect = (id) => {
    setSelectedVisitors(prev =>
      prev.includes(id)
        ? prev.filter(visitorId => visitorId !== id)
        : [...prev, id]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setFilterCountry("");
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch (error) {
      return 'Invalid date';
    }
  };

  // Get browser icon based on user agent
  const getBrowserIcon = (userAgent) => {
    if (!userAgent) return "💻";
    if (userAgent.includes("Chrome")) return "🌐";
    if (userAgent.includes("Firefox")) return "🦊";
    if (userAgent.includes("Safari")) return "🧭";
    if (userAgent.includes("Edge")) return "📱";
    if (userAgent.includes("Opera")) return "🎭";
    return "💻";
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center p-4 xsm:p-6">
          <WarningIcon className="text-4xl xsm:text-5xl md:text-6xl text-red-500 mb-3 xsm:mb-4" />
          <h2 className="text-xl xsm:text-2xl md:text-3xl font-bold text-white mb-2">Access Denied</h2>
          <p className="text-sm xsm:text-base text-gray-400">You don't have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br mt-10 w-full rounded-2xl from-slate-900 via-purple-900 to-slate-900">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
        <div className="p-3 xsm:p-4 sm:p-5 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 xsm:mb-5 sm:mb-6 md:mb-8"
            >
              <div className="flex items-center gap-2 xsm:gap-3">
                <div className="w-8 h-8 xsm:w-10 xsm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg xsm:rounded-xl flex items-center justify-center">
                  <DnsIcon className="text-white text-lg xsm:text-xl md:text-2xl" />
                </div>
                <div>
                  <h1 className="text-lg xsm:text-xl sm:text-2xl md:text-3xl font-bold text-white">IP Address Management</h1>
                  <p className="text-xs xsm:text-sm text-gray-400">View and delete tracked visitor IP addresses</p>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 gap-2 xsm:gap-3 sm:gap-4 mb-4 xsm:mb-5 sm:mb-6"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 xsm:p-4 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] xsm:text-xs">Total Visitors</p>
                    <p className="text-lg xsm:text-xl md:text-2xl font-bold text-white">{stats.total}</p>
                  </div>
                  <PublicIcon className="text-blue-400 text-xl xsm:text-2xl md:text-3xl" />
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 xsm:p-4 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] xsm:text-xs">Unique IPs</p>
                    <p className="text-lg xsm:text-xl md:text-2xl font-bold text-white">{stats.uniqueIPs}</p>
                  </div>
                  <ComputerIcon className="text-green-400 text-xl xsm:text-2xl md:text-3xl" />
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 xsm:p-4 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] xsm:text-xs">Countries</p>
                    <p className="text-lg xsm:text-xl md:text-2xl font-bold text-white">{stats.uniqueCountries}</p>
                  </div>
                  <LanguageIcon className="text-purple-400 text-xl xsm:text-2xl md:text-3xl" />
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 xsm:p-4 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] xsm:text-xs">Today</p>
                    <p className="text-lg xsm:text-xl md:text-2xl font-bold text-white">{stats.today}</p>
                  </div>
                  <TimeIcon className="text-yellow-400 text-xl xsm:text-2xl md:text-3xl" />
                </div>
              </div>
            </motion.div>

            {/* Filters and Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 xsm:p-4 border border-gray-700 mb-4 xsm:mb-5 sm:mb-6"
            >
              <div className="flex flex-col xsm:flex-row gap-2 xsm:gap-3">
                {/* Search */}
                <div className="flex-1 relative">
                  <SearchIcon className="absolute left-2 xsm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm xsm:text-base" />
                  <input
                    type="text"
                    placeholder="Search IP, location, or browser..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 xsm:pl-10 pr-2 xsm:pr-4 py-1.5 xsm:py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-xs xsm:text-sm"
                  />
                </div>

                {/* Country Filter */}
                <div className="relative min-w-[150px] xsm:min-w-[180px] sm:min-w-[200px]">
                  <FilterIcon className="absolute left-2 xsm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm xsm:text-base" />
                  <select
                    value={filterCountry}
                    onChange={(e) => setFilterCountry(e.target.value)}
                    className="w-full pl-8 xsm:pl-10 pr-2 xsm:pr-4 py-1.5 xsm:py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 text-xs xsm:text-sm"
                  >
                    <option value="">All Countries</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {/* Clear Filters */}
                  {(searchTerm || filterCountry) && (
                    <button
                      onClick={clearFilters}
                      className="px-2 xsm:px-3 sm:px-4 py-1.5 xsm:py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-1 xsm:gap-2 text-xs xsm:text-sm"
                    >
                      <ClearIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
                      <span className="hidden xsm:inline">Clear</span>
                    </button>
                  )}

                  {/* Refresh */}
                  <button
                    onClick={fetchVisitors}
                    disabled={loading}
                    className="px-2 xsm:px-3 sm:px-4 py-1.5 xsm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-1 xsm:gap-2 disabled:opacity-50 text-xs xsm:text-sm"
                  >
                    <RefreshIcon className={`w-3 h-3 xsm:w-4 xsm:h-4 ${loading ? 'animate-spin' : ''}`} />
                    <span className="hidden xsm:inline">Refresh</span>
                  </button>

                  {/* Bulk Delete */}
                  {selectedVisitors.length > 0 && (
                    <button
                      onClick={() => setDeleteAllConfirm('selected')}
                      disabled={deleting}
                      className="px-2 xsm:px-3 sm:px-4 py-1.5 xsm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-1 xsm:gap-2 text-xs xsm:text-sm"
                    >
                      <DeleteIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
                      <span className="hidden xsm:inline">Delete ({selectedVisitors.length})</span>
                      <span className="xsm:hidden">({selectedVisitors.length})</span>
                    </button>
                  )}

                  {/* Delete All */}
                  {visitors.length > 0 && (
                    <button
                      onClick={() => setDeleteAllConfirm('all')}
                      disabled={deleting}
                      className="px-2 xsm:px-3 sm:px-4 py-1.5 xsm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-1 xsm:gap-2 text-xs xsm:text-sm"
                    >
                      <DeleteIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
                      <span className="hidden xsm:inline">Delete All</span>
                      <span className="xsm:hidden">All</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Visitors Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden"
            >
              {loading ? (
                <div className="flex items-center justify-center h-48 xsm:h-56 sm:h-64">
                  <div className="animate-spin rounded-full h-8 w-8 xsm:h-10 xsm:w-10 sm:h-12 sm:w-12 border-3 xsm:border-4 border-blue-500 border-t-transparent"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-900/50">
                      <tr>
                        <th className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left">
                          <input
                            type="checkbox"
                            checked={filteredVisitors.length > 0 && selectedVisitors.length === filteredVisitors.length}
                            onChange={toggleSelectAll}
                            disabled={filteredVisitors.length === 0}
                            className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                          />
                        </th>
                        <th className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300 cursor-pointer" onClick={() => handleSort('ip')}>
                          <div className="flex items-center gap-0.5 xsm:gap-1">
                            <span className="hidden xsm:inline">IP Address</span>
                            <span className="xsm:hidden">IP</span>
                            {getSortIcon('ip')}
                          </div>
                        </th>
                        <th className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300 cursor-pointer" onClick={() => handleSort('location.country')}>
                          <div className="flex items-center gap-0.5 xsm:gap-1">
                            Location {getSortIcon('location.country')}
                          </div>
                        </th>
                        <th className="hidden md:table-cell px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300">
                          Browser
                        </th>
                        <th className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300 cursor-pointer" onClick={() => handleSort('timestamp')}>
                          <div className="flex items-center gap-0.5 xsm:gap-1">
                            <span className="hidden xsm:inline">Visited</span>
                            <span className="xsm:hidden">Time</span>
                            {getSortIcon('timestamp')}
                          </div>
                        </th>
                        <th className="hidden lg:table-cell px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300">
                          Page
                        </th>
                        <th className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <AnimatePresence>
                        {!filteredVisitors || filteredVisitors.length === 0 ? (
                          <tr>
                            <td colSpan="7" className="px-2 xsm:px-3 sm:px-4 py-4 xsm:py-6 sm:py-8 text-center text-gray-400 text-xs xsm:text-sm">
                              No visitors found
                            </td>
                          </tr>
                        ) : (
                          filteredVisitors.map((visitor, index) => (
                            <motion.tr
                              key={visitor._id || index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="hover:bg-gray-700/30 transition-colors"
                            >
                              <td className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3">
                                <input
                                  type="checkbox"
                                  checked={selectedVisitors.includes(visitor._id)}
                                  onChange={() => toggleSelect(visitor._id)}
                                  className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
                                />
                              </td>
                              <td className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3">
                                <div className="flex items-center gap-1 xsm:gap-2">
                                  <ComputerIcon className="text-blue-400 w-3 h-3 xsm:w-4 xsm:h-4 flex-shrink-0" />
                                  <span className="text-white font-mono text-[10px] xsm:text-xs sm:text-sm truncate max-w-[80px] xsm:max-w-[100px] sm:max-w-[120px]">
                                    {visitor.ip || 'Unknown'}
                                  </span>
                                </div>
                              </td>
                              <td className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3">
                                {visitor.location ? (
                                  <div className="flex items-center gap-1 xsm:gap-2">
                                    <LocationIcon className="text-red-400 w-3 h-3 xsm:w-4 xsm:h-4 flex-shrink-0" />
                                    <div className="min-w-0">
                                      <div className="text-white text-[10px] xsm:text-xs sm:text-sm truncate max-w-[80px] xsm:max-w-[100px] sm:max-w-[150px]">
                                        {visitor.location.city || 'Unknown'}, {visitor.location.country || 'Unknown'}
                                      </div>
                                      <div className="hidden xsm:block text-gray-400 text-[8px] xsm:text-[10px] truncate max-w-[150px]">
                                        {visitor.location.org || ''}
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <span className="text-gray-400 text-[10px] xsm:text-xs">Unknown</span>
                                )}
                              </td>
                              <td className="hidden md:table-cell px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3">
                                <div className="flex items-center gap-1 xsm:gap-2">
                                  <span className="text-base xsm:text-lg">{getBrowserIcon(visitor.userAgent)}</span>
                                  <span className="text-gray-300 text-[10px] xsm:text-xs truncate max-w-[100px] xsm:max-w-[150px]">
                                    {visitor.userAgent ? visitor.userAgent.substring(0, 20) + '...' : 'Unknown'}
                                  </span>
                                </div>
                              </td>
                              <td className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3">
                                <div className="flex items-center gap-1 xsm:gap-2">
                                  <TimeIcon className="text-yellow-400 w-3 h-3 xsm:w-4 xsm:h-4 flex-shrink-0" />
                                  <span className="text-gray-300 text-[10px] xsm:text-xs sm:text-sm">
                                    {screenSize === 'xsm' || screenSize === 'sm' 
                                      ? formatDate(visitor.timestamp).split(',')[0] 
                                      : formatDate(visitor.timestamp)}
                                  </span>
                                </div>
                              </td>
                              <td className="hidden lg:table-cell px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3">
                                <span className="text-gray-300 text-[10px] xsm:text-xs">{visitor.page || '/'}</span>
                              </td>
                              <td className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3">
                                {confirmDelete === visitor._id ? (
                                  <div className="flex items-center gap-1 xsm:gap-2">
                                    <button
                                      onClick={() => deleteVisitor(visitor._id, visitor.ip)}
                                      disabled={deleting}
                                      className="text-green-400 hover:text-green-300 text-[8px] xsm:text-[10px] sm:text-xs font-medium"
                                    >
                                      ✓
                                    </button>
                                    <button
                                      onClick={() => setConfirmDelete(null)}
                                      className="text-red-400 hover:text-red-300 text-[8px] xsm:text-[10px] sm:text-xs font-medium"
                                    >
                                      ✗
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => setConfirmDelete(visitor._id)}
                                    className="text-red-400 hover:text-red-300 transition-colors"
                                    title="Delete"
                                  >
                                    <DeleteIcon className="w-4 h-4 xsm:w-5 xsm:h-5" />
                                  </button>
                                )}
                              </td>
                            </motion.tr>
                          ))
                        )}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>

            {/* Results count */}
            {!loading && filteredVisitors.length > 0 && (
              <div className="mt-3 xsm:mt-4 text-[10px] xsm:text-xs sm:text-sm text-gray-400">
                Showing {filteredVisitors.length} of {visitors.length} visitors
              </div>
            )}

            {/* Delete Confirmation Modal */}
            <AnimatePresence>
              {deleteAllConfirm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                  onClick={() => setDeleteAllConfirm(false)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-gray-800 rounded-lg p-4 xsm:p-5 sm:p-6 max-w-[90%] xsm:max-w-md w-full mx-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-2 xsm:gap-3 mb-3 xsm:mb-4">
                      <WarningIcon className="text-red-500 text-xl xsm:text-2xl sm:text-3xl" />
                      <h3 className="text-base xsm:text-lg sm:text-xl font-bold text-white">Confirm Deletion</h3>
                    </div>
                    
                    <p className="text-gray-300 text-xs xsm:text-sm sm:text-base mb-4 xsm:mb-5 sm:mb-6">
                      {deleteAllConfirm === 'all' 
                        ? `Are you sure you want to delete all ${visitors.length} visitors? This action cannot be undone.`
                        : `Are you sure you want to delete ${selectedVisitors.length} selected visitors? This action cannot be undone.`
                      }
                    </p>

                    <div className="flex justify-end gap-2 xsm:gap-3">
                      <button
                        onClick={() => setDeleteAllConfirm(false)}
                        className="px-3 xsm:px-4 py-1.5 xsm:py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-xs xsm:text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={deleteAllConfirm === 'all' ? deleteAllVisitors : deleteMultipleVisitors}
                        disabled={deleting}
                        className="px-3 xsm:px-4 py-1.5 xsm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-1 xsm:gap-2 disabled:opacity-50 text-xs xsm:text-sm"
                      >
                        {deleting ? (
                          <>
                            <div className="animate-spin rounded-full h-3 w-3 xsm:h-4 xsm:w-4 border-2 border-white border-t-transparent"></div>
                            <span>Deleting...</span>
                          </>
                        ) : (
                          <>
                            <DeleteIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
                            <span>Delete</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};