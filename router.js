var employeesRouter = require('./routes/employees');

module.exports = function(app){
    
  app.get("/dashboard", function (req, res) {
      res.render("dashboard");
  })  
  // For courses
  app.use("/employees", employeesRouter);

}