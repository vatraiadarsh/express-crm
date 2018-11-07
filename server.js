const PORT = 3000;

module.exports = function(app){
   app.listen(PORT, () => console.log('Server listening on port:' + PORT));

}

