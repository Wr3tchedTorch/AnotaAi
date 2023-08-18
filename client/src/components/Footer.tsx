const Footer = () => {
  return (
    <footer
      className="container d-flex justify-content-spacebetween w-75 flex-wrap"
      id="footer"
      style={{ marginTop: 100 }}
    >
      <div className="w-50" id="footer-div">
        <h5>Esse site foi desenvolvido por Eric Moura</h5>
        <hr />
        <p style={{textAlign: "justify"}}>
          Esse site foi criado com o intuito de desenvolver minhas habilidades e
          expandir meu conhecimento em ferramentas como{" "}
          <a href="https://react.dev">ReactJS</a> e
          <a href="https://expressjs.com"> Node Express</a>. Todo o código
          utilizado nesse projeto está publicado no meu <a href="">Github</a>.
        </p>
        <h6>Creditos:</h6>
        <a
          href="https://www.flaticon.com/br/icones-gratis/pista"
          title="pista ícones"
        >
          Icone do navegador criado por Freepik - Flaticon
        </a>
      </div>
      <ul className="redes-sociais" id="footer-ul">
        <h5>Redes Sociais</h5>
        <hr />
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Github</a>
        </li>
        <li>
          <a href="">Linkedin</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
