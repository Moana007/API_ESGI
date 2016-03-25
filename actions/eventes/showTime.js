module.exports =  function(server){
  return function(req, res, next){
    var Evente = server.models.Evente;
    var time = req.params.time;
    var dateNow = new Date();
    var dateNow2 = dateNow.getTime();
    //var query = Evente.find();

    console.log(dateNow2);

    if(time != 'past' || time != 'future'){
		if (time == 'past'){
		//Evente.findBy( date: >= dateNow, (function(err, data){
		Evente.find(function(err, data){
		      	if(err)
		        	return res.status(500).send(err);

		        console.log(data.date);

	            return res.send({
	              	state : 'get_event '+time,
	              	user : data
	            });
		    });
    	}

    } else {
    	return res.send('The last param need to be "past" or "future"');
    }

    //res.send('test');


  };
};
