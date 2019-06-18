## 场景：拉取别人的项目
把项目地址克隆一下


Git clone 仓库地址（.点代表克隆当前目录 如果写目录名字就把这个仓库克隆到以这个名字为名字的文件夹）

mkdir fe10

cd fe10

git clone https://github.com/itguide/fe10.git



## 场景：把自己的项目推送到github仓库

mkdir fe10
cd fe10
git init      #把仓库初始化
git status    #查看本地有哪些文件需要提交 检查后如果不需要提交
忽略文件： .gitignore
            在这个里面写的东西，将不会推送到远程

git add       #把本地的文件添加到仓库
git commit -am "本次提交的注释"     #本次提交的注释
git remote add origin https://github.com/itguide/fe10.git  #给本地的仓库加上远程地址

git push origin master    #把提交后的代码推送到远程仓库，后面是分支名字，想推送哪个分支就写哪个分支名字

git remote remove origin    #取消本地目录下关联的远程库


##场景:把代码仓库更新

把仓库代码更新
git pull origin master

常用命令：
git remote -v #查看本地的库的远程地址

查询历史Vue
history | grep vue

##下载别人的git库

电脑上新建文件夹，右键git bush 
git clone https:github.com/ithuide/fe10.git .
回车

git fetch origin            #找到所有分支

git checkout vueday2          #添加day2分支

git checkout master        #添加master分支

#检测新的东西并提交
gst

git status

git add .

git status

git commit -am "day2 content"

git push origin vueday2









