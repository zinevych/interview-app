interface Place{
    city:string,
    country:string
  }
  const initialState:Place = {
    city: 'Rosebud',
    country: 'USA'
  };
  
  function reducer(state:Place, action):Partial<Place> {
    switch (action.type) {
      case 'city':
        return { city: action.payload };
      case 'country':
        return { country: action.payload };
    }
  }

  function PlaceForm() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <form>
        <input type="text" name="city"  onChange={(event) => {
            dispatch({ type: 'city',payload: event.target.value})
          }} 
          value={state.city} />
        <input  type="text"  name="country"   onChange={(event) => {
            dispatch({type: 'country', payload: event.target.value })
          }}
   
          value={state.country} />
     </form>
    );
  }