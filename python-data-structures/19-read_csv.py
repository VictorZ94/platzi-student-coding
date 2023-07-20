import csv

def read_csv(path):
    with open(path, 'r') as file_csv:
        reader = csv.reader(file_csv, delimiter=',')
        header = next(reader) # as reader is iterable I can get manual the first column
        header = ["_".join(title.lower().split(" ")) for title in header]
        for row in reader:
            iterable = zip(header, row)
            #data = [dict(iterable)]
            data = [{key: value for key, value in iterable}] # it's the same thing that line above
            return data

if __name__ == '__main__':
    data = read_csv('./world_population.csv')
    print(data[0])
