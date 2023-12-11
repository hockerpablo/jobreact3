import React from "react";

import CardRecomendation from "./CardRecomendation";

import { useSelector } from "react-redux";
import { CardsContainer } from "./styles";
import { premiun } from "../../data/premiun";


const Cardsrecomendations = () =>{
    const premiun = useSelector(state => state.recomended.recomended)

    return (
        <CardsContainer gridLength = {premiun.length}>
             {
                premiun.map((recomendation) => <CardRecomendation key={'reco' + recomendation.id} {...premiun} />)
             }

        </CardsContainer>
    )
}
export default Cardsrecomendations;

//ver video nucbazappi vol 2 en el minuto 30