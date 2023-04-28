# 无穷

## 无穷小

> 以零为极限。

### 🌰举个栗子
$\lim\limits_{x\to\infty}\dfrac{1}{x}=0$，则 ${1\over x}$ 是 $x\to\infty$ 时的无穷小。

$\lim\limits_{x\to 2}{(3x-6)}=0$，则 $3x-6$ 是 $x\to 2$ 时的无穷小。


### 基本性质

1. 有限个无穷小的代数和，仍是无穷小。
2. 有限个无穷小的积，仍是无穷小。
3. 有界变量与无穷小的积，仍是无穷小。
4. 无限个无穷小之和，不一定是无穷小。

- 第4点举个栗子，以下计算结果是常数：

$\lim\limits_{n\to\infty}(\dfrac{1}{n^2}+\dfrac{2}{n^2}+\cdots+\dfrac{n}{n^2})$

$=\lim\limits_{n\to\infty}(\frac{n(n+1)}{2}) \times \dfrac{1}{n^2}$

$=\lim\limits_{n\to\infty}\dfrac{(n+1)}{2n}$

$={1\over2}$

5. 无穷小的商，不一定是无穷小。

- 举个栗子：
$\lim\limits_{x\to0}\dfrac{x}{2x}=\dfrac12,\lim\limits_{x\to0}\dfrac{x^2}{2x}=0,\lim\limits_{x\to0}\dfrac{2x}{x^2}=\infty$

6. 极限有无穷小的关系，$\lim\limits_{x\to x_0}f(x)=A$ 的充要条件$f(x)=A+a(x)$，其中$a(x)$是$x \to x_0$ 时的无穷小。


## 无穷大

> 相对于变换过程来说，$x \to x_0$ 不断增大趋近于无穷，没有一个收敛的点。即：$\lim\limits_{x\to x_0}f(x)=\infty$

### 无穷大和无穷小的关系

- 在自变量变换的过程中，如果$f(x)$无穷大，那么 $\dfrac{1}{f(x)}$ 无穷小。


## 无穷的比较

假设$\alpha=\alpha(x),\beta=\beta(x)$都是无穷小。

∴ $\lim\limits_{x\to x_0}\dfrac{\beta}{\alpha}=0$，$\beta$比$\alpha$小，结果才能趋近于0，则$\beta$是$\alpha$高阶无穷小。

$\lim\limits_{x\to x_0}\dfrac{\beta}{\alpha}=\infty$，$\beta$比$\alpha$大，结果才能趋近于$\infty$，则$\beta$是$\alpha$低阶无穷小。

$\lim\limits_{x\to x_0}\dfrac{\beta}{\alpha}=C\neq0$，$\beta$比$\alpha$接近，结果是常数，则$\beta$是$\alpha$同阶无穷小。