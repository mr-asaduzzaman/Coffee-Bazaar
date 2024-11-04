import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const CoffeeCard = () => {
    const navigate = useNavigate()
    const data = useLoaderData();
    const { category } = useParams();
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredCategory = [...data].filter(coffee => coffee.category === category)
            setCoffees(filteredCategory)
        }
        else {
            setCoffees(data.slice(0, 6))
        }
    }, [category, data])
    console.log(coffees)

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
                {
                    coffees.map(coffee => (<Card key={coffee.id} coffee={coffee}></Card>))
                }
            </div>
            <button className="btn btn-warning" onClick={() => navigate('/coffees')}>View More</button>
        </>
    );
};

export default CoffeeCard;