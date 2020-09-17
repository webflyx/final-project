import React from "react";
import { LogWindow } from "./components/LogWindow.jsx";
import { TopBtn } from "./components/TopBtn.jsx";
import { ChatBtn } from "./components/ChatBtn.jsx";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { Footer } from "./components/Footer.jsx";

export class App extends React.Component {
  render() {
    return (
      <div className="modal">
        <LogWindow />
        <div className="wrapper" id="start">
          <TopBtn />
          <ChatBtn />
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}
