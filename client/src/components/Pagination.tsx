type PaginationProps = {
  notesPerPage: any;
  totalNotes: any;
  paginate: any;
  currentPage: any;
};

const Pagination = ({
  notesPerPage,
  totalNotes,
  paginate,
  currentPage,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="..." className="w-25 m-auto">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={(e) =>
              paginate(
                currentPage == 1
                  ? currentPage
                  : currentPage - 1,
                e
              )
            }
          >
            Voltar
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            className={"page-item " + (currentPage == number ? "active" : "")}
            key={number}
          >
            <a
              className="page-link"
              href="#navbar"
              onClick={(e) => paginate(number, e)}
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={(e) =>
              paginate(
                currentPage == pageNumbers.length
                  ? currentPage
                  : currentPage + 1,
                e
              )
            }
          >
            Avançar
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
