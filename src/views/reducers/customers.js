export default function reducer(state = {
  customer: {
    id: null,
    name: null,
  },
  customers: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_CUSTOMER' : {
      return {
        ...state,
        fetching: true,
        customer: action.payload,
      };
    }
    case 'FETCH_CUSTOMER_FULFILLED' : {
      return {
        ...state,
        fetching: false,
        fetched: true,
        customer: action.payload,
      };
    }
    case 'FETCH_ALL_CUSTOMERS_FULFILLED': {
      return {
        ...state,
        fetching: true,
        customers: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
