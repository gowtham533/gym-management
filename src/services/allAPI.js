import ServerURL from "./serverURL";
import commonAPI from "./axios";

// Add user (POST)
export const addUserAPI = async (user) => {
  return await commonAPI("POST", `${ServerURL}/users`, user);
};

// Get all users (GET)
export const getAllUsersAPI = async () => {
  return await commonAPI("GET", `${ServerURL}/users`, "");
};

// Get single user (GET)
export const getSingleUserAPI = async (id) => {
  return await commonAPI("GET", `${ServerURL}/users/${id}`, "");
};

// Update user (PUT)
export const updateUserAPI = async (id, updatedData) => {
  return await commonAPI("PUT", `${ServerURL}/users/${id}`, updatedData);
};

// Delete user (DELETE)
export const deleteUserAPI = async (id) => {
  return await commonAPI("DELETE", `${ServerURL}/users/${id}`, "");
};