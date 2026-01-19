import Box from "../Booking";
import Creating from "../Creating";
import LayoutDefault from "../LayoutDefault";

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
      }
    ]
  }
]