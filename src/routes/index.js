const auth = require("./auth-routes");
const product =require("./product-routes")
const password=require('./password-routes')
const user=require('./user-routes')
const paymentMethod=require('./payment-method-routes')
const category=require('./category-routes')
const subCategory=require('./sub-category-routes')

var predictVersionUrl="/api/v1"
const webApi = (app) => {
  app.use(predictVersionUrl, auth);
  app.use(predictVersionUrl, product);
  app.use(predictVersionUrl,password),
  app.use(predictVersionUrl,user)
  app.use(predictVersionUrl,paymentMethod)
  app.use(predictVersionUrl,category)
  app.use(predictVersionUrl,subCategory)

};

module.exports = webApi;
