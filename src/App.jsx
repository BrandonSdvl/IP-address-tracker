import { useEffect, useState } from "react";
import "./App.scss";
import Details from "./components/Details/Details";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Map from "./components/Map/Map";

function App() {
  const [ip, setIp] = useState("");
  const [dataIp, setDataIp] = useState("");

  const getIpLocation = async (ip) => {
    setDataIp("");
    let url = `https://geo.ipify.org/api/v1?apiKey=${
      process.env.REACT_APP_API_KEY
    }&ipAddress=${ip || "192.212.174.101"}`;
    let res = await fetch(url);
    let json = await res.json();

    let dataIp = {};

    if (
      (json.location.country === "ZZ" || json.location.country === "") &&
      json.location.region === ""
    ) {
      dataIp = {
        error: true,
      };
    } else {
      dataIp = {
        ip,
        location: `${json.location.city}, ${json.location.region} ${json.location.geonameId}`,
        timezone: `UTC${json.location.timezone}`,
        isp: json.isp,
        coords: {
          lat: json.location.lat,
          lng: json.location.lng,
        },
      };
    }

    setDataIp(dataIp);
  };

  useEffect(() => {
    let url = "https://api64.ipify.org?format=json";

    const getIp = async (url) => {
      let res = await fetch(url);
      let json = await res.json();

      await getIpLocation(json.ip);
    };

    getIp(url);
  }, []);

  return (
    <div className="app">
      <Header ip={ip} setIp={setIp} getIpLocation={getIpLocation} />
      {dataIp.error ? (
        <Error />
      ) : (
        <>
          {dataIp === "" ? (
            <Loader />
          ) : (
            <>
              <Details dataIp={dataIp} />
              <Map dataIp={dataIp} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
