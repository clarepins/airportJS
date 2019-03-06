function Airport() {
  this.planes = []
}

Airport.prototype.land = function(plane) {
  if (this.planes.length >= 1 || this._stormy()) {
    throw('Cannot land.');
  } else {
  this.planes.push(plane);
  }
};

Airport.prototype.takeOff = function(plane) {
  var i = this.planes.indexOf(plane)
  this.planes.splice(i, 1);
};

Airport.prototype._stormy = function() {
  var j = Math.floor(Math.random())
  if (j > 0.8 ) {
    return true;
  } else {
    return false;
  };
};
