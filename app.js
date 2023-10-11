var Person = function (name) {
  this.name = ko.observable(name);
};

var PeopleModel = function () {
  var self = this;

  self.currentData = ko.observable();

  self.drag_start_index = ko.observable();
  self.drag_target_index = ko.observable();
  self.dragging = ko.computed(function () {
    return self.drag_start_index() >= 0;
  });
  self.people = ko.observableArray([
    new Person("Jude K."),
    new Person("Hiren P."),
    new Person("Vijay V."),
    new Person("Steve M."),
    new Person("Smita N."),
    new Person("Nasim G."),
    new Person("Michael C."),
    new Person("Feruza H."),
    new Person("Jamie A."),
    new Person("Shyam P."),
    new Person("Marc R."),
    new Person("Jyo R."),
  ]);
};
ko.applyBindings(new PeopleModel());
