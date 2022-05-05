const Footer = () => {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer>
      <p>Footer</p>
      <button onClick={() => topFunction()}> haut de page</button>
    </footer>
  );
};

export default Footer;
