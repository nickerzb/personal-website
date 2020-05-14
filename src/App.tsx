import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./common/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Container from "react-bootstrap/Container";
import LoadingSpinner from "./common/components/loading-spinner";
import Footer from "./common/components/footer";
import * as paths from "./common/constants/routes";

const ResumeWrapper = lazy(() => import("./areas/resume/resume-wrapper"));

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Container>
        <div className="space-top-lg" />
        <Suspense fallback={LoadingSpinner()}>
          <Switch>
            <Route
              exact
              path={[paths.home, paths.resume]}
              component={ResumeWrapper}
            />
          </Switch>
        </Suspense>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
