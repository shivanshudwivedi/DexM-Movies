import {Navbar} from './components/navbar'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Auth} from './pages/auth'
import { Home } from './pages/home'
import { Rated } from './pages/rated'
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { Movie } from './pages/movie';
import { TvShow } from './pages/tvshow';
import { SearchResults } from './pages/search/SearchResults';


const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}> 
  <div>
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/rated" element={<Rated/>} />
            <Route path="/movie/:id/" element={<Movie/>} />
            <Route path="/tvshow/:id/" element={<TvShow/>} />
            <Route path="/search" element={<SearchResults />} />
        </Routes>
    </Router>
  </div>
  </QueryClientProvider>
  );
}

export default App
