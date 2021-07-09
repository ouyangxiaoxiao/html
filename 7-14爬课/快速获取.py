import json
import os
import requests
import re
import csv
# volumeId=1002 #控制上下册

nianji = [{"gradeId": 1, "gradeCode": "1001", "gradeName": "一年级", "xdCode": "1001", "xdName": "小学"},
          {"gradeId": 2, "gradeCode": "1002", "gradeName": "二年级", "xdCode": "1001", "xdName": "小学"},
          {"gradeId": 3, "gradeCode": "1003", "gradeName": "三年级", "xdCode": "1001", "xdName": "小学"},
          {"gradeId": 4, "gradeCode": "1004", "gradeName": "四年级", "xdCode": "1001", "xdName": "小学"},
          {"gradeId": 5, "gradeCode": "1005", "gradeName": "五年级", "xdCode": "1001", "xdName": "小学"},
          {"gradeId": 6, "gradeCode": "1006", "gradeName": "六年级", "xdCode": "1001", "xdName": "小学"},
          {"gradeId": 18, "gradeCode": "1018", "gradeName": "七年级", "xdCode": "1002", "xdName": "初中"},
          {"gradeId": 19, "gradeCode": "1019", "gradeName": "八年级", "xdCode": "1002", "xdName": "初中"},
          {"gradeId": 20, "gradeCode": "1020", "gradeName": "九年级", "xdCode": "1002", "xdName": "初中"},
          {"gradeId": 65, "gradeCode": "gao_1", "gradeName": "高一", "xdCode": "1003", "xdName": "高中"},
          {"gradeId": 66, "gradeCode": "gao_2", "gradeName": "高二", "xdCode": "1003", "xdName": "高中"},
          {"gradeId": 67, "gradeCode": "gao_3", "gradeName": "高三", "xdCode": "1003", "xdName": "高中"}]

# *************制作英语数学语文的数据
path = "首页/"
if not os.path.exists(path):
    os.makedirs(path)

lujing = path + '/' + '1.txt'

# print(lujing)
with open(lujing, 'a', encoding='utf-8', )as w:
    # f.write(html3)/这种可以的
    # f.write('"'+str(title)+'":{"xdName":"'+str(a['xdName'])+ '","gradeName":"'+str(b['gradeName'])+'","cname":"'+str(c['name'])+'","dtitle":"'+str(d['title'])+'","title":"'+str(title) + '","mp4":"'+str(mp4)+ '"},')
    w.write(str(nianji))
    # f.write('hh')
    print(str(lujing) + '完成')
# **********************************

# 准备复制展示语文数学英语的页面
with open("首页/data/模板/首页.html", "r", encoding='utf-8') as w:  # 打开文件
    shouye = w.read()  # 读取文件
    # print(shouye)

with open(path + "/index.html", "w", encoding='utf-8') as w:  # 打开文件
    w.write(str(shouye))
    # print(str(lujing) + '保存完成')

