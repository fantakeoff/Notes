## Git设置代理

### 临时设置代理
```shell
git config --global http.proxy 'socks5://127.0.0.1:socks5端口号'

git config --global https.proxy 'socks5://127.0.0.1:socks5端口号'

git config --global http.proxy 'http://127.0.0.1:http端口号'
 
git config --global https.proxy 'https://127.0.0.1:https端口号'
```
### 永久设置代理
```bash
#bash打开配置文件
vi ~/.gitconfig

[http]
proxy = socks5://127.0.0.1:socks5端口号
proxy = http://127.0.0.1:http端口号

[https]
proxy = socks5://127.0.0.1:socks5端口号
proxy = https://127.0.0.1:http端口号

git config -l --global
git config -l
```