const Header = () => {
    return (
        <header className={"header"}>
            <h1 className={"header__title"}>IP Address Tracker</h1>
            <form className={"header__form"}>
                <input type="text" placeholder="Search for any IP address or domain" className={"header__input"} />
                <input type="submit" value="" className={"header__button"} />
            </form>
        </header>
    )
}

export default Header
