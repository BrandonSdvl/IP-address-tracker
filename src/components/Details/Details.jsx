const Details = ({ dataIp }) => {
    return (
        <ul className={"details"}>
            <li className={"details__item"}>
                IP Address
                <span>{dataIp.ip}</span>
            </li>
            <li className={"details__item"}>
                Location
                <span>{dataIp.location}</span>
            </li>
            <li className={"details__item"}>
                Timezone
                <span>{dataIp.timezone}</span>
            </li>
            <li className={"details__item"}>
                ISP
                <span>{dataIp.isp}</span>
            </li>
        </ul>
    )
}

export default Details
