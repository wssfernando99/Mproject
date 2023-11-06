
import { Welcome } from './pages/Welcome';
import { TestPage } from './pages/TestPage';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route path='/Homepage' element={<Homepage />} />
          <Route path='/TestPage' element={<TestPage />} />
        </Routes>
      </main>
    </BrowserRouter>
    
    
  );
}

export default App;
