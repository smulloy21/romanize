describe('romanize', function (){
  it("should convert from an arabic to a roman number", function (){
    expect(romanize(1)).to.eql("I");
  });

  it("should convert from an arabic to a roman number", function (){
    expect(romanize(999)).to.eql("CMXCIX");
  });
});
