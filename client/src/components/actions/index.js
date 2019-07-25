
export const FETCHING_EVENT ='fETCHING_EVENT'
export const fetching_event = item => {
  // dispatch an action here to remove an item
  return {
    type:FETCHING_EVENT,
    payload: item
  };
};

export const FETCH_EVENT_SUCCESS ='FETCH_EVENT_SUCCESS'
export const fetch_event_success= item => {
  // dipsatch an action here to add an item
  return {
    type: FETCH_EVENT_SUCCESS,
    payload: item
  };
};



export const FETCH_EVENT_ERROR ='FETCH_EVENT_ERROR'
export const fetch_event_error = item => {
  // dipsatch an action here to add an item
  return {
    type: "FETCH_EVENT_ERROR",
    payload: item
  };
};
