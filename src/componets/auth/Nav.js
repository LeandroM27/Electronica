import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import { Navdata } from './Navdata';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a href className="navbar-brand ps-3">Electronic</a>
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></form>
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    {Navdata.map((item, index) => {
                        return(
                            <Link to={item.path}>                              
                                <div className="nav-item">
                                    <a href className="nav-link" key={index}>
                                        {item.title}
                                    </a>
                                </div>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Nav
