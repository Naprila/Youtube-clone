import './App.css';
import Header from './components/Header';
import { Provider, useSelector } from "react-redux"
import store from "./utils/store"
import Body from './components/Body';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'; // Assuming React Router v6+
import WatchPage from './components/WatchPage';
import SearchResult from './components/SearchResult';
import SlideBar from './components/SlideBar';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <SlideBar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/results" element={<SearchResult />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
