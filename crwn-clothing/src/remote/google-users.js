import { ecommerceClient } from "./ecommerce-client";

export async function loginGoogleUser(email) {
    let response = await ecommerceClient.post("/google_login", {
        email,
    });
    console.log(response.data);
    return await response.data;
}
