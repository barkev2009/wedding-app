import { BrowserRouter } from 'react-router-dom';
import Blocker from './components/Blocker';
import { observer } from 'mobx-react-lite';
import AppRouter from './routes/AppRouter';
import { injectStores } from '@mobx-devtools/tools';
import user from './store/user';
import './style.css';
import { YMInitializer } from 'react-yandex-metrika';

injectStores(
  { user }
);

const App = observer(
  () => {
    // const setHeight = () => {
    //   // Then we set the value in the --vh custom property to the root of the document
    //   document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    // }
    // setHeight();
    // window.addEventListener('resize', () => { setHeight()})

    user.checkAuth();

    return (
      <>
        <YMInitializer accounts={[96989883]} options={{ clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true }} />
        <BrowserRouter>
          <Blocker />
          <AppRouter />
        </BrowserRouter>
      </>
    );
  }
)

export default App;
