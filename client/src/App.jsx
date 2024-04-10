import { BrowserRouter } from 'react-router-dom';
import Blocker from './components/Blocker';
import { observer } from 'mobx-react-lite';
import AppRouter from './routes/AppRouter';
import { injectStores } from '@mobx-devtools/tools';
import user from './store/user';
import './style.css';
import {YMInitializer} from 'react-yandex-metrika';

injectStores(
  { user }
);

const App = observer(
  () => {

    user.checkAuth();

    return (
      <>
      <YMInitializer accounts={[96989883]} options={{clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true}} />
      <BrowserRouter>
        <Blocker />
        <AppRouter />
      </BrowserRouter>
      </>
    );
  }
)

export default App;
