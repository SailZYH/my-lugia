import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import "./App.css";
import router from "./config/router-config"

export default () => {
  console.info("init main");

  return (
    <div className="app">
      {createRoute(router)}
    </div>
  );
};

const styles = {
  padding: "30px"
};
