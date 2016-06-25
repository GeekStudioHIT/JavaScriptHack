/*
 *  Copyright (C) 2015 XiaoJSoft Studio. All rights reserved.
 *
 *  Use of this source code is governed by a BSD-style license that can be found in the license.txt file.
 */

(function(export_to, module_name) {
    function IsValidName(obj_name) {
        //  Zero-length object name is not allowed.
        if (obj_name.length == 0) {
            return false;
        }

        //  Check each character.
        for (var i = 0; i < obj_name.length; ++i) {
            //  Get the valid characters table (0-9 is not allowed to be the first character).
            var valid_table = ((i == 0) ? "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_" :
                                          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_");

            //  Initialize the flag.
            var char_valid = false;

            //  Search the character in the table.
            for (var chk = 0; chk < valid_table.length; ++chk) {
                if (obj_name[i] == valid_table[chk]) {
                    char_valid = true;
                    break;
                }
            }

            //  It is an invalid name if the character can't be found in the table.
            if (!char_valid) {
                return false;
            }
        }

        return true;
    }

    function IsUndefined(obj) {
        return typeof(obj) == "undefined";
    }

    function ParseNamespace(ns_name) {
        //  Do partition.
        var partition = ns_name.split(".");

        //  Check each part.
        for (var i = 0; i < partition.length; ++i) {
            //  Validity the name.
            if (!IsValidName(partition[i])) {
                throw SyntaxError("Invalid namespace.");
            }

            //  Check whether the name is protected.
            if (partition[i] == "__NAMESPACE_FLAG__") {
                throw SyntaxError("'__NAMESPACE_FLAG__' is a protected namespace that shouldn't be used.");
            }
        }

        return partition;
    }

    function IsNamespaceObject(obj) {
        return (obj instanceof Object) && ("__NAMESPACE_FLAG__" in obj);
    }

    function RouteToInnerObject(obj, ns_name, create_mode) {
        //  Initialize the namespace object.
        var current = obj;

        //  Parse the name.
        ParseNamespace(ns_name).forEach(function(item) {
            //  Check the object type.
            if (!IsNamespaceObject(current)) {
                throw Error("Can't get access to the namespace or object.");
            }

            //  Create a new sub namespace if it doesn't exist.
            if (!(item in current)) {
                if (create_mode == true) {
                    current[item] = {"__NAMESPACE_FLAG__": {}};
                } else {
                    throw Error("Can't get access to the namespace or object.");
                }
            }

            //  Go to the sub namespace.
            current = current[item];
        });

        return current;
    }

    //  Create the module constructor.
    var module = function() {
        this.__ROOT_NS__ = {"__NAMESPACE_FLAG__": {}};
    };

    //  Add prototypes.
    module.prototype.Use = Polymorphic.Create(
        [String, Function],
        function(ns_name, callback) {
            //  Route to the namespace.
            var ns_obj = RouteToInnerObject(this.__ROOT_NS__, ns_name, true);

            //  Check the object type.
            if (!IsNamespaceObject(ns_obj)) {
                throw Error("Not a namespace.");
            }

            //  Run the callback.
            callback.call(this, ns_obj);
        }
    );
    module.prototype.Export = Polymorphic.Create(
        [Object, String, Function],
        function(ns_obj, fn_name, fn_obj) {
            //  Check the object type.
            if (!IsNamespaceObject(ns_obj)) {
                throw Error("Not a namespace object.");
            }

            //  Check the function name.
            if (!IsValidName(fn_name)) {
                throw SyntaxError("Invalid function name.");
            }
            if (fn_name == "__NAMESPACE_FLAG__") {
                throw SyntaxError("'__NAMESPACE_FLAG__' can't be used as a function name.");
            }

            //  Check duplication.
            if ((fn_name in ns_obj) && (IsNamespaceObject(ns_obj[fn_name]))) {
                throw Error("There is a namespace that has the same name.");
            }

            //  Export.
            ns_obj[fn_name] = fn_obj;
        }
    );
    module.prototype.Import = Polymorphic.Create(
        [String],
        function(ns_name) {
            return RouteToInnerObject(this.__ROOT_NS__, ns_name, false);
        }
    );
    module.prototype.Delete = Polymorphic.Create(
        [String],
        function(ns_name) {
            var current = this.__ROOT_NS__;
            var partition = ParseNamespace(ns_name);
            var last_name = partition[partition.length - 1];
            for (var i = 0; i < partition.length - 1; ++i) {
                var folder = partition[i];

                //  Check the object type.
                if (!IsNamespaceObject(current)) {
                    throw Error("Can't get access to the namespace or object.");
                }

                //  Check namespace existence.
                if (!(folder in current)) {
                    throw Error("Can't get access to the namespace or object.");
                }

                //  Go to the sub namespace.
                current = current[folder];
            }

            //  Check the object type.
            if (!IsNamespaceObject(current)) {
                throw Error("Can't get access to the namespace or object.");
            }

            //  Check namespace existence.
            if (!(last_name in current)) {
                throw Error("Can't get access to the namespace or object.");
            }

            delete current[last_name];
        }
    );

    //  Export the module.
    export_to[module_name] = new module();
})(window, "Namespace");
