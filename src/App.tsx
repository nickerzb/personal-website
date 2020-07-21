import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./common/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Container from "react-bootstrap/Container";
import LoadingSpinner from "./common/components/loading-spinner";
import Footer from "./common/components/footer";
import * as paths from "./common/constants/routes";

const Resume = lazy(() => import("./areas/resume/resume-wrapper"));
const About = lazy(() => import("./areas/about/about"));
const Home = lazy(() => import("./areas/home/home"));
const MyModal = lazy(() => import("./common/components/modal"));

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <main>
        <Container fluid>
          <div className="space-top-lg" />
          <Suspense fallback={LoadingSpinner()}>
            <Switch>
              <Route exact path={paths.resume} component={Resume} />
              <Route exact path={paths.about} component={About} />
              <Route exact path={paths.home} component={Home} />
            </Switch>
            <MyModal />
          </Suspense>
        </Container>
      </main>
      <div className="space-top-lg" />
      <Footer />
    </Router>
  );
};

export default App;
