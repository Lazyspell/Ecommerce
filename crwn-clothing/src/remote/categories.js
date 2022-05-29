import { ecommerceClient } from "./ecommerce-client";

export async function allCategories() {
    const response = await ecommerceClient.get("/categories");
    return response;
}
