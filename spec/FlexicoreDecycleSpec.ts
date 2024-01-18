import { FlexiCoreDecycle } from '../source/api/FlexiCoreDecycle';

describe("FlexiCoreDecycle", () => {


    describe("decycle method", () => {
        it("should handle simple objects without cycles", () => {
            const simpleObject = { name: "Test", value: 123 };
            const decycled = FlexiCoreDecycle.decycle(simpleObject);
            expect(decycled).toEqual(simpleObject);
        });

        it("should replace duplicate references with ids in complex nested objects including arrays and various types", () => {
            // Define a more complex object with multiple levels of nesting
            const complexObject: FlexibleObject = {
                name: "Test",
                number: 42,
                nested: {
                    date: new Date(),
                    flag: true,
                    array: [1, "two", null]
                },
                array: [],
                anotherObject: null
            };
        
            // Creating references and cycles
            complexObject.array.push(complexObject.nested);
            complexObject.array.push(complexObject);
            complexObject.nested.array.push(complexObject);
            complexObject.anotherObject = complexObject.nested;
        
            // Decycle the complex object
            const decycled = FlexiCoreDecycle.decycle(complexObject);
        
            // Check that the decycled object contains IDs instead of duplicate references
            expect(decycled.array).toBeDefined();
            expect(typeof decycled.array[1]).toBe("string"); // Reference to the complexObject itself
            expect(decycled.nested.array[3]).toBeDefined();
            expect(typeof decycled.nested.array[3]).toBe("string"); // Reference to the complexObject
        
            // Check for nested properties and types
            expect(decycled.nested.date).toEqual(jasmine.any(Date));
            expect(decycled.nested.flag).toBe(true);
            expect(decycled.nested.array[0]).toBe(1);
            expect(decycled.nested.array[1]).toBe("two");
            expect(decycled.nested.array[2]).toBeDefined();
            expect(decycled.anotherObject).toBeDefined();
            expect(typeof decycled.anotherObject).toBe("string");
        });
        
    });

    describe("retrocycle method", () => {
        it("should restore references in decycled objects", () => {
            const complexObject:FlexibleObject = { name: "Test" };
            complexObject["self"] = complexObject;
            const decycled = FlexiCoreDecycle.decycle(complexObject);
            const retrocycled = FlexiCoreDecycle.retrocycle(decycled);

            expect(retrocycled).toEqual(jasmine.any(Object));
            expect(retrocycled.self).toBe(retrocycled);
        });
    });
});

interface FlexibleObject {
    name: string;
    [key: string]: any; // This allows any number of additional properties of any type
}
