import React from "react";
import routes from 'router';
/* import { APIService } from 'utils/Request/'; */
import { useRoutes } from "react-router-dom";
import Header from 'layouts/AppHeader/index';
import Footer from 'layouts/AppFooter/index';

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        {
          useRoutes(routes)
        }
      </div>
      <Footer />
    </>
  )
}
