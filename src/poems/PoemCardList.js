import PoemCard from "./PoemCard"


/** Poems List: renders of list of poems
 * 
 * props: poems like {poems: [poem, ...]}
 * 
 * state: none
 */


 function PoemCardList({poems}){
    console.debug("PoemCardList, poems= ", poems)

    return (
        <div>
            THIS IS THE PoemCardList
            <ul>
                {poems.map(poem => (
                    <li key={poem.id}>
                        <PoemCard poem={poem} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PoemCardList