import React from 'react'

export default function PaintingsFilter(props){
    return(
        <div id="search-bar">
            Filter: <input onChange={(e) => props.filterItems(e) }></input>
        </div>
    )

}