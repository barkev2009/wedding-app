import { BrowserRouter } from 'react-router-dom';
import Blocker from './components/Blocker';
import { observer } from 'mobx-react-lite';
import AppRouter from './routes/AppRouter';
import { injectStores } from '@mobx-devtools/tools';
import user from './store/user';

injectStores(
  { user }
);

const App = observer(
  () => {

    user.checkAuth();

    return (
      <BrowserRouter>
        <Blocker />
        <AppRouter />
      </BrowserRouter>
    );
  }
)

export default App;
