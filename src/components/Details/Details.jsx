import "./Details.scss";

const Details = ({ dataIp }) => {
  return (
    <div className={"details"}>
      <ul className={"details__container"}>
        <li className={"details__item"}>
          IP Address
          <span>{dataIp.ip}</span>
        </li>
        <div className="separator"></div>
        <li className={"details__item"}>
          Location
          <span>{dataIp.location}</span>
        </li>
        <div className="separator"></div>
        <li className={"details__item"}>
          Timezone
          <span>{dataIp.timezone}</span>
        </li>
        <div className="separator"></div>
        <li className={"details__item"}>
          ISP
          <span>{dataIp.isp}</span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
