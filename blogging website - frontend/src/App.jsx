import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthenticationForm from "./pages/userAuthenticationForm.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="signin" element={<UserAuthenticationForm type="sign-in"/>} />
        <Route path="signup" element={<UserAuthenticationForm type="sign-up"/>} />
      </Route>
    </Routes>
  );
};

export default App;
