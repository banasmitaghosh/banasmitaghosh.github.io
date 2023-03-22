window.onload = function() {
    const magician = localStorage.getItem("magicians");
    const magicianObj = JSON.parse(magician);

    var x = '<div class="home-video-details"><div class="home-heading"><h2 class="home-header">' + magicianObj["name"] + '</h2></div><div class="home-video-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + magicianObj["video_url"] + '/" frameborder="0" allowfullscreen></iframe></div></div><p class="home-caption">' + magicianObj["description"] + '</p>';

    document.getElementById("magician").innerHTML = x;
}
