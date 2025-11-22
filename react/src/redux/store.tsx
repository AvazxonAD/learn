import { createStore, compose } from 'redux'
import reducer from './reducer'

const composeEnhancers =
    (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(reducer, composeEnhancers());

export type RootState = ReturnType<typeof store.getState>

export default store;