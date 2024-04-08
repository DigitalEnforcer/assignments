export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-top">
                <a className="bootstrap-link" href="www.google.com">Start Bootstrap</a>
                <div className="navbar-container">
                    <ul className="navbar-links">
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">SAMPLE POST</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">CONTACT</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}