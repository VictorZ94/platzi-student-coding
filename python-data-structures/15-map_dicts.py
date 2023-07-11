items =[
    {'product': 'shirt', 'price':120},
    {'product': 'pants', 'price':160},
    {'product': 'jacket','price':205}
]

prices = list(map(lambda x: x.get('price'), items))
print(prices)

def add_taxes(item):
    item['taxes'] = item['price'] * .19
    return item


prices_and_taxes = list(map(add_taxes, items))
print(prices_and_taxes)

# new_prices_and_taxes = list(map( lambda x: x|{'tax': x['price']*0.19}, items))
new_prices_and_taxes = list(map(lambda item: {**item, **{"tax": item["price"]*.19}}, items)) #it's the same to the line above
print(new_prices_and_taxes)
