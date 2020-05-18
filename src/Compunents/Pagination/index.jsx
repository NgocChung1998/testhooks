import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    onPageChange:PropTypes.object.isRequired,
};
Pagination.defaultProps={
    onPageChange:null
}
function Pagination(props) {
    const {pagination,onPageChange}=props
    const {_page,_limit,_totalRows}=pagination;
    // Math.ceil lấy phần nguyền lớn hơn VD:5.1 -> 6
    const totalPages=Math.ceil(_totalRows / _limit)
    function handlePageChange(newPage) {
        if(onPageChange){
            onPageChange(newPage);
        }
    }
    return (
        <div>
            <button
            disabled={_page <= 1}
            onClick={()=>handlePageChange(_page-1)} 
            >
                Prev
            </button>
            <button
            disabled={_page >= totalPages}
            onClick={()=>handlePageChange(_page+1)} 
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;