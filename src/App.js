//import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeefbackForm from "./components/FeedbackForm";
//import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  //const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeefbackForm />
                  <FeedbackStats />
                  <FeedbackList />

                  <AboutIconLink />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
