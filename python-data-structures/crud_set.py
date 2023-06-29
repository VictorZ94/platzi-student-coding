set_countries = {'col', 'mex', 'bol', 'col'}
size = len(set_countries)
print(size)

print('col' in set_countries)
print('pe' in set_countries)

# add Añade un elemento. recibe un string
set_countries.add('pe')
print(set_countries)
set_countries.add('pe')
print(set_countries)

# update Añade cualquier tipo de objeto iterable como: listas, tuplas.
set_countries.update(('nz', 'aus'))
set_countries.update({'es', 'br'})
print(set_countries)

# remove() Elimina un elemento y si este no existe lanza el error “keyError”.
# set_countries.remove('es')
print(set_countries)

# discard(): Elimina un elemento y si ya existe no lanza ningún error.
set_countries.discard('es')
print(set_countries)

# clear(): Elimina todo el contenido del conjunto.
print(set_countries.clear())
