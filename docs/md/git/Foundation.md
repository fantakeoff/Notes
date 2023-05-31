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
git rm --cached \<file>

#### 3.工作区删除从暂存区恢复
git checkout --\<file>

#### 4.利用git rm删除文件,会将删除操作记录下来
利用rm删除文件，删除的仅仅是本地的物理文件，没有将其从git的记录中删除

```
### 撤销commit
