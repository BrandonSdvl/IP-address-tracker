import { ReactComponent as IconError } from "../../assets/icon-error.svg";
import "./Error.scss";

const Error = () => {
  return (
    <div className={"error"}>
      <IconError className={"error__icon"} />
      <h2>Something went wrong, try with another IP</h2>
    </div>
  );
};

export default Error;
