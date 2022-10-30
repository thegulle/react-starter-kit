import { useRoutes } from 'react-router-dom';
import routes from 'router';
import Header from 'layouts/Main/Header';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        {
          useRoutes(routes)
        }
      </div>
    </>
  );
}

export default App;