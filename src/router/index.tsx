import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {routerSystem} from './paths'

import NotFound from '../pages/not-found'
import AuthLayout from '../layouts/auth-layout'
import AuthPage from '../pages/auth/auth'
import LoginPage from '../pages/auth/login'
import Introduce from '../pages/auth/introduce'
import EmptyLayout from '../layouts/empty-layout'
import VerifyPage from '../pages/auth/verify'
import DefaultLayout from '../layouts/default-layout'
import UpcomingPage from '../pages/upcoming'

export default function JHOWebRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path={routerSystem.AUTH.relativePath} element={<AuthPage />} />
          <Route path={routerSystem.LOGIN.relativePath} element={<LoginPage />} />
        </Route>

        <Route path={routerSystem.VERIFY.relativePath} element={<VerifyPage />} />

        <Route path="/" element={<DefaultLayout />}>
          <Route path={routerSystem.UPCOMING.relativePath} element={<UpcomingPage />} />
        </Route>

        <Route path="" element={<EmptyLayout />}>
          <Route path={routerSystem.INTRODUCE.relativePath} element={<Introduce />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
