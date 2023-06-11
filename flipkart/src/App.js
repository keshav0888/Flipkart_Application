import React from "react";
import {Header} from "./components/header";
import { MenuBar } from "./components/menuBar";
import {HighlightPoster} from "./components/highLightPoster"
import { Promotion } from "./components/promotion";
export const App=()=> {
  return (
    <div>
    <Header></Header>
    <MenuBar></MenuBar>
    <HighlightPoster></HighlightPoster>
    <Promotion></Promotion>
    </div>
  );
}
export default App;
