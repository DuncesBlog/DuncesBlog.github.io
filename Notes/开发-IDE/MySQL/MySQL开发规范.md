
# MySQL开发规范
    该文创建于 2024/12/14 文章参考
[oryoy](https://www.oryoy.com/news/mysql-kai-fa-yu-sheng-chan-huan-jing-pei-zhi-zui-jia-shi-jian-zhi-nan.html)


### 设计原则
- 数据简约：消除冗余，提高效率和安全性。
- 可读性：良好的编码习惯，确保代码易于理解和维护。
### 安全性规范
- 禁止明文存储密码：确保敏感信息的安全性。
- 禁止直接连接生产数据库：从开发、测试环境直接连接生产数据库存在极大风险。
### 查询优化
- 避免子查询：优化查询语句，减少不必要的计算。
- 限制操作频率：避免频繁的INSERT、UPDATE、DELETE操作影响性能。
### JOIN操作优化
- 确保有别名和索引：优化JOIN操作，提高查询效率。