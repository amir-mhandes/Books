import { createBrowserRouter } from "react-router-dom";
import BookFormPage from "../Pages/Books/book-form-page";
import BookListPage from "../Pages/Books/book-list-page";

export const route = createBrowserRouter([
    {
      path: '',
      element: <BookListPage />
    },
    {
      path: 'add',
      element: <BookFormPage />
    },
  ])