import { useNavigate } from "react-router-dom";
import "./directory-item.styles.jsx";
import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ data }) => {
    const { image_url, category } = data;
    const navigate = useNavigate();
    const name = category.toLowerCase();

    const onNavigateHandler = () => navigate(`/shop/${name}`);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage style={{ backgroundImage: `url(${image_url})` }} />
            <Body>
                <h2>{category}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
