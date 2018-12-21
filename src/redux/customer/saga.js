import { all, takeLatest, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';

const BASEAPI = `http://localhost:7071/api/customer/APITEST/theme`

const getCustomerDetailsAPI = async (paylaod) => {
  return await axios.get(BASEAPI);
}
function* loadCustomerDetails() {
  try {
   //1st step
    const customers = yield call(getCustomerDetailsAPI);
   //2nd step
    yield put({type: actions.FETCH_THEME_SUCCESS, payload: customers.data});
  } catch(error) {
    yield put({type: 'FETCH_FAILED', error});
  }
}
export function* getCustomerDetails () {
  yield takeLatest(actions.FETCH_CUSTOMER_DETAIL, loadCustomerDetails);
}
export default function* rootSaga() {
  yield all([fork(loadCustomerDetails)]);
}
