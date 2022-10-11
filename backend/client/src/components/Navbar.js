import logo from "./images/logo.png"
import "../scss/homepage.scss"
import { Link } from "react-router-dom"
const Nav = () =>{
    return (
        <div className='container my-5'>
        <nav className="navbar navbar-expand-lg bg-light rounded-pill">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src={logo} className="logo me-2 my-auto"/>Momeries</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/uploads">Uploads</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">SignOut</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </div>
    )
}
export default Nav