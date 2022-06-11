import "./directory-item.styles.scss";

const DirectoryItem = ({ data }) => {
    const { image_url, category } = data;
    return (
        <div className="directory-item-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${image_url})` }}
            />
            <div className="body">
                <h2>{category}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default DirectoryItem;
