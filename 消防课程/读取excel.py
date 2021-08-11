# coding=utf-8
#在读的环节就写了
import xlrd
import xlwt
import os
import shutil
# 打开文件
data = xlrd.open_workbook('消防课-整理中编码版.xlsx')
# 创建一个Workbook对象，这就相当于创建了一个Excel文件
book2 = xlwt.Workbook(encoding='utf-8', style_compression=0)
# 查看工作表
data.sheet_names()
print("sheets：" + str(data.sheet_names()))

for a in range(int(len(str(data.sheet_names())))):
    try:
        byname = (data.sheet_names()[a+1])
        print(byname)

        # 创建一个sheet
        sheet = book2.add_sheet(byname, cell_overwrite_ok=True)

        # 通过文件名获得工作表,获取工作表1
        table = data.sheet_by_name('{}'.format(byname))

        print("总行数：" + str(table.nrows))
        print("总列数：" + str(table.ncols))
        for i in range(int(table.nrows)):
            # print(i)
            rowdata = table.row_values(i)
            # print("第{}行:".format(i+1) + str(rowdata))
            name = (rowdata[3])
            code = (rowdata[4])
            newname = rowdata[5]
            http0= rowdata[0]
            http1= rowdata[1]
            url= 'https://ouyangxiaoxiao.github.io/xiaofangshipin/'+byname+'/'+code+'.mp4'
            print(byname,http0,http1,name,code,newname)
            # i 代表行数
            #写入相应数据
            sheet.write(i, 0, http0)
            sheet.write(i, 1, http1)
            # sheet.write(i, 2, name)
            sheet.write(i, 3-1, code)
            sheet.write(i, 4-1, newname)
            sheet.write(i, 5-1, url)
            #保存文件
            # book2.save('stu.xls')

            # 保存文本
            f1 = open('test.txt', 'a')
            f1.write('<li value="'+url+'"><span>'+newname+'</span><span>消防设施操作员</span><span>'+byname+'</span></li>'+'\n')

            # try:
            #
            #     # 设置旧文件名（就是路径+文件名）
            #     oldname = 'E:/编程/python_2/视频/xiaofangshipin/'+ str(byname)   +'/'+ name +'.mp4' # os.sep添加系统分隔符
            #
            #     # 设置新文件名
            #     newname = 'E:/编程/python_2/视频/xiaofangshipin/'+ str(byname) +'/'+ code+'.mp4'
            #     # 复制文件
            #     # shutil.copy(oldname, newname)
            #     # 修改文件名
            #     # os.rename(oldname, newname)  # 用os模块中的rename方法对文件改名
            #     # print(oldname, '======>', newname)

            # cel_B3 = table.cell(3, 2).value
            # print("第三行第二列的值：" + cel_B3)
            # except Exception as e:
            #     print(e)
            #     print('出错了1')

    except Exception as e:
        print(e)
        print('出错了2')
        break










# from xlutils.copy import copy
# import xlrd
# import xlwt
# #xlutils:修改excel
# book1 = xlrd.open_workbook('消防课-整理中编码版-副本.xlsx')
# print(book1.sheet_names())
# # 创建一个Workbook对象，这就相当于创建了一个Excel文件
# book2 = xlwt.Workbook(encoding='utf-8', style_compression=0)
# # 创建一个sheet
# sheet = book2.add_sheet('test', cell_overwrite_ok=True)
#
# print(5555555555555)
# print(book2.get_sheet)
# print(dir(book2))
# # sheet = book2.get_sheet(0)#获取第几个sheet页，book2现在的是xlutils里的方法，不是xlrd的
# print(dir(sheet)) #获取方法
#
# print(sheet.name)
# print(sheet.Column)
# print(sheet.Row)
# sheet.write(1,3,'换行')
# sheet.write(1,0,'hello')
# book2.save('stu.xls')