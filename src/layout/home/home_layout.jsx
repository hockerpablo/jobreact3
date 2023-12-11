import React from 'react'
import { ContentContainerStyled, LayoutContainerStyled } from './styles'
import { Navbar } from '../../components/navbar/Navbar.1'
import { Footer } from '../../components/footer/footer'
import CategoryWidget from '../../components/categories/category_card/category_widget/categori_widget'
import CardRecomendations from '../../components/recomendeciones/CardRecomendation'



export const HomeLayout = ({ children }) => {
  return (

    <LayoutContainerStyled>
     <Navbar />
     <CategoryWidget/>
     <CardRecomendations/>
     <ContentContainerStyled> {children} </ContentContainerStyled>
    <Footer />
    </LayoutContainerStyled>
  )
}

export default HomeLayout;