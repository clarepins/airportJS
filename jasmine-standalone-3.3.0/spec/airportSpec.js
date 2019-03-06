describe('Airport', function() {

planeSpy = jasmine.createSpy('plane');

  it('can land a plane', function() {
    airport = new Airport();
    airport.land(planeSpy);
    expect(airport.planes).toContain(planeSpy);
  });
});
