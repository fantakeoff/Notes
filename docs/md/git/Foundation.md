## 基础操作

### 撤销工作区的修改
```bash
#1. 撤销工作区的修改
#未git add
    git checkout filename
#已经git add
    git reset HEAD filename
    git checkout --文件
#已经add并且再次修改
    git checkout filename
    git reset HEAD filename
    git checkout --文件
```

### 撤销本地仓库的修改

```bash
#### 1.git rm撤销
git rm <file> // 从工作区和暂存区删除某个文件
git commit -m "" // 再次提交到仓库

#### 2.只删除暂存区的文件，不影响工作区
git rm --cached <file>

#### 3.工作区删除从暂存区恢复
git checkout --<file>

#### 4.利用git rm删除文件,会将删除操作记录下来
利用rm删除文件，删除的仅仅是本地的物理文件，没有将其从git的记录中删除

```
### 撤销commit
```bash
#回滚到某次提交
git reset
#此次提交之后的修改会被退回暂存区
git reset --soft
#此次提交之后的修改不做任何保留
git reset --hard
```
#### 回滚代码
```bash
git reset --hard commit_id
#强制推送到远端
git push origin HEAD --force
```
#### 误删恢复
```bash
#删除中间某次提交最好不要用git reset回退远程库，之后的人使用git pull也会把自己的本地仓库回退到之前的版本
git relog
git reset --hard hash
```

### git rebase
  当两个分支不在同一条线上时，需要执行merge 操作时使用该命令
```bash
#中间某次commit需要删除，可以通过git rebase命令实现，方法如下
git rebase -i commit_id
进入Vim,将要删除的commit之前的'pick'换成'drop'
```
#### 出现冲突解决
```bash
    git diff

    ***
    //解决冲突
    git add <file>或git add -A
    git rebase --continue
    ***

    //如没有applying重复***之间的操作
    git push
```

####git revert
git revert:放弃某次的提交，之前的提交仍会保留在git log中，而此次撤销会作为一次新的提交，-m 指定分支节点
```bash
#撤销提交
git revert commit_id
```
```bash
#撤销merge节点的提交
#第一个提交点
git revert commit_id -m 1

***
手动解决冲突
git add -A
git commit -m ""
***

git revert commit_id -m 2 #第二个提交点

//重复2,3,4
git push
```