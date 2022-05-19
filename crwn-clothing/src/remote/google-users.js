import { ecommerceClient } from "./ecommerce-client";

export async function loginGoogleUser(user) {
    let response = await ecommerceClient.post("/google_login", user);
    console.log(response.data);
    return await response.data;
}

export async function loginGoogleTest() {
    let response = await ecommerceClient.get("/google_login_test");
    console.log(response.data);
    return await response.data;
}
