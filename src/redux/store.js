import { createStore, combineReducers, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';
import { loadingBarReducer } from '../components/customLoader/loading_bar_ducks'
import  loadingBarMiddleware   from '../components/customLoader/loading_bar_middleware'


const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware,loadingBarMiddleware()];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
    loadingBar : loadingBarReducer,
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export { store, history };
