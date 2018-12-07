
    const url='https://www.googleapis.com/geolocation/v1/geolocate?key='+ key
    console.log(url)

    //post sends data to server and give locations
   
    $.post(url, function (data) {
        
        console.log(data)

        findUser = data.location
        console.log(findUser)
        initMap(findUser)

    })
    // $.ajax({
    //     url: url,
    //     type: "post",
    //     success: function(data){
    //         console.log(data)
    //     }
    // })



    function initMap(findUser) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: findUser,
            zoom: 8,

        })



    }


