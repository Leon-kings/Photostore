/* eslint-disable no-unused-vars */
// components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  // Navigation Icons
  Dashboard as DashboardIcon,
  Collections as CollectionsIcon,
  PhotoLibrary as PhotoLibraryIcon,
  Analytics as AnalyticsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  
  // Stats Icons
  Visibility as VisibilityIcon,
  ThumbUp as ThumbUpIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
  People as PeopleIcon,
  PhotoCamera as PhotoCameraIcon,
  Folder as FolderIcon,
  Image as ImageIcon,
  Storage as StorageIcon,
  
  // Chart Icons
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  ShowChart as ShowChartIcon,
  PieChart as PieChartIcon,
  BarChart as BarChartIcon,
  
  // Action Icons
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
  Refresh as RefreshIcon,
  Download as DownloadIcon,
  Print as PrintIcon,
  FilterList as FilterListIcon,
  Search as SearchIcon,
  Sort as SortIcon,
  
  // Status Icons
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  Schedule as ScheduleIcon,
  
  // Album Icons
  Terrain as TerrainIcon,
  BeachAccess as BeachAccessIcon,
  WbSunny as WbSunnyIcon,
  NightsStay as NightsStayIcon,
  Landscape as LandscapeIcon,
  Park as ParkIcon,
  FilterHdr as FilterHdrIcon
} from '@mui/icons-material';

// Mock data for dashboard
const dashboardData = {
  totalViews: 154789,
  totalLikes: 45678,
  totalComments: 12345,
  totalShares: 8765,
  totalAlbums: 10,
  totalImages: 34,
  totalPhotographers: 12,
  totalVisitors: 23456,
  averageTimeSpent: '4m 32s',
  bounceRate: '32%',
  
  viewsOverTime: [
    { date: '2024-01', views: 12000 },
    { date: '2024-02', views: 15000 },
    { date: '2024-03', views: 18000 },
    { date: '2024-04', views: 22000 },
    { date: '2024-05', views: 25000 },
    { date: '2024-06', views: 28000 },
    { date: '2024-07', views: 32000 },
    { date: '2024-08', views: 35000 },
    { date: '2024-09', views: 38000 },
  ],
  
  popularAlbums: [
    { id: 1, name: 'European Wanderlust', views: 23456, likes: 4567, images: 4 },
    { id: 2, name: 'Tropical Paradise', views: 19876, likes: 3890, images: 3 },
    { id: 3, name: 'Desert Adventures', views: 16543, likes: 2789, images: 3 },
    { id: 4, name: 'Northern Lights', views: 14321, likes: 2345, images: 3 },
    { id: 5, name: 'Mountain Majesty', views: 12345, likes: 2123, images: 3 },
  ],
  
  recentActivity: [
    { id: 1, type: 'view', album: 'European Wanderlust', image: 'Emerald Falls', time: '2 minutes ago', user: 'John Doe' },
    { id: 2, type: 'like', album: 'Tropical Paradise', image: 'Bora Bora', time: '5 minutes ago', user: 'Jane Smith' },
    { id: 3, type: 'comment', album: 'Desert Adventures', image: 'Sahara Sunset', time: '12 minutes ago', user: 'Mike Johnson', comment: 'Beautiful shot!' },
    { id: 4, type: 'share', album: 'Northern Lights', image: 'Aurora Borealis', time: '18 minutes ago', user: 'Sarah Wilson' },
    { id: 5, type: 'view', album: 'Mountain Majesty', image: 'Himalayan Peak', time: '25 minutes ago', user: 'David Brown' },
  ],
  
  topPhotographers: [
    { id: 1, name: 'Sarah Johnson', albums: 2, images: 4, views: 23456, likes: 4567 },
    { id: 2, name: 'Michael Chen', albums: 1, images: 3, views: 19876, likes: 3890 },
    { id: 3, name: 'Ahmed Rahman', albums: 1, images: 3, views: 16543, likes: 2789 },
    { id: 4, name: 'Erik Magnusson', albums: 1, images: 3, views: 14321, likes: 2345 },
    { id: 5, name: 'Tenzing Sherpa', albums: 1, images: 3, views: 12345, likes: 2123 },
  ],
  
  deviceBreakdown: [
    { device: 'Desktop', percentage: 45 },
    { device: 'Mobile', percentage: 40 },
    { device: 'Tablet', percentage: 15 },
  ],
  
  locationBreakdown: [
    { country: 'United States', visitors: 5678 },
    { country: 'United Kingdom', visitors: 3456 },
    { country: 'Canada', visitors: 2345 },
    { country: 'Australia', visitors: 1987 },
    { country: 'Germany', visitors: 1654 },
  ],
  
  storageUsage: {
    used: '2.4 GB',
    total: '10 GB',
    percentage: 24
  },
  
  recentUploads: [
    { id: 1, name: 'Lake Louise', album: 'Canadian Rockies', date: '2024-09-20', size: '2.4 MB' },
    { id: 2, name: 'Moraine Lake', album: 'Canadian Rockies', date: '2024-09-19', size: '3.1 MB' },
    { id: 3, name: 'Peyto Lake', album: 'Canadian Rockies', date: '2024-09-18', size: '2.8 MB' },
  ]
};

