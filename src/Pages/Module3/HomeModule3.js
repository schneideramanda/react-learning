import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CustomHook from './CustomHook/CustomHook';
import UseCallback from './useCallback/UseCallback';
import UseContext from './useContext/UseContext';
import UseEffect from './useEffect/UseEffect';
import UseMemo from './useMemo/UseMemo';
import UseRef from './useRef/UseRef';
import UseState from './useState/UseState';
import { Helmet } from 'react-helmet';

const HomeModule3 = () => {
  return (
    <div>
      <Helmet>
        <title>React | Módulo 3</title>
        <meta
          name='description'
          content='Essa é a página do módulo 3 do projeto'
        />
      </Helmet>
      <h4>Módulo 3 - React Hooks</h4>
      <h4>Por favor, selecione um tópico</h4>
      <nav>
        <Link className='linkTab' to='useState'>
          useState
        </Link>
        <Link className='linkTab' to='useEffect'>
          useEffect
        </Link>
        <Link className='linkTab' to='useRef'>
          useRef
        </Link>
        <Link className='linkTab' to='useMemo'>
          useMemo
        </Link>
        <Link className='linkTab' to='useCallback'>
          useCallback
        </Link>
        <Link className='linkTab' to='useContext'>
          useContext
        </Link>
        <Link className='linkTab' to='customHooks'>
          customHooks
        </Link>
      </nav>

      <Routes>
        <Route path='customHooks' element={<CustomHook />} />
        <Route path='useContext' element={<UseContext />} />
        <Route path='useCallback' element={<UseCallback />} />
        <Route path='useMemo' element={<UseMemo />} />
        <Route path='useRef' element={<UseRef />} />
        <Route path='useEffect' element={<UseEffect />} />
        <Route path='useState' element={<UseState />} />
      </Routes>
    </div>
  );
};

export default HomeModule3;
