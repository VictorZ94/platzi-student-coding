def increment(x):
    return x + 2

# increment with lambda
increment_v2 = lambda x: x + 2


def high_ord_func(x, func):
    return x + func(x)

# high_ord_func with lambda
high_ord_func_v2 = lambda x, func: x + func(x)

result = high_ord_func(15, increment)
result_v2 = high_ord_func_v2(16, increment_v2)
print(result)
print(result_v2)

# podemos manipular la lambda directamente
print(high_ord_func_v2(10, lambda x: x + 2 ))
print(high_ord_func_v2(10, lambda x: x - 2 ))
print(high_ord_func_v2(10, lambda x: x * 2 ))
print(high_ord_func_v2(10, lambda x: x // 2 ))
