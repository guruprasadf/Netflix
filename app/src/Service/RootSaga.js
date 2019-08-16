/* eslint-disable require-yield */
import { takeEvery ,put ,call } from 'redux-saga/effects';
function* getData () { console.log("inside getData saga");
   // const response = yield call(fetch,"http://dummy.restapiexample.com/api/v1/employees");
    const response = yield fetch("http://dummy.restapiexample.com/api/v1/employees").then(function(response){
        return response.json();
    });
   
    yield put({type: "UPDATE_DATA", payload:response})
    console.log(response);
}
function* rootSaga() {
    yield takeEvery("GET_DATA", getData);
}
export default rootSaga;