import "../assets/home.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getNotes, postNote, deleteNote } from "../api/axios";
import { toggleVisibility } from "../animation/visibility";

// Aqui você pode organizar todas as suas anotações.

const Home = () => {
  const [animateModal, setAnimateModal] = useState(0);
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [updateNotes, setUpdateNotes] = useState(0);
  const [notes, setNotes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  AOS.init();

  useEffect(() => {
    getNotes().then((json) => {
      setNotes(json);
    });
  }, [updateNotes]);

  function handlePostNote(e: any) {
    let descHTML = document.getElementById(
      "modalInputDesc1"
    ) as HTMLInputElement;
    let titleHTML = document.getElementById(
      "modalInputTitle1"
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
    setUpdateNotes(updateNotes + 1);
  }

  function handleDeleteNote(id: any) {
    toggleVisibility(id);
    setTimeout(() => {
      deleteNote(id);
      setUpdateNotes(updateNotes + 1);
    }, 300);
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
          <h4>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Aqui você pode organizar todas as suas anotações",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "Aqui você pode organizar todas as suas ideias",
                3000,
              ]}
              wrapper="span"
              speed={60}
              style={{
                fontSize: "30px",
                display: "inline-block",
                maxWidth: 600,
              }}
              repeat={Infinity}
            />
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
      <form className="d-flex w-75 m-auto mb-5" role="search">
        <input
          className="form-control me-2 rounded-pill border border-dark-subtle nosubmit"
          type="search"
          placeholder="Pesquisar Nota"
          aria-label="Pesquisar Nota"
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

      <div className="notes mb-5">
        {notes.map((dbrow: any) => (
          <motion.div
            className="note alert alert-light border border-dark-subtle m-auto mb-3"
            key={dbrow.id}
            id={`note${dbrow.id}`}
            data-aos="zoom-in-up"
            exit={{ x: -100, opacity: 0 }}
          >
            <div
              className="heading d-flex justify-content-between mb-2"
              style={{ alignItems: "center" }}
            >
              <h4>{dbrow.title}</h4>
              <button
                className="btn"
                style={{ fontSize: 22 }}
                onClick={(e) => handleDeleteNote(dbrow.id)}
              >
                X
              </button>
            </div>
            <p>{dbrow.description}</p>
            <span className="date w-100 d-flex justify-content-end px-4">
              {dbrow.date.slice(0, 10).replace(new RegExp("-", "g"), "/")}
            </span>
          </motion.div>
        ))}
      </div>

      <div
        className="modal fade"
        id="newNoteModal"
        aria-labelledby="newNoteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newNoteModalLabel">
                Criar nova anotação
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Titulo</label>
                  <input
                    type="email"
                    className="form-control border border-dark-subtle"
                    id="modalInputTitle1"
                    aria-describedby="emailHelp"
                    maxLength={40}
                    onChange={(e) => {
                      setTitleInput(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Descrição</label>
                  <textarea
                    className="form-control border border-dark-subtle"
                    id="modalInputDesc1"
                    rows={3}
                    maxLength={450}
                    onChange={(e) => {
                      setDescInput(e.target.value);
                    }}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handlePostNote}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <a
        href="https://www.flaticon.com/br/icones-gratis/pista"
        title="pista ícones"
      >
        Pista ícones criados por Freepik - Flaticon
      </a> */}
    </motion.div>
  );
};

export default Home;