// Album data for management
const albums = [
  { 
    id: 1,
    title: 'European Wanderlust',
    location: 'Multiple Locations',
    coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
    photographer: 'Sarah Johnson',
    images: 4,
    views: 23456,
    likes: 4567,
    status: 'published',
    date: '2024-06-15'
  },
  { 
    id: 2,
    title: 'Tropical Paradise',
    location: 'Indian Ocean',
    coverImage: 'https://images.unsplash.com/photo-1507525425510-56f8e2b7c9b2?w=400&h=400&fit=crop',
    photographer: 'Michael Chen',
    images: 3,
    views: 19876,
    likes: 3890,
    status: 'published',
    date: '2024-07-20'
  },
  { 
    id: 3,
    title: 'Desert Adventures',
    location: 'Middle East & Africa',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop',
    photographer: 'Ahmed Rahman',
    images: 3,
    views: 16543,
    likes: 2789,
    status: 'published',
    date: '2024-05-10'
  },
  { 
    id: 4,
    title: 'Northern Lights',
    location: 'Nordic Countries',
    coverImage: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=400&fit=crop',
    photographer: 'Erik Magnusson',
    images: 3,
    views: 14321,
    likes: 2345,
    status: 'draft',
    date: '2024-09-05'
  },
  { 
    id: 5,
    title: 'Mountain Majesty',
    location: 'Himalayas & Alps',
    coverImage: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400&h=400&fit=crop',
    photographer: 'Tenzing Sherpa',
    images: 3,
    views: 12345,
    likes: 2123,
    status: 'published',
    date: '2024-07-15'
  },
  { 
    id: 6,
    title: 'Asian Wonders',
    location: 'Southeast Asia',
    coverImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&h=400&fit=crop',
    photographer: 'Sokha Vann',
    images: 3,
    views: 11234,
    likes: 1987,
    status: 'published',
    date: '2024-07-22'
  },
  { 
    id: 7,
    title: 'Urban Nights',
    location: 'Metropolitan Cities',
    coverImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=400&fit=crop',
    photographer: 'Yuki Tanaka',
    images: 3,
    views: 10987,
    likes: 1876,
    status: 'archived',
    date: '2024-08-10'
  },
  { 
    id: 8,
    title: 'Canadian Rockies',
    location: 'Banff & Jasper',
    coverImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=400&fit=crop',
    photographer: 'James Wilson',
    images: 4,
    views: 10890,
    likes: 2945,
    status: 'published',
    date: '2024-06-18'
  }
];

