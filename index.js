fetch('data.json').then(response => response.json()).then(jsonData => {
  var x = '<div class="home-speakers-container">';
  for (let i = 0; i < jsonData['data'].length; i++) {
    const firstWordEndIndex = jsonData["data"][i]["name"].indexOf(" ");
    const firstWord = jsonData["data"][i]["name"].slice(0, firstWordEndIndex);
    const restOfString = jsonData["data"][i]["name"].slice(firstWordEndIndex + 1);

    x = x + '<div class="speaker-card-speaker-card"><div class="speaker-card-image-container"><img alt="image" src=' + jsonData["data"][i]["image"] + ' class="speaker-card-image" /><div class="speaker-card-read-more-container" onclick="setMagicians(' + i + ')"><a href="read_more.html"><span class="speaker-card-hint">read more</span><svg viewBox="0 0 1024 1024" class="speaker-card-icon"><path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path></svg></a></div></div><span class="speaker-card-first-name"><span>' + firstWord + '</span></span><span class="speaker-card-last-name"><span>' + restOfString + '</span></span></div>'
  }
  x = x + '</div>';
  document.getElementById("magicians").innerHTML = x;
});

function setMagicians(position) {
  fetch('data.json').then(response => response.json()).then(jsonData => {
    localStorage.setItem("magicians", JSON.stringify(jsonData["data"][position]));
  });
}
