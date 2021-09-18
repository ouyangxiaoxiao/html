import json

data1 = {"name": "第一课", "url":"https://ouyangxiaoxiao.github.io/xiaofangshipin/五级(初级)实操/p378m1n2akir39n.mp4","byname":"五级(初级)实操"}
data2 = {"name": "第二课", "url":"https://ouyangxiaoxiao.github.io/xiaofangshipin/五级(初级)实操/p378m1n2akir39n.mp4","byname":"五级(初级)实操"}
data4 = [data1,data2]
data5 = json.dumps(data4,ensure_ascii=False)

print(data5)




import json

article_info = {}
data = json.loads(json.dumps(article_info))
print(data)
data['article1'] = [data1]
data['article2'] = [data2]

article2 = {'title': 'python基础', 'publish_time': '2019-4-1', 'writer': {}}
data['article2'] = article2

writer = {'name': '李先生', 'sex': '男', 'email': 'xxx@gmail.com'}
data['article2']['writer'] = writer

article = json.dumps(data, ensure_ascii=False)
print(article)
