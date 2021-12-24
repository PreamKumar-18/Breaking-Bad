import React from 'react'
import CharacterListItem from "./CharacterListItem"
function CharacterList(items) {
    return (
        <div className="cards">
            {items.map((item) => (
                <div> <CharacterListItem items={item} key={item.care_id} /></div>
            ))}
        </div>
    )
}

export default CharacterList
