describe('Airport', function() {
  it('can land a plane', function() {
    airport = new Airport();
    plane = new Plane();
    airport.land(plane)
    expect(airport.planes()).toContain(plane)
  });
});
