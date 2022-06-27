import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";

import Home from "./routes/home/home.component";

const Shop = () => {
  return (
    <div>
      <h1>Shop page </h1>
      <p>Work in progress...</p>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
