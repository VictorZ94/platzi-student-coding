a = "banana"
b = "banana"
print(f"id is {id(a)} and has a value {a}")
print(f"id is {id(b)} and has a value {b}")
# We can test whether two names have the same value using ==:
print(a == b) # True
# We can test whether two names refer to the same object using the is operator:
print(a is b) # True

c = [1, 2, 3]
d = [1, 2, 3]
print(c == d) # True
print(c is d) # False

e = [1, 2, 3]
f = e.copy()
print(e == f) # True
print(e is f) # False

# clone list using slice operator 
h = [1, 2, 3]
i = h[:]
i[1] = 5
print(i)
print(h)
print(i == h)
print(i is h)