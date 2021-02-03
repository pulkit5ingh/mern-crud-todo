import React from 'react'

import {
    Link
} from "react-router-dom";


export const Header = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg fixed-top  shadow">
                <div className="container">
                    <Link to='/'><span class="navbar-brand link">TODOS APP</span></Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to='/todos'><span className="link">ALL TODOS
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-border-width" viewBox="0 0 16 16">
                                        <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </span>
                                </Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to='/todo/add'>
                                    <span class="add-btn shadow">ADD TODOS
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
