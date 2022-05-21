import "./category-item.styles.scss";

const CategoryItem = ({ data }) => {
    const { image_url, category } = data;
    return (
        <div className="category-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${image_url})` }}
            />
            <div className="category-body-container">
                <h2>{category}</h2>
                    <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;
