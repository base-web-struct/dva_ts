
import { Model } from 'dva';
import { delay } from 'redux-saga'  


const User : Model = {

  namespace: 'user',

  state: {
    count: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          console.log('trigger subscriptions setup')
        }
      });
    },
  },

  effects: {
    *addAfter1Second (action, { call, put}) {
      yield call(delay, 500)
      yield put({ type: 'add' });
    },
  },

  reducers: {
    add (state, action) {
      return {
        ...state,
        count: state.count + 1
      }
    }
  },

};

export default User
