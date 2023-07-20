for i in range(1, 15):
    print(i)

my_iter = iter(range(1, 15))
print(my_iter)
print(next(my_iter))

def check_prime(number):
    for divisor in range(2, int(number ** 0.5) + 1):
        if number % divisor == 0:
            return False
        return True

print(check_prime(8))