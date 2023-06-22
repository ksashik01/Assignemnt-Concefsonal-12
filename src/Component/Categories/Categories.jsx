import Container from "../Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
    return <Container>

        <div className="pt-4 flex flex-row items-center justify-between overflow-x-hidden">
            {

                categories.map(item => 
                    
                    <CategoryBox label={item.label} icon={item.icon} key={item.label}> 



                    </CategoryBox>
                    
                    
                    
                    )
            }


        </div>

    </Container>
};

export default Categories;