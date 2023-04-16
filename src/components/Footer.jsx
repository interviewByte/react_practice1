import React from "react"

function Footer () {

    const time = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>Copyright © {time}</p>
        </footer>
    )
}

export default Footer;