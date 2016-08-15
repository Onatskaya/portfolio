var geocoder;
var map;
shopParameters = {
	0:{
	'title': 'Харьков',
	'address': 'Харьков, ул. 23 Августа 43',
	'workTime': 'Время работы - круглосуточно',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	1:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Академика Павлова 305/307',
	'workTime': 'Время работы - круглосуточно',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	2:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Ахсарова 21',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	3:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Блюхера 18Б',
	'workTime': 'Время работы - 8:00 - 23:45',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	4:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Блюхера 23Е',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	5:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Гвардейцев Широнинцев 15/46',
	'workTime': 'Время работы - 8:00 - 23:45',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	6:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Гвардейцев Широнинцев 88Б',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	7:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Коссиора 99',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	8:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Корчагинцев 11А',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	9:{
	'title': 'Харьков',
	'address': 'Харьков, пр. Ленина 66',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	10:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Мира 20',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	11:{
	'title': 'Харьков',
	'address': 'Харьков, пр. Орджоникидзе 6',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	12:{
	'title': 'Харьков',
	'address': 'Харьков, пр. Победы 76',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	13:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Полтавский шлях 115',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	14:{
	'title': 'Харьков',
	'address': 'Харьков, Салтовское шоссе 100',
	'workTime': 'Время работы - 7:00 - 23:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	15:{
	'title': 'Харьков',
	'address': 'Харьков, Стадионный проезд 13',
	'workTime': 'Время работы - 8:00 - 23:45',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	16:{
	'title': 'Харьков',
	'address': 'Харьков, пер. Титаренковский 8',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	17:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Тракторостроителей 164',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	18:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Фонвизина 15',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	19:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Целинограская 48',
	'workTime': 'Время работы - 8:00 - 22:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
	20:{
	'title': 'Харьков',
	'address': 'Харьков, ул. Шариковая 44А',
	'workTime': 'Время работы - 7:00 - 23:00',
	'hotLine': 'Горячая линия: (056)766 27 27',
	},
};
function initialize() {

	for(var i = 0; i<Object.keys(shopParameters).length; i++){

		geocoder = new google.maps.Geocoder();
		var mapOptions = {
			zoom:11
		}
		
		var content = '<p>' + shopParameters[i].address + '</p>' + '<p>' + shopParameters[i].workTime + '</p><p>' + shopParameters[i].hotLine + '</p>';
		
		codeAddress(shopParameters[i].title, shopParameters[i].address, content );
	}
	
	map = new google.maps.Map(document.getElementById('shops-map'), mapOptions);
}



function codeAddress(markerTitle, address , contentString) {
   
	var infowindow = new google.maps.InfoWindow({
	content: contentString
	});

	geocoder.geocode( { 'address': address}, function(results, status) {
	if (status == google.maps.GeocoderStatus.OK) {
	map.setCenter(results[0].geometry.location);

	
	
    var image = {
		url: 'images/logo-icon.png',
		// This marker is 20 pixels wide by 32 pixels high.
		size: new google.maps.Size(102, 35),
		// The origin for this image is (0, 0).
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at (0, 32).
		anchor: new google.maps.Point(0, 32)
    };

	//display marker
	var marker = new google.maps.Marker({
		map: map,
		icon: image,
		position: results[0].geometry.location,
		title: markerTitle
	});
	google.maps.event.addListener(marker, 'click', function() {
	infowindow.open(map,marker);
	});

	} 
	});

}
google.maps.event.addDomListener(window, 'load', initialize);
