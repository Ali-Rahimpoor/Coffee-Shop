import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home";

export const router = createBrowserRouter([
   {
      path:"/",
      element:<App/>,
      errorElement:<div>error</div>,
      children:[
         {
            path:"/",
            element:<Home/>
         },
      ]
      
   }
],
{
   // basename:"/OnlineShop-coffee"
}
)