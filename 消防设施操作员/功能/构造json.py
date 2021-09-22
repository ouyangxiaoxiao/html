import json
# 单条信息
article_info = {}
# 转换json 赋值给data
data = json.loads(json.dumps(article_info))
list=[]
name = "高升"
writer = {'name': name, 'sex': '男'}
writer2 = {'name': '李先生', 'sex': '男'}
list.append(writer)
list.append(writer2)
data['writer'] = list
article = json.dumps(data, ensure_ascii=False)
# print(list)
print(article)
