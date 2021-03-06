# coding=utf-8

import xlrd
import json
import os

# obj = {}

# 打开文件
data = xlrd.open_workbook('消防设施操作员-终极版.xlsx')

# 查看工作表
data.sheet_names()
# print("sheets：" + str(data.sheet_names()))

for a in (data.sheet_names()):
    byname = a

    # 通过文件名获得工作表,获取工作表1
    table = data.sheet_by_name('{}'.format(byname))

    # print("总行数：" + str(table.nrows))
    # print("总列数：" + str(table.ncols))
    list = []
    for i in range(int(table.nrows)):
        # print(i)
        rowdata = table.row_values(i)
        # print("第{}行:".format(i+1) + str(rowdata))
        name = rowdata[0]
        url = rowdata[1]

        writer = {'name': name, 'url': url}
        list.append(writer)
    list_data = {"name": byname, "data": list}
    # print(list_data)
    obj = json.dumps(list_data, ensure_ascii=False)
    print(obj)
    path = ("../json/"+byname+".json")
    # open(path)
    with open(path,'w', encoding='utf-8') as f:
        f.write(obj)
