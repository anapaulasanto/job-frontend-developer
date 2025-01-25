import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './pages/News';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col justify-center items-center bg-color'>
          <Routes>
            <Route path='/' element={<News />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
