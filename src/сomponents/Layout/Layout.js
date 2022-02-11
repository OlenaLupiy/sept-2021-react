import React from 'react';
import {Outlet} from 'react-router-dom'
import {Header} from "../Hearder/Header";
import {Footer} from "../Footer/Footer";
import css from './Layout.module.css'

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className={css.outlet}><Outlet/></div>
            <div className={css.footer}><Footer/></div>


        </div>
    );
};

export {Layout};