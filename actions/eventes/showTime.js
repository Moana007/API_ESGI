module.exports =  function(server){
  return function(req, res, next){
    var Evente = server.models.Evente;
    var time = req.params.time;
    var dateNow = new Date().getTime();
    var query = Evente.find();

    //console.log(dateNow);

    if(time == 'past' || time == 'future'){
		if (time == 'past'){
		    query
			    .where('date').lt(dateNow)
			    .exec(function(err, data){
				    if(err)
				        return res.status(500).send(err);

			        console.log(data[0].date);

			        return res.send({
			          	state : 'get_event_'+time,
			          	user : data
			        });
			    });
		}
		else {
		    query
			    .where('date').gt(dateNow)
			    .exec(function(err, data){
				    if(err)
				        return res.status(500).send(err);

			        console.log(data[0].date);

			        return res.send({
			          	state : 'get_event_'+time,
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
