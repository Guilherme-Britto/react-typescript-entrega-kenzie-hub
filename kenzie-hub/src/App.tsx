import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/index';
import { GlobalReset, GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export default App;
