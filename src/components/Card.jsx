

const Card = ({ coffee }) => {
    const { name, category, image, type, origin, popularity, rating } = coffee;
    return (
        <div className="border-2 shadow-lg p-4 rounded-lg">
            <figure className="h-52">
                <img
                    className="h-full w-full rounded-lg"
                    src={image} alt="" />
            </figure>
            <div>
                <h1 className="font-bold text-2xl space-y-2">{name}</h1>
                <p>Category : {category}</p>
                <p>Type : {type}</p>
                <p>Origin : {origin}</p>
                <p>Rating : {rating}</p>
                <div className="flex justify-between items-center ">
                    <p>Popularity : {popularity}</p>
                    <button className="btn btn-sm btn-success text-white">Order Now</button>
                </div>
            </div>
        </div >
    );
};

export default Card;