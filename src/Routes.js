import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminContextProvider from './context/AdminContext';
import AdminPage from './pages/Admin/AdminPage';
import EditPage from './pages/Admin/EditPage'
import MainPage from './pages/Client/MainPage'
import SignInPage from './pages/Client/SignInPage'
import SignUpPage from './pages/Client/SignUpPage'
import CatalogPage from './pages/Client/CatalogPage'
import CartPage from './pages/Client/CartPage'
import VerifyPage from './pages/Client/VerifyPage';

const Routes = () => {
    return (
        <AdminContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {MainPage}/>
                    <Route exact path = "/admin" component = {AdminPage}/>
                    <Route exact path = "/edit" component = {EditPage}/>
                    <Route exact path = "/signin" component = {SignInPage}/>
                    <Route exact path = "/signup" component = {SignUpPage}/>
                    <Route exact path = "/catalog" component = {CatalogPage}/>
                    <Route exact path = "/cart" component = {CartPage}/>
                    <Route exact path = "/verify" component = {VerifyPage}/>
                </Switch>
            </BrowserRouter>
        </AdminContextProvider>
    );
};

export default Routes;