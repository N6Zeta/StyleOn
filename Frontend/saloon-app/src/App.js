import React, { lazy, Suspense, useEffect } from "react";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductMarketPlace from "./pages/ProductMarketPlace/ProductMarketPlace";
import Login from "./pages/Login/Login";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import ServicesAndSalons from "./pages/ServicesAndSalons/ServicesAndSalons";
import "./App.css";
import { fetchProducts, fetchServices } from "./redux/appdata/appdata.actions";
import MyProfile from "./pages/MyProfile/MyProfile";
import Checkout from "./pages/checkout/Checkout";

const Product = lazy(() => import("./pages/Product/Product"));
const Service = lazy(() => import("./pages/Service/Service"));
const Salon = lazy(() => import("./pages/Salon/Salon"));
const Skeleton = lazy(() => import("./skeletons/IndividualProductSkeleton"));

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchServices());

        const logOutUser = auth.onAuthStateChanged(async user => {
            if (user) {
                const { displayName, email } = user;
                dispatch(setCurrentUser({ name: displayName, email: email }));
            } else {
                dispatch(setCurrentUser({ name: null, email: null }));
            }

            return () => {
                logOutUser();
            };
        });
    }, []);

    return (
        <Suspense fallback={<div>Loading... </div>}>
            <Header />
            <Switch>
                <Route exact path="/home">
                    <HomePage />
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/services">
                    <ServicesAndSalons />
                </Route>

                <Route exact path="/user">
                    <MyProfile />
                </Route>

                <Route exact path="/checkout">
                    <Checkout />
                </Route>

                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>

                <Route exact path="/product/:slug">
                    <Product />
                </Route>

                <Route exact path="/service/:slug">
                    <Service />
                </Route>

                <Route exact path="/salon/:slug">
                    <Salon />
                </Route>

                <Route exact path="/skeleton">
                    <Skeleton />
                </Route>
            </Switch>
            <Footer />
        </Suspense>
    );
}

export default App;
