import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute({
  redirectTo = '/',
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
