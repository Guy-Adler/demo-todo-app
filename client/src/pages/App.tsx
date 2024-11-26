import React from "react";
import TodoList from "../components/TodoList";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-half">
            <TodoList />
          </div>
        </div>
      </section>
    </div>
  );
}
