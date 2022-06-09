import { ecommerceClient } from "./ecommerce-client";

export async function allProducts() {
    const response = await ecommerceClient.get("/product/all");
    return response;
}

export async function productsByCategories(item) {
    let response = await ecommerceClient.get(
        `/product/category?product=${item}`
    );
    return response;
}

export async function productsAsObjects() {
    let response = await ecommerceClient.get(`/test`);
    return response;
}
