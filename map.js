 
function initMap() {
    var highPark = { lat: 43.653609, lng: -79.465254 };
    var grenadier = { lat: 43.645547, lng: -79.465244 };
    var humber = { lat: 43.649211, lng: -79.485165 };
    var runny = { lat: 43.651198, lng: -79.476199 };
    var highPark = { lat: 43.653609, lng: -79.465254 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: runny
    });
    var marker1 = new google.maps.Marker({
        position: grenadier,
        map: map
    });
    var marker2 = new google.maps.Marker({
        position: humber,
        map: map
    });
    var marker3 = new google.maps.Marker({
        position: highPark,
        map: map
    });
}

function makeListView(name, start, duration, addr,city, post,num,rate,groups,image){
    view = '<button id="desplayOptionsButton" '+ 
        'data-toggle="modal" data-target="#myModal"> '+
                        '<div class="optionsImage">' +
                        '<img src="'+image+'" ></div>'+
                        '<div class="para"><p> '+name+' </p>' +
                        '<p> Starts: '+start+' </p>' +
                        '<p> Takes: '+duration+' </p></div>' +
                        '<div class="para"><p> '+addr+' </p>' +
                        '<p> '+city+' </p>' +
                        '<p> '+post+' </p></div>' +
                        '<div class="para"><p> '+num+' </p>' +
                        '<p> Rating: '+rate+'/5 </p>' +
                        '<p> '+groups+' open groups</p></div>'
                    '</button>'; 
   $('.ListView').append($(view));
}

function clickMapView() {
       	var mp = document.getElementById("MapView");
        var lst = document.getElementById("ListView");
        if (mp.style.display == 'none') {
            lst.style.display = 'none';
            mp.style.display = 'block';
        }
}
function clickListView() {
    var mp = document.getElementById("MapView");
    var lst = document.getElementById("ListView");
    if (lst.style.display == 'none') {
        mp.style.display = 'none';
        lst.style.display = 'block';
    }
}