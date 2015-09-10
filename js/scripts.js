var romanize = function(number){
  var output = "";
  var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  while(number > 0) {
    for(var i = 0; i < nums.length; i++) {
      if (number >= nums[i]) {
        output += roman[i];
        number -= nums[i];
        i =0;
      }
    }
  }
  return output;
};

$(document).ready(function() {
  $("form#romanize").submit(function(event){
    $("#result").hide();
    $("#error").hide();
    var number = parseInt($("input#number").val());
    var result = romanize(number);

    $(".number").text(number);
    $(".result").text(result);
    if (result <= 0 || number >= 4000) {
      $("#error").show();
    } else {
      $("#result").show();
    }
    event.preventDefault();
  });
});
