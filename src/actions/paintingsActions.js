export const fetchPaintings = () => {
    return (dispatch) => {
        console.log("c")
        fetch('http://localhost:3000/paintings')
        .then(resp => resp.json())
        .then(paintings => {
            console.log("d")
            dispatch({ type: 'FETCH_PAINTINGS', payload: paintings})
        })
    }
}



