
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '老害チェッカー' });
};

exports.result = function(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  var id = req.params.id;
  res.render('result', { id: id });
};