for a in nianji:#年级
    xdName = a['xdName']  # 学校名称
    xdCode = a['xdCode']  # 学校代码已生成不同风格
    gradeCode = a['gradeCode']  # 班级代码
    gradeName = a['gradeName']  # 班级名称
    print(gradeName)
    # try:
    # ce = [{"cename": "上册", "cecode": 1001}, {"cename": "下册", "cecode": 1002}]
    ce = [{"cename": "下册", "cecode": 1002}]
    # *************制作英语数学语文的数据
    path = "首页/" + str(a['xdName']) + str(a['gradeName'])
    if not os.path.exists(path):
        os.makedirs(path)

    lujing = path + '/' + '1.txt'

    # print(lujing)
    with open(lujing, 'a', encoding='utf-8', )as w:
        # f.write(html3)/这种可以的
        # f.write('"'+str(title)+'":{"xdName":"'+str(a['xdName'])+ '","gradeName":"'+str(b['gradeName'])+'","cname":"'+str(c['name'])+'","dtitle":"'+str(d['title'])+'","title":"'+str(title) + '","mp4":"'+str(mp4)+ '"},')
        w.write(str(ce))
        # f.write('hh')
        print(str(lujing) + '完成')
    # **********************************

    # 准备复制展示语文数学英语的页面
    with open("首页/data/模板/ce-年级下面展示册.html", "r", encoding='utf-8') as w:  # 打开文件
        shouye = w.read()  # 读取文件
        # print(shouye)

    with open(path + "/index.html", "w", encoding='utf-8') as w:  # 打开文件
        w.write(str(shouye))
        # print(str(lujing) + '保存完成')

    for b in ce:#上下册
        # print(b)
        cecode = b['cecode']
        cename = b['cename']
        url = 'https://api.cloud.taozhi.online/common/dictionary/client/regimentation/getRegimentationBySectionOrGradeOrVolume?section='+str(xdCode)+'&grade='+str(gradeCode)+'&volume='+str(cecode)
        # print(url)
        html = requests.get(url).content.decode()
        # print('语文数学')
        # print(html)
        # *************制作英语数学语文的数据
        path = "首页/" + str(a['xdName']) + str(a['gradeName']) + '/' + str(cename)
        if not os.path.exists(path):
            os.makedirs(path)

        lujing = path + '/' + '1.json'

        # print(lujing)
        with open(lujing, 'a', encoding='utf-8', )as w:
            # f.write(html3)/这种可以的
            # f.write('"'+str(title)+'":{"xdName":"'+str(a['xdName'])+ '","gradeName":"'+str(b['gradeName'])+'","cname":"'+str(c['name'])+'","dtitle":"'+str(d['title'])+'","title":"'+str(title) + '","mp4":"'+str(mp4)+ '"},')
            w.write(html)
            # f.write('hh')
            print(str(lujing) + '完成')
        # **********************************

        # 准备复制展示语文数学英语的页面
        with open("首页/data/模板/b-展示上下册.html", "r", encoding='utf-8') as w:  # 打开文件
            shouye = w.read()  # 读取文件
            # print(shouye)

        with open(path + "/index.html", "w", encoding='utf-8') as w:  # 打开文件
            w.write(str(shouye))
            # print(str(lujing) + '保存完成')
        data = json.loads(html)
        data1 = data['data']
        for c in data1:#学科
            # print(c)
            id = c['id']
            url = 'https://api.cloud.taozhi.online/common/dictionary/client/regimentation/getRegimentationAllByParentId?parentId=' + str(
                id) + '&gradeCode=' + str(gradeCode) + '&volumeCode=' + str(cecode)
            # print(url)
            html = requests.get(url).content.decode()
            # print(html)
            # *************制作英语数学语文的数据
            path = "首页/" + str(a['xdName']) + str(a['gradeName']) + '/' + str(cename) + '/' + str(
                c['name'])
            if not os.path.exists(path):
                os.makedirs(path)

            lujing = path + '/' + '1.json'

            # print(lujing)
            with open(lujing, 'a', encoding='utf-8', )as w:
                # f.write(html3)/这种可以的
                # f.write('"'+str(title)+'":{"xdName":"'+str(a['xdName'])+ '","gradeName":"'+str(b['gradeName'])+'","cname":"'+str(c['name'])+'","dtitle":"'+str(d['title'])+'","title":"'+str(title) + '","mp4":"'+str(mp4)+ '"},')
                w.write(html)
                # f.write('hh')
                print(str(lujing) + '完成')
            # **********************************

            # 准备复制展示语文数学英语的页面
            with open("首页/data/模板/c-语文数学英语页面.html", "r", encoding='utf-8') as w:  # 打开文件
                shouye = w.read()  # 读取文件
                # print(shouye)

            with open(path + "/index.html", "w", encoding='utf-8') as w:  # 打开文件
                w.write(str(shouye))
                # print(str(lujing) + '保存完成')



            # print('同步课堂，预习课，基础知识，阅读,写作，诗词国学，真卷下载，知识梳理')

            data = json.loads(html)
            data1 = data['data']
            # print(id)

            # print(data1)

            for d in data1:#课程
                # print(d)
                # print(d['id'])

#
                url = 'https://api.cloud.taozhi.online/album-management/client/album/sales/list?page=1&size=50&resourceType=4&orderBy=updatedAt&sectionId=' + str(
                    xdCode) + '&volumeId=' + str(cecode) + '&gradeId=' + str(
                    gradeCode) + '&regimentationIds=' + str(
                    c['id']) + '&secondRegimentationIds=' + str(d['id'])
                # print(url)
                html = requests.get(url).content.decode()
                print(html)
                print('课程名称：'+ str(d['name']))
                # print(html)
                #*************同步课堂基础的数据
                path = "首页/" + str(a['xdName']) + str(a['gradeName']) + '/' + str(cename) + '/' + str(
                    c['name']) + '/' + str(d['name'])
                if not os.path.exists(path):
                    os.makedirs(path)

                lujing = path + '/' + '1.json'

                # print(lujing)
                with open(lujing, 'a', encoding='utf-8', )as w:
                    # f.write(html3)/这种可以的
                    # f.write('"'+str(title)+'":{"xdName":"'+str(a['xdName'])+ '","gradeName":"'+str(b['gradeName'])+'","cname":"'+str(c['name'])+'","dtitle":"'+str(d['title'])+'","title":"'+str(title) + '","mp4":"'+str(mp4)+ '"},')
                    w.write(html)
                    # f.write('hh')
                    print(str(lujing) + '完成')

                # 准备复制同步课堂基础知识的页面
                with open("首页/data/模板/d-同步课堂展示.html", "r", encoding='utf-8') as w:  # 打开文件
                    shouye = w.read()  # 读取文件
                    # print(shouye)

                with open(path + "/index.html", "w", encoding='utf-8') as w:  # 打开文件
                    w.write(str(shouye))
                    # print(str(lujing) + '保存完成')




                data = json.loads(html)
                data1 = data['data']
                for e in data1:
                    # try:
                        # print(d)
                        openId = e['openId']
                        # print(e['title'])

                        url = 'https://api.cloud.taozhi.online/album-management/client//content/allOrFree/' + str(
                            openId) + '?page=1&size=999&menuId=0&isQueryFree=false'
                        print(url)
                        html = requests.get(url).content.decode()
                        print('进入课程章节')
                        # print(html)
                        data = json.loads(html)
                        data1 = data['data']
                        for f in data1:
                            try:

                                print(f)
                                # resourceOpenId = (f['resourceOpenId'])
                                # url = 'https://api.cloud.taozhi.cn/video-management/client//video/' + str(f['resourceOpenId'])
                                # print(url)
                                # html = requests.get(url).content.decode()
                                # data=json.loads(html)
                                # print('开始了')
                                # print(data)
                                # data1=f['data']
                                vid = f['vid']
                                print(f['title'])
                                print(vid)
                                # url = 'https://api.cloud.taozhi.cn/common/aliVod/common//play/getPlayInfo?videoId=' + (vid)
                                url = 'https://api.cloud.taozhi.online/third-sdk/aliVod/common//play/getPlayInfo?videoId=' + str(
                                    vid)
                                print(url)
                                html = requests.get(url).content.decode()
                                # print('开始了')
                                # print(html)
                                data=json.loads(html)
                                data1=data['data']

                                # print('检测MP4')
                                mp4 = (re.findall('(https[^\s]+mp4)',str(data1))[0])
                                print(mp4)
                            #
                                # 制作单节课页面数据
                                path = "首页/" + str(a['xdName'])  + str(a['gradeName']) + '/' + str(cename) + '/' + str(
                                    c['name']) + '/' + str(d['name']) + '/' + str(e['title'])
                                if not os.path.exists(path):
                                    os.makedirs(path)

                                lujing = path + '/' + '1.txt'

                                # print(lujing)
                                with open(lujing, 'a', encoding='utf-8', )as w:
                                    # f.write(html3)/这种可以的
                                    # f.write('"'+str(title)+'":{"xdName":"'+str(a['xdName'])+ '","gradeName":"'+str(b['gradeName'])+'","cname":"'+str(c['name'])+'","dtitle":"'+str(d['title'])+'","title":"'+str(title) + '","mp4":"'+str(mp4)+ '"},')
                                    w.write('{"xdName":"' + str(a['xdName']) + '","gradeName":"' + str(a['gradeName']) + '","ceame":"' + str(cename) + '","cname":"' + str(c['name']) + '","dname":"' + str(d['name']) +'","etitle":"'+str(e['title']) +'","ftitle":"'+str(f['title']) +'","fmenuTitle":"'+str(f['menuTitle']) + '","mp4":"' + str(mp4) + '"},')
                                    # f.write('hh')
                                    print(str(lujing) + '完成')
                                # **********************************

                                # 准备复制单节课页面模板
                                with open("首页/data/模板/f-单节课.html", "r", encoding='utf-8') as w:  # 打开文件
                                    shouye = w.read()  # 读取文件
                                    # print(shouye)

                                with open(path + "/index.html", "w", encoding='utf-8') as w:  # 打开文件
                                    w.write(str(shouye))
                                    # print(str(lujing) + '保存完成')

                                # with open('E:/编程/淘知学堂/最新爬取知识学堂/爬取知识学堂.视频2021.7.6.csv', 'a')as f:
                                #     f_csv = csv.writer(f)
                                #     # f_csv.writerow([a['xdName']])
                                #     f_csv.writerow([xdName] + [gradeName] + [name] + [title] + [e['title']] + [mp4])
                                #     number += 1
                                #     print('第{}节课程已经爬取完毕'.format(number))


                                print(str(a['xdName']) + '/' + str(a['gradeName']) + '/' + str(cename) + '/' + str(
                                c['name']) + '/' + str(d['name']) + '/' + str(e['title'])+'/'+str(f['title'])+'/'+str(f['menuTitle']))

            # #

                            except Exception as e:
                                print(e)

    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
