Meteor.startup(function(){
	HouseDatas.remove({});
	HouseDatas.insert({address:"70 Hope Ave", city:"Waltham", state:"MA", price:900});
	HouseDatas.insert({address:"60 Hope Ave", city:"Waltham", state:"MA", price:900});
	HouseDatas.insert({address:"17 shakespeare road", city:"Waltham", State: "MA", price:700});
	HouseDatas.insert({address:"415 South Street", city:"Waltham", State: "MA", price: 1250});

})