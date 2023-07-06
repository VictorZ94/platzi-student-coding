# escope global
price = 100

def increment():
    # scop local - Solo puede llamarse dentro de la misma función.
    # Solo se puede imprimir el scope pero no se puede reasignar da un UnboundLocalError
    scope += 1
    print(f"{id(price)} Inside func {price}")

print(f"{id(price)} Outside func {price}")
increment()
