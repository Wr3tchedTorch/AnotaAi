import "../assets/home.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getNotes, postNote } from "../api/axios";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import Notes from "../components/Notes";
import Footer from "../components/Footer";
import RenderPagination from "../components/RenderPagination";
import Typewriter from "typewriter-effect";

// Aqui você pode organizar todas as suas anotações.

const Home = () => {
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [updateNotes, setUpdateNotes] = useState(0);
  const [notes, setNotes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [notesPerPage, setNotesPerPage] = useState(5);

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;

  console.log("Home renderizado");

  const paginate = (pageNumber: any, e: any) => {
    e.preventDefault();
    setcurrentPage(pageNumber);
    setUpdateNotes(updateNotes + 1);
  };

  useEffect(() => {
    getNotes()
      .then((json) => {
        console.log(json);
        setNotes(json);
        return json;
      })
      .then((json) => {
        const currentNotes = json.slice(indexOfFirstNote, indexOfLastNote);
        setSearchResults(currentNotes);
      });
  }, [updateNotes]);

  function handlePostNote(e: any) {
    let descHTML = document.getElementById(
      "newNoteModalInput"
    ) as HTMLInputElement;
    let titleHTML = document.getElementById(
      "newNoteModalTextarea"
    ) as HTMLInputElement;

    descHTML.value = "";
    titleHTML.value = "";

    let date = new Date();
    let currentDate = date.toISOString().split("T")[0];

    postNote([
      titleInput.replaceAll("'", "\\'"),
      descInput.replaceAll("'", "\\'"),
      currentDate,
    ]);
    setTimeout(() => {
      setUpdateNotes(updateNotes + 1);
    }, 100);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container flex-container w-100 px-5">
        <div className="floating-text">
          <h5 style={{ marginTop: 100, marginBottom: 20 }}>Seja bem vindo!</h5>
          <h4 className="d-flex">
            <div className="mx-1">
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(55)
                    .changeDeleteSpeed(55)
                    .typeString(
                      "Aqui você pode organizar todas as suas anotações"
                    )
                    .pauseFor(1200)
                    .deleteChars(9)
                    .typeString("ideias")
                    .pauseFor(2000)
                    .start();
                }}
              />
            </div>
          </h4>
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [50, 0, 50], rotate: [10] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="background-floating-img"
        ></motion.div>
      </div>
      <div className="second-section"></div>
      <SearchBar
        notes={notes}
        setSearchResults={setSearchResults}
        indexOfLastNote={indexOfLastNote}
        indexOfFirstNote={indexOfFirstNote}
      />
      <div className="notes mb-5">
        {searchResults.map((note: any) => (
          <Notes
            setUpdateNotes={setUpdateNotes}
            updateNotes={updateNotes}
            note={note}
            key={note.id}
          />
        ))}
      </div>
      <Modal
        setDescInput={setDescInput}
        setTitleInput={setTitleInput}
        handlePostNote={handlePostNote}
        modalIdName={"newNoteModal"}
      />

      <RenderPagination
        totalNotes={notes.length}
        currentPage={currentPage}
        notesPerPage={notesPerPage}
        paginate={paginate}
      />

      <Footer />
    </motion.div>
  );
};

export default Home;
