// will eventually fetch the user from the api
export function fetch() {
  return {
        type: "FETCH_USER",
        payload: {
          id: 1,
          username: 'jhallman5'
        }
      }
    }
