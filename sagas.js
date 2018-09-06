import { delay } from 'redux-saga'
import { put, all, takeEvery } from 'redux-saga/effects'
import processBigLoop from './loop';

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* bigLoop() {
    yield takeEvery('BIG_LOOP', processBigLoop)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        bigLoop()
    ])
}