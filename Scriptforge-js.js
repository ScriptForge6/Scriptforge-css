/**
 * 卡片序列依次入场动画
 * @param {number} [time=120] 两张卡片之间间隔毫秒
 */
function revealCardsSequentially(time = 120) {
  // 判断DOM是否已经就绪
  if (document.readyState === "loading") {
    // 还没加载完，监听一次
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    // DOM已经就绪，立刻执行
    run();
  }

  function run() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * time);
    });
  }
}

/**
 * 重置卡片显示状态
 */
function resetCardReveal(){
  document.querySelectorAll('.card').forEach(c=>c.classList.remove('visible'));
}

/**
 * 切换主题
 * @param {string} themeCssPath CSS文件路径
 */
function switchTheme(themeCssPath) {
  const link = document.getElementById('theme-style');
  link.href = themeCssPath;
}