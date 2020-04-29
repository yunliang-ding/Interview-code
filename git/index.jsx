0.删除老版本git
yum remove git
1.下载git
wget https://github.com/git/git/archive/v2.20.1.zip
2.安装依赖  
sudo yum -y install zlib-devel openssl-devel cpio expat-devel gettext-devel curl-devel perl-ExtUtils-CBuilder perl-ExtUtils-MakeMaker
3.解压git
unzip v2.20.1.zip
4.编译安装
cd git-2.20.1
make prefix=/usr/local all
make prefix=/usr/local install
5.生成ssh密钥
ssh-keygen -t rsa -C "XX"
6.查看ssh公钥
cat ~/.ssh/id_rsa.pub