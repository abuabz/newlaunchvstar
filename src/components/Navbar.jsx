import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{position:'sticky' , top:0}}>
                <div className="container-fluid">

                    <a className="navbar-brand" href="#" id='navImg'>
                        <img src='https://www.vstar.in/dist/vLogo-tpy.svg' style={{ height: 30 }} />
                        Vstar
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav" style={{ fontWeight: 800 }}>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar