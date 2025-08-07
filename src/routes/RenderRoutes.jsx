import React from 'react'
import {nav} from './naviagtion'
import { Route, Routes } from "react-router-dom";
import Header from '../componments/headers/Header';
import Footer from '../componments/footers/Footer';
import CookieConsent from '../componments/cookie/CookieConsent';

const RenderRoutes = () => {
  return (
    <>
    <Header/>
    <Routes>
      {nav.map((r, i) => {
        // Protected routes
  
        // Public Routes
        if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
    <Footer/>
    <CookieConsent />
  </>
  )
}

export default RenderRoutes