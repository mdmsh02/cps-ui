import { all, takeLatest, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { showLoading, hideLoading } from '../../components/customLoader/loading_bar_ducks'

const BASEAPI =  'https://mobility-platform.azure-api.net/cps-ui-api/customer/DEV/theme'//`http://localhost:7071/api/customer/DEV/theme`

const getCustomerDetailsAPI = async (paylaod) => {
  return await axios.get(BASEAPI);
}
const updateCustomerDetailAPI = async(payload) =>{
  debugger
  return await axios.post(BASEAPI,
    payload
    );
}
function* loadCustomerDetails() {
  try {
   //1st step
   debugger
   yield put(showLoading())
    const customers = yield call(getCustomerDetailsAPI);
   //2nd step
    yield put({type: actions.FETCH_THEME_SUCCESS, payload: customers.data});
    yield put(hideLoading())
  } catch(error) {
    yield put({type: 'FETCH_FAILED', error});
    yield put(hideLoading())
  }
}

function* callUpdateCustomerDetails({payload}) {
  try {
   //1st step
   debugger
   yield put(showLoading())
    const customersUpdate = yield call(updateCustomerDetailAPI,payload);
    yield put({type: actions.UPDATE_CUSTOMER_SUCCESS, payload: customersUpdate});
    yield put(hideLoading())
   //2nd step
  } catch(error) {
    yield put({type: 'FETCH_FAILED', error});
    yield put(hideLoading())
  }
}

export function* getCustomerDetails () {
  yield takeLatest(actions.FETCH_CUSTOMER_DETAIL, loadCustomerDetails);
}

export function* updateCustomerDetails(){
  debugger
  yield takeLatest("CUSTOMER_DATA_UPDATE", callUpdateCustomerDetails);
}

export default function* rootSaga() {
  yield all([fork(loadCustomerDetails),fork(updateCustomerDetails)]);
}
