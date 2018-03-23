import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" ></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" >Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <i class="fa fa-shopping-cart"></i> Shopping Cart</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="fa fa-user"></i>
                        User Management
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to='/login'>
                            <a class="dropdown-item"> User Account</a>
                        </Link>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" >Logout</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
);
export default HomePage;