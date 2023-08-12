import "../assets/home.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";

// Aqui você pode organizar todas as suas anotações.

const Home = () => {
  const [animateModal, setAnimateModal] = useState(0);

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
          transition={{ duration: 5, repeat: Infinity }}
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
                Nova Anotação
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
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control border border-dark-subtle"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control border-dark-subtle"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input border-dark-subtle"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">Check me out</label>
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
              <button type="button" className="btn btn-primary">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
