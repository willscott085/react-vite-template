import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/layout';
import Home from '@/routes/home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<h1>There's nothing here: 404!</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
