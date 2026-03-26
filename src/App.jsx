import { Navigate, useRoutes } from "react-router";
import StartPage from "./ui/pages/StartPage";
import FormPage from "./ui/pages/FormPage";
import ResultPage from "./ui/pages/ResultPage";

function App() {
  //
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/start" />,
    },
    {
      path: "/start",
      element: <StartPage />,
    },
    {
      path: "/form",
      element: <FormPage />,
    },
    {
      path: "/result",
      element: <ResultPage />,
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
