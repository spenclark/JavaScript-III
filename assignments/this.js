/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
  1. Window/Global Binding - 'this' keyword defaults to the entire window as an object
* 2. Implicit binding - 'this' keyword is automatically bound to object method. Occurs when dot notation is used on a call a function.
* 3. Explicit binding - 'this' keyword is explicitly stated what certain value it is pointed to using .call(), .apply(), .bind() on a function.
* 4. 'new' binding - using 'new' keyword constructs a new object and 'this' points to the new object.
*
*
* write out a code example of each explanation above
*/

// Principle 1 global

function sayBean(bean) {
    console.log(bean);
  }
  sayBean("A bean has bean said");

// Principle 2 implicit
const wow = {
    wowman: 'Owen Wilson',
    wowza: function(word){
        console.log(`click here to watch ${this.wowman} say ${word} in a 24hr loop`)
    }
};
wow.wowza('WOW')

// Principle 3 new

function BeanPerson(greeter) {
    this.word = 'henlo';
    this.greeter = greeter;
    this.speaker = function(){
        console.log(`${this.word} fellow ${this.greeter}`)
    };
}

const beano = new BeanPerson('Bean Person')

beano.speaker();

// Principle 4 explict

// Prototype.js used explicit binding alot - like when we made new methods and passed the attributes of the old method in using method.call(another method)