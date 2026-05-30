# Casos de prueba — SauceDemo

## Módulo: Inicio de sesión

---

### TC-L-01 — Login exitoso con usuario válido

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` registrado y activo en el sistema.

**Pasos**
1. Navegar a https://www.saucedemo.com/
2. Ingresar username: `standard_user`
3. Ingresar password: `secret_sauce`
4. Hacer click en el botón LOGIN

**Resultado esperado**
El sistema redirige al usuario a `/inventory.html`. Se muestra el catálogo de productos correctamente.
Se carga la página de productos con el título Products.

---

### TC-L-02 — Login fallido con credenciales incorrectas

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Negativo |

**Precondiciones**
Página de login cargada correctamente.

**Pasos**
1. Navegar a https://www.saucedemo.com/
2. Ingresar username: `standard_user`
3. Ingresar password: `clave_incorrecta`
4. Hacer click en LOGIN

**Resultado esperado**
Se muestra el mensaje de error: *"Username and password do not match any user in this service"*. El usuario permanece en la página de login.

---

### TC-L-03 — Login con usuario bloqueado (locked_out_user)

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Negativo |

**Precondiciones**
Usuario `locked_out_user` existente en el sistema.

**Pasos**
1. Navegar a https://www.saucedemo.com/
2. Ingresar username: `locked_out_user`
3. Ingresar password: `secret_sauce`
4. Hacer click en LOGIN

**Resultado esperado**
Se muestra el mensaje: *"Sorry, this user has been locked out."* El acceso es denegado y el usuario permanece en el login.

---

### TC-L-04 — Login con ambos campos vacíos

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Negativo |


**Pasos**
1. Navegar a https://www.saucedemo.com/
2. No ingresar ningún valor en username ni password
3. Hacer click en LOGIN

**Resultado esperado**
Se muestra el mensaje: *"Username is required"*. Los campos muestran indicador de error. El login no se procesa.

---

### TC-L-05 — Login con password vacío

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Negativo |


**Pasos**
1. Navegar a https://www.saucedemo.com/
2. Ingresar username: `standard_user`
3. Dejar el campo password vacío
4. Hacer click en LOGIN

**Resultado esperado**
Se muestra el mensaje: *"Password is required"*. El campo username conserva el valor ingresado.

---

### TC-L-06 — Login con username vacío y password completo

| Campo | Detalle |
|-------|---------|
| Prioridad | Media |
| Tipo | Negativo |


**Pasos**
1. Navegar a https://www.saucedemo.com/
2. Dejar el campo username vacío
3. Ingresar password: `secret_sauce`
4. Hacer click en LOGIN

**Resultado esperado**
Se muestra el mensaje: *"Username is required"*. El login no se procesa.

---

### TC-L-07 — Cierre de mensaje de error mediante ícono X

| Campo | Detalle |
|-------|---------|
| Prioridad | Media |
| Tipo | Positivo |

**Precondiciones**
Se debe haber disparado un error de login previo (mensaje de error visible).

**Pasos**
1. Generar un error de login con credenciales incorrectas
2. Verificar que el mensaje de error es visible
3. Hacer click en el ícono X del mensaje de error

**Resultado esperado**
El mensaje de error desaparece. Los íconos de error en los campos también se eliminan. El formulario queda limpio y habilitado para un nuevo intento.

---

### TC-L-08 — Acceso directo a ruta protegida sin sesión activa

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Negativo |

**Precondiciones**
El usuario no está logueado (sin sesión activa en el navegador).

**Pasos**
1. Abrir el navegador sin haber iniciado sesión
2. Navegar directamente a https://www.saucedemo.com/inventory.html

**Resultado esperado**
El sistema redirige automáticamente a la página de login. No se permite el acceso a rutas protegidas sin autenticación.

---

### TC-L-09 — Persistencia de sesión al navegar entre páginas

| Campo | Detalle |
|-------|---------|
| Prioridad | Media |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` logueado correctamente.

**Pasos**
1. Iniciar sesión con `standard_user`
2. Navegar a `/inventory.html`
3. Usar el botón Atrás del navegador
4. Navegar nuevamente a `/inventory.html`

**Resultado esperado**
La sesión persiste. El usuario permanece logueado sin ser redirigido al login.

---

### TC-L-10 — Logout e invalidación de sesión

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` logueado correctamente.

**Pasos**
1. Iniciar sesión con `standard_user`
2. Hacer click en el ícono del menú (☰)
3. Hacer click en "Logout"
4. Intentar navegar directamente a `/inventory.html`

**Resultado esperado**
El usuario es redirigido a la página de login. La sesión queda invalidada y no es posible acceder a rutas protegidas.

---

### TC-L-11 — Campo password enmascarado correctamente

| Campo | Detalle |
|-------|---------|
| Prioridad | Baja |
| Tipo | Positivo |

**Precondiciones**
Página de login cargada.

**Pasos**
1. Navegar a https://www.saucedemo.com/
2. Hacer click en el campo Password
3. Escribir cualquier texto

**Resultado esperado**
El texto ingresado se muestra con caracteres enmascarados (•••••). El atributo `type` del input es `password`.

---

## Módulo: Agregado de productos al carrito de compras

---

### TC-P-01 — Agregar un producto al carrito desde el inventario

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` logueado. Página de inventario visible.

