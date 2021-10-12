import json

import requests
from bs4 import BeautifulSoup

url = "https://aiirs.qingtingzy.com/SchoolDatabase/getList.html"
header = {
    "Host": "aiirs.qingtingzy.com",
    "Connection": "keep-alive",
    "Content-Length": "250",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Origin": "https://aiirs.qingtingzy.com",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Le X820 Build/FEXCNFN5801809292S; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36 VivoBrowser/6.4.1.3",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Referer": "https://aiirs.qingtingzy.com/SchoolDatabase/school_database.html?currentPage=3",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-TW,en-US;q=0.9",
    "Cookie": "PHPSESSID=8jdael9h0hen2gh6h11c39cgs5",

}
nub = 0

# city = [{"prov_id":12,"prov":"安徽"},{"prov_id":1,"prov":"北京"},{"prov_id":22,"prov":"重庆"},{"prov_id":13,"prov":"福建"},{"prov_id":20,"prov":"广西"},{"prov_id":28,"prov":"甘肃"},{"prov_id":19,"prov":"广东"},{"prov_id":24,"prov":"贵州"},{"prov_id":21,"prov":"海南"},{"prov_id":3,"prov":"河北"},{"prov_id":16,"prov":"河南"},{"prov_id":8,"prov":"黑龙江"},{"prov_id":17,"prov":"湖北"},{"prov_id":18,"prov":"湖南"},{"prov_id":7,"prov":"吉林"},{"prov_id":10,"prov":"江苏"},{"prov_id":14,"prov":"江西"},{"prov_id":6,"prov":"辽宁"},{"prov_id":5,"prov":"内蒙古"},{"prov_id":30,"prov":"宁夏"},{"prov_id":29,"prov":"青海"},{"prov_id":23,"prov":"四川"},{"prov_id":4,"prov":"山西"},{"prov_id":15,"prov":"山东"},{"prov_id":9,"prov":"上海"},{"prov_id":27,"prov":"陕西"},{"prov_id":2,"prov":"天津"},{"prov_id":33,"prov":"香港"},{"prov_id":31,"prov":"新疆"},{"prov_id":25,"prov":"云南"},{"prov_id":11,"prov":"浙江"}]
city = [{"prov_id": 3, "prov": "河北"}, {"prov_id": 10, "prov": "江苏"}, {"prov_id": 2, "prov": "天津"}]
for a in city:
    prov_id = (a["prov_id"])  # 城市代码
    prov = (a["prov"])  # 城市名称
    zhuanben = [{"batch_id": 1066, "batch": "本科提前批A"}, {"batch_id": 1067, "batch": "本科提前批B"},
                {"batch_id": 1550, "batch": "本科批A"}, {"batch_id": 1570, "batch": "本科批B"},
                {"batch_id": 2063, "batch": "专科提前批"}, {"batch_id": 2510, "batch": "专科批"}]
    for b in zhuanben:
        print(b)
        batch_id = (b["batch_id"])  # 本专代码
        batch = (b["batch"])  # 本专名称
        years = [{"year": 2021}, {"year": 2020}, {"year": 2019}, {"year": 2018}]
        # years = [{"year":2021}]#仅2021年
        for c in years:
            print(c)
            year = (c["year"])  # 年份
            subjects = [{"subject_id": 1, "subject_name": "物理"}, {"subject_id": 2, "subject_name": "化学"},
                        {"subject_id": 3, "subject_name": "生物"}, {"subject_id": 4, "subject_name": "政治"},
                        {"subject_id": 5, "subject_name": "历史"}, {"subject_id": 6, "subject_name": "地理"}]
            try:
                for d in subjects:

                    subject_id = (d["subject_id"])  # 学科id
                    subject_name = (d["subject_name"])  # 学科名称
                    for i in range(1, 150):
                        data = "page=" + str(i) + "&year%5B%5D=" + str(year) + "&prov_id=" + str(
                            prov_id) + "&batch_id=" + str(batch_id) + "&nature_id=&subject_one=" + str(
                            subject_id) + "&subject_two=&subject_thr=&subject_one_zk=1&subject_two_zk=&publish=1&prvo_year=2020&school_prov=0&school_name=&profession_name=&school_mark=&low_score=&high_score="
                        html = requests.post(url, headers=header, data=data).content
                        soup = BeautifulSoup(html, 'lxml')
                        data1 = (soup.text)
                        data2 = json.loads(data1)
                        data3 = (data2["data"])
                        # print(data3)

                        for a in data3:

                            # print(a)

                            school = (a["school"])  # 学校
                            batch = (a["batch"])  # 本科批

                            province = (a["province"])  # 城市
                            pro_score = (a["pro_score"])  # 学科
                            # print(pro_score)
                            for b in pro_score:
                                nub += 1
                                print("准备爬取第{}条".format(nub))
                                # print(b)
                                plan_num = (b["plan_num"])  # 计划数
                                pro_name = (b["pro_name"])  # 备注班级名称
                                pro_note = (b["pro_note"])  # 备注详细信息
                                list = school, plan_num, pro_name, pro_note
                                if list[0]:
                                    print("有")
                                    print(list)
                                else:
                                    print("空")
                                    break
                                jilu = str(school) + ',' + str(plan_num) + ',' + str(pro_name) + ',' + str(pro_note)

                                pach = str(year) +str(prov) + str(batch) +  str(subject_name)
                                with open(str(pach) + '.txt', 'a', encoding="utf-8") as f:
                                    f.write(jilu + '\n')

                        print("已经爬到第{}页".format(i))
                        print("共计爬取{}条".format(nub))

            except  Exception as e:
                print("戳错")
                print(e)

