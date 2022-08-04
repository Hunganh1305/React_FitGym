import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Programs from "../Programs/Programs"
import Reasons from "../Reasons/Reasons"
import Plans from "../Plans/Plans"
import Testimonials from "../Testimonials/Testimonials"
import Footer from "../Footer/Footer"

function Main() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={Hero} />
                <Route path='/programs' component={Programs} />
                <Route path='/reasons' component={Reasons} />
                <Route path='/plans' component={Plans} />
                <Route path='/Testimonials' component={Testimonials} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main;