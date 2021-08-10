import random

#1、先指定字符集，字符集中包括数字、大小写字母、特殊符号：
seed = "1234567890abcdefghijklmnopqrstuvwxyz"
#2、从指定的字符集中随机取，分别取8位，组合成新字符串
str_list = []
for a in range(1000):
    str1 = []
    for i in range(15):
      str1.append(random.choice(seed))
    StringS = ''.join(str1)
    print(StringS)
    str_list.append(StringS)
print(str_list)
