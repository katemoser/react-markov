import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

/** Poems Card: has info on one poem
 * 
 * props: poem like {id, seed_id, submitted_at, submitted_by_user_id, text}
 * 
 * state: none
 */

 function PoemCard({poem}){

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    Poem #{poem.id} from Seed#{poem.seed_id} generated by User #{poem.submitted_by_user_id}
                </CardTitle>
                <CardSubtitle>
                    {poem.submitted_at}
                </CardSubtitle>
                <CardText>
                    {poem.text}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default PoemCard;