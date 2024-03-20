const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productService = require('../data/productService');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("product-create-form.ejs");
	},
	
	// Create -  Method to store
	store: (req, res) => {
		productService.save(req.body);
		//res.redirect("/");
		res.send(req.body);
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;