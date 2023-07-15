import utils

keys, values = utils.get_population()
print(keys, values)

data = [
  {
    'country': 'Colombia',
    'Population': 500
  },
  {
    'country': 'Peru',
    'Population': 250
  },
  {
    'country': 'Argentina',
    'Population': 350
  }
]

result = utils.population_by_country(data, 'Colombia')
print(result)
print(utils.__name__)
print(utils.__doc__)
print(utils.__file__)
print(dir(utils))
