export default function reducer(state = {
  user: {
    id: null,
    username: null,
  },
  users: false,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_USER' : {
      return {
        ...state,
        fetching: true,
        user: action.payload,
      };
    }
    case 'FETCH_USER_FULFILLED' : {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    }
    case 'FETCH_ALL_USERS_FULFILLED': {
      return {
        ...state,
        fetching: true,
        users: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
