
# Reglas para un Buen Nombrado

El objetivo de estas reglas es conseguir que nuestro código sea más legible, mantenible y fácil de entender para cualquier persona que lo lea. Un buen nombrado es una de las herramientas más poderosas para escribir Código Limpio.

## Principios Fundamentales

1.  **Nombres Descriptivos y con Significado**:
    *   Las variables, funciones, clases y módulos deben tener nombres que revelen su intención. Un buen nombre te dice *qué* hace, *por qué* existe y *cómo* se usa.
    *   **Mal**: `let d;`
    *   **Bien**: `let elapsedTimeInDays;`

2.  **Evita la Desinformación**:
    *   No uses nombres que puedan confundir. Por ejemplo, no llames `accountList` a algo que no es una lista.
    *   Evita abreviaturas o nombres que solo tú entiendas. `hp` podría significar "Hewlett-Packard" o "hit points".

3.  **Nombres Pronunciables y Fáciles de Buscar**:
    *   Si no puedes pronunciar un nombre, es difícil hablar sobre él.
    *   **Mal**: `let genymdhms;`
    *   **Bien**: `let generationTimestamp;`
    *   Nombres de una sola letra solo son aceptables en contextos muy cortos y conocidos (como `i` en un bucle `for`).

## Reglas de Estilo

1.  **Usa un Estilo Consistente**:
    *   Si usas `camelCase` para las variables, úsalo en todo el proyecto. Si usas `PascalCase` para las clases, sé consistente.
    *   **Ejemplo**: `const userCount = 10;` y `class UserProfile { ... }`

2.  **Los Métodos y Funciones son Verbos**:
    *   Las funciones y métodos deben empezar con un verbo o una frase verbal que describa lo que hacen.
    *   **Mal**: `function password() { ... }`
    *   **Bien**: `function hashPassword() { ... }`

3.  **Usa Nombres Positivos para Booleanos**:
    *   Los nombres de las variables booleanas deben sonar como una pregunta que se responde con "sí" o "no".
    *   **Mal**: `let notFound = true;`
    *   **Bien**: `let wasFound = false;` o `let isFound = false;`

## Directrices Adicionales

1.  **Sin "Números Mágicos" ni Cadenas de Texto Mágicas**:
    *   En lugar de usar valores literales directamente en el código, asígnalos a constantes con nombres descriptivos.
    *   **Mal**: `if (user.status === 3) { ... }`
    *   **Bien**: `const DELETED_STATUS = 3; if (user.status === DELETED_STATUS) { ... }`

2.  **Una Palabra por Concepto**:
    *   Elige una palabra para un concepto abstracto y no la cambies. Por ejemplo, si usas `fetch` para obtener datos, no uses `retrieve` o `get` en otras partes del código para lo mismo.

3.  **No Añadas Contexto Innecesario**:
    *   Si una clase se llama `Car`, no es necesario que sus propiedades se llamen `carModel` o `carColor`. `model` y `color` son suficientes.

4.  **Elimina los Comentarios Obvios**:
    *   Un buen código se documenta a sí mismo. Si necesitas un comentario para explicar lo que hace una variable o una función, probablemente necesites un nombre mejor.
    *   **Mal**: `let d; // elapsed time in days`
    *   **Bien**: `let elapsedTimeInDays;`
