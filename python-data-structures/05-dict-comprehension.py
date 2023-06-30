import random
my_dict = {}
for i in range(1, 11):
    my_dict[chr(96+i)] = i
print(dict)

new_dict = {chr(96+i): i for i in range(1, 11)} 
print(new_dict)

countries = ['col', 'mex', 'bol', 'pre']
population = {}
for country in countries:
    population[country] = random.randint(1, 100)
print(population)

population_v2 = {country: random.randint(1, 100) for country in countries}

names = ['nico', 'zule', 'santi']
ages = [12, 56, 98]
print(dict(zip(names, ages)))

print({name: age for (name, age) in zip(names, ages)})
print({names[i] : ages[i] for i in range(len(names))})
