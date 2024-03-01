import './assets/style.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { routes } from './router';
import { GlobalProvider } from './state/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
