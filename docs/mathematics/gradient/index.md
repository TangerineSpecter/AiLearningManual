# 梯度

## 定义
> 函数：$z=f(x,y)$在平面域内具有连续的一阶偏导数，对于其中每一个点$P(x,y)$都有向量$\dfrac{\partial f}{\partial x}\vec{i}+\dfrac{\partial f}{\partial y}\vec{j}$，则称其为函数在点P的梯度。

$$
\text{grad}f(x,y)=\dfrac{\partial f}{\partial x}\vec{i}+\dfrac{\partial f}{\partial y}\vec{j}
$$


## 特性

1. 梯度为等高线上的法向量，本身是个上升的过程。往反方向走就是个梯度下降的过程。
2. $\vec e=\cos\varphi\vec{i}+\sin\varphi\vec{j}$是方向L上的单位向量，带入方向导数可知$\theta=(\text{grad}f(x,y),\vec{e})$。
3. 只有当$\cos(\text{grad}f(x,y),\vec{e})=1$，$\dfrac{\partial f}{\partial l}$才有最大值。
4. 函数在某点的梯度是一个向量，它的方向与方向导数最大值取得的方向一致，其大小正好是最大的方向导数。


### 🌰举个栗子
设$u=xyz+z^2+5$，求grad$u$，并求在点$M(0,1,-1)$处方向导数的最大(小)值。

**解：**

∵ 分别对x、y、z求偏导数：

$\dfrac{\partial u}{\partial x}=yz; \dfrac{\partial u}{\partial y}=xz;\dfrac{\partial u}{\partial z}=xy+2z$

∴ 带入梯度公式可知梯度方向，$\text{grad}u\bigg|_{(0,1,-1)}=(yz,xz,xy+2z)\bigg|_{(0,1,-1)}=(-1,0,-2)$

∴ 梯度的最大值为各方向一致的时候，对x、y、z取模可知：$\max\{\dfrac{\partial u}{\partial l}\bigg|_M\}=\|\text{grad}u\|=\sqrt{5}$

梯度最小值是梯度的反方向，取负可知：$\min\{\dfrac{\partial u}{\partial l}\bigg|_M\}=-\|\text{grad}u\|=-\sqrt{5}$