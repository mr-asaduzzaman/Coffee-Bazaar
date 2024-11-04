import { NavLink } from "react-router-dom";


const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            
                {
                    categories.map(category => 
                    <NavLink 
                    to={`category/${category.category}`} 
                    key={category.category} 
                    role="tab" 
                    className={({isActive}) => `tab text-2xl font-serif ${isActive? 'tab-active font-bold text-green-900' : ''}`}
                    >{category.category}</NavLink>)
                }
        </div>
    );
}; 

export default Categories;