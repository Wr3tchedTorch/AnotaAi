import { useState } from "react";

type SearchBarProps = {
  notes: any;
  setSearchResults: any;
  indexOfFirstNote: any;
  indexOfLastNote: any;
};

const SearchBar = ({
  notes,
  setSearchResults,
  indexOfFirstNote,
  indexOfLastNote,
}: SearchBarProps) => {
  const [animateModal, setAnimateModal] = useState(0);

  function handleSearchChange(e: any) {
    if (!e.target.value)
      return setSearchResults(notes.slice(indexOfFirstNote, indexOfLastNote));

    const resultsArray = notes.filter((note: any) =>
      note.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    console.log(resultsArray.slice(0, 5));
    setSearchResults(resultsArray.slice(0, 5));
  }

  return (
    <form className="d-flex w-75 m-auto mb-5" role="search" id="navbar">
      <input
        className="form-control me-2 rounded-pill border border-dark-subtle nosubmit"
        type="search"
        placeholder="Pesquisar Nota"
        aria-label="Pesquisar Nota"
        onChange={handleSearchChange}
      />
      <button
        type="button"
        className="btn btn-primary rounded "
        data-bs-toggle="modal"
        data-bs-target="#newNoteModal"
        onClick={() => {
          setAnimateModal(animateModal == 0 ? 1 : 0);
        }}
      >
        +
      </button>
    </form>
  );
};

export default SearchBar;
