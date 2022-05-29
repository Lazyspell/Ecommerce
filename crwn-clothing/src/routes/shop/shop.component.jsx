import { useEffect, useState } from "react";

const Shop = () => {
    const [hats, setHats] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/hats/all")
            .then((response) => response.json())
            .then((items) => setHats(items));
    }, []);

    console.log(hats);
    return (
        <div>
            {hats.map(({ id, hat_name }) => (
                <div key={id}>
                    <h1>{hat_name}</h1>
                </div>
            ))}
        </div>
    );
};

export default Shop;
