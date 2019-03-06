describe('Airport', function() {

beforeEach(function() {
  airport = new Airport();
  planeSpy = jasmine.createSpy('plane');
  planeSpy2 = jasmine.createSpy('plane');
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

  it('throws an error if full', function() {
      airport.land(planeSpy);
      expect(function() {airport.land(planeSpy2)}).toThrow('Cannot land.');
  });

  it('can land if clear', function() {
    spyOn(airport, "_stormy").and.returnValue(false)
    airport.land(planeSpy);
    expect(airport.planes).toContain(planeSpy);
  });

  it('cannot land if stormy', function() {
    spyOn(airport, "_stormy").and.returnValue(true)
    expect(function() {airport.land(planeSpy)}).toThrow('Cannot land.');
  });

});
