import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './pages/News';
import { Provider } from './context/Context';
import Results from './pages/Results';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

function App() {
  
  return (
    <>
      <Provider>
      <BrowserRouter>
        <div className='flex flex-col justify-center items-center bg-color'>
          <Routes>
            <Route path='/' element={<News />} />
            <Route path='/results' element={<Results />} />
            <Route path='/notFound' element={<NotFound />} />
            <Route path='/details/everything/:slug' element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
    </>
    
  )
}

export default App
