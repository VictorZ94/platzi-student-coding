#print()? Error: SyntaxError: invalid syntax
#print(0 / 0) #Error: ZeroDivisionError: division by zero
#print(result) #Error: NameError: name 'result' is not defined

suma = lambda x, y: x + y * 2
#assert suma(2, 2) == 4 #AssertionError
print("Hola 2")

# own error messages
try:
    age = 15
    if age < 18:
        raise Exception("Don't let us younger 18 years old")
except Exception as error:
    print(f"Error: {error}")
