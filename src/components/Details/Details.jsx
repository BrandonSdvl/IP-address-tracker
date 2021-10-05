const Details = () => {
    return (
        <ul className={"details"}>
            <li className={"details__item"}>
                IP Address
                <span>192.168.0.1</span>
            </li>
            <li className={"details__item"}>
                Location
                <span>Brooklyn</span>
            </li>
            <li className={"details__item"}>
                Timezone
                <span>UTC-</span>
            </li>
            <li className={"details__item"}>
                ISP
                <span>SpaceX</span>
            </li>
        </ul>
    )
}

export default Details
