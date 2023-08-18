import { useEffect, useState } from "react";
import Pagination from "./Pagination";

type RenderPaginationProps = {
  notesPerPage: any;
  totalNotes: any;
  paginate: any;
  currentPage: any;
};

const RenderPagination = ({
  notesPerPage,
  totalNotes,
  paginate,
  currentPage,
}: RenderPaginationProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let maxNavigatorPagesNum = 0;

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <>
      <Pagination
        notesPerPage={notesPerPage}
        totalNotes={totalNotes}
        paginate={paginate}
        currentPage={currentPage}
        maxNavigatorPagesNum={maxNavigatorPagesNum}
        windowWidth={windowWidth}
      />
    </>
  );
};

export default RenderPagination;
