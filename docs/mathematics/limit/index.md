# 极限

## 定义

> 某一个函数中的某一个变量，此变量在变大（或者变小）的永远变化的过程中，逐渐向某一个确定的数值A不断地逼近的过程中，此变量的变化，被人为规定为“永远靠近而不停止〞、其有一个“不断地极为靠近A点的趋势”称作极限。

## 数列
> 按照一定次数排序，其中$u_n$叫做通项。

$$
u_1,u_2,...u_n,...
$$

### 收敛和发散
> n无限增大的时候，通项无限接近于一个常数A。否则称为发散。

$$
\lim\limits_{\mathrm{n}\to\infty} \mathrm{u}_\mathrm{n} = \mathrm{A}
$$
- 也可写做，$A(n\to\infty)$，一般用`lim`极限公式。

#### 🌰举个栗子
- **发散**：$\lim\limits_{\mathrm{n}\to\infty} {n \over {n+1}} = 1$ 无限趋近于1。
- **收敛**：$\lim\limits_{\mathrm{n}\to\infty} 2^n$ 不存在。

---
### 符号表示
- $x \to\infty$：表示“当 |x| 无限增大时”。
- $x \to+\infty$：表示“当 x 无限增大时”。
- $x \to-\infty$：表示“当 x 无限减少时”。
- $x \to x_0$：表示“当 x 从 $x_0$ 的左右两侧无限接近于 $x_0$ 时”。
- $x \to x_0^+$：表示“当 x 从 $x_0$ 的右侧无限接近于 $x_0$ 时”。
- $x \to x_0^-$：表示“当 x 从 $x_0$ 的左侧无限接近于 $x_0$ 时”。

#### 🌰举个栗子
1）函数$\lim\limits_{x\to1}\dfrac{x^2-1}{x-1}$在$x_0$的领域内有定义。

**解**：

∵ $\lim\limits_{x\to1}\dfrac{(x-1)(x+1)}{x-1}$

∴ 分数上下约分掉$(x-1)$，带入$x=1$的极限是2

2）左右极限：函数在左半领域、右半领域有定义，则$(x_0,x_0+\delta),(x_0-\delta,x_0)$。

**解**：

∵ 由题可知，$\lim\limits_{x\to x_0}f(x)=A$的充要条件是$\lim\limits_{x\to x_0^-}f(x)=\lim\limits_{x\to x_0^+}f(x)=A$

∴ $f(x)=\left\{\begin{matrix}x-1\quad&x<0\\ 0\quad&x=0\\ x+1\quad&x>0\end{matrix}\right.$，说明：此为反例

∴ 当x -> 0时f(x)时：

$\lim\limits_{x\to 0^-}f(x)=\lim\limits_{x\to 0^-}f(x-1)=-1$，而$\lim\limits_{x\to 0^-}f(x)=\lim\limits_{x\to 0^-}f(x+1)=1$

∴ 左右存在极限，但是不相等，则$\lim\limits_{x\to 0}f(x)$不存在。