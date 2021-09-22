# coding=utf-8

import json

import xlrd

article_info = {}
data2222 = json.loads(json.dumps(article_info))
# 打开文件
data = xlrd.open_workbook('消防设施操作员-终极版.xlsx')

# 查看工作表
data.sheet_names()
print("sheets：" + str(data.sheet_names()))

for a in range(int(len(str(data.sheet_names())))):
    try:
        byname = (data.sheet_names()[a + 1])
        print(byname)
        text = "\"" + "data" + "\"" + ":" + "\"" + byname + "\""
        print(text)
        # 通过文件名获得工作表,获取工作表1
        table = data.sheet_by_name('{}'.format(byname))

        print("总行数：" + str(table.nrows))
        print("总列数：" + str(table.ncols))
        list = []
        for i in range(int(table.nrows)):
            # print(i)
            rowdata = table.row_values(i)
            # print("第{}行:".format(i+1) + str(rowdata))
            name = rowdata[0]
            url = rowdata[1]

            writer = {'name': name, 'url': url}
            list.append(writer)

        data2222["name"] = {"name": byname, "data": {}}
        data2222["name"]["data"] = list
        article = json.dumps(data2222, ensure_ascii=False)
        print(article)
    except Exception as e:
        print(e)
        print('出错了2')
        break
