import requests
from bs4 import BeautifulSoup
import json
url = 'https://www.xiaohi.net/course-data-xfss.js'
html = requests.get(url).content.decode()

data = (json.loads(html))
data = (data['data'])
data0 = (data[0])
children = (data0['children'])
# print(children)
for i in children:
    # print(i)
    ichildren = (i['children'])
    print('*****************************************************')
    for a in ichildren:
        # print(a)
        print(a['name'])
        # try:
        #     bchildren = (a['children'])
        #     for b in bchildren:
        #         print(b['name'])
        # except Exception as e:
        #     print(e)

