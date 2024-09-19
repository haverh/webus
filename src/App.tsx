import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import Home from './components/home/home';
import Messages from './components/messages/messages';
import Profile from './components/profile/profile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
