import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon="stopwatch" className="logo" />
      <span>React Counter V2</span>
    </header>
  );
};

export default Header;
