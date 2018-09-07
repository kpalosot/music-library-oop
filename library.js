function Track(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Track.prototype.toString = function(){
  return `Title: ${this.title} Rating: ${this.rating} Length: ${this.length}`;
}

function Playlist(name){
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTrack = function(track){
  if(Object.getPrototypeOf(track) === Track.prototype){
    this.tracks.push(track);
  } else {
    throw new Error(`${track} is not an instance of track.`)
  }
};

Playlist.prototype.overallRating = function(){
  let totalRating = 0;
  for (let i = 0; i < this.tracks.length; i++){
    totalRating += this.tracks[i].rating;
  }
  return totalRating / this.tracks.length;
};

Playlist.prototype.totalDuration = function (){
  let totalDuration = 0;
  for (let i = 0; i < this.tracks.length; i++) {
    totalDuration += this.tracks[i].length;
  }
  return totalDuration;
};

Playlist.prototype.toString = function (){
  let result = `Playlist: ${this.name}\n`
  for(let i = 0; i < this.tracks.length; i++){
    result = result + this.tracks[i].toString() + '\n';
  }
  return result;
};

function Library(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function (playlist) {
  if(Object.getPrototypeOf(playlist) === Playlist.prototype){
    this.playlists.push(playlist);
  } else {
    throw new Error(`${playlist} is not an instance of playlist`)
  }
}

Library.prototype.toString = function () {
  let result = `${this.name} by ${this.creator}\n`
  for (let i = 0; i < this.playlists.length; i++) {
    result = result + this.playlists[i].toString() + '\n';
  }
  return result;
}

const track1 = new Track('Spirit Animal', 5, 180);
const track2 = new Track('Kamikaze', 5, 240);
const playlist1 = new Playlist('whoo');
playlist1.addTrack(track1);
playlist1.addTrack(track2);

const track3 = new Track('Gucci', 4, 155);
const track4 = new Track('Lose Yourself', 4, 270);

const playlist2 = new Playlist('yippee');
playlist2.addTrack(track4);
playlist2.addTrack(track3);

const library1 = new Library('LOL', 'KP');
library1.addPlaylist(playlist1);
library1.addPlaylist(playlist2);
console.log(library1.toString());

