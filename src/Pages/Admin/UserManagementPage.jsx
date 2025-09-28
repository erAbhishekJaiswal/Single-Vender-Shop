import React, { useState, useEffect } from 'react';
import UserListTable from './UserListTable';
import UserFilters from './UserFilters';
import './UserManagementPage.css';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filters, setFilters] = useState({
    status: 'all',
    role: 'all',
    search: '',
    registrationDate: ''
  });
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [bulkAction, setBulkAction] = useState('');

  // Sample users data
  useEffect(() => {
    const sampleUsers = [
      {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@example.com',
        role: 'customer',
        status: 'active',
        registrationDate: '2024-01-15',
        lastLogin: '2024-03-20',
        orders: 12,
        totalSpent: 1250.75,
        avatar: '/images/avatars/user1.jpg',
        phone: '+1 (555) 123-4567',
        isVerified: true
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
        role: 'admin',
        status: 'active',
        registrationDate: '2023-11-20',
        lastLogin: '2024-03-19',
        orders: 45,
        totalSpent: 5678.90,
        avatar: '/images/avatars/user2.jpg',
        phone: '+1 (555) 234-5678',
        isVerified: true
      },
      {
        id: 3,
        name: 'Mike Wilson',
        email: 'mike.wilson@example.com',
        role: 'customer',
        status: 'blocked',
        registrationDate: '2024-02-10',
        lastLogin: '2024-02-28',
        orders: 3,
        totalSpent: 299.99,
        avatar: '/images/avatars/user3.jpg',
        phone: '+1 (555) 345-6789',
        isVerified: false
      },
      {
        id: 4,
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        role: 'vendor',
        status: 'active',
        registrationDate: '2023-12-05',
        lastLogin: '2024-03-18',
        orders: 28,
        totalSpent: 3421.50,
        avatar: '/images/avatars/user4.jpg',
        phone: '+1 (555) 456-7890',
        isVerified: true
      },
      {
        id: 5,
        name: 'Robert Brown',
        email: 'robert.b@example.com',
        role: 'customer',
        status: 'inactive',
        registrationDate: '2024-01-28',
        lastLogin: '2024-02-15',
        orders: 0,
        totalSpent: 0,
        avatar: '/images/avatars/user5.jpg',
        phone: '+1 (555) 567-8901',
        isVerified: false
      },
      {
        id: 6,
        name: 'Lisa Anderson',
        email: 'lisa.a@example.com',
        role: 'moderator',
        status: 'active',
        registrationDate: '2023-10-15',
        lastLogin: '2024-03-20',
        orders: 67,
        totalSpent: 8923.45,
        avatar: '/images/avatars/user6.jpg',
        phone: '+1 (555) 678-9012',
        isVerified: true
      },
      {
        id: 7,
        name: 'David Miller',
        email: 'david.m@example.com',
        role: 'customer',
        status: 'active',
        registrationDate: '2024-03-01',
        lastLogin: '2024-03-20',
        orders: 5,
        totalSpent: 450.25,
        avatar: '/images/avatars/user7.jpg',
        phone: '+1 (555) 789-0123',
        isVerified: true
      },
      {
        id: 8,
        name: 'Jennifer Taylor',
        email: 'jennifer.t@example.com',
        role: 'vendor',
        status: 'blocked',
        registrationDate: '2023-09-12',
        lastLogin: '2024-01-20',
        orders: 34,
        totalSpent: 5678.90,
        avatar: '/images/avatars/user8.jpg',
        phone: '+1 (555) 890-1234',
        isVerified: true
      },
      {
        id: 9,
        name: 'Kevin Martinez',
        email: 'kevin.m@example.com',
        role: 'customer',
        status: 'active',
        registrationDate: '2024-02-22',
        lastLogin: '2024-03-19',
        orders: 8,
        totalSpent: 789.99,
        avatar: '/images/avatars/user9.jpg',
        phone: '+1 (555) 901-2345',
        isVerified: false
      },
      {
        id: 10,
        name: 'Amanda White',
        email: 'amanda.w@example.com',
        role: 'admin',
        status: 'active',
        registrationDate: '2023-08-30',
        lastLogin: '2024-03-20',
        orders: 89,
        totalSpent: 12345.67,
        avatar: '/images/avatars/user10.jpg',
        phone: '+1 (555) 012-3456',
        isVerified: true
      }
    ];

    setIsLoading(true);
    setTimeout(() => {
      setUsers(sampleUsers);
      setFilteredUsers(sampleUsers);
      setIsLoading(false);
    }, 1500);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...users];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(user => 
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.phone.includes(filters.search)
      );
    }

    // Status filter
    if (filters.status !== 'all') {
      result = result.filter(user => user.status === filters.status);
    }

    // Role filter
    if (filters.role !== 'all') {
      result = result.filter(user => user.role === filters.role);
    }

    // Registration date filter
    if (filters.registrationDate) {
      result = result.filter(user => user.registrationDate === filters.registrationDate);
    }

    // Sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredUsers(result);
    setCurrentPage(1);
  }, [users, filters, sortConfig]);

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const handleUserStatusChange = (userId, newStatus) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  };

  const handleBulkStatusChange = (newStatus) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        selectedUsers.includes(user.id) ? { ...user, status: newStatus } : user
      )
    );
    setSelectedUsers([]);
    setBulkAction('');
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(currentUsers.map(user => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const getStats = () => {
    const total = users.length;
    const active = users.filter(u => u.status === 'active').length;
    const blocked = users.filter(u => u.status === 'blocked').length;
    const inactive = users.filter(u => u.status === 'inactive').length;

    return { total, active, blocked, inactive };
  };

  const exportUsers = () => {
    // Simulate export functionality
    const csvContent = [
      ['Name', 'Email', 'Role', 'Status', 'Registration Date', 'Last Login', 'Orders', 'Total Spent'],
      ...filteredUsers.map(user => [
        user.name,
        user.email,
        user.role,
        user.status,
        user.registrationDate,
        user.lastLogin,
        user.orders,
        user.totalSpent
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `users_export_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="ecom-user-management-page">
        <div className="ecom-user-management-page__loading">
          <div className="ecom-user-management-page__loading-spinner"></div>
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ecom-user-management-page">
      <div className="ecom-user-management-page__container">
        {/* Header */}
        <div className="ecom-user-management-page__header">
          <div className="ecom-user-management-page__header-content">
            <h1 className="ecom-user-management-page__title">User Management</h1>
            <p className="ecom-user-management-page__subtitle">
              Manage your users, roles, and permissions
            </p>
          </div>
          <div className="ecom-user-management-page__header-actions">
            <button 
              className="ecom-user-management-page__export-btn"
              onClick={exportUsers}
            >
              <i className="fas fa-download"></i>
              Export Users
            </button>
            <button className="ecom-user-management-page__add-user-btn">
              <i className="fas fa-plus"></i>
              Add User
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="ecom-user-management-page__stats">
          <div className="ecom-user-management-page__stat-card">
            <div className="ecom-user-management-page__stat-icon ecom-user-management-page__stat-icon--total">
              <i className="fas fa-users"></i>
            </div>
            <div className="ecom-user-management-page__stat-content">
              <span className="ecom-user-management-page__stat-number">{getStats().total}</span>
              <span className="ecom-user-management-page__stat-label">Total Users</span>
            </div>
          </div>

          <div className="ecom-user-management-page__stat-card">
            <div className="ecom-user-management-page__stat-icon ecom-user-management-page__stat-icon--active">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="ecom-user-management-page__stat-content">
              <span className="ecom-user-management-page__stat-number">{getStats().active}</span>
              <span className="ecom-user-management-page__stat-label">Active</span>
            </div>
          </div>

          <div className="ecom-user-management-page__stat-card">
            <div className="ecom-user-management-page__stat-icon ecom-user-management-page__stat-icon--blocked">
              <i className="fas fa-ban"></i>
            </div>
            <div className="ecom-user-management-page__stat-content">
              <span className="ecom-user-management-page__stat-number">{getStats().blocked}</span>
              <span className="ecom-user-management-page__stat-label">Blocked</span>
            </div>
          </div>

          <div className="ecom-user-management-page__stat-card">
            <div className="ecom-user-management-page__stat-icon ecom-user-management-page__stat-icon--inactive">
              <i className="fas fa-clock"></i>
            </div>
            <div className="ecom-user-management-page__stat-content">
              <span className="ecom-user-management-page__stat-number">{getStats().inactive}</span>
              <span className="ecom-user-management-page__stat-label">Inactive</span>
            </div>
          </div>
        </div>

        {/* Filters and Bulk Actions */}
        <div className="ecom-user-management-page__controls">
          <UserFilters
            filters={filters}
            onFiltersChange={setFilters}
            userCount={filteredUsers.length}
          />

          {/* Bulk Actions */}
          {selectedUsers.length > 0 && (
            <div className="ecom-user-management-page__bulk-actions">
              <span className="ecom-user-management-page__bulk-selected">
                {selectedUsers.length} users selected
              </span>
              <select
                value={bulkAction}
                onChange={(e) => {
                  setBulkAction(e.target.value);
                  if (e.target.value) {
                    handleBulkStatusChange(e.target.value);
                  }
                }}
                className="ecom-user-management-page__bulk-select"
              >
                <option value="">Bulk Actions</option>
                <option value="active">Activate Selected</option>
                <option value="blocked">Block Selected</option>
                <option value="inactive">Mark as Inactive</option>
              </select>
              <button
                className="ecom-user-management-page__bulk-clear"
                onClick={() => setSelectedUsers([])}
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Users Table */}
        <div className="ecom-user-management-page__content">
          <UserListTable
            users={currentUsers}
            selectedUsers={selectedUsers}
            onSelectAll={handleSelectAll}
            onSelectUser={handleSelectUser}
            onSort={handleSort}
            sortConfig={sortConfig}
            onStatusChange={handleUserStatusChange}
          />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="ecom-user-management-page__pagination">
              <div className="ecom-user-management-page__pagination-info">
                Showing {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
              </div>
              
              <div className="ecom-user-management-page__pagination-controls">
                <button
                  className="ecom-user-management-page__pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <i className="fas fa-chevron-left"></i>
                  Previous
                </button>

                <div className="ecom-user-management-page__pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      className={`ecom-user-management-page__pagination-number ${
                        currentPage === page ? 'ecom-user-management-page__pagination-number--active' : ''
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  className="ecom-user-management-page__pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              <div className="ecom-user-management-page__pagination-size">
                <label>Show:</label>
                <select
                  value={usersPerPage}
                  onChange={(e) => console.log('Change page size to:', e.target.value)}
                  className="ecom-user-management-page__pagination-select"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
                <span>per page</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;