# Esto es un set, es parecido a un dict pero no tiene key: value
# puedo inicializarlo con valores repetidos pero los remueve.
set_countries = {'col', 'mex', 'bol', 'col'}
print(set_countries)
print(type(set_countries))

set_numbers = {1, 2, 2, 443, 23}
print(set_numbers)

set_types = {1, 'hola', False, 12.12, True}
print(set_types)

set_from_string = set('hoola')
print(set_from_string)

set_bool = set((True, False, 1 , 0))
print(set_bool)

list_to_set = [1,2,3,1,2,3,4]
print(set(list_to_set))