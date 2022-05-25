import { ecommerceClient } from "./ecommerce-client";

export async function loginGoogleUser(user) {
    let response = await ecommerceClient.post("/google_login", user);
    return await response;
}

export async function loginGoogleTest() {
    let response = await ecommerceClient.get("/google_login_test");
    console.log(response.data);
    return await response.data;
}
