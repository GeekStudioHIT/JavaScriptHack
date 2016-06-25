/*
 *  Copyright (C) 2015 XiaoJSoft Studio. All rights reserved.
 *
 *  Use of this source code is governed by a BSD-style license that can be found in the license.txt file.
 */

(function(export_to, module_name) {
    function IsInstanceOf(obj, cls) {
        //  Reference:
        //    http://tobyho.com/2011/01/28/checking-types-in-javascript/
        if (cls == Number || cls == Boolean || cls == String) {
            //  Special checking method for primitive types.
            return obj.constructor == cls;
        } else {
            return (obj instanceof cls);
        }
    }

    function IsUndefined(obj) {
        return typeof(obj) == "undefined";
    }

    function IsParametersMatched(parameters, match_list) {
        //  Check parameters count.
        if (parameters.length != match_list.length) {
            return false;
        }

        //  Check the type of each parameter.
        for (var i = 0; i < parameters.length; ++i) {
            //  Ignore parameters/patterns with value 'null' or 'undefined'.
            if (parameters[i] == null) {
                continue;
            }
            if (IsUndefined(parameters[i]) || IsUndefined(match_list[i])) {
                continue;
            }

            //  Check the object type.
            if (!IsInstanceOf(parameters[i], match_list[i])) {
                return false;
            }
        }

        return true;
    }

    function IsValidMatchList(obj) {
        //  Check the object type. The match list must be an array object.
        if (!IsInstanceOf(obj, Array)) {
            return false;
        }

        //  Check each array item. Each item must be a function.
        for (var i = 0; i < obj.length; ++i) {
            if ((!IsInstanceOf(obj[i], Function)) && (!IsUndefined(obj[i]))) {
                return false;
            }
        }

        return true;
    }

    //  Create the module constructor.
    var module = function() {};

    //  Add prototypes.
    module.prototype.Create = function() {
        //  Check argument count.
        if (arguments.length == 0 || arguments.length % 2 != 0) {
            throw Error("Invalid arguments count.");
        }

        //  Extract function list and match lists from the arguments.
        var function_list = [];
        var match_lists = [];
        for (var i = 0; i < arguments.length; i += 2) {
            //  Check the type of the match list.
            if (!IsValidMatchList(arguments[i])) {
                throw Error("Invalid match list.");
            }

            //  Add the match list.
            match_lists.push(arguments[i]);

            //  Check the type of the function.
            if (!IsInstanceOf(arguments[i + 1], Function)) {
                throw Error("Invalid function.");
            }

            //  Add the function.
            function_list.push(arguments[i + 1]);
        }

        return (function(_m, _f) {
            return function() {
                //  Try to match the parameters.
                for (var i = 0; i < _m.length; ++i) {
                    if (IsParametersMatched(arguments, _m[i])) {
                        //  Call the matched function.
                        return _f[i].apply(this, arguments);
                    }
                }

                //  Throw an error if no function was called.
                throw Error("No matched function.");
            };
        })(match_lists, function_list);
    };

    //  Export the module.
    export_to[module_name] = new module();
})(window, "Polymorphic");
