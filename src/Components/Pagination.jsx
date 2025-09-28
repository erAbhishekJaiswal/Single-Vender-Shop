import React from 'react';
import '../ComponentsCSS/Pagination.css';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  siblingCount = 1,
  boundaryCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  size = 'medium',
  variant = 'default'
}) => {
  if (totalPages <= 1) return null;

  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, totalPages));
  const endPages = range(Math.max(totalPages - boundaryCount + 1, boundaryCount + 1), totalPages);

  const siblingsStart = Math.max(
    Math.min(
      currentPage - siblingCount,
      totalPages - boundaryCount - siblingCount * 2 - 1
    ),
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      currentPage + siblingCount,
      boundaryCount + siblingCount * 2 + 2
    ),
    endPages.length > 0 ? endPages[0] - 2 : totalPages - 1
  );

  const itemList = [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2 ? ['ellipsis-start'] : boundaryCount + 1 < totalPages - boundaryCount ? [boundaryCount + 1] : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < totalPages - boundaryCount - 1 ? ['ellipsis-end'] : totalPages - boundaryCount > boundaryCount ? [totalPages - boundaryCount] : []),
    ...endPages,
  ];

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const getPageItemClass = (page) => {
    let className = `ecom-pagination__item ecom-pagination__item--${size}`;
    if (page === currentPage) className += ' ecom-pagination__item--active';
    if (variant === 'outlined') className += ' ecom-pagination__item--outlined';
    return className;
  };

  return (
    <nav className={`ecom-pagination ecom-pagination--${variant}`} aria-label="Pagination">
      <ul className="ecom-pagination__list">
        {/* First Page */}
        {showFirstLast && (
          <li>
            <button
              className={`ecom-pagination__item ecom-pagination__item--${size} ecom-pagination__item--first`}
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              aria-label="Go to first page"
            >
              <i className="fas fa-angle-double-left"></i>
            </button>
          </li>
        )}

        {/* Previous Page */}
        {showPrevNext && (
          <li>
            <button
              className={`ecom-pagination__item ecom-pagination__item--${size} ecom-pagination__item--prev`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Go to previous page"
            >
              <i className="fas fa-angle-left"></i>
            </button>
          </li>
        )}

        {/* Page Numbers */}
        {itemList.map((item, index) => {
          if (item === 'ellipsis-start' || item === 'ellipsis-end') {
            return (
              <li key={`ellipsis-${index}`}>
                <span className={`ecom-pagination__ellipsis ecom-pagination__ellipsis--${size}`}>
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </li>
            );
          }

          return (
            <li key={item}>
              <button
                className={getPageItemClass(item)}
                onClick={() => handlePageChange(item)}
                aria-label={`Go to page ${item}`}
                aria-current={item === currentPage ? 'page' : undefined}
              >
                {item}
              </button>
            </li>
          );
        })}

        {/* Next Page */}
        {showPrevNext && (
          <li>
            <button
              className={`ecom-pagination__item ecom-pagination__item--${size} ecom-pagination__item--next`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Go to next page"
            >
              <i className="fas fa-angle-right"></i>
            </button>
          </li>
        )}

        {/* Last Page */}
        {showFirstLast && (
          <li>
            <button
              className={`ecom-pagination__item ecom-pagination__item--${size} ecom-pagination__item--last`}
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              aria-label="Go to last page"
            >
              <i className="fas fa-angle-double-right"></i>
            </button>
          </li>
        )}
      </ul>

      {/* Page Info */}
      <div className="ecom-pagination__info">
        Page {currentPage} of {totalPages}
      </div>
    </nav>
  );
};

// Compact Pagination for mobile
export const CompactPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="ecom-pagination-compact">
      <select 
        value={currentPage}
        onChange={(e) => onPageChange(Number(e.target.value))}
        className="ecom-pagination-compact__select"
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <option key={page} value={page}>
            Page {page}
          </option>
        ))}
      </select>
      <span className="ecom-pagination-compact__text">
        of {totalPages} pages
      </span>
    </div>
  );
};

export default Pagination;