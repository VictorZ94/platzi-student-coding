# Función Lambda para calcular el cuadrado de un número
square = lambda x: x ** 2
print(square(3)) # Resultado: 9

# Funcion tradicional para calcular el cuadrado de un numero
def square1(num):
  return num ** 2
print(square(5)) # Resultado: 25

def increment(x):
    return x + 1

print(increment(5))

# name_func = lamda args: args retun value
increment2 = lambda x: x + 1
print(increment2(7))

full_name = lambda name, last_name: f"{name} {last_name}"
text = full_name("Victor", "Zuluaga")
print(text)

# EJemplos de funciones lambda
# Principiante
lambda_func = lambda x: x**2
print(lambda_func(3))

# Intermedio
lambda_func = lambda x: "Par" if x % 2 == 0 else "Impar"
print(lambda_func(3)) # Retorna Impar
print(lambda_func(4)) # Retorna Par
print(lambda_func(4)) # Retorna Par

# Complejos
footballers_goals = {'Benito': 190, 'Benato': 180, 'Eusebio': 120, 'Cruyff': 104, 'Pele': 150, 'Ronaldo': 132, 'Messi': 125}
sorted_footballers_goals = sorted(footballers_goals.items(), key=lambda x: x)
print(dict(sorted_footballers_goals))

mi_dict = {"A": 1, "C": 2, "B": 3}
sorted_my_dict = sorted(mi_dict.items(), key=lambda x: x) # Retorna ['C', 'A', 'B']
print(sorted_my_dict)
