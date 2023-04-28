# 方向导数

## 定义

> 如果函数的增量，与这两点距离的比例存在，则称此为在P点沿着L的方向导数。

$$
\dfrac{\partial f}{\partial l}=\lim\limits_{\rho\to0}\dfrac{f(x+\Delta x,y+\Delta y)-f(x,y)}{\rho}
$$

> 如果函数$z=f(x,y)$在点$p(x,y)$是可微分的，那么在该点沿任意方向L的方向导数都存在。

$$
\dfrac{\partial f}{\partial l}=\dfrac{\partial f}{\partial x}{cos}\varphi+\dfrac{\partial f}{\partial y}\sin\varphi 
$$

### 🌰举个栗子

求：函数$z=xe^{2y}$在点$P(1,0)$处沿从点$P(1,0)$到点$Q(2,-1)$的方向的方向导数。

**解**：

由题可知，方向$\vec l=\vec {PQ}=\{1,-1\}$，则x轴到方向$\vec l$的转角$\partial = - \dfrac{\pi}{4}$

∵ 分别对x、y进行偏导数求解：

$f_x(x,y)=\dfrac{\partial z}{\partial x}\bigg|_{(1,0)}=e^{2y}\bigg|_{(1,0)}=1$;

$f_y(x,y)=\dfrac{\partial z}{\partial y}\bigg|_{(1,0)}=2xe^{2y}\bigg|_{(1,0)}=2$

∴ 将偏导结果和角度带入方向导数公式可得：$\dfrac{\partial z}{\partial l}=\cos(-\dfrac{\pi}{4})+2\sin(-\dfrac{\pi}{4})=-\dfrac{\sqrt{2}}{2}$
