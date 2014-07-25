exports.index = function(req, res){
    var domain = req.headers.host,
        subDomain = domain.split('.');

    if(subDomain.length > 2){
        subDomain = subDomain[0].split("-").join(" ");
    }else{
        subDomain = "Everyone ";
    }

  res.render('index', { subDomain: subDomain });
};