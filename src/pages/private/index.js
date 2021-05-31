import React from "react";
import { Switch, Route } from "react-router-dom";
import Pengaturan from "./pengaturan";
import Transaksi from "./transaksi";
import Produk from "./produk";
import Home from "./home";

const Private = () => {
  return (
    <Switch>
      <Route path='/pengaturan' component={Pengaturan} />
      <Route path='/transaksi' component={Transaksi} />
      <Route path='/produk' component={Produk} />
      <Route component={Home} />
    </Switch>
  );
};

export default Private;
