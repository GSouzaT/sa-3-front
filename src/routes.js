import { Routes, Route } from 'react-router-dom';
import Error from './pages/Error/Error';
import Comandas from './pages/Comandas';
import Login from './pages/Login';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio'

const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cardapio' element={<Cardapio />} />
            <Route path='/comandas' element={<Comandas />} />
            <Route path='*' element={<Error />} />

        </Routes>
    )
}

export default MyRoutes;