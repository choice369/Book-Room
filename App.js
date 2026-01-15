import './App.css';
import LayoutDefault from './components/LayoutDefault';
import { routes } from './components/Router';
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      {router}
    </>
  );
}

export default App;
