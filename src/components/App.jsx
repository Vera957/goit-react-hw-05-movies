import { lazy, Suspense } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
//import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
//import Movies from './Movies/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Container, NavLinkStyled, Nav} from '../style/ComponentsStyled'



const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'))


export const App = () => {
  const location = useLocation();

  return (
    <Container>
      <Nav>
        <NavLinkStyled to='/' state={{ from: location }}>Home</NavLinkStyled>
        <NavLinkStyled to='/movies' state={{ from: location }} >Movies</NavLinkStyled>
      </Nav>

      <Routes>
        <Route path='/' element={
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        }>
        </Route>
        <Route path='/movies' element={
          <Suspense fallback={null}>
            <Movies />
          </Suspense>
        } />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='/movies/:movieId/cast' element={<Cast />}></Route>
          <Route path='/movies/:movieId/reviews' element={<Reviews />}></Route>
        </Route>
      </Routes>
    </Container>
  );
};

