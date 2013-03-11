var map;

function setDrabableTab(tabId) {
  var $dragTab = $( tabId ).tabs();
  var $drag_items = $( "ul:first li", $dragTab ).droppable({
    accept: ".connectedSortable li",
    hoverClass: "ui-state-hover",
    drop: function( event, ui ) {
      var $item = $( this );
      var $list = $( $item.find( "a" ).attr( "href" ) )
        .find( ".connectedSortable" );

      ui.draggable.hide( "fast", function() {
        $dragTab.tabs( "option", "active", $drag_items.index( $item ) );
        $( this ).appendTo( $list ).show( "fast" );
      });
    }
  });
}

$(function() {
  $( "#sortable1, #sortable2, #sortable3" ).sortable({
    placeholder: "ui-state-highlight",
    connectWith: ".connectedSortable"
  }).disableSelection();

  setDrabableTab("#searchTab");
  setDrabableTab("#tabs");
});

function initialize_normal() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var gmA = new google.maps.Map(document.getElementById("map_canvas_A"), mapOptions);
  var gmB = new google.maps.Map(document.getElementById("map_canvas_B"), mapOptions);
}

function initialize() {
  var mapOptions = {
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas_B'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
