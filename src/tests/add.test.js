const add = (a,b) => a + b;

const generateGreeting = (name = 'Anonymous')=> `Hello ${name}`;

test('should add two numbers', ()=> {
    const result = add(3,4);
    expect(result).toBe(7);
 });

test ('should print Hello Mike', ()=> {
    expect(generateGreeting('Mike')).toBe(`Hello Mike`);
});
test ('should print Hello Anonymous', ()=> {
    expect(generateGreeting()).toBe(`Hello Anonymous`);
});