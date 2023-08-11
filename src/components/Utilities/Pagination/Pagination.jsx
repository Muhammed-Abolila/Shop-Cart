import React from 'react';
import ReactPaginate from 'react-paginate';
const PaginationComp = () => {
    const handlePageClick=()=>{
        console.log("hello");
    }
    const pageCount=100;
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName='pagination justify-content-center'
        nextClassName='page-item'
        nextLinkClassName='page-link next-link'
        previousClassName='page-item'
        previousLinkClassName='page-link prev-link'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeClassName='active-link'
      />
    </>
  )
}

export default PaginationComp
