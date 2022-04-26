import CategoryItem from "../category-item/category-item.component";
import "./directory-item.styles.scss";

const Directory = ({ data }) => {
    return (
        <div className="directory-container">
            {data.map((category) => (
                <CategoryItem key={category.id} data={category} />
            ))}
        </div>
    );
};

export default Directory;
