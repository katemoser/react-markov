import {
    Card, 
    CardBody, 
    CardSubtitle, 
    CardTitle,
    CardText
} from "reactstrap"

/** SeedCard: handles poems
 * 
 * props: seed like {author, id, poems_seeded, submitted_at, submitted_by_user_id, text, title}
 * 
 * state: none
 */

 function SeedCard({seed}){

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    {seed.title} by {seed.author}
                </CardTitle>
                <CardSubtitle>
                    Seed #{seed.id} submitted by User #{seed.submitted_by_user_id}. {seed.poems_seeded.length} poems generated
                </CardSubtitle>
                <CardText>
                    {seed.text}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default SeedCard