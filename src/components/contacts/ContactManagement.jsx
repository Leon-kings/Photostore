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
  // Contact Icons
  ContactMail as ContactMailIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Message as MessageIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  AccessTime as TimeIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  ArrowUpward as ArrowUpIcon,
  ArrowDownward as ArrowDownIcon,
  Clear as ClearIcon,
  MarkEmailRead as MarkEmailReadIcon,
  MarkEmailUnread as MarkEmailUnreadIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Close as CloseIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Archive as ArchiveIcon,
  Unarchive as UnarchiveIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,

  // Sidebar Icons
  Dashboard as DashboardIcon,
  Collections as CollectionsIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Dns as DnsIcon,
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
                <ContactMailIcon className="text-white text-lg xsm:text-xl" />
              </div>
              <h1 className="text-lg xsm:text-xl font-bold text-white">
                Contact<span className="text-purple-400">Hub</span>
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

// Status Badge Component
const StatusBadge = ({ status }) => {
  const statusConfig = {
    new: {
      color: "bg-blue-500",
      icon: <MarkEmailUnreadIcon className="w-3 h-3" />,
    },
    read: {
      color: "bg-green-500",
      icon: <MarkEmailReadIcon className="w-3 h-3" />,
    },
    replied: {
      color: "bg-purple-500",
      icon: <CheckCircleIcon className="w-3 h-3" />,
    },
    archived: {
      color: "bg-gray-500",
      icon: <ArchiveIcon className="w-3 h-3" />,
    },
  };

  const config = statusConfig[status] || statusConfig.new;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color} text-white`}
    >
      {config.icon}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

// Message View Modal
const MessageModal = ({ contact, onClose, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await axios.put(
        `${API_BASE_URL}/contacts/${contact._id}`,
        editedContact,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      if (response.data && response.data.success) {
        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="text-white" />
            <span>Contact updated successfully</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #10b981, #059669)",
              color: "white",
            },
          },
        );
        onUpdate(response.data.data);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error(
        <div className="flex items-center gap-2">
          <WarningIcon className="text-white" />
          <span>Failed to update contact</span>
        </div>,
        {
          icon: false,
          style: {
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "white",
          },
        },
      );
    } finally {
      setSaving(false);
    }
  };

  if (!contact) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 xsm:p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 xsm:mb-5 sm:mb-6">
            <h2 className="text-lg xsm:text-xl sm:text-2xl font-bold text-white">
              Contact Details
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 xsm:p-2 text-gray-400 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
            >
              <CloseIcon className="text-base xsm:text-lg sm:text-xl" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {/* Name */}
            <div className="bg-gray-700/30 rounded-lg p-3 xsm:p-4">
              <div className="flex items-center gap-2 text-gray-400 text-xs xsm:text-sm mb-1">
                <PersonIcon className="text-base" />
                <span>Name</span>
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={editedContact.name}
                  onChange={(e) =>
                    setEditedContact({ ...editedContact, name: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm xsm:text-base"
                />
              ) : (
                <p className="text-white text-sm xsm:text-base font-medium">
                  {contact.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="bg-gray-700/30 rounded-lg p-3 xsm:p-4">
              <div className="flex items-center gap-2 text-gray-400 text-xs xsm:text-sm mb-1">
                <EmailIcon className="text-base" />
                <span>Email</span>
              </div>
              {isEditing ? (
                <input
                  type="email"
                  value={editedContact.email}
                  onChange={(e) =>
                    setEditedContact({
                      ...editedContact,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm xsm:text-base"
                />
              ) : (
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-400 hover:text-blue-300 text-sm xsm:text-base"
                >
                  {contact.email}
                </a>
              )}
            </div>

            {/* Status */}
            <div className="bg-gray-700/30 rounded-lg p-3 xsm:p-4">
              <div className="flex items-center gap-2 text-gray-400 text-xs xsm:text-sm mb-1">
                <InfoIcon className="text-base" />
                <span>Status</span>
              </div>
              {isEditing ? (
                <select
                  value={editedContact.status}
                  onChange={(e) =>
                    setEditedContact({
                      ...editedContact,
                      status: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm xsm:text-base"
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                  <option value="archived">Archived</option>
                </select>
              ) : (
                <StatusBadge status={contact.status} />
              )}
            </div>

            {/* Date */}
            <div className="bg-gray-700/30 rounded-lg p-3 xsm:p-4">
              <div className="flex items-center gap-2 text-gray-400 text-xs xsm:text-sm mb-1">
                <TimeIcon className="text-base" />
                <span>Received</span>
              </div>
              <p className="text-white text-sm xsm:text-base">
                {new Date(contact.createdAt).toLocaleString()}
              </p>
            </div>

            {/* Message */}
            <div className="bg-gray-700/30 rounded-lg p-3 xsm:p-4">
              <div className="flex items-center gap-2 text-gray-400 text-xs xsm:text-sm mb-1">
                <MessageIcon className="text-base" />
                <span>Message</span>
              </div>
              {isEditing ? (
                <textarea
                  value={editedContact.message}
                  onChange={(e) =>
                    setEditedContact({
                      ...editedContact,
                      message: e.target.value,
                    })
                  }
                  rows="5"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm xsm:text-base"
                />
              ) : (
                <p className="text-gray-300 text-sm xsm:text-base whitespace-pre-wrap">
                  {contact.message}
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 xsm:gap-3 mt-4 xsm:mt-5 sm:mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditedContact(contact);
                  }}
                  className="px-3 xsm:px-4 py-1.5 xsm:py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-xs xsm:text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-3 xsm:px-4 py-1.5 xsm:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1 xsm:gap-2 text-xs xsm:text-sm disabled:opacity-50"
                >
                  {saving ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 xsm:h-4 xsm:w-4 border-2 border-white border-t-transparent"></div>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <SaveIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
                      <span>Save</span>
                    </>
                  )}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-3 xsm:px-4 py-1.5 xsm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-1 xsm:gap-2 text-xs xsm:text-sm"
                >
                  <EditIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-3 xsm:px-4 py-1.5 xsm:py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-xs xsm:text-sm"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Delete Confirmation Modal
const DeleteModal = ({ isOpen, onClose, onConfirm, count, type }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
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
          <h3 className="text-base xsm:text-lg sm:text-xl font-bold text-white">
            Confirm Deletion
          </h3>
        </div>

        <p className="text-gray-300 text-xs xsm:text-sm sm:text-base mb-4 xsm:mb-5 sm:mb-6">
          {type === "single"
            ? "Are you sure you want to delete this contact? This action cannot be undone."
            : `Are you sure you want to delete ${count} selected contacts? This action cannot be undone.`}
        </p>

        <div className="flex justify-end gap-2 xsm:gap-3">
          <button
            onClick={onClose}
            className="px-3 xsm:px-4 py-1.5 xsm:py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-xs xsm:text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-3 xsm:px-4 py-1.5 xsm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-1 xsm:gap-2 text-xs xsm:text-sm"
          >
            <DeleteIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
            <span>Delete</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main ContactManagement Component
export const ContactManagement = () => {
  const { token, isAdmin } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc",
  });
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    read: 0,
    replied: 0,
    archived: 0,
  });
  const [selectedContact, setSelectedContact] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteType, setDeleteType] = useState("single");
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

  // Fetch contacts on component mount
  useEffect(() => {
    if (isAdmin) {
      fetchContacts();
    }
  }, [isAdmin]);

  // Filter and sort contacts when dependencies change
  useEffect(() => {
    if (contacts && contacts.length > 0) {
      filterAndSortContacts();
    } else {
      setFilteredContacts([]);
    }
  }, [contacts, searchTerm, filterStatus, sortConfig]);

  // Calculate stats when contacts change
  useEffect(() => {
    if (contacts && contacts.length > 0) {
      calculateStats();
    } else {
      setStats({
        total: 0,
        new: 0,
        read: 0,
        replied: 0,
        archived: 0,
      });
    }
  }, [contacts]);

  // Fetch all contacts from API
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.success) {
        const contactsData = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setContacts(contactsData);

        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="text-white" />
            <span>Loaded {contactsData.length} contacts</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #10b981, #059669)",
              color: "white",
            },
            autoClose: 2000,
          },
        );
      } else {
        setContacts([]);
        toast.info("No contacts found", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error(
          <div className="flex items-center gap-2">
            <WarningIcon className="text-white" />
            <span>
              API endpoint not found. Please create /contacts on your backend
            </span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
            autoClose: 5000,
          },
        );
      } else {
        toast.error(
          <div className="flex items-center gap-2">
            <WarningIcon className="text-white" />
            <span>Failed to load contacts: {error.message}</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
          },
        );
      }

      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort contacts
  const filterAndSortContacts = () => {
    if (!contacts || contacts.length === 0) {
      setFilteredContacts([]);
      return;
    }

    let filtered = [...contacts];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (contact) =>
          (contact.name?.toLowerCase() || "").includes(
            searchTerm.toLowerCase(),
          ) ||
          (contact.email?.toLowerCase() || "").includes(
            searchTerm.toLowerCase(),
          ) ||
          (contact.message?.toLowerCase() || "").includes(
            searchTerm.toLowerCase(),
          ),
      );
    }

    // Apply status filter
    if (filterStatus !== "all") {
      filtered = filtered.filter((contact) => contact.status === filterStatus);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      if (sortConfig.key === "createdAt" || sortConfig.key === "updatedAt") {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredContacts(filtered);
  };

  // Calculate statistics
  const calculateStats = () => {
    if (!contacts || contacts.length === 0) {
      setStats({
        total: 0,
        new: 0,
        read: 0,
        replied: 0,
        archived: 0,
      });
      return;
    }

    const total = contacts.length;
    const newCount = contacts.filter((c) => c.status === "new").length;
    const readCount = contacts.filter((c) => c.status === "read").length;
    const repliedCount = contacts.filter((c) => c.status === "replied").length;
    const archivedCount = contacts.filter(
      (c) => c.status === "archived",
    ).length;

    setStats({
      total,
      new: newCount,
      read: readCount,
      replied: repliedCount,
      archived: archivedCount,
    });
  };

  // Handle sort
  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
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

  // Delete single contact
  const deleteContact = async (id, name) => {
    setDeleting(true);
    try {
      const response = await axios.delete(`${API_BASE_URL}/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.success) {
        setContacts(contacts.filter((c) => c._id !== id));
        setShowDeleteModal(false);
        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="text-white" />
            <span>Deleted contact: {name}</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
          },
        );
      }
    } catch (error) {
      toast.error(
        <div className="flex items-center gap-2">
          <WarningIcon className="text-white" />
          <span>Failed to delete {name}</span>
        </div>,
        {
          icon: false,
          style: {
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "white",
          },
        },
      );
    } finally {
      setDeleting(false);
    }
  };

  // Delete multiple contacts
  const deleteMultipleContacts = async () => {
    if (selectedContacts.length === 0) return;

    setDeleting(true);
    try {
      const response = await axios.delete(`${API_BASE_URL}/contacts/bulk`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: { ids: selectedContacts },
      });

      if (response.data && response.data.success) {
        setContacts(contacts.filter((c) => !selectedContacts.includes(c._id)));
        setSelectedContacts([]);
        setShowDeleteModal(false);
        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="text-white" />
            <span>Deleted {selectedContacts.length} contacts</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
            },
          },
        );
      }
    } catch (error) {
      console.error("Error deleting contacts:", error);
      toast.error(
        <div className="flex items-center gap-2">
          <WarningIcon className="text-white" />
          <span>Failed to delete selected contacts</span>
        </div>,
        {
          icon: false,
          style: {
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "white",
          },
        },
      );
    } finally {
      setDeleting(false);
    }
  };

  // Update contact status
  const updateContactStatus = async (id, status) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/contacts/${id}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data && response.data.success) {
        setContacts(contacts.map((c) => (c._id === id ? { ...c, status } : c)));

        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="text-white" />
            <span>Status updated to {status}</span>
          </div>,
          {
            icon: false,
            style: {
              background: "linear-gradient(135deg, #10b981, #059669)",
              color: "white",
            },
            autoClose: 2000,
          },
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error(
        <div className="flex items-center gap-2">
          <WarningIcon className="text-white" />
          <span>Failed to update status</span>
        </div>,
        {
          icon: false,
          style: {
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "white",
          },
        },
      );
    }
  };

  // Toggle select all
  const toggleSelectAll = () => {
    if (!filteredContacts || filteredContacts.length === 0) return;

    if (selectedContacts.length === filteredContacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(filteredContacts.map((c) => c._id));
    }
  };

  // Toggle select single
  const toggleSelect = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id)
        ? prev.filter((contactId) => contactId !== id)
        : [...prev, id],
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setFilterStatus("all");
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch (error) {
      return "Invalid date";
    }
  };

  // Handle view message
  const handleViewMessage = (contact) => {
    setSelectedContact(contact);
    setShowMessageModal(true);

    // Mark as read if it's new
    if (contact.status === "new") {
      updateContactStatus(contact._id, "read");
    }
  };

  // Handle contact update from modal
  const handleContactUpdate = (updatedContact) => {
    setContacts(
      contacts.map((c) => (c._id === updatedContact._id ? updatedContact : c)),
    );
    setSelectedContact(updatedContact);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center p-4 xsm:p-6">
          <WarningIcon className="text-4xl xsm:text-5xl md:text-6xl text-red-500 mb-3 xsm:mb-4" />
          <h2 className="text-xl xsm:text-2xl md:text-3xl font-bold text-white mb-2">
            Access Denied
          </h2>
          <p className="text-sm xsm:text-base text-gray-400">
            You don't have permission to view this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-10 w-full rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : ""}`}
      >
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
                  <ContactMailIcon className="text-white text-lg xsm:text-xl md:text-2xl" />
                </div>
                <div>
                  <h1 className="text-lg xsm:text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Contact Management
                  </h1>
                  <p className="text-xs xsm:text-sm text-gray-400">
                    Manage and respond to contact messages
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 xsm:grid-cols-3 lg:grid-cols-5 gap-2 xsm:gap-3 sm:gap-4 mb-4 xsm:mb-5 sm:mb-6"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 xsm:p-4 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] xsm:text-xs">
                      Total
                    </p>
                    <p className="text-lg xsm:text-xl md:text-2xl font-bold text-white">
                      {stats.total}
                    </p>
                  </div>
                  <ContactMailIcon className="text-purple-400 text-xl xsm:text-2xl md:text-3xl" />
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 xsm:p-4 border border-blue-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] xsm:text-xs">New</p>
                    <p className="text-lg xsm:text-xl md:text-2xl font-bold text-blue-400">
                      {stats.new}
                    </p>
                  </div>
                  <MarkEmailUnreadIcon className="text-blue-400 text-xl xsm:text-2xl md:text-3xl" />
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 xsm:p-4 border border-green-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] xsm:text-xs">
                      Read
                    </p>
                    <p className="text-lg xsm:text-xl md:text-2xl font-bold text-green-400">
                      {stats.read}
                    </p>
                  </div>
                  <MarkEmailReadIcon className="text-green-400 text-xl xsm:text-2xl md:text-3xl" />
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 xsm:p-4 border border-purple-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] xsm:text-xs">
                      Replied
                    </p>
                    <p className="text-lg xsm:text-xl md:text-2xl font-bold text-purple-400">
                      {stats.replied}
                    </p>
                  </div>
                  <CheckCircleIcon className="text-purple-400 text-xl xsm:text-2xl md:text-3xl" />
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 xsm:p-4 border border-gray-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] xsm:text-xs">
                      Archived
                    </p>
                    <p className="text-lg xsm:text-xl md:text-2xl font-bold text-gray-400">
                      {stats.archived}
                    </p>
                  </div>
                  <ArchiveIcon className="text-gray-400 text-xl xsm:text-2xl md:text-3xl" />
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
                    placeholder="Search name, email, or message..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 xsm:pl-10 pr-2 xsm:pr-4 py-1.5 xsm:py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-xs xsm:text-sm"
                  />
                </div>

                {/* Status Filter */}
                <div className="relative min-w-[120px] xsm:min-w-[140px]">
                  <FilterIcon className="absolute left-2 xsm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm xsm:text-base" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full pl-8 xsm:pl-10 pr-2 xsm:pr-4 py-1.5 xsm:py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 text-xs xsm:text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {/* Clear Filters */}
                  {(searchTerm || filterStatus !== "all") && (
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
                    onClick={fetchContacts}
                    disabled={loading}
                    className="px-2 xsm:px-3 sm:px-4 py-1.5 xsm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-1 xsm:gap-2 disabled:opacity-50 text-xs xsm:text-sm"
                  >
                    <RefreshIcon
                      className={`w-3 h-3 xsm:w-4 xsm:h-4 ${loading ? "animate-spin" : ""}`}
                    />
                    <span className="hidden xsm:inline">Refresh</span>
                  </button>

                  {/* Bulk Delete */}
                  {selectedContacts.length > 0 && (
                    <button
                      onClick={() => {
                        setDeleteType("multiple");
                        setShowDeleteModal(true);
                      }}
                      disabled={deleting}
                      className="px-2 xsm:px-3 sm:px-4 py-1.5 xsm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-1 xsm:gap-2 text-xs xsm:text-sm"
                    >
                      <DeleteIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
                      <span className="hidden xsm:inline">
                        Delete ({selectedContacts.length})
                      </span>
                      <span className="xsm:hidden">
                        ({selectedContacts.length})
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contacts Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden"
            >
              {loading ? (
                <div className="flex items-center justify-center h-48 xsm:h-56 sm:h-64">
                  <div className="animate-spin rounded-full h-8 w-8 xsm:h-10 xsm:w-10 sm:h-12 sm:w-12 border-3 xsm:border-4 border-purple-500 border-t-transparent"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-900/50">
                      <tr>
                        <th className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left">
                          <input
                            type="checkbox"
                            checked={
                              filteredContacts.length > 0 &&
                              selectedContacts.length ===
                                filteredContacts.length
                            }
                            onChange={toggleSelectAll}
                            disabled={filteredContacts.length === 0}
                            className="rounded bg-gray-700 border-gray-600 text-purple-600 focus:ring-purple-500 disabled:opacity-50"
                          />
                        </th>
                        <th
                          className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300 cursor-pointer"
                          onClick={() => handleSort("name")}
                        >
                          <div className="flex items-center gap-0.5 xsm:gap-1">
                            Name {getSortIcon("name")}
                          </div>
                        </th>
                        <th
                          className="hidden sm:table-cell px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300 cursor-pointer"
                          onClick={() => handleSort("email")}
                        >
                          <div className="flex items-center gap-0.5 xsm:gap-1">
                            Email {getSortIcon("email")}
                          </div>
                        </th>
                        <th className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300">
                          Status
                        </th>
                        <th
                          className="hidden lg:table-cell px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300 cursor-pointer"
                          onClick={() => handleSort("createdAt")}
                        >
                          <div className="flex items-center gap-0.5 xsm:gap-1">
                            Received {getSortIcon("createdAt")}
                          </div>
                        </th>
                        <th className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3 text-left text-[10px] xsm:text-xs sm:text-sm font-medium text-gray-300">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <AnimatePresence>
                        {!filteredContacts || filteredContacts.length === 0 ? (
                          <tr>
                            <td
                              colSpan="6"
                              className="px-2 xsm:px-3 sm:px-4 py-4 xsm:py-6 sm:py-8 text-center text-gray-400 text-xs xsm:text-sm"
                            >
                              No contacts found
                            </td>
                          </tr>
                        ) : (
                          filteredContacts.map((contact, index) => (
                            <motion.tr
                              key={contact._id || index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="hover:bg-gray-700/30 transition-colors cursor-pointer"
                              onClick={() => handleViewMessage(contact)}
                            >
                              <td
                                className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedContacts.includes(
                                    contact._id,
                                  )}
                                  onChange={() => toggleSelect(contact._id)}
                                  className="rounded bg-gray-700 border-gray-600 text-purple-600 focus:ring-purple-500"
                                />
                              </td>
                              <td className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3">
                                <div className="flex items-center gap-1 xsm:gap-2">
                                  <PersonIcon className="text-gray-400 w-3 h-3 xsm:w-4 xsm:h-4 flex-shrink-0" />
                                  <span className="text-white text-xs xsm:text-sm font-medium truncate max-w-[80px] xsm:max-w-[120px]">
                                    {contact.name}
                                  </span>
                                  {contact.status === "new" && (
                                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                                  )}
                                </div>
                              </td>
                              <td className="hidden sm:table-cell px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3">
                                <div className="flex items-center gap-1 xsm:gap-2">
                                  <EmailIcon className="text-gray-400 w-3 h-3 xsm:w-4 xsm:h-4 flex-shrink-0" />
                                  <span className="text-gray-300 text-xs xsm:text-sm truncate max-w-[150px]">
                                    {contact.email}
                                  </span>
                                </div>
                              </td>
                              <td
                                className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <StatusBadge status={contact.status} />
                              </td>
                              <td className="hidden lg:table-cell px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3">
                                <div className="flex items-center gap-1 xsm:gap-2">
                                  <TimeIcon className="text-gray-400 w-3 h-3 xsm:w-4 xsm:h-4 flex-shrink-0" />
                                  <span className="text-gray-300 text-xs xsm:text-sm">
                                    {screenSize === "xsm" || screenSize === "sm"
                                      ? new Date(
                                          contact.createdAt,
                                        ).toLocaleDateString()
                                      : formatDate(contact.createdAt)}
                                  </span>
                                </div>
                              </td>
                              <td
                                className="px-2 xsm:px-3 sm:px-4 py-2 xsm:py-3"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div className="flex items-center gap-1 xsm:gap-2">
                                  <button
                                    onClick={() => handleViewMessage(contact)}
                                    className="p-1 text-gray-400 hover:text-blue-400 transition-colors"
                                    title="View"
                                  >
                                    <VisibilityIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
                                  </button>
                                  <button
                                    onClick={() => {
                                      setSelectedContact(contact);
                                      setDeleteType("single");
                                      setShowDeleteModal(true);
                                    }}
                                    className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                                    title="Delete"
                                  >
                                    <DeleteIcon className="w-3 h-3 xsm:w-4 xsm:h-4" />
                                  </button>
                                </div>
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
            {!loading && filteredContacts.length > 0 && (
              <div className="mt-3 xsm:mt-4 text-[10px] xsm:text-xs sm:text-sm text-gray-400">
                Showing {filteredContacts.length} of {contacts.length} contacts
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Message Modal */}
      <AnimatePresence>
        {showMessageModal && selectedContact && (
          <MessageModal
            contact={selectedContact}
            onClose={() => {
              setShowMessageModal(false);
              setSelectedContact(null);
            }}
            onUpdate={handleContactUpdate}
          />
        )}
      </AnimatePresence>

      {/* Delete Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <DeleteModal
            isOpen={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={() => {
              if (deleteType === "single" && selectedContact) {
                deleteContact(selectedContact._id, selectedContact.name);
              } else {
                deleteMultipleContacts();
              }
            }}
            count={deleteType === "single" ? 1 : selectedContacts.length}
            type={deleteType}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
