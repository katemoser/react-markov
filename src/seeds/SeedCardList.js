import SeedCard from "./SeedCard"
/** Seed app: handles Seed
 * 
 * props: 
 *  seeds like [seed, ...]
 *      with seed like {id, text, title, author, submitted_by_user_id, submitted_at}
 * 
 * state: none
 * 
 * SeedApp -> SeedCardList -> SeedCard
 */

 function SeedCardList({seeds}){

    return (
        <div>
            THIS IS THE SeedCardList
            <ul>
                {seeds.map(seed =>
                    <li key={seed.id}>
                        <SeedCard seed={seed} />
                    </li>)}
            </ul>
        </div>
    )
}

export default SeedCardList