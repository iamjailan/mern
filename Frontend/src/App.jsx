import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import CreateBook from "./pages/createBook";
import DeleteBook from "./pages/deleteBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/editBook";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
