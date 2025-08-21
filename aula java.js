/*
===========================================================
Exercícios Práticos - Operadores em JavaScript
===========================================================
*/

// 1. Declare duas variáveis numéricas e exiba a soma usando o operador `+`.
let num1 = 10;  
let num2 = 5;
// 2. Declare duas variáveis numéricas e exiba a subtração usando o operador `-`.
console.log("Soma:", num1 + num2); 
// 3. Declare duas variáveis numéricas e exiba a multiplicação usando o operador `*`.
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
// 4. Declare duas variáveis numéricas e exiba a divisão usando o operador `/`.
console.log("Divisão:", num1 / num2);
console.log("Módulo:", num1 % num2);    
// 5. Declare duas variáveis numéricas e exiba o resto da divisão usando `%`.
console.log("Exponenciação:", num1 ** num2);    
// 6. Use o operador de exponenciação `**` para calcular 2 elevado a 5.
console.log("Exponenciação:", 2 ** 5);  
// 7. Crie uma variável e use o operador `+=` para somar um valor a ela
console.log("Resultado final de x:", x);    
console.log("Soma:", num1 + num2);      
// 7. Crie uma variável e use o operador `+=` para somar um valor a ela.
let x = 10;     
x += 5;  // x agora é 15
console.log("Resultado de x após += 5:", x);                
// 8. Crie uma variável e use o operador `-=` para subtrair um valor dela.
console.log("Subtração:", num1 - num2);
x -= 3;  // x agora é 12        
// 9. Crie uma variável e use o operador `*=` para multiplicar seu valor por outro.
console.log("Multiplicação:", num1 * num2);
x *= 2;  // x agora é 24        
// 10. Crie uma variável e use o operador `/=` para dividir seu valor por outro.
console.log("Divisão:", num1 / num2);
x /= 4;  // x agora é 6     
// 11. Crie uma variável e use o operador `%=` para obter o resto da divisão por outro valor.
console.log("Módulo:", num1 % num2);
x %= 5;  // x agora é 1     
// 11. Declare duas variáveis e use o operador `==` para comparar seus valores.
console.log("Resultado final de x:", x);
let a = 10; 
// 12. Declare duas variáveis e use o operador `===` para comparar valor e tipo.
console.log("Igualdade:", a == "10");  // true, compara só o valor
console.log("Identidade:", a === "10"); // false, compara valor e tipo      
// 13. Declare duas variáveis e use o operador `!=` para verificar se são diferentes (valores).
console.log("Desigualdade:", a != "10"); // false, valores iguais
console.log("Desigualdade estrita:", a !== "10"); // true, tipos diferentes     
// 14. Declare duas variáveis e use o operador `!==` para verificar se são diferentes (valor e tipo).
console.log("Desigualdade:", a != 5); // true, valores diferentes
console.log("Desigualdade estrita:", a !== 5); // true, valores e tipos diferentes
// 15. Declare duas variáveis e use o operador `>` para verificar se um é maior que o outro.
console.log("Maior que:", a > 5); // true, 10 é maior que 5
// 16. Declare duas variáveis e use o operador `<` para verificar se um é menor que o outro.
console.log("Menor que:", a < 15); // true, 10 é menor  que 15
// 17. Declare duas variáveis e use o operador `>=` para verificar se um é maior ou igual ao outro.
console.log("Maior ou igual:", a >= 10); // true, 10 é igual a 10
// 18. Declare duas variáveis e use o operador `<=` para verificar se um é menor ou igual ao outro.
console.log("Menor ou igual:", a <= 10); // true, 10 é igual a 10           
// 15. Compare se uma variável é maior que outra usando `>`.
console.log("Maior que:", a > 5); // true, 10 é maior que 5     
// 16. Compare se uma variável é menor que outra usando `<`.
console.log("Menor que:", a < 15); // true, 10 é menor que 15   
// 17. Compare se uma variável é maior ou igual a outra usando `>=`.
console.log("Maior ou igual:", a >= 10); // true, 10 é igual a 10   
// 18. Compare se uma variável é menor ou igual a outra usando `<=`.
console.log("Menor ou igual:", a <= 10); // true, 10 é igual a 10   
// 19. Crie uma expressão com `&&` que só retorne verdadeiro se duas condições forem verdadeiras.
console.log(true && true); // true
console.log(true && false); // false        
// 20. Crie uma expressão com `||` que retorne verdadeiro se pelo menos uma condição for verdadeira.
console.log(true || false); // true
console.log(false || false); // false   
// 21. Use o operador `!` para inverter o valor booleano de uma variável.
console.log(!true); // false
console.log(!false); // true    
// 22. Use o operador ternário `condicao ? valor1 : valor2` para verificar se um número é par ou ímpar.
console.log(5 % 2 === 0 ? "Par" : "Ímpar"); // Ímpar        
// 23. Use o operador `typeof` para verificar o tipo de uma variável string.
console.log(typeof "Olá"); // "string"  
// 24. Use o operador `typeof` para verificar o tipo de uma variável número.
console.log(typeof 42); // "number" 
// 25. Use o operador `typeof` para verificar o tipo de uma variável booleana.
console.log(typeof true); // "boolean"
// 25. Use o operador `typeof` para verificar o tipo de uma variável.
console.log(typeof x); // "number" (x é um número)
// 26. Use o operador `typeof` para verificar o tipo de uma variável.           
console.log(typeof "Texto"); // "string" (é uma string)
console.log(typeof 123); // "number" (é um número)      
// 26. Crie um objeto e use o operador `delete` para remover uma de suas propriedades.
console.log(typeof true); // "boolean" (é um booleano)
let obj = { nome: "Michael", idade: 30 };   
// 27. Use o operador `in` para verificar se uma propriedade existe em um objeto.
console.log(typeof obj); // "object" (obj é um objeto)
delete obj.idade; // remove a propriedade idade     
// 28. Use o operador `instanceof` para verificar se um objeto é instância de uma função construtora.
console.log(obj); // { nome: "Michael" } (idade foi removida)
console.log("nome" in obj); // true, a propriedade nome existe      
// 29. Crie uma operação com `??` para definir um valor padrão caso a variável seja `null` ou `undefined`.
console.log("idade" in obj); // false, a propriedade idade não existe
let valor = null;       
// 30. Combine operadores aritméticos, lógicos e de comparação em uma expressão complexa e exiba o resultado.
console.log(valor ?? "Valor padrão"); // "Valor padrão" (valor é null)
console.log((5 + 3) * 2 > 10 && (10 /   2) === 5); // true, expressão complexa  