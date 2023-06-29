import time
start_time = time.time()
number = []
for element in range(1, 11):
    number.append(element * 2)
print(number)
end_time = time.time()
print(f'tiempo transcurrido con for: {end_time - start_time}')

start_time2 = time.time()
num_2 = [el * 2 for el in range(1, 11)]
print(num_2)
end_time2 = time.time()
print(f'tiempo transcurrido con List comprehension: {end_time2 - start_time2}')
