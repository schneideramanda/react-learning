import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import HomeModule3 from './Pages/Module3/HomeModule3';
import HomeModule4 from './Pages/Module4/HomeModule4';
import HomeModule5 from './Pages/Module5/HomeModule5';
import HomeModule1 from './Pages/Module1/HomeModule1';
import HomeModule2 from './Pages/Module2/HomeModule2';
import HomeModule6 from './Pages/Module6/HomeModule6';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link className='linkTab' to='/'>
            Home
          </Link>
          <Link className='linkTab' to='module1'>
            Módulo 1
          </Link>
          <Link className='linkTab' to='module2'>
            Módulo 2
          </Link>
          <Link className='linkTab' to='module3/*'>
            Módulo 3
          </Link>
          <Link className='linkTab' to='module4/*'>
            Módulo 4
          </Link>
          <Link className='linkTab' to='module5/*'>
            Módulo 5
          </Link>
          <Link className='linkTab' to='module6/*'>
            Módulo 6
          </Link>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='module6/*' element={<HomeModule6 />} />
          <Route path='module5/*' element={<HomeModule5 />} />
          <Route path='module4/*' element={<HomeModule4 />} />
          <Route path='module3/*' element={<HomeModule3 />} />
          <Route path='module2' element={<HomeModule2 />} />
          <Route path='module1' element={<HomeModule1 />} />
          <Route path='' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
