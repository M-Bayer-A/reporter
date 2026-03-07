import { Navigate, Route, Routes, useRoutes } from "react-router";
import StartPage from "./ui/pages/StartPage";
import FormPage from "./ui/pages/FormPage";
import ResultPage from "./ui/pages/ResultPage";

function App() {
  //
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/start" />,
      children: [],
    },
    {
      path: "/start",
      element: <StartPage />,
      children: [],
    },
    {
      path: "/form",
      element: <FormPage />,
      children: [],
    },
    {
      path: "/result",
      element: <ResultPage />,
      children: [],
    },
  ]);
  //
  return (
    <div className="h-screen w-screen content-center place-items-center overflow-auto">
      {routes}
    </div>
  );
}

export default App;
