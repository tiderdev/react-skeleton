var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  {"id":1,"text":"Ham"},
  {"id":2,"text":"Cheese"},
  {"id":3,"text":"Potatoes"}
];

var List = React.createClass({
  render : function() {
    var listItem = ingredients.map(function(item) {
        return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul>{listItem}</ul>);
  }
});

module.exports = List;
