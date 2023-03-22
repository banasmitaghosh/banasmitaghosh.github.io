window.onload = function() {
    const magician = localStorage.getItem("magicians");
    const magicianObj = JSON.parse(magician);

    var x = '<div class="home-video-details"><div class="home-heading"><h2 class="home-header">' + magician["name"] + '</h2></div><div class="home-video-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + magician["video_url"] + '/" frameborder="0" allowfullscreen></iframe></div></div><p class="home-caption">' + magician["description"] + '</p>';

    document.getElementById("magician").innerHTML = x;
}
