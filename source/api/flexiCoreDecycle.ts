export class FlexiCoreDecycle {

    private static findReferences(obj: any, catalog: any[]): void {

        // The catalogObject function walks recursively through an object graph
        // looking for $id properties. When it finds an object with that property, then
        // it adds it to the catalog under that key.

        var i: number;
        if (obj && typeof obj === "object") {
            var id: string = obj['json-id'];
            if (typeof id === "string") {
                catalog[id] = obj;
            }

            if (Object.prototype.toString.apply(obj) === "[object Array]") {
                for (i = 0; i < obj.length; i += 1) {
                    FlexiCoreDecycle.findReferences(obj[i], catalog);
                }
            } else {
                for (var name in obj) {
                    if (obj.hasOwnProperty(name)) {
                        if (typeof obj[name] === "object") {
                            FlexiCoreDecycle.findReferences(obj[name], catalog);
                        }
                    }
                }
            }
        }
    }

    private static resolveReferences(obj: any, catalog: any[]): any {
        var i: number, item: any, name: string, id: string;

        if (obj && typeof obj === "object") {
            if (Object.prototype.toString.apply(obj) === "[object Array]") {
                for (i = 0; i < obj.length; i += 1) {
                    item = obj[i];
                    if (item && typeof item === "object") {
                        obj[i] = FlexiCoreDecycle.resolveReferences(item, catalog);

                    }
                    else {
                        if (item && typeof item === "string" && item.length === 36) {
                            if (catalog[obj[i]]) {
                                obj[i] = catalog[obj[i]];

                            }
                        }
                    }
                }
            } else if (obj.$values && Object.prototype.toString.apply(obj.$values) === "[object Array]") {
                var arr = new Array();
                for (i = 0; i < obj.$values.length; i += 1) {
                    item = obj.$values[i];
                    if (item && typeof item === "object") {

                        arr[i] = FlexiCoreDecycle.resolveReferences(item, catalog);

                    } else {
                        if (item && typeof item === "string" && item.length === 36) {
                            if (catalog[id]) {
                                obj[i] = catalog[id];

                            }
                        } else {
                            arr[i] = item;

                        }

                    }
                }
                obj = arr;
            } else {


                for (name in obj) {
                    if (obj.hasOwnProperty(name)) {
                        if (typeof obj[name] === "object") {
                            item = obj[name];
                            if (item) {
                                obj[name] = FlexiCoreDecycle.resolveReferences(item, catalog);
                            }
                        }
                        else {
                            if (obj[name] && typeof obj[name] === "string" && obj[name].length === 36) {
                                var objId = obj[name];
                                if (catalog[objId]) {
                                    obj[name] = catalog[objId];

                                }
                            }
                        }
                    }
                }


            }
        }

        return obj;
    }

    public getDecycledCopy(obj: any, catalog: any[]): any {

        // The createReferences function recurses through the object, producing the deep copy.
        var i: number; // The loop counter
        var name: string; // Property name
        var nu: any; // The new object or array

        switch (typeof obj) {
            case "object":

                // typeof null === 'object', so get out if this value is not really an object.
                // Also get out if it is a weird builtin object.

                if (obj === null ||
                    obj instanceof Boolean ||
                    obj instanceof Date ||
                    obj instanceof Number ||
                    obj instanceof RegExp ||
                    obj instanceof String) {
                    return obj;
                }

                // If the value is an object or array, look to see if we have already
                // encountered it. If so, return a {$id:id} object. This is a hard way, O(n)
                // linear search that will get slower as the number of unique objects grows.
                // JavaScript really should have a decent dictionary or map class.
                for (i = 0; i < catalog.length; i += 1) {
                    if (catalog[i] === obj) {
                        return { $ref: i.toString() };
                    }
                }

                // Otherwise, accumulate the unique value and its id.
                obj.$id = catalog.length.toString();
                catalog.push(obj);

                // If it is an array, replicate the array.
                if (Object.prototype.toString.apply(obj) === "[object Array]") {
                    nu = [];
                    for (i = 0; i < obj.length; i += 1) {
                        nu[i] = this.getDecycledCopy(obj[i], catalog);
                    }
                } else {

                    // If it is an object, replicate the object.
                    nu = {};
                    for (name in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, name)) {
                            nu[name] = this.getDecycledCopy(obj[name], catalog);
                        }
                    }
                }
                return nu;
            case "number":
            case "string":
            case "boolean":
            default:
                return obj;
        }
    }

    /** Make a deep copy of an object or array, assuring that there is at most
     one instance of each object or array in the resulting structure. The
     duplicate references (which might be forming cycles) are replaced with
     an object of the form
     {$id: id}
     where the id is a simple string
     Modified from Douglas Crockford's cycle.js (https://github.com/douglascrockford/JSON-js/blob/master/cycle.js)
     Ported over to TypeScript, and modified to handle the reference schema that Json.NET uses.
     */
    public decycle<T>(obj: T): T {
        var catalog: any[] = [];   // Keep a reference to each unique object or array
        var newObj = this.getDecycledCopy(obj, catalog);
        return newObj;
    }

    /** Restore an object that was reduced by decycle. Members whose values are objects of the form
     {$ref: id}
     are replaced with references to the value found by the id. This will
     restore cycles. The object will be mutated.

     So,
     var s = '{$id:1, members: [{$ref:"1"}]';
         return retrocycle(JSON.parse(s));
    produces an object containing an array which holds the object itself.
    */
    public static retrocycle(obj: any): any {
        var catalog: any[] = [];
        FlexiCoreDecycle.findReferences(obj, catalog);
        return FlexiCoreDecycle.resolveReferences(obj, catalog);
    }

}