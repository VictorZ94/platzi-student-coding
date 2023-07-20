# this is the way more recommended to open a file in python
with open('./text.txt', 'w') as file:
    print(file.writable())
    file.write("My code is better tha another file")
