

const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col justify-center items-center my-10">
            <div className="font-bold">{title}</div>
            <div className="font-thin">{subtitle}</div>
        </div>
    );
};

export default Heading;