export const fetchPaintings = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/paintings')
        .then(resp => resp.json())
        .then(paintings => dispatch({ type: 'FETCH_PAINTINGS', payload: paintings}))
    }
}



