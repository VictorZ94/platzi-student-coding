Básicamente la propiedad transform() nos permité modificar cualquier elemento que tengamos, podemos agrandarla, achicarla, escalarla, moverla, girarla, etc. Solo con esta propiedad ya tenemos las suficiente herramientas para manipular nuestro elemento, es decir, con ella ya podemos hacer que nuestro elemento se mueva a X posición, o que gire X grados 😄.
.
Sin embargo, únicamente con esta propiedad no lograremos ver ninguna animación, es decir, si tu usas la propiedad, verás que al cargar la página, el elemento aparecerá ya con la propiedad apicada, por ejemplo, si lo moviste 6 pixeles a la derecha entonces el elemento ya aparecerá movido, y es aquí donde entra transition. Esta propiedad permite generar ese movimiento, pero para ello necesita un punto inicial y un punto final.
.
Imagina que quieres mover un elemento 6 píxeles a la derecha, entonces, tu estado inicial va a ser 0 píxeles (cuando aún no se ha movido) y tu estado final va a ser 6 píxeles (cuando ya se movió), y la propiedad transition se encargará se que ese movimiento se vea suave, es decir, lo animará 👇