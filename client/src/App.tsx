import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Router"

function App() {

  return (
      <RouterProvider router={router} fallbackElement={<p>Initial load...</p>}/>
  )
}

export default App
