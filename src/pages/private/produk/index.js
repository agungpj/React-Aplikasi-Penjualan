import React from "react";
import { Switch, Route } from "react-router-dom";
import EditProduk from "./Edit";
import GridProduk from "./Grid";

const Produk = () => {
  return (
    <Switch>
      <Route path='/produk/edit/:produkId' component={EditProduk} />
      {/* catch produk id route */}
      <Route component={GridProduk} />
    </Switch>
  );
};

export default Produk;
