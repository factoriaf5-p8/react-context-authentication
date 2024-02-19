import { UserProvider } from './context/UserContext';
import { router } from './routes/Router';
import {RouterProvider} from 'react-router-dom';

function App() {
  return (

    <UserProvider>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>}/>
    </UserProvider>

  )
}

export default App