**Pasos**
1. Iniciar sesión con `standard_user`
2. En la página de inventario, hacer click en "Add to cart" de cualquier producto
3. Observar el botón del producto y el badge del carrito en el header

**Resultado esperado**
El botón cambia a "Remove". El badge del carrito en el header muestra el número 1.

---

### TC-P-02 — Agregar múltiples productos al carrito

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` logueado. Página de inventario visible.

**Pasos**
1. Hacer click en "Add to cart" del primer producto
2. Hacer click en "Add to cart" del segundo producto
3. Hacer click en "Add to cart" del tercer producto
4. Observar el badge del carrito en el header

**Resultado esperado**
El badge muestra el número 3. Cada botón utilizado cambia su etiqueta a "Remove".

---

### TC-P-03 — Verificar que el producto agregado aparece correctamente en el carrito

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` logueado. Al menos un producto agregado al carrito.

**Pasos**
1. Registrar nombre y precio del producto antes de agregarlo
2. Hacer click en "Add to cart" de ese producto
3. Hacer click en el ícono del carrito para ir a `/cart.html`

**Resultado esperado**
El producto aparece en el carrito con el mismo nombre y precio que en el inventario. El badge del header refleja la cantidad correcta.

---

### TC-P-04 — Remover un producto desde la página de inventario

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` logueado. Al menos un producto agregado al carrito.

**Pasos**
1. Agregar un producto al carrito desde el inventario
2. Verificar que el botón del producto muestra "Remove"
3. Hacer click en el botón "Remove" en la página de inventario

**Resultado esperado**
El botón vuelve a mostrar "Add to cart". El badge del carrito disminuye en 1. Si era el único producto, el badge desaparece.

---

### TC-P-05 — Persistencia del carrito al re-login con el mismo usuario

| Campo | Detalle |
|-------|---------|
| Prioridad | Media |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` logueado.

**Pasos**
1. Agregar 2 productos al carrito
2. Hacer logout
3. Iniciar sesión nuevamente con `standard_user`
4. Verificar el badge del carrito y su contenido

**Resultado esperado**
Los productos agregados previamente siguen presentes en el carrito tras re-autenticarse con el mismo usuario.

---

### TC-P-06 — Carrito aislado entre distintos usuarios

| Campo | Detalle |
|-------|---------|
| Prioridad | Media |
| Tipo | Negativo |

**Precondiciones**
Acceso a dos cuentas de usuario distintas.

**Pasos**
1. Loguear con `standard_user`
2. Agregar 2 productos al carrito
3. Hacer logout
4. Loguear con `visual_user` (u otro usuario válido)
5. Navegar al carrito y verificar su contenido

**Resultado esperado**
El carrito del segundo usuario está vacío. Los productos del primer usuario no son accesibles ni visibles para otro usuario.

---

### TC-P-07 — Agregar todos los productos disponibles al carrito

| Campo | Detalle |
|-------|---------|
| Prioridad | Media |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` logueado en el inventario.

**Pasos**
1. Hacer click en "Add to cart" de cada uno de los 6 productos disponibles
2. Observar el badge del carrito tras cada adición

**Resultado esperado**
El badge muestra 6 al completar. Todos los botones muestran "Remove". El sistema no arroja errores al agregar el total de productos disponibles.

---

### TC-P-08 — Agregar producto desde la página de detalle del producto

| Campo | Detalle |
|-------|---------|
| Prioridad | Media |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` logueado.

**Pasos**
1. Hacer click en el nombre o imagen de un producto para acceder a su página de detalle
2. Verificar que se muestra la página de detalle correctamente
3. Hacer click en "Add to cart" dentro de la página de detalle

**Resultado esperado**
El producto es agregado al carrito. El badge del header muestra 1. El botón en la página de detalle cambia a "Remove".

---

### TC-P-09 — Verificar que los precios en el carrito coinciden con el inventario

| Campo | Detalle |
|-------|---------|
| Prioridad | Alta |
| Tipo | Positivo |

**Precondiciones**
Usuario `standard_user` logueado.

**Pasos**
1. Registrar el nombre y precio de 3 productos en la página de inventario
2. Agregar esos 3 productos al carrito
3. Navegar al carrito (`/cart.html`)
4. Comparar el nombre y precio de cada producto

**Resultado esperado**
Los nombres y precios mostrados en el carrito son exactamente iguales a los del inventario. No hay discrepancias de datos.
