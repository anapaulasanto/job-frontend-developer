import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './pages/News';
import { Provider } from './context/Context';

function App() {
  
  return (
    <>
      <Provider>
      <BrowserRouter>
        <div className='flex flex-col justify-center items-center bg-color'>
          <Routes>
            <Route path='/' element={<News />} />
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
    </>
    
  )
}

export default App
