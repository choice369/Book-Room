import Box from "../Box";
import LayoutDefault from "../LayoutDefault";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault/>,
    children: [
      {
        path: "/box",
        element: <Box/>
      }
    ]
  }
]