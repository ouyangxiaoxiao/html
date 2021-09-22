# coding=utf-8

import xlrd
import os
import shutil
from xlutils.copy import copy
# 打开文件
data = xlrd.open_workbook('消防课-整理中编码版.xlsx')

# 查看工作表
data.sheet_names()
print("sheets：" + str(data.sheet_names()))

for a in range(int(len(str(data.sheet_names())))):
    try:
        byname = (data.sheet_names()[a+1])
        print(byname)

        # 通过文件名获得工作表,获取工作表1
        table = data.sheet_by_name('{}'.format(byname))

        print("总行数：" + str(table.nrows))
        print("总列数：" + str(table.ncols))
        for i in range(int(table.nrows)):
            # print(i)
            rowdata = table.row_values(i)
            # print("第{}行:".format(i+1) + str(rowdata))
            http0 = rowdata[0]
            http1 = rowdata[1]
            url = rowdata[0]
            name = (rowdata[2])
            code = (rowdata[5])


            print(byname,http0,http1,name,code,url)
            # 保存文本
            f1 = open('test.txt', 'a')
            f1.write(
                '<li value="' + url + '"><span>' + name + '</span><span>一级消防工程师</span><span>' + byname + '</span></li>' + '\n')

            try:

                # 设置旧文件名（就是路径+文件名）
                oldname = 'E:/编程/python_2/视频/xiaofangshipin2/'+ str(byname)   +'/'+ name +'.mp4' # os.sep添加系统分隔符

                # 设置新文件名
                newname = 'E:/编程/python_2/视频/xiaofangshipin2/'+ str(byname) +'/'+ code+'.mp4'
                # 复制文件
                # shutil.copy(oldname, newname)
                # 修改文件名
                os.rename(oldname, newname)  # 用os模块中的rename方法对文件改名
                print(oldname, '======>', newname)


            except Exception as e:
                print(e)
                print('出错了1')


    except Exception as e:
        print(e)
        print('出错了2')
        break