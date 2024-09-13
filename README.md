# Entregable-TheCatApi
En este repositorio voy a subir un trabajo en el cual tenia que consumir una API publica y mostrar los datos. Para ello eleji thecatapi, ya que me amo los gatos.

The Cat API: https://thecatapi.com/
The Cat API es una API pública que permite a los desarrolladores acceder a imágenes y datos de gatos de manera sencilla y rápida. Es ideal para proyectos que necesitan generar contenido aleatorio o específico sobre gatos, como aplicaciones web, móviles, o simplemente para divertirse.

Funcionalidades Principales
Obtener Imágenes Aleatorias de Gatos: Puedes solicitar imágenes de gatos de forma aleatoria o según ciertos criterios como raza, categoría, etc.

http
Copy code
GET https://api.thecatapi.com/v1/images/search
Este endpoint devuelve una lista de imágenes de gatos aleatorias.

Filtrar por Raza de Gato: La API permite filtrar imágenes según la raza de los gatos. Para ello, debes conocer el breed_id de la raza deseada.

http
Copy code
GET https://api.thecatapi.com/v1/images/search?breed_id=beng
Este endpoint devuelve imágenes de gatos de raza Bengalí (beng).

Listado de Razas de Gatos: Puedes obtener una lista completa de razas disponibles con sus características, tales como el temperamento, descripción, y más.

http
Copy code
GET https://api.thecatapi.com/v1/breeds
Esto es útil para mostrar detalles sobre diferentes razas o para proporcionar opciones de filtro en aplicaciones.

Votos y Favoritos: Permite a los usuarios votar por sus imágenes favoritas y guardar favoritos mediante endpoints específicos. Esto es útil para crear funcionalidades de usuarios personalizados.

Autenticación
Algunas funcionalidades requieren una API Key que se puede obtener registrándose en The Cat API. Una vez obtenida, debes agregarla en los encabezados de tus solicitudes para poder acceder a todas las funcionalidades.
