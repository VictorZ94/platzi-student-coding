items =[
    {'product': 'shirt', 'price':120},
    {'product': 'pants', 'price':160},
    {'product': 'jacket','price':205}
]

prices = list(map(lambda x: x.get('price'), items))
print(prices)

