file = open('./text.txt')
print(file.read()) #it reads all content file
print(file.readline()) #It reads line by line

for line in file.readline(): # it works without readlile to.
    print(line)

file.close()

# this is the way more recommended to open a file in python
with open('./text.txt') as file:
    print(file.read())



