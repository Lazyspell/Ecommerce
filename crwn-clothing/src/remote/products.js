import { ecommerceClient } from "./ecommerce-client";

export async function allProducts() {
    const response = await ecommerceClient.get("/product/all");
    return response;
}
