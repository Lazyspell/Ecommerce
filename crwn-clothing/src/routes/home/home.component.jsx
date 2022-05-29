import { useEffect, useState } from "react";
import "../../categories.styles.scss";

import Directory from "../../components/directory/directory.component";

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then((response) => response.json())
            .then((items) => setCategories(items));
    }, []);

    return <Directory data={categories} />;
};

export default Home;
