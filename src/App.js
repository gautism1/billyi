import React, { useContext, lazy, Suspense } from "react";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
const Nav = lazy(() => import("./components/Nav"));
const Home = lazy(() => import("./components/Home"));
const CreateItem = lazy(() => import("./components/CreateItem"));
const Alldocs = lazy(() => import("./components/Alldocs"));
const PrivateRoute = lazy(() => import("./HOC/PrivatRoute"));
const Feature = lazy(() => import("./components/feature"));
const Footer = lazy(() => import("./components/Footer"));
const About = lazy(() => import("./components/about"));
const Contact = lazy(() => import("./components/contact"));

const renderLoader = () => <h3> Please wait while loading....</h3>;
function App() {
  const { isLoggedIn } = useContext(GlobalContext);

  return (
    <Router>
      <GlobalProvider>
        <Suspense fallback={renderLoader()}>
          <div className="App">
            <Nav />
            <Switch>
              <Suspense>
                <Route path="/" 
                exact 
                component={Home}
                ></Route>
                <Route path="/features" exact component={Feature}></Route>
                <Route path="/about" exact component={About}></Route>
                <Route path="/contact" exact component={Contact}></Route>
                <PrivateRoute
                  path="/uploads"
                  component={CreateItem}
                  isAuth={!isLoggedIn}
                ></PrivateRoute>
                <PrivateRoute
                  path="/documents"
                  component={Alldocs}
                  isAuth={!isLoggedIn}
                ></PrivateRoute>
              </Suspense>
            </Switch>
            <Footer />
          </div>
        </Suspense>
      </GlobalProvider>
    </Router>
  );
}
export default App;
