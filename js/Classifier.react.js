var Parse = require('parse').Parse;
var React = require('react');
var bayes = require('bayes');


var Classifier = React.createClass({

  render: function() {
    var classifier = bayes();

    classifier.learn('Habremos escrito las preguntas antes de que los estudiantes entren.', 'spanish');
    classifier.learn('Escribo la carta con el bolígrafo.', 'spanish');
    classifier.learn('Yo te recomiendo que esto lo escribas en tu cuaderno.', 'spanish');
    classifier.learn('Escribí una carta en español antes de ayer.', 'spanish');
    classifier.learn('Gracias, ¿me prestarás tu bolígrafo también para que pueda escribir su número?', 'spanish');
    classifier.learn('Tenemos que escribir un ensayo.', 'spanish');
    classifier.learn('Juan, escribe la respuesta en la pizarra.', 'spanish');
    classifier.learn('Prefiero que lo escribas con el lápiz.', 'spanish');
    classifier.learn('Debe escribir un reporte acerca de las actividades inusuales que vio en su turno', 'spanish');
    
    classifier.learn('There was a cat from Nantucket', 'english');
    classifier.learn('One group of people is from Europe the other form Asia.', 'english');
    classifier.learn('I used to row in University and it then I got a bad back', 'english');
    classifier.learn('Sitting while watching a stupid movie and coding', 'english');
    classifier.learn('I am trying to think of a sentance to train this thing.', 'english');
    
    var done = classifier.categorize('I do not like chocolate bar I much prefer oranges.');

    //console.log(done);

    return (
        <div>{{done}}</div>
    );
  }

});


module.exports = Classifier;