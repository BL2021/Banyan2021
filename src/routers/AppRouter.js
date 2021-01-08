import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Home from "../pages/index";
import HeaderNav from "../components/HeaderNav";
import About from "../pages/About";
import Team from "../pages/Team";
import Mission from "../pages/Mission";
import Partners from "../pages/Partners";
import ContactForm from "../components/Form";
import Services from "../pages/Services";
import { withRouter } from "react-router-dom";

const AppRouter = (props) => {
  
  return(
  <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
    <div className="z1">
      <HeaderNav />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about_us" component={About} />
        <Route path="/mission" component={Mission} />
        <Route path="/partners" component={Partners} />
        <Route path="/services/our_process" component={Services} />
        <Route path="/services/web_apps" component={Services} />
        <Route path="/services/mobile_apps" component={Services} />
        <Route path="/services/quality_assurance" component={Services} />
        <Route path="/team" component={Team} />
        <Route component={NotFoundPage} />
      </Switch>
      <ContactForm />
    </div>
  </BrowserRouter>
  )
};

export default withRouter(AppRouter);
