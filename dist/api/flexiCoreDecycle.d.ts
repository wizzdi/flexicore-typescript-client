export declare class FlexiCoreDecycle {
    private static findReferences;
    private static resolveReferences;
    getDecycledCopy(obj: any, catalog: any[]): any;
    /** Make a deep copy of an object or array, assuring that there is at most
     one instance of each object or array in the resulting structure. The
     duplicate references (which might be forming cycles) are replaced with
     an object of the form
     {$id: id}
     where the id is a simple string
     Modified from Douglas Crockford's cycle.js (https://github.com/douglascrockford/JSON-js/blob/master/cycle.js)
     Ported over to TypeScript, and modified to handle the reference schema that Json.NET uses.
     */
    decycle<T>(obj: T): T;
    /** Restore an object that was reduced by decycle. Members whose values are objects of the form
     {$ref: id}
     are replaced with references to the value found by the id. This will
     restore cycles. The object will be mutated.

     So,
     var s = '{$id:1, members: [{$ref:"1"}]';
         return retrocycle(JSON.parse(s));
    produces an object containing an array which holds the object itself.
    */
    static retrocycle(obj: any): any;
}
