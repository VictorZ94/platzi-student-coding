import random
dict = {}
for i in range(1, 11):
    dict[chr(96+i)] = i
print(dict)

new_dict = {chr(96+i): i for i in range(1, 11)} 
print(new_dict)

countries = ['col', 'mex', 'bol', 'pre']
population = {}
for country in countries:
    population[country] = random.randint(1, 100)
print(population)

population_v2 = {country: random.randint(1, 100) for country in countries}
