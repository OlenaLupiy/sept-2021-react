import React from 'react';
import {Outlet} from 'react-router-dom'

import {Header} from "../Header/Header";
import css from './Layout.module.css'

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
            <div className={css.footer}>
                @ReactRouterDom
            </div>


        </div>
    );
};

export {Layout};