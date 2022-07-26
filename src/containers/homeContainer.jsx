import React, { Fragment } from "react";
import Header from "../components/header";
import Login from "../components/login";
import '../styles/home.scss';

const HomeContainer = () => {
  return (
    <Fragment>
      <Header />
      <main className="main-section">
        <section className="information-section">
          <h2>What is To-Do-No?</h2>
          <p>
            To-Do-No is a webapp where you can write your todos and your notes.<br />
            All this while you get the best security and performance from our server!<br />
            That's what makes To-Do-No the best experience!
          </p>
        </section>
        <Login />
      </main>
    </Fragment>
  );
}

export default HomeContainer;
