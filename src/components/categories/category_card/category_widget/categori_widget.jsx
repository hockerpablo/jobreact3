import { useSelector } from "react-redux"

import { CategoryCard } from "../category_card"
import { CategoryContainer, CategoryCont } from "./styles"


export const CategoryWidget = () => {
 
   const categories = useSelector(state => state.categories.categories)

  return (
    <CategoryContainer>

        <h2>Categorias</h2>
        <CategoryCont>

            {
              categories.map((item) =>
              <CategoryCard key={item.id} {...item}/>)
            }
        </CategoryCont>
      
    </CategoryContainer>
  
  )
}
export default CategoryWidget;