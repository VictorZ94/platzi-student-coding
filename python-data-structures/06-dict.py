import random
countries = ['col', 'mex', 'bol', 'pre']

population_v2 = {country: random.randint(1, 100) for country in countries}
print(population_v2)

result = {country: population for (country, population) in population_v2.items() if population > 50}
print(result)

text = 'Hola, Soy Victor'
unique = {c: c.upper() for c in text if c in 'aeiou'}
print(unique)

# count how many vowels are there in a string
text2 = 'Hola a todos, esta es una cadena de texto de prueba'
count_vow = {c: text2.count(c) for c in text2 if c in 'aeiou'}
print(count_vow)
