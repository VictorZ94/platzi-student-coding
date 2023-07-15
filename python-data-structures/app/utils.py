"""
This module is for testing
"""

def get_population():
  keys = ['Colombia', 'Peru', 'Argentina']
  values = [500, 250, 350]
  return keys, values

def population_by_country(data, country): 
  result = list(filter(lambda item: item['country'] == country, data))
  return result

