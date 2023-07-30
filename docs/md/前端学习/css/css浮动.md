## BFC规范
### 介绍
![](https://pictures.darkmoon.top/imgs/202307301202513.png)
### 现象
![](https://pictures.darkmoon.top/imgs/202307301204438.png)
>由于margin塌陷，所以两个盒子之间的距离为50
![](https://pictures.darkmoon.top/imgs/202307301435194.png)

>如果用div包裹起来，还是塌陷
![](https://pictures.darkmoon.top/imgs/202307301437378.png)

### 模拟
![](https://pictures.darkmoon.top/imgs/202307301208105.png)
![](https://pictures.darkmoon.top/imgs/202307301256502.png)
### 如何创建
![](https://pictures.darkmoon.top/imgs/202307301258645.png)
![](https://pictures.darkmoon.top/imgs/202307301259791.png)
### 作用
![](https://pictures.darkmoon.top/imgs/202307301433849.png)
### 差异
![](https://pictures.darkmoon.top/imgs/202307301448824.png)
***
## 使用浮动来实现网页布局

### 实现效果
![](https://pictures.darkmoon.top/imgs/202307301452316.png)
![](https://pictures.darkmoon.top/imgs/202307301506054.png)

### 注意事项
![](https://pictures.darkmoon.top/imgs/202307301513718.png)

### 练习
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        header {
            width: 1000px;
            height: 100px;
            background: #333;
            margin: 0 auto;
        }
        .content {
            width: 1000px;
            height: 500px;
            margin: 20px auto;
            background: #333;
        }
        footer {
            width: 1000px;
            height: 100px;
            margin: 0 auto;
            background: #333;
        }
        header .logo{
            float: left;
            width: 220px;
            height: 100px;
            background-color:orange;
        }
        header .login{
            float: right;
            width: 220px;
            height: 30px;
            background-color:pink;
        }
        nav{
            width: 690px;
            height: 60px;
            float: right;
            margin-top: 10px;
            background-color: white;
        }
        .content .ad{
            float: left;
            width: 300px;
            height: 500px;
            background: blue;
        }
        main {
            float: right;
            width: 680px;
            height: 500px;
        }
        .content main .banner {
            width: 680px;
            height: 380px;
            background: orange;
        }
        .content main .pic {
            width: 680px;
            height: 100px;
            margin-top: 20px;
            background: orange;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">

        </div>
        <div class="login">

        </div>
        <nav>

        </nav>
    </header>

    <section class="content">
        <aside class="ad">

        </aside>
        <main>
            <div class="banner">

            </div>
            <div class="pic">

            </div>
        </main>
    </section>

    <footer>

    </footer>
</body>
</html>
```
![](https://pictures.darkmoon.top/imgs/202307301930101.png)

## 浮动的基本概念
### 本质作用
![](https://pictures.darkmoon.top/imgs/202307301943770.png)
### 要点
![](https://pictures.darkmoon.top/imgs/202307301944309.png)
![](https://pictures.darkmoon.top/imgs/202307301946400.png)
### 顺序贴靠性
![](https://pictures.darkmoon.top/imgs/202307301947772.png)
### 浮动元素一定能设置宽高
![](https://pictures.darkmoon.top/imgs/202307302003802.png)
