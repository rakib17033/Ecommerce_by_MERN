import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <Fragment>

            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <a href="http://localhost:3000/" >
                            <img src="./images/logo.png" />
                        </a>
                        
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            className="form-control"
                            placeholder="Enter Product Name ..."
                        />
                        <div className="input-group-append">
                            <button id="search_btn" className="btn">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default Header