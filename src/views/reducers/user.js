export default function reducer(state = {
  user: {
    id: null,
    username: null,
  },
  users: [null],
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
    case 'FETCH_ALL_USERS': {
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
