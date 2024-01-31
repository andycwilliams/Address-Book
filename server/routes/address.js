import { Router } from "express";
const addressRoutes = Router();
// import { getDb } from "../db/conn";

// Get all addresses
addressRoutes.route("/address").get((req, res) => {
  //
});

// Get address by ID
addressRoutes.route("/address/:id").get((req, res) => {
  //
});

// Add address
addressRoutes.route("/address/add").get((req, res) => {
  //
});

// Update address by ID
addressRoutes.route("/address/:id").get((req, res) => {
  //
});

// Delete address by ID
addressRoutes.route("/:id").get((req, res) => {
  //
});

export default addressRoutes;
