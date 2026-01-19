import Box from "../Booking";
import Creating from "../Creating";
import LayoutDefault from "../LayoutDefault";
import Dashboard from "../Dashboard";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault/>,
    children: [
      {
        path: "/booking-room",
        element: <Box/>
      },
      {
        path: "/creating-room",
        element: <Creating/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      }
    ]
  }
]