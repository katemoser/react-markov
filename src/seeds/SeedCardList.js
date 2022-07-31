import SeedCard from "./SeedCard"
/** Seed app: handles Seed
 * 
 * props: seeds like [seed, ...]
 * 
 * state: none
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