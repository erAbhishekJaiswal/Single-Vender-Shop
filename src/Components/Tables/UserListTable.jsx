import React from 'react';
import BlockUnblockButton from './BlockUnblockButton';
import './UserListTable.css';

const UserListTable = ({ 
  users, 
  selectedUsers, 
  onSelectAll, 
  onSelectUser, 
  onSort, 
  sortConfig, 
  onStatusChange 
}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getRoleBadge = (role) => {
    const roleConfig = {
      admin: { label: 'Admin', class: 'ecom-user-table__role--admin' },
      moderator: { label: 'Moderator', class: 'ecom-user-table__role--moderator' },
      vendor: { label: 'Vendor', class: 'ecom-user-table__role--vendor' },
      customer: { label: 'Customer', class: 'ecom-user-table__role--customer' }
    };
    
    const config = roleConfig[role] || roleConfig.customer;
    return (
      <span className={`ecom-user-table__role ${config.class}`}>
        {config.label}
      </span>
    );
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { label: 'Active', class: 'ecom-user-table__status--active' },
      blocked: { label: 'Blocked', class: 'ecom-user-table__status--blocked' },
      inactive: { label: 'Inactive', class: 'ecom-user-table__status--inactive' }
    };
    
    const config = statusConfig[status] || statusConfig.inactive;
    return (
      <span className={`ecom-user-table__status ${config.class}`}>
        {config.label}
      </span>
    );
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return <i className="fas fa-sort ecom-user-table__sort-icon"></i>;
    }
    
    return sortConfig.direction === 'asc' 
      ? <i className="fas fa-sort-up ecom-user-table__sort-icon ecom-user-table__sort-icon--active"></i>
      : <i className="fas fa-sort-down ecom-user-table__sort-icon ecom-user-table__sort-icon--active"></i>;
  };

  return (
    <div className="ecom-user-table">
      <div className="ecom-user-table__container">
        <table className="ecom-user-table__table">
          <thead className="ecom-user-table__header">
            <tr>
              <th className="ecom-user-table__th ecom-user-table__th--checkbox">
                <input
                  type="checkbox"
                  checked={selectedUsers.length === users.length && users.length > 0}
                  onChange={onSelectAll}
                  className="ecom-user-table__checkbox"
                />
              </th>
              <th 
                className="ecom-user-table__th ecom-user-table__th--sortable"
                onClick={() => onSort('name')}
              >
                <span className="ecom-user-table__th-content">
                  User
                  <SortIcon columnKey="name" />
                </span>
              </th>
              <th className="ecom-user-table__th">Contact</th>
              <th 
                className="ecom-user-table__th ecom-user-table__th--sortable"
                onClick={() => onSort('role')}
              >
                <span className="ecom-user-table__th-content">
                  Role
                  <SortIcon columnKey="role" />
                </span>
              </th>
              <th 
                className="ecom-user-table__th ecom-user-table__th--sortable"
                onClick={() => onSort('status')}
              >
                <span className="ecom-user-table__th-content">
                  Status
                  <SortIcon columnKey="status" />
                </span>
              </th>
              <th 
                className="ecom-user-table__th ecom-user-table__th--sortable"
                onClick={() => onSort('registrationDate')}
              >
                <span className="ecom-user-table__th-content">
                  Registered
                  <SortIcon columnKey="registrationDate" />
                </span>
              </th>
              <th 
                className="ecom-user-table__th ecom-user-table__th--sortable"
                onClick={() => onSort('lastLogin')}
              >
                <span className="ecom-user-table__th-content">
                  Last Login
                  <SortIcon columnKey="lastLogin" />
                </span>
              </th>
              <th 
                className="ecom-user-table__th ecom-user-table__th--sortable"
                onClick={() => onSort('orders')}
              >
                <span className="ecom-user-table__th-content">
                  Orders
                  <SortIcon columnKey="orders" />
                </span>
              </th>
              <th 
                className="ecom-user-table__th ecom-user-table__th--sortable"
                onClick={() => onSort('totalSpent')}
              >
                <span className="ecom-user-table__th-content">
                  Total Spent
                  <SortIcon columnKey="totalSpent" />
                </span>
              </th>
              <th className="ecom-user-table__th">Actions</th>
            </tr>
          </thead>
          
          <tbody className="ecom-user-table__body">
            {users.map(user => (
              <tr key={user.id} className="ecom-user-table__row">
                <td className="ecom-user-table__td ecom-user-table__td--checkbox">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => onSelectUser(user.id)}
                    className="ecom-user-table__checkbox"
                  />
                </td>
                
                <td className="ecom-user-table__td">
                  <div className="ecom-user-table__user-info">
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="ecom-user-table__avatar"
                      onError={(e) => {
                        e.target.src = '/images/avatars/default-avatar.jpg';
                      }}
                    />
                    <div className="ecom-user-table__user-details">
                      <div className="ecom-user-table__name">{user.name}</div>
                      <div className="ecom-user-table__email">{user.email}</div>
                    </div>
                  </div>
                </td>
                
                <td className="ecom-user-table__td">
                  <div className="ecom-user-table__contact">
                    <div className="ecom-user-table__phone">{user.phone}</div>
                    <div className={`ecom-user-table__verification ${
                      user.isVerified ? 'ecom-user-table__verification--verified' : 'ecom-user-table__verification--unverified'
                    }`}>
                      <i className={`fas ${user.isVerified ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
                      {user.isVerified ? 'Verified' : 'Unverified'}
                    </div>
                  </div>
                </td>
                
                <td className="ecom-user-table__td">
                  {getRoleBadge(user.role)}
                </td>
                
                <td className="ecom-user-table__td">
                  {getStatusBadge(user.status)}
                </td>
                
                <td className="ecom-user-table__td">
                  <div className="ecom-user-table__date">
                    {formatDate(user.registrationDate)}
                  </div>
                </td>
                
                <td className="ecom-user-table__td">
                  <div className="ecom-user-table__date">
                    {formatDate(user.lastLogin)}
                  </div>
                </td>
                
                <td className="ecom-user-table__td">
                  <div className="ecom-user-table__orders">
                    {user.orders}
                  </div>
                </td>
                
                <td className="ecom-user-table__td">
                  <div className="ecom-user-table__total-spent">
                    {formatCurrency(user.totalSpent)}
                  </div>
                </td>
                
                <td className="ecom-user-table__td">
                  <div className="ecom-user-table__actions">
                    <BlockUnblockButton
                      user={user}
                      onStatusChange={onStatusChange}
                    />
                    
                    <button 
                      className="ecom-user-table__action-btn ecom-user-table__action-btn--edit"
                      title="Edit User"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    
                    <button 
                      className="ecom-user-table__action-btn ecom-user-table__action-btn--view"
                      title="View Profile"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    
                    <button 
                      className="ecom-user-table__action-btn ecom-user-table__action-btn--delete"
                      title="Delete User"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="ecom-user-table__empty">
            <div className="ecom-user-table__empty-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="ecom-user-table__empty-title">No users found</h3>
            <p className="ecom-user-table__empty-text">
              Try adjusting your filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserListTable;