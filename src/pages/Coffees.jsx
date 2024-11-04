import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";


const Coffees = () => {
    const data = useLoaderData()
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="text-4xl"> Sort By Ratings and Popularity</div>
                <div>
                    <button className="btn btn-warning">Sort By Ratings</button>
                    <button className="btn btn-warning ml-5">Sort By Popularity</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
                {
                    data.map(coffee => (<Card key={coffee.id} coffee={coffee}></Card>))
                }
            </div>
        </>
    );
};

export default Coffees;