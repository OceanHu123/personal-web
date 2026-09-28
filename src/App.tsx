import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects/:id', element: <ProjectDetailPage /> },
      { path: '*', element: <HomePage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
