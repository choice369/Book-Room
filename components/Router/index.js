import Box from "../Booking";
import LayoutDefault from "../LayoutDefault";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault/>,
    children: [
      {
        path: "/booking-room",
        element: <Box/>
      }
    ]
  }
]