$(document).ready(function () {
    $("a[href*='#cat']").on("click", function (e) {
        var anchor = $(this);
        $('html, body').animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);

        e.preventDefault();
        return false;
    });
    var block1=$("#block1");
    var block2=$("#block2");
    var block3=$("#block3");
    var block4=$("#block4");
    var block5=$("#block5");


    $(window).on("scroll",function (e) {
        var lineLeft = $(this).scrollTop();
        if (lineLeft>0 && lineLeft<415){
            block2.removeClass("active");
            block1.addClass("active");
        }else if(lineLeft>415 && lineLeft<1410){
            block3.removeClass("active");
            block1.removeClass("active");
            block2.addClass("active");
        }else if(lineLeft>1410 && lineLeft<2400){
            block4.removeClass("active");
            block3.addClass("active");
            block2.removeClass("active")
        }else if (lineLeft>2400 && lineLeft<3550){
            block5.removeClass("active");
            block3.removeClass("active");
            block4.addClass("active")
        }else if(lineLeft>3550){
            block4.removeClass("active");
            block5.addClass("active")
        }
        var nav=$('.navbar');
        window.onscroll = function() {
            if (lineLeft!=0){
                nav.addClass('nav-color')
            }else {
                nav.removeClass('nav-color')
            }

        }
    })

    $('.carousel').carousel({
        interval: 2000
    })

    $(".btn1").click(function () {
        var src = $(this).children().attr('src');
        
        console.log(name)
        $("#img").attr("src", src);
    })
//Isotope active js code:
//************************

// Active isotope with jQuery code:

    $('.main-iso').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
// Isotope click function
    $('.iso-nav a').click(function(){
        $('.iso-nav a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.block-tab').isotope({
            filter: selector
        });
        return false;
    });




});
/*Google Map api*/
function initMap() {
    var uluru = {lat: 40.189021, lng:  44.523336};
    var div=document.getElementById('map');
    var options={
        zoom: 16,
        center: uluru,
        styles:[
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
        ]
    };
    var popupContent = '<p>IT-TALENTS Association, 8 Koryun St</p>';
    var MyMap = new google.maps.Map(div,options );


    addMarke({lat: 40.189021, lng:  44.523336});
    function addMarke(cordinat) {

        var marker = new google.maps.Marker({
            position: cordinat,
            map: MyMap,



        });
        marker.setAnimation(google.maps.Animation.BOUNCE);
        marker.addListener('click', function() {
            infowindow.open(MyMap, marker);
            marker.setAnimation(null);
            google.maps.event.addListener(infowindow,'closeclick',function(){
                marker.setAnimation(google.maps.Animation.BOUNCE);
            });
        });





    }
    infowindow = new google.maps.InfoWindow({
        content: popupContent
    });

}
/*/Google map Api*/