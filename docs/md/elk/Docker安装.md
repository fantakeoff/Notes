## Windows下elk安装

[转载自CSDN 作者:吴明_yst](https://blog.csdn.net/qq_50661854/article/details/125725385)

### elastic配置文件
```bash
D:\elk\es\data
D:\elk\es\logs

D:\elk\es\config\elasticsearch.yml
##文件内容
cluster.name: "my-es"
network.host: 0.0.0.0
http.port: 9200

# 加入跨域配置
http.cors.enabled: true
http.cors.allow-origin: "*"


```

###  elastic
```bash
docker run -it -d -p 9200:9200 -p 9300:9300 --name es -e ES_JAVA_OPTS="-Xms3g -Xmx3g" -e "discovery.type=single-node" --restart=always -v D:/elk/es/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml -v D:/elk/es/data:/usr/share/elasticsearch/data  -v D:/elk/es/logs:/usr/share/elasticsearch/logs elasticsearch:7.7.1
```
### 获取es虚拟ip
```bash
docker inspect --format '{{.NetworkSettings.IPAddress}}' es
```

### kibana配置文件
```bash
#创建文件D:/elk/kibana/kibana.yml
server.name: kibana
server.host: "0"
elasticsearch.hosts: ["http://172.17.0.3:9200"]
xpack.monitoring.ui.container.elasticsearch.enabled: true
i18n.locale: "zh-CN" #部分中文汉化
```

### 执行命令创建kibana容器
```bash
docker run -d --restart=always --log-driver json-file --log-opt max-size=1000m --log-opt max-file=2 --name kibana -p 5601:5601 -v D:/elk/kibana/kibana.yml:/usr/share/kibana/config/kibana.yml kibana:7.7.1
```

### logsh配置
```bash
D:/elk/logstash/logstash.yml

#文件内容
path.config: /usr/share/logstash/conf.d/*.conf
path.logs: /var/log/logstash

D:/elk/logstash/conf.d/test.conf

#文件内容
# 收录springboot项目日志配置 test.conf
input {
	tcp {
		port => 5044
	}
}

output {
	elasticsearch {
		hosts => ["172.17.0.3:9200"]
	}
	stdout {}
}
# 以下为filebeat的配置
input {
	beats {
		port => 5044
		codec => "json"
	}
}
# 保存日志到es中
output {
	elasticsearch { hosts => ["172.17.0.3:9200"] }
	stdout { codec => rubydebug }
}
```

### logsh
```bash
docker run -it -d -p 5044:5044 -p 5045:5045 -p 5046:5046 --name logstash -v D:/elk/logstash/logstash.yml:/usr/share/logstash/config/logstash.yml  -v D:/elk/logstash/conf.d/:/usr/share/logstash/conf.d/ logstash:7.7.1
```

### ES_Head
```bash
docker run -d --name es_admin -p 9100:9100 mobz/elasticsearch-head:5

#要配置es跨域才能连接es

#406
/usr/src/app/_site/vendor.js
1. 6886行 /contentType: "application/x-www-form-urlencoded 
    改成 contentType: "application/json;charset=UTF-8" 
2. 7574行 var inspectData = s.contentType === "application/x-www-form-urlencoded" && 
    改成 var inspectData = s.contentType === "application/json;charset=UTF-8" &&

```