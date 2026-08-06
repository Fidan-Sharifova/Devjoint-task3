import React from 'react';

function Pagination(props) {
  const { page, setPage, totalPages } = props;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginTop: '30px' }}>
      <button 
        onClick={() => setPage(page - 1)} 
        disabled={page === 1}
        style={{ 
          padding: '10px 20px', 
          borderRadius: '8px', 
          border: 'none',
          backgroundColor: page === 1 ? '#e2e8f0' : '#3b82f6',
          color: page === 1 ? '#94a3b8' : 'white',
          cursor: page === 1 ? 'not-allowed' : 'pointer'
        }}
      >
        Geri
      </button>
      
      <span style={{ fontWeight: 'bold', color: '#64748b' }}>
        Səhifə {page} / {totalPages}
      </span>
      
      <button 
        onClick={() => setPage(page + 1)} 
        disabled={page === totalPages}
        style={{ 
          padding: '10px 20px', 
          borderRadius: '8px', 
          border: 'none',
          backgroundColor: page === totalPages ? '#e2e8f0' : '#3b82f6',
          color: page === totalPages ? '#94a3b8' : 'white',
          cursor: page === totalPages ? 'not-allowed' : 'pointer'
        }}
      >
        İreli
      </button>
    </div>
  );
}

export default Pagination;