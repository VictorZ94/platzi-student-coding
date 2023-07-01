a = 5
b = a
print(id(a))
print(a)
print(id(b))
print(b)

# shallow copy - in list both values reference the same memory space
a = [3, 4, 5]
b = a
a[2] = 7
print(id(a))
print(a)
print(id(b))
print(b)
print()
# deep copy - you need to use copy for doing a deep copy 
a = [3, 4, 5]
b = a.copy()
a[2] = 7
print(id(a))
print(a)
print(id(b))
print(b)

# dict swallow and deep
print()
a = {'a': 'b'}
b = a.copy() # copy separa en otra espacio de memoria
b['c'] = 'd'
print(id(a))
print(a)
print(id(b))
print(b)