import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registrasi from "./pages/registrasi";
import Login from "./pages/login";
import LupaPassword from "./pages/lupa-password";
import Notfound from "./pages/404";
import Private from "./pages/private";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* ======== Private  ======== */}
        <PrivateRoute exact path='/' component={Private} />
        <PrivateRoute path='/pengaturan' component={Private} />
        <PrivateRoute path='/transaksi' component={Private} />
        <PrivateRoute path='/produk' component={Private} />

        {/* ======== Private  ======== */}

        {/* ======== Public  ======== */}
        <Route path='/regitrasi' component={Registrasi} />
        <Route path='/login' component={Login} />
        <Route path='/lupa-password' component={LupaPassword} />
        <Route component={Notfound} />
        {/* ======== Public  ======== */}
      </Switch>
    </Router>
    // <div>
    //   <CssBaseLine>
    //     <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
    //       <ThemeProvider theme={theme}>
    //         <FirebaseProvider>
    //           <Router>
    //             <Switch>
    //               <Route exact path='/' component={Private} />
    //               {/* private direct ke login. */}
    //               {/* ======== PrivateRoute Private  ======== */}
    //               <PrivateRoute path='/transaksi' component={Private} />

    //               <PrivateRoute path='/pengaturan' component={Private} />

    //               <PrivateRoute path='/produk' component={Private} />

    //               {/* ======== Route Private  ======== */}

    //               {/* ======== Route Publik  ======== */}

    //               <Route path='/registrasi' component={SignIn} />

    //               <Route path='/login' component={Login} />

    //               <Route path='/lupa-password' component={Lupapassword} />

    //               <Route component={Notfound} />

    //               {/* ======== Route Publik  ======== */}
    //             </Switch>
    //           </Router>
    //         </FirebaseProvider>
    //       </ThemeProvider>
    //     </SnackbarProvider>
    //   </CssBaseLine>
    // </div>
  );
};
export default App;
