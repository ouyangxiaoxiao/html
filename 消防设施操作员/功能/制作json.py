# coding=utf-8

import json

import xlrd

# 打开文件
data = xlrd.open_workbook('消防设施操作员-终极版.xlsx')

# 查看工作表
data.sheet_names()
# print("sheets：" + str(data.sheet_names()))
obj = {}
obj["name"] = {"title": "消防设施操作员", "data": {}}
print(obj)
list = []
list1 = []
# for a in range(int(len(str(data.sheet_names())))):
for a in range(8):

    byname = (data.sheet_names()[a])
    # print(byname)

    # 通过文件名获得工作表,获取工作表1
    table = data.sheet_by_name('{}'.format(byname))

    # print("总行数：" + str(table.nrows))
    # print("总列数：" + str(table.ncols))
    list_data = {"name":byname}

    list.append(list_data)


    # obj[a]["name"] = byname
    for i in range(int(table.nrows)):
        # print(i)
        rowdata = table.row_values(i)
        # print("第{}行:".format(i+1) + str(rowdata))
        name = rowdata[0]
        url = rowdata[1]

        writer = {"name": name, "url": url}
        list1.append(writer)

    list[a]["data"]=list1

obj = json.dumps(list, ensure_ascii=False)


print(obj)
