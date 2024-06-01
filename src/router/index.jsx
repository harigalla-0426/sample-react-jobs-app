import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import AllJobsPage from '../pages/AllJobsPage'
import AddJobPage from '../pages/AddJobPage'
import ViewJobDetailsPage from '../pages/ViewJobDetailsPage'
import NotFoundPage from '../pages/NotFoundPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<AllJobsPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="/job/:jobID" element={<ViewJobDetailsPage />} />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>,
  ),
)

export default router
