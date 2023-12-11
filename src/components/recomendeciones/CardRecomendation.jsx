import React from "react";
import {Card, CardText, InfoCard, CardImg, CardPrice,  CardTitle} from './styles'



const CardRecomendation = ({img, name, desc, price }) => {
    return (
        <Card>
            <CardImg src= {img} alt={name}/>
            <CardText>
                <CardTitle>{name}</CardTitle>
                  <InfoCard>{desc}</InfoCard>
                  <CardPrice>{price}</CardPrice>
            </CardText>
        </Card>
    ) 
        
}

export default CardRecomendation;