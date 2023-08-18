import { useEffect, useState } from "react";

type PaginationProps = {
  notesPerPage: any;
  totalNotes: any;
  paginate: any;
  currentPage: any;
  maxNavigatorPagesNum: any;
};

const Pagination = ({
  notesPerPage,
  totalNotes,
  paginate,
  currentPage,
  maxNavigatorPagesNum,
}: PaginationProps) => {
  const pageNumbers = [];
  const totalPages = [];
  const [initialNumber, setInitialNumber] = useState(1);
  let maxNavigatorPages = 0;

  function resizePagination(paginationNum: any) {
    maxNavigatorPagesNum =
      Math.ceil(totalNotes / notesPerPage) < paginationNum
        ? Math.ceil(totalNotes / notesPerPage)
        : paginationNum;
  }
  console.log("Pagination renderizado");

  if (window.matchMedia("(min-width: 1300px)").matches) {
    resizePagination(22);
  } else if (window.matchMedia("(min-width: 875px)").matches) {
    resizePagination(15);
  } else if (window.matchMedia("(min-width: 670px)").matches) {
    resizePagination(10);
  } else {
    resizePagination(5);
  }

  maxNavigatorPages =
    Math.ceil(totalNotes / notesPerPage) < maxNavigatorPagesNum
      ? Math.ceil(totalNotes / notesPerPage)
      : maxNavigatorPagesNum - 1 + initialNumber;

  for (let i = initialNumber; i <= maxNavigatorPages; i++) {
    pageNumbers.push(i);
  }
  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    totalPages.push(i);
  }

  return (
    <ul className="pagination w-75 m-auto">
      <li className="page-item">
        <a
          className="page-link"
          href="#"
          onClick={(e) => {
            paginate(currentPage == 1 ? currentPage : currentPage - 1, e);
            if (initialNumber - 1 >= 1) {
              setInitialNumber(initialNumber - 1);
            }
          }}
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
          onClick={(e) => {
            paginate(
              currentPage == totalPages.length ? currentPage : currentPage + 1,
              e
            );
            if (
              initialNumber + (maxNavigatorPagesNum - 1) !=
              totalPages.length
            ) {
              setInitialNumber(initialNumber + 1);
            }
          }}
        >
          Avançar
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
