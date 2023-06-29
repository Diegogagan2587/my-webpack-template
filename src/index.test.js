/**
 * @jest-environment jsdom
 */

// math.js
function add(a, b) {
    return a + b;
  }
  
  // math.test.js
  test('add function adds two numbers correctly', () => {
    // Arrange
    const a = 2;
    const b = 3;
  
    // Act
    const result = add(a, b);
  
    // Assert
    expect(result).toBe(5);
  });


  //lets test if we can work with DOM
  const container = document.createElement('ul');
  container.innerHTML = `
  <li></li>
  <li></li>
  `
  console.log(container);