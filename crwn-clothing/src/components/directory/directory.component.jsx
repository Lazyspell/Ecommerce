import CategoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";
import "./directory.styles.jsx";

const Directory = ({ data }) => {
    return (
        <DirectoryContainer>
            {data.map((category) => (
                <CategoryItem key={category.id} data={category} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
