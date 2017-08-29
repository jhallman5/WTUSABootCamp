 // will eventually fetch the user from the api
export function fetch() {
  return {
        type: 'FETCH_USER',
        payload: {
          id: 1,
          username: 'jhallman5'
        }
      }
    }

export function fetchAll() {
  return {
    type: 'FETCH_ALL_USERS',
    payload: [
        {
          id: 1,
          username: 'jhallman5'
        },
        {
          id: 2,
          username: 'steven4'
        },
         {
          id: 3,
          username: 'lisa3'
        }
    ],
  }
}

export function fetchSteven(){
  return {
        type: 'FETCH_USER',
        payload: {
          id: 2,
          username: 'steven4'
        }
      }
}

export function fetchLisa(){
  return {
        type: 'FETCH_USER',
        payload: {
          id: 3,
          username: 'lisa3'
        }
      }
}
