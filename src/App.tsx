import type { Component } from 'solid-js';

import {Route, Router, Routes } from 'solid-app-router';
import {Test} from "./modules/Test";
import {Home} from "./modules/Home";

const App: Component = () => {
  return (
      <>
        <Routes>
          <Route path={"/"}>
            <Route element={<Home/>} path={""}/>
            <Route path={"main"} element={<Test/>}/>
          </Route>

        </Routes>
      </>
  );
};

export default App;
