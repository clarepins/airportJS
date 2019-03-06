function Airport() {
  this.planes = []
}

Airport.prototype.land = function(plane) {
  this.planes.push(plane)
};

Airport.prototype.takeOff = function(plane) {
  i = this.planes.indexOf(plane)
  this.planes.splice(i, 1);
};
