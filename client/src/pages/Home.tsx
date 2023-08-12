import "../assets/home.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

// Aqui você pode organizar todas as suas anotações.

const Home = () => {
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
      <form
        className="d-flex w-75 m-auto mb-5"
        role="search"        
      >
        <input
          className="form-control me-2 rounded-pill border border-dark-subtle"
          type="search"
          placeholder="Pesquisar Nota"
          aria-label="Pesquisar Nota"
        />
      </form>
    </motion.div>
  );
};

export default Home;
