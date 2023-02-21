import { combineReducers } from 'redux';
import { createReducer, createAction, createAsyncAction } from 'redux-promise-middleware-actions';
export const ActionTypes = {
  GET_DATASET: 'GET_DATASET',
  SET_DATASET: 'SET_DATASET',
  GET_ROUTEPAGES: 'GET_ROUTEPAGES',
  SET_ROUTEPAGES: 'SET_ROUTEPAGES',
};

export function getRemoteDataSet() {
  return new Promise((resolve) => {
    fetch('https://coinbase.com/api/v2/assets/search?base=USD&filter=listed&include_prices=true&resolution=day&sort=rank')
        .then(res => res.json())
        .then((result) => {
          const dataSet = result && result.data;
          if (dataSet && Array.isArray(dataSet)) {
            return resolve(dataSet.filter(coin => coin.base !== 'ETH2'));
          }
        }).catch(error => resolve([]))
  });
}

export const getRemoteRoutePages = async () => {
  return new Promise ((resolve) => {
      fetch(`${process.env.REACT_APP_URL}methods/pages`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then((result) => {
      const pages = result;
      return resolve(pages);
    }).catch(error => resolve([]))
  });

}

export const GlobalActions = {
  setDataSet: createAction(ActionTypes.SET_DATASET, (dataSet) => ({ dataSet })),
  getDataSet: createAsyncAction(ActionTypes.GET_DATASET, () => (getRemoteDataSet())),
};
export const GlobalReducer = createReducer({}, (handleAction) => [
  handleAction(GlobalActions.setDataSet, (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  }),
  handleAction(GlobalActions.getDataSet.pending, (state) => {
    return {
      ...state,
      pending: true
    };
  }),
  handleAction(GlobalActions.getDataSet.rejected, (state) => {
    return {
      ...state,
      pending: false
    };
  }),
  handleAction(GlobalActions.getDataSet.fulfilled, (state, { payload }) => {
    return {
      ...state,
      ...payload,
      pending: false
    };
  })
]);

export const pageActions = {
  setRoutePages: createAction(ActionTypes.SET_ROUTEPAGES, (pages) => ({ pages })),
  getRoutePages: createAsyncAction(ActionTypes.GET_ROUTEPAGES, () => (getRemoteRoutePages())),
}
export const RoutePagesReducer = createReducer({
  pages:[]
}, handleAction => [
  handleAction(pageActions.setRoutePages, (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  }),
  handleAction(pageActions.getRoutePages.pending, (state) => {
    return {
      ...state,
      pending: true
    }
  }),
  handleAction(pageActions.getRoutePages.rejected, (state) => {
    return {
      ...state,
      pending: true
    }
  }),
  handleAction(pageActions.getRoutePages.fulfilled, (state, { payload }) => {
    return {
      ...state,
      ...payload,
      pending: false
    }
  })
])

export const breadCrumb = (state = '', action) => {
  switch (action.type) {
    case 'SET_BREADCRUMB':
      return action.breadCrumb;
    default:
      return state;
  }
};

export const userCards = (state = '', action) => {
  switch (action.type) {
    case 'NEW_CARD':
      return action;
    default:
      return state;
  }
};

export const getCurrencySet = (state = '', action) => {
  switch (action.type) {
    case 'GET_CURRENCY':
        return action.payload;
    default:
        return state;
  }
}

export default combineReducers({
  breadCrumb,
  userCards,
  getCurrencySet,
  globalData: GlobalReducer,
  routePages: RoutePagesReducer,
});