export const Dashboard = () => {
  // State management
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [timeRange, setTimeRange] = useState('month');
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New comment on European Wanderlust', time: '5 min ago', read: false },
    { id: 2, message: 'Album "Canadian Rockies" reached 10K views', time: '1 hour ago', read: false },
    { id: 3, message: 'Storage almost full', time: '2 hours ago', read: true },
  ]);

  // Handle refresh
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Dashboard data refreshed!', {
        icon: <RefreshIcon />,
        style: { background: '#10b981', color: 'white' }
      });
    }, 1500);
  };

  // Handle album actions
  const handleEditAlbum = (album) => {
    toast.info(`Editing ${album.title}`, {
      icon: <EditIcon />,
      style: { background: '#3b82f6', color: 'white' }
    });
  };

  const handleDeleteAlbum = (album) => {
    toast.error(`Deleted ${album.title}`, {
      icon: <DeleteIcon />,
      style: { background: '#ef4444', color: 'white' }
    });
  };

  const handlePublishAlbum = (album) => {
    toast.success(`Published ${album.title}`, {
      icon: <CheckCircleIcon />,
      style: { background: '#10b981', color: 'white' }
    });
  };

  // Filter albums
  const filteredAlbums = albums.filter(album => {
    const matchesSearch = album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         album.photographer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || album.status === filterStatus;
    return matchesSearch && matchesFilter;
  }).sort((a, b) => {
    if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'views') return b.views - a.views;
    if (sortBy === 'likes') return b.likes - a.likes;
    return 0;
  });

  // Get icon for album category
  const getAlbumIcon = (title) => {
    if (title.includes('European')) return <TerrainIcon />;
    if (title.includes('Tropical')) return <BeachAccessIcon />;
    if (title.includes('Desert')) return <WbSunnyIcon />;
    if (title.includes('Northern')) return <NightsStayIcon />;
    if (title.includes('Mountain')) return <TerrainIcon />;
    if (title.includes('Asian')) return <FilterHdrIcon />;
    if (title.includes('Urban')) return <FilterHdrIcon />;
    if (title.includes('Canadian')) return <LandscapeIcon />;
    return <FolderIcon />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 border-r border-purple-500/30 z-30 shadow-2xl`}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
              <DashboardIcon className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">Gallery<span className="text-purple-400">Dash</span></h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'overview' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <DashboardIcon className="text-lg" />
              <span className="font-medium">Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('albums')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'albums' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <CollectionsIcon className="text-lg" />
              <span className="font-medium">Albums</span>
              <span className="ml-auto bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                {albums.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'analytics' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <AnalyticsIcon className="text-lg" />
              <span className="font-medium">Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'settings' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <SettingsIcon className="text-lg" />
              <span className="font-medium">Settings</span>
            </button>
          </nav>

          {/* Storage info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Storage</span>
                <span className="text-white text-sm font-semibold">{dashboardData.storageUsage.used} / {dashboardData.storageUsage.total}</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                  style={{ width: `${dashboardData.storageUsage.percentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-0'}`}>
        
        {/* Header */}
        <header className="bg-gray-900/50 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-20">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MenuIcon />
              </button>
              
              <h2 className="text-xl font-semibold text-white capitalize">
                {activeTab} Dashboard
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Refresh button */}
              <button
                onClick={handleRefresh}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                <RefreshIcon className={`text-lg ${loading ? 'animate-spin' : ''}`} />
              </button>

              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full"></div>
                  <InfoIcon />
                </button>
              </div>

              {/* User menu */}
              <button className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">AD</span>
                </div>
                <span className="hidden md:block">Admin</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <VisibilityIcon className="text-pink-400 text-2xl" />
                    </div>
                    <TrendingUpIcon className="text-green-400" />
                  </div>
                  <h3 className="text-gray-400 text-sm">Total Views</h3>
                  <p className="text-2xl font-bold text-white">{dashboardData.totalViews.toLocaleString()}</p>
                  <p className="text-green-400 text-sm mt-2">↑ 12% from last month</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <ThumbUpIcon className="text-purple-400 text-2xl" />
                    </div>
                    <TrendingUpIcon className="text-green-400" />
                  </div>
                  <h3 className="text-gray-400 text-sm">Total Likes</h3>
                  <p className="text-2xl font-bold text-white">{dashboardData.totalLikes.toLocaleString()}</p>
                  <p className="text-green-400 text-sm mt-2">↑ 8% from last month</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <CommentIcon className="text-blue-400 text-2xl" />
                    </div>
                    <TrendingDownIcon className="text-red-400" />
                  </div>
                  <h3 className="text-gray-400 text-sm">Comments</h3>
                  <p className="text-2xl font-bold text-white">{dashboardData.totalComments.toLocaleString()}</p>
                  <p className="text-red-400 text-sm mt-2">↓ 3% from last month</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <PeopleIcon className="text-green-400 text-2xl" />
                    </div>
                    <TrendingUpIcon className="text-green-400" />
                  </div>
                  <h3 className="text-gray-400 text-sm">Visitors</h3>
                  <p className="text-2xl font-bold text-white">{dashboardData.totalVisitors.toLocaleString()}</p>
                  <p className="text-green-400 text-sm mt-2">↑ 15% from last month</p>
                </motion.div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Views Over Time */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Views Over Time</h3>
                    <select
                      value={timeRange}
                      onChange={(e) => setTimeRange(e.target.value)}
                      className="bg-gray-700 text-white text-sm rounded-lg px-3 py-2 border border-gray-600 focus:outline-none focus:border-purple-500"
                    >
                      <option value="week">Last 7 days</option>
                      <option value="month">Last 30 days</option>
                      <option value="year">Last 12 months</option>
                    </select>
                  </div>
                  
                  {/* Simple bar chart representation */}
                  <div className="h-64 flex items-end justify-between gap-2">
                    {dashboardData.viewsOverTime.slice(-7).map((item, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-to-t from-pink-500 to-purple-500 rounded-t-lg transition-all hover:from-pink-600 hover:to-purple-600"
                          style={{ height: `${(item.views / 40000) * 200}px` }}
                        />
                        <p className="text-xs text-gray-400 mt-2 rotate-45 origin-left">
                          {item.date.slice(-2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Device Breakdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30"
                >
                  <h3 className="text-lg font-semibold text-white mb-6">Device Breakdown</h3>
                  <div className="space-y-4">
                    {dashboardData.deviceBreakdown.map((device, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">{device.device}</span>
                          <span className="text-white font-semibold">{device.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                            style={{ width: `${device.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Popular Albums & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Popular Albums */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30"
                >
                  <h3 className="text-lg font-semibold text-white mb-6">Popular Albums</h3>
                  <div className="space-y-4">
                    {dashboardData.popularAlbums.map((album) => (
                      <div key={album.id} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-600 rounded-lg overflow-hidden">
                            <img src={albums.find(a => a.id === album.id)?.coverImage} alt={album.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{album.name}</h4>
                            <p className="text-xs text-gray-400">{album.views.toLocaleString()} views</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-pink-400 font-semibold">{album.likes.toLocaleString()}</p>
                          <p className="text-xs text-gray-400">likes</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30"
                >
                  <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {dashboardData.recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-lg">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.type === 'view' ? 'bg-blue-500/20' :
                          activity.type === 'like' ? 'bg-pink-500/20' :
                          activity.type === 'comment' ? 'bg-purple-500/20' : 'bg-green-500/20'
                        }`}>
                          {activity.type === 'view' && <VisibilityIcon className="text-blue-400 text-sm" />}
                          {activity.type === 'like' && <ThumbUpIcon className="text-pink-400 text-sm" />}
                          {activity.type === 'comment' && <CommentIcon className="text-purple-400 text-sm" />}
                          {activity.type === 'share' && <ShareIcon className="text-green-400 text-sm" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm">
                            <span className="font-semibold">{activity.user}</span> {activity.type === 'view' && 'viewed'}
                            {activity.type === 'like' && 'liked'}
                            {activity.type === 'comment' && 'commented on'}
                            {activity.type === 'share' && 'shared'}
                          </p>
                          <p className="text-gray-400 text-xs">{activity.album} - {activity.image}</p>
                          {activity.comment && <p className="text-purple-400 text-xs mt-1">"{activity.comment}"</p>}
                          <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Albums Tab */}
          {activeTab === 'albums' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Filters */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <input
                      type="text"
                      placeholder="Search albums or photographers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="all">All Status</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="views">Sort by Views</option>
                    <option value="likes">Sort by Likes</option>
                  </select>

                  <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                    <AddIcon /> New Album
                  </button>
                </div>
              </div>

              {/* Albums Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAlbums.map((album, index) => (
                  <motion.div
                    key={album.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-purple-500/30 group"
                  >
                    <div className="relative h-40">
                      <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Status badge */}
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          album.status === 'published' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                          album.status === 'draft' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                          'bg-gray-500/20 text-gray-400 border border-gray-500/50'
                        }`}>
                          {album.status}
                        </span>
                      </div>

                      {/* Actions menu */}
                      <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 bg-black/50 rounded-lg text-white hover:bg-pink-600 transition-colors">
                          <MoreVertIcon />
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-white font-semibold">{album.title}</h3>
                          <p className="text-gray-400 text-sm">{album.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-pink-400 text-sm font-semibold">{album.views.toLocaleString()}</p>
                          <p className="text-gray-500 text-xs">views</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <PersonIcon className="text-sm" /> {album.photographer}
                        </span>
                        <span className="flex items-center gap-1">
                          <ImageIcon className="text-sm" /> {album.images} photos
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditAlbum(album)}
                          className="flex-1 px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-1"
                        >
                          <EditIcon className="text-sm" /> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteAlbum(album)}
                          className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-red-600 hover:text-white transition-colors"
                        >
                          <DeleteIcon className="text-sm" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <ScheduleIcon className="text-blue-400" />
                    <h3 className="text-gray-400 text-sm">Avg. Time Spent</h3>
                  </div>
                  <p className="text-2xl font-bold text-white">{dashboardData.averageTimeSpent}</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <PeopleIcon className="text-green-400" />
                    <h3 className="text-gray-400 text-sm">Total Visitors</h3>
                  </div>
                  <p className="text-2xl font-bold text-white">{dashboardData.totalVisitors.toLocaleString()}</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <PhotoCameraIcon className="text-purple-400" />
                    <h3 className="text-gray-400 text-sm">Total Photographers</h3>
                  </div>
                  <p className="text-2xl font-bold text-white">{dashboardData.totalPhotographers}</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <ShowChartIcon className="text-pink-400" />
                    <h3 className="text-gray-400 text-sm">Bounce Rate</h3>
                  </div>
                  <p className="text-2xl font-bold text-white">{dashboardData.bounceRate}</p>
                </div>
              </div>

              {/* Top Photographers */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-white mb-6">Top Photographers</h3>
                  <div className="space-y-4">
                    {dashboardData.topPhotographers.map((photographer, index) => (
                      <div key={photographer.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {photographer.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-white font-medium">{photographer.name}</p>
                            <p className="text-xs text-gray-400">{photographer.albums} albums • {photographer.images} images</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-pink-400 font-semibold">{photographer.views.toLocaleString()}</p>
                          <p className="text-xs text-gray-400">views</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Breakdown */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-white mb-6">Top Countries</h3>
                  <div className="space-y-4">
                    {dashboardData.locationBreakdown.map((location, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">{location.country}</span>
                          <span className="text-white font-semibold">{location.visitors.toLocaleString()}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                            style={{ width: `${(location.visitors / 6000) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Uploads */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-lg font-semibold text-white mb-6">Recent Uploads</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
                        <th className="pb-3">Image</th>
                        <th className="pb-3">Album</th>
                        <th className="pb-3">Date</th>
                        <th className="pb-3">Size</th>
                        <th className="pb-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboardData.recentUploads.map((upload) => (
                        <tr key={upload.id} className="border-b border-gray-700/50">
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <img src={albums.find(a => a.title === upload.album)?.coverImage} alt={upload.name} className="w-10 h-10 rounded object-cover" />
                              <span className="text-white">{upload.name}</span>
                            </div>
                          </td>
                          <td className="py-3 text-gray-300">{upload.album}</td>
                          <td className="py-3 text-gray-300">{upload.date}</td>
                          <td className="py-3 text-gray-300">{upload.size}</td>
                          <td className="py-3">
                            <button className="text-gray-400 hover:text-pink-400 transition-colors">
                              <EditIcon className="text-sm" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-lg font-semibold text-white mb-6">General Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Gallery Title</label>
                    <input
                      type="text"
                      defaultValue="Visual Stories"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Description</label>
                    <textarea
                      rows="3"
                      defaultValue="Capturing breathtaking moments from the most beautiful places on Earth"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Albums Per Page</label>
                    <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500">
                      <option>3</option>
                      <option>6</option>
                      <option>9</option>
                      <option>12</option>
                    </select>
                  </div>

                  <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};