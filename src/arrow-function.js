/* eslint-disable */

{
  // ES3,ES5
  var evens = [1, 2, 3, 4, 5];
  var odds = evens.map(function(v) {
    return v + 1
  });
  console.log(evens, odds);
};
{
  // ES6
  let evens = [1, 2, 3, 4, 5];
  let odds = evens.map(v => v + 1);
  console.log(evens, odds);
} {
  // ES3,ES5
  var factory = function() {
    this.a = 'a';
    this.b = 'b';
    this.c = {
      a: 'a+',
      b: function() {
        return this.a  //在ES3,5中，谁调用的，this就指向谁，在这里是c调用的，所以this为c，所以c.a为a+
      }
    }
  }

  console.log(new factory().c.b());
};

{
  var factory = function() {
    this.a = 'a';
    this.b = 'b';
    this.c = {
      a: 'a+',
      b: () => {
        return this.a  //在ES6中，this为定义时的指向，在定义b的时候，this指向的就是function中的this，及factory的实例
      }
    }
  }
  console.log(new factory().c.b());
}
