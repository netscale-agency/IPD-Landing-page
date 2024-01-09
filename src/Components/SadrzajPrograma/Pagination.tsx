import styles from "./Pagination.module.css";
import previous from "../../Assets/paginationArrowLeft.svg";
import next from "../../Assets/paginationArrowRight.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const renderPagination = () => {
    const pageNumbers: Array<number | string> = [];

    if (totalPages > 0) {
      pageNumbers.push(0);

      if (currentPage > 1) {
        pageNumbers.push("...");
      }

      if (currentPage > 0 && currentPage < totalPages - 1) {
        pageNumbers.push(currentPage);
      } else if (currentPage === 0) {
        pageNumbers.push(1);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages - 1);
    }

    return (
      <div className={styles.pagination}>
        {currentPage > 0 && (
          <button
            className={styles.paginationBtn}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <img src={previous} alt="Previous" />
          </button>
        )}

        {pageNumbers.map((pageNumber, index) => (
          <span key={index}>
            {pageNumber === "..." ? (
              <span className={styles.paginationSpan}>...</span>
            ) : (
              <button
                onClick={() => setCurrentPage(Number(pageNumber))}
                className={`${styles.paginationBtn} ${
                  pageNumber === currentPage ? styles.active : ""
                }`}
              >
                {Number(pageNumber) + 1}
              </button>
            )}
          </span>
        ))}

        {currentPage < totalPages - 1 && (
          <button
            className={styles.paginationBtn}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <img src={next} alt="Next" />
          </button>
        )}
      </div>
    );
  };

  return <>{renderPagination()}</>;
};

export default Pagination;
