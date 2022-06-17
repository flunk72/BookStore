import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "../components/ErrorBoundry";
import BookStoreService from "../services/bookStoreService";
import { BookStoreServiceProvider } from "../components/BookStoreServiceContext";
import store from "../store";
import { Styles } from "./App.styled";
import MainPage from "./MainPage";

const bookStoreService = new BookStoreService();

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundry>
        <BookStoreServiceProvider value={bookStoreService}>
          <Router>
            <MainPage />
            <Styles />
          </Router>
        </BookStoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  );
}

export default App;
