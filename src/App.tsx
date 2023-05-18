import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";
import "./polyfills";
import { MyWeb3Provider } from "./components/Web3Provider";
import Index from './pages/index'
const routes: RouteObject[] = [
   {
    path: "/",
    index: true,
    element: <Index />,
   }
]
function Routes() {
  return useRoutes(routes);
}

export default function App() {
  return (
    <MyWeb3Provider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MyWeb3Provider>
  );
}
