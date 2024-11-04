import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner></Banner>

            <Heading title='Which kind of coffees do you like?' subtitle='Many kinds of coffees you will found here'></Heading>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;