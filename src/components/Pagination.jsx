import ReactPaginate from "react-paginate";

const Pagination = ({ length, limit, setPage, page }) => {

  const pageCount = Math.ceil(length / limit);
  
  const handlePageClick = (selectedPage) => {
    setPage(selectedPage.selected + 1);
  };

  return (
    <div className="pt-6">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
        containerClassName="flex justify-center"
        pageClassName=" px-4 py-1 text-lg"
        activeClassName="bg-gray-300 border-blue-500"
        previousClassName=" px-4 py-1 text-lg text-gray-500"
        nextClassName=" px-4 py-1 text-lg text-gray-500"
      />
    </div>
  );
};

export default Pagination;
