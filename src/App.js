import React, { Suspense } from "react";
import "./App.css";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import Pepito from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
import { Link, Route } from "wouter";
const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <Pepito.Provider value={{ name: "midudev", suscribeteAlCanal: true }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logo.png" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Suspense fallback={null}>
              <Route component={HomePage} path="/" />
            </Suspense>
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={() => <p>Ups!! 404 :(</p>} path="/404" />
          </GifsContextProvider>
        </section>
      </div>
    </Pepito.Provider>
  );
}
