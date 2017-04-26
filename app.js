function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList) {
    console.log(songList);
    // This is where you task begins
    var songs = document.getElementById("songlists")
    var template = ""
    for (var i = 0; i < 50; i++) {
      template += `
      <div class="row">
      <div class="panel">
  <div class="panel-body panel-transparent">
    
      <div class="col-lg-3"><h4>${songList[i].title}</h4></div>
<div class="col-lg-1"><img src= "${songList[i].albumArt}"></div>
<div class="col-lg-2"><h4>${songList[i].artist}</h4></div>
<div class="col-lg-1"><h4>${songList[i].collection}</h4></div>
<div class="col-lg-1"><h4>${songList[i].price}</h4></div>
<div class="col-lg-3"><h4><audio controls >
          <source src="${songList[i].preview}" type="audio/ogg">
          </audio></h4></div>
  </div>
</div>
    </div>
`



    }
    songs.innerHTML = template
  }

}



var itunesCtrl = new ItunesController()