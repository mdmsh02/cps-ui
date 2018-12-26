import { all, takeLatest, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';

const BASEAPI =  'https://mobility-platform.azure-api.net/cps/customer/DEV/theme'//`http://localhost:7071/api/customer/DEV/theme`

const getCustomerDetailsAPI = async (paylaod) => {
  return await axios.get(BASEAPI);
}
const updateCustomerDetailAPI = async(payload) =>{
  return await axios.post(BASEAPI,
    payload
    );
}
function* loadCustomerDetails() {
  try {
   //1st step
   debugger
    const customers = yield call(getCustomerDetailsAPI);
   //2nd step
    yield put({type: actions.FETCH_THEME_SUCCESS, payload: customers.data});
  } catch(error) {
    yield put({type: 'FETCH_FAILED', error});
  }
}

function* callUpdateCustomerDetails() {
  try {
   //1st step
   debugger
    const customersUpdate = yield call(updateCustomerDetailAPI);
    yield put({type: actions.UPDATE_CUSTOMER_SUCCESS, payload: customersUpdate});
   //2nd step
  } catch(error) {
    yield put({type: 'FETCH_FAILED', error});
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
  yield all([fork(loadCustomerDetails,updateCustomerDetails)]);
}
