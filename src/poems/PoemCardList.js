import PoemCard from "./PoemCard"


/** Poems List: renders of list of poems
 * 
 * props: poems like [poem, ...]
 *  with poem like {id, seed_id, submitted_at, submitted_by_user_id, text}
 * 
 * state: none
 * 
 * PoemApp -> PoemCardList -> Poem Card
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