Namespace.Use("Util", function(ns) {
    var Inherit = Polymorphic.Create(
        [Function, Function],
        function(new_class, base_class) {
            new_class.prototype = Object.create(base_class.prototype);
            new_class.prototype.constructor = new_class;
        }
    );

    Namespace.Export(ns, "Inherit", Inherit);
});