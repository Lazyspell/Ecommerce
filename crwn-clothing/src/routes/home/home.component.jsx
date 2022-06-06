import { useEffect, useState } from "react";
import "../../categories.styles.scss";

import Directory from "../../components/directory/directory.component";
import { allCategories } from "../../remote/categories";

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const category = await allCategories();
            setCategories(category.data);
        };
        getCategories();
    }, []);

    return <Directory data={categories} />;
};

export default Home;
