import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./ui/pages/LoginPage";
import FormPage from "./ui/pages/FormPage";
import ResultPage from "./ui/pages/ResultPage";

function App() {
  return (
    <div className="h-screen w-screen content-center place-items-center overflow-auto">
      <Routes>
        <Route index element={<Navigate to={"login"} />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
