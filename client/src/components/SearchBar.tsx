import { useState } from "react";

type SearchBarProps = {
  notes: any;
  setSearchResults: any;
};

const SearchBar = ({ notes, setSearchResults }: SearchBarProps) => {
  const [animateModal, setAnimateModal] = useState(0);

  function handleSearchChange(e: any) {
    if (!e.target.value) return setSearchResults(notes);

    const resultsArray = notes.filter((note: any) =>
      note.title.includes(e.target.value)
    );
    console.log(resultsArray);
    setSearchResults(resultsArray);
  }

  return (
    <form className="d-flex w-75 m-auto mb-5" role="search">
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
