# Qué es el Map Reduce?
- Map Reduce permite realizar acciones sobre datos de forma paralela y altamente escalable.
- Es un modelo de programación que consta de dos pasos: Map y Reduce
- Map: La información completa se separa en bloques, cada uno con una clave. Se realiza alguna transformación y se envía cada bloque al paso de Reduce.
- Reduce: Un Reduces coge los datos que salen del paso de Map (que tengan la misma clave) y los procesa.

# Cuándo usar?
- Se utiliza sobretodo cuando tienes una agregacion que es muy lenta y necesitas que sea más eficiente.