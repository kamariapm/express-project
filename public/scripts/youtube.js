$(document).ready(function () {
$(".vids").hide()
    $("#youtubeSubmit").click(function () {
const videos = $("#youtubeInput").val()



const url = `https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=10&q=` + videos + `&type=video&key=${key}`


console.log(url)
   

$.ajax({
        url: url,
    success: function (data) {
        console.log(data)
        $(".vids").show()

    

const video = data.items

for (arr=0; arr<video.length; arr++){
    const videoUrl = "https://www.youtube.com/watch?v=" + video[arr].id.videoId

    console.log(videoUrl)
 

    //   I TRIED ADDING AN IF STATEMENT TO THE FOR LOOP: 
    // if (arr < video.length) {
    //     console.log('hi')
    //     $("#videoFields").attr('href', videoUrl[arr].id.videoId)
    //     } else {
    //         console.log('done')

    //     } 
    //     arr++ 

    // let printToPage = $('#videoFields').attr('id',val).html('click ');

    // if (arr < video.length) {
    //     printToPage
    // } else {
    //     alert('done')
    // }


        // I TRIED A WHILE LOOP: 
        // while (video.length < 10) {
        //     console.log('printing vids')
        // const videoUrl = "https://www.youtube.com/watch?v=" + video[arr].id.videoId
        // $("#videoFields").attr('href', videoUrl)

           //manually printing items to html
    const video0Url = "https://www.youtube.com/watch?v=" + video[0].id.videoId
    $("#vid0").attr('href', video0Url)
const video0Title = data.items[0].snippet.title
$("#vid0Title").html(video0Title)
// const video0Pic = data.items[0].snippet.thumbnails.default.url
// $("#vidPic0").attr('src', video0Pic)
const image0 = document.createElement("IMG")
video0Pic = data.items[0].snippet.thumbnails.default.url
image0.src = video0Pic
$("#vidPic0").html(image0);



    const video1Url = "https://www.youtube.com/watch?v=" + video[1].id.videoId
    $("#vid1").attr('href', video1Url)
    const video1Title = data.items[1].snippet.title
    $("#vid1Title").html(video1Title)
    // const video0Pic = data.items[0].snippet.thumbnails.default.url
    // $("#vidPic0").attr('src', video0Pic)
    
    const image1 = document.createElement("IMG")
    video1Pic = data.items[1].snippet.thumbnails.default.url
    image1.src = video1Pic
    $("#vidPic1").html(image1);




    const video2Url = "https://www.youtube.com/watch?v=" + video[2].id.videoId
    $("#vid2").attr('href', video2Url)
    const video2Title = data.items[2].snippet.title
    $("#vid2Title").html(video2Title)
    const image2 = document.createElement("IMG")
    video2Pic = data.items[2].snippet.thumbnails.default.url
    image2.src = video2Pic
    $("#vidPic2").html(image2);



      const video3Url = "https://www.youtube.com/watch?v=" + video[3].id.videoId
    $("#vid3").attr('href', video3Url)
    const video3Title = data.items[3].snippet.title
    $("#vid3Title").html(video3Title)
    // const video2Pic = data.items[2].snippet.thumbnails.default.url
    // $("#vidPic2").attr('src', video2Pic)
    const image3 = document.createElement("IMG")
    video3Pic = data.items[3].snippet.thumbnails.default.url
    image3.src = video3Pic
    $("#vidPic3").html(image3);



    const video4Url = "https://www.youtube.com/watch?v=" + video[4].id.videoId
    $("#vid4").attr('href', video4Url)
    const video4Title = data.items[4].snippet.title
    $("#vid4Title").html(video4Title)
    // const video2Pic = data.items[2].snippet.thumbnails.default.url
    // $("#vidPic2").attr('src', video2Pic)
    const image4 = document.createElement("IMG")
    video4Pic = data.items[4].snippet.thumbnails.default.url
    image4.src = video4Pic
    $("#vidPic4").html(image4);




    const video5Url = "https://www.youtube.com/watch?v=" + video[5].id.videoId
    $("#vid5").attr('href', video5Url)
    const video5Title = data.items[5].snippet.title
    $("#vid5Title").html(video5Title)
    const image5 = document.createElement("IMG")
    video5Pic = data.items[5].snippet.thumbnails.default.url
    image5.src = video5Pic
    $("#vidPic5").html(image5);




    const video6Url = "https://www.youtube.com/watch?v=" + video[6].id.videoId
    $("#vid6").attr('href', video6Url)
    const video6Title = data.items[6].snippet.title
    $("#vid6Title").html(video6Title)
    const image6 = document.createElement("IMG")
    video6Pic = data.items[6].snippet.thumbnails.default.url
    image6.src = video6Pic
    $("#vidPic6").html(image6);



    const video7Url = "https://www.youtube.com/watch?v=" + video[7].id.videoId
    $("#vid7").attr('href', video7Url)
    const video7Title = data.items[7].snippet.title
    $("#vid7Title").html(video7Title)
    const image7 = document.createElement("IMG")
    video7Pic = data.items[7].snippet.thumbnails.default.url
    image7.src = video7Pic
    $("#vidPic7").html(image7);




    const video8Url = "https://www.youtube.com/watch?v=" + video[8].id.videoId
    $("#vid8").attr('href', video8Url)
    const video8Title = data.items[8].snippet.title
    $("#vid8Title").html(video8Title)
    const image8 = document.createElement("IMG")
    video8Pic = data.items[8].snippet.thumbnails.default.url
    image8.src = video8Pic
    $("#vidPic8").html(image8);



    const video9Url = "https://www.youtube.com/watch?v=" + video[9].id.videoId
    $("#vid9").attr('href', video9Url)
    const video9Title = data.items[9].snippet.title
    $("#vid9Title").html(video9Title)
    const image9 = document.createElement("IMG")
    video9Pic = data.items[9].snippet.thumbnails.default.url
    image9.src = video9Pic
    $("#vidPic9").html(image9);


    } 

 
},

error: function (request, error) {

        console.log(error)
        console.log(request)

    }



    });

    })
})