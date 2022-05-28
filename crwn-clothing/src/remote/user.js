import { ecommerceClient } from "./ecommerce-client";
import { useContext } from "react";
import { UserContext } from "../contexts/user.context";

export async function loginUser(email, password) {
    let response = await ecommerceClient.post("/login", {
        email: email,
        password: password,
    });
    return response;
}

export async function logOutUser() {
    await ecommerceClient.post("/logout");
    return;
}

export async function newUser(first_name, last_name, email, password) {
    let response = await ecommerceClient.post("/users/new", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
    });
    return response;
}
