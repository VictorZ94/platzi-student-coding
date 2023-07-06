nums = list(range(10)) # es igual a [*range(10)]
data = map(lambda num: num if num % 2 == 0 else (num if num % 3 == 0 else False), nums)
print(list(data))

list1 = [1, 2, 4, 5]
list2 = [5, 6, 7, 10, 15, 40]
list3 = [5, 6, 7, 10, 15, 40, 50, 90, 50]
result = list(map(lambda x, y, z: x + y + z, list1, list2, list3))
print(result)