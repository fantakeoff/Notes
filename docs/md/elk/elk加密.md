## 加密
***
>elk节点之间的加密通信
教程：[CSDN 作者：昜羊](https://blog.csdn.net/zyy247796143/article/details/125002405)
加密错误：[加密错误](https://blog.csdn.net/lanran_l/article/details/118409959)
---
>Changed password for user [apm_system]
Changed password for user [kibana]
Changed password for user [logstash_system]
Changed password for user [beats_system]
Changed password for user [remote_monitoring_user]
Changed password for user [elastic]
---
### 配置的文件参考Docker安装中的配置文件
#### Elastic_Head连接 
http://localhost:9100/?auth_user=elastic&auth_password= ******
---
#### 出现证书错误使用
##### 估计是版本问题
```bash
#使用另外的方式创建证书
#进入容器elastic目录 /usr/share/elastic
./bin/elasticsearch-certutil ca --pem --out ca.zip --days 36500 -s
unzip ca.zip
./bin/elasticsearch-certutil cert --ca-cert ca/ca.crt --ca-key ca/ca.key --pem --name za-test --out za-test.zip --days 36500 -s
unzip za-test.zip
mkdir config/certs
cp ca/* za-test/* config/certs
#创建密码
./bin/elasticsearch-setup-passwords interactive
```
---

### 一般情况下
```bash
#进入容器
cd /usr/share/elasticsearch/bin
./elasticsearch-certutil ca
./elasticsearch-certutil cert --ca /usr/share/elasticsearch/elastic-stack-ca.p12

ls -l /usr/share/elasticsearch/elastic-*                
-rw------- 1 root root 3596 May 27 05:58 /usr/share/elasticsearch/elastic-certificates.p12
-rw------- 1 root root 2672 May 27 05:53 /usr/share/elasticsearch/elastic-stack-ca.p12

mkdir /usr/share/elasticsearch/config/certs
mv /usr/share/elasticsearch/elastic-* /usr/share/elasticsearch/config/certs

chown 1000 /usr/share/elasticsearch/config/certs/elastic-certificates.p12

#elastic配置文件
xpack.security.enabled: true
xpack.security.transport.ssl.enabled: true
xpack.security.transport.ssl.verification_mode: certificate
xpack.security.transport.ssl.keystore.path: certs/elastic-certificates.p12
xpack.security.transport.ssl.truststore.path: certs/elastic-certificates.p12

#配置密码
cd /usr/share/elasticsearch/bin
./elasticsearch-setup-passwords interactive

```