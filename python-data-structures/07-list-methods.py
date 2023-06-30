"""
append(): Añade un ítem al final de la lista.
clear(): Vacía todos los ítems de una lista.
extend(): Une una lista a otra.
count(): Cuenta el número de veces que aparece un ítem.
index(): Devuelve el índice en el que aparece un ítem (error si no aparece).
insert(): Agrega un ítem a la lista en un índice específico.
pop(): Extrae un ítem de la lista y lo borra.
remove(): Borra el primer ítem de la lista cuyo valor concuerde con el que indicamos.
reverse(): Le da la vuelta a la lista actual.
sort(): Ordena automáticamente los ítems de una lista por su valor de menor a mayor.
"""

# append - Añade un ítem al final de la lista
my_list = list(range(1, 11, 2))
my_list.append(6)
print(my_list)

# clear - Vacía todos los ítems de una lista:
my_list.clear()
print(my_list)

# extend Une una lista a otra:
l1 = [1, 2, 3]
l2 = [4, 5, 6]
l2.extend(l1)
print(l2)
l1.extend(l2)
print(l1)

# count - Cuenta el número de veces que aparece un ítem
count_ex = ["Hola", "mundo", "mundo"].count("Hola")
print(count_ex)


# index - Devuelve el índice en el que aparece un ítem (error si no aparece)
try:
    index_ex = ["Hola", "mundo", "mundo"].index("mundo")
    print(index_ex)
except:
    print(0)

# insert(index, value)
l1 = [1, 2, 3]
l1.insert(1, 4)
l1.insert(0, 0)
l1.insert(20, 5)
print(l1)

#Una posición fuera de rango añade el elemento al final de la lista (999):
print(l1.insert(999, 35)) # imprime el valor de retorno de la funcion
print(l1) # imprime el resultado

# pop remueve un item al final de la list o puedo indicarle el index
l1 = [10,20,30,40,50]
print(l1.pop())
print(l1)
print(l1.pop(0))
print(l1)

# remove()
l = [20,30,30,30,40]
print(l.remove(30))
print(l)

# reverse()
lista = list(range(10))
lista.reverse()
print(lista)

# sort ()
lista = [5,-10,35,0,-65,100]
lista.sort()
print(lista)

# sort letter
lista = ['c', 'b', 'd', 'j', 'a']
lista.sort(reverse=1) # puedo usar reverse=True
print(lista)
