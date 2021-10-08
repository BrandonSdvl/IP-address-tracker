import { isValidIP } from "../../utils/isValidIp";
import "./Header.scss";

const Header = ({ ip, setIp, getIpLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ip) {
      alert("Enter an IP");
      return;
    }

    if (isValidIP(ip)) {
      getIpLocation(ip);
      setIp("");
    } else {
      alert("Enter a valid IP");
    }
  };

  return (
    <header className={"header"}>
      <h1 className={"header__title"}>IP Address Tracker</h1>
      <form className={"header__form"} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className={"header__input"}
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />
        <input type="submit" value="" className={"header__button"} />
      </form>
    </header>
  );
};

export default Header;
