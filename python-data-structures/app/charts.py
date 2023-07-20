import matplotlib.pyplot as plt

def generate_bar_chart(labels, values):
    fig, ax = plt.subplots()
    ax.bar(labels, values)
    #plt.show()
    plt.savefig("bar.png")

def generate_pie_chart(labels, values):
  fig, ax = plt.subplots()
  ax.pie(values, labels=labels)
  ax.axis('equal')
  #plt.show()
  plt.savefig("pie.png")

if __name__ == '__main__':
    labels = ['a', 'b', 'c']
    values = [100, 200, 80]
    #generate_bar_chart(labels, values)
    generate_pie_chart(labels, values)
