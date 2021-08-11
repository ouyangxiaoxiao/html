import csv

filename = '消防课-整理中编码版-副本.xlsx'
with open(filename) as f:
    print(f.readlines().u)
    reader = csv.reader(f)
    print(dir(reader))
    print(reader.dialect)
    # print(list(reader))