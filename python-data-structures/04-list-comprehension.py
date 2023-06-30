import time
iterations = 11
start_time = time.time()
number = []
for element in range(iterations):
    number.append(element * 2)
end_time = time.time()
print(f'tiempo transcurrido con for: {end_time - start_time}')

start_time2 = time.time()
num_2 = [el * 2 for el in range(iterations)]
end_time2 = time.time()
print(f'tiempo transcurrido con List comprehension: {end_time2 - start_time2}')

#crear a list con los primeros 100 numero pares
number = []
for num in range(1, 100):
    if num % 2 == 0:
        number.append(num)
print(number)

# List comprehenstion multi-line
[(num,print(f"{num}, {num*2}")) for num in range(1, 10) if num % 2 == 0]
