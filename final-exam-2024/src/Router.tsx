import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Todo } from './routes/todo/Todo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/todoapp" element={<Todo />}></Route>
    </>
  )
);

export default router;
