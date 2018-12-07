$(document).ready(function () {

    $("#youtubeSubmit").click(function () {
const videos = $("#youtubeInput").val()



const url = `https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=10&q=` + videos + `&type=video&key=${key}`


console.log(url)



    

$.ajax({
    url: url,
    success: function (data) {
        console.log(data)

    

const video = data.items

for (i=0; i<video.length; i++){
    const videoUrl = "https://www.youtube.com/watch?v=" + video[i].id.videoId
    console.log(videoUrl)
    $("#vid1").attr('href', videoUrl)

}


},

error: function (request, error) {

        console.log(error)
        console.log(request)

    }



    });

    })
})