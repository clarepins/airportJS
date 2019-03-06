describe('Airport', function() {

beforeEach(function() {
  airport = new Airport();
  planeSpy = jasmine.createSpy('plane');
});

  it('can land a plane', function() {
    airport.land(planeSpy);
    expect(airport.planes).toContain(planeSpy);
  });

  it('can take off a plane', function() {
    airport.land(planeSpy);
    airport.takeOff(planeSpy);
    expect(airport.planes).not.toContain(planeSpy);
  });

});
