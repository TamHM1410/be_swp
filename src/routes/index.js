const auth = require("./auth-routes");
const product =require("./product-routes")
const password=require('./password-routes')
const user=require('./user-routes')
const paymentMethod=require('./payment-method-routes')
const category=require('./category-routes')
const subCategory=require('./sub-category-routes')
const inventory=require('./inventory-routes')
const products=require('./products-routes')

var predictVersionUrl="/api/v1"
const webApi = (app) => {
  app.use("/api/v1", auth);
  app.use(predictVersionUrl, product);
  app.use(predictVersionUrl,password),
  app.use(predictVersionUrl,user)
  app.use(predictVersionUrl,paymentMethod)
  app.use(predictVersionUrl,category)
  app.use(predictVersionUrl,subCategory)
  app.use(predictVersionUrl,inventory)
  app.use(predictVersionUrl,products)



};

module.exports = webApi;
