export const fetchPaintings = () => {
    return (dispatch) => {
        fetch('https://secure-dawn-14818.herokuapp.com/paintings', {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }})
        .then(resp => resp.json())
        .then(paintings => {
            dispatch({ type: 'FETCH_PAINTINGS', payload: paintings})
        })
    }
}



