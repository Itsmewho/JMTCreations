/** @format */

export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

//products ->

export const ABSTRACT_URL = "/api/abstract";
export const RANDOM_URL = "/api/random";
export const FULLBODY_URL = "/api/fullbody";
export const EXPRESSION_URL = "/api/expression";
export const WATERCOLORS_URL = "/api/watercolors";
export const POPANIME_URL = "/api/popanime";

// UserAccounts / paypall -->
export const USERS_URL = "/api/users";
export const PAYPALL_URL = "/api/config/paypal";
