import Main from './UI/Main';
import MainMenu from './UI/MainMenu';
import LoginForm from './Component/LoginForm';
import Register from './Component/Register';
import MovieDetail from './Component/MovieDetail';
import MovieDetail_tostify from './Component/MovieDetail_toastfy';
import MemberUpdatePage from './Component/MemberUpdateForm';
import MemberDeletePage from './Component/MemberDeleteForm';

import { RecoilRoot } from 'recoil';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transitionBounce
        />
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/Register' element={<Register />} />
          {/* <Route path="/movie/:index" Component={MovieDetail} /> */}
          <Route path="/movie/:index" Component={MovieDetail_tostify} />
          <Route path='/memberUpdate' element={<MemberUpdatePage />} />
          <Route path='/memberDelete' element={<MemberDeletePage />} />

        </Routes>
      </BrowserRouter>
    </RecoilRoot>

  );
}

export default App;
