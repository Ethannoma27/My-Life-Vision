// 打字效果
let typedText = "带着人生玩家的探索欲，我从大厂工程师转型到外贸电商，直到自主创业，实现阶段性成绩。";
let currentText = '';
let index = 0;

function typeEffect() {
  if (index < typedText.length) {
    currentText += typedText[index];
    document.getElementById("intro-text").innerHTML = currentText;
    index++;
    setTimeout(typeEffect, 80); // 增加打字速度
  }
}

window.onload = typeEffect;

// 页面滚动时，元素渐显
window.addEventListener("scroll", function() {
  const elements = document.querySelectorAll('.event');
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add('show');
    }
  });
});

// 按钮点击时背景颜色变化
document.getElementById("exploreBtn").addEventListener("click", function() {
  document.body.style.transition = "background-color 1s ease";
  document.body.style.backgroundColor = "#00ffcc"; // 科技感绿色
  setTimeout(() => {
    document.body.style.backgroundColor = "#121212"; // 恢复初始背景
  }, 1000);
});

// 鼠标跟随动画
const cursor = document.createElement('div');
cursor.style.position = 'absolute';
cursor.style.width = '15px';
cursor.style.height = '15px';
cursor.style.backgroundColor = '#00ffcc';
cursor.style.borderRadius = '50%';
cursor.style.pointerEvents = 'none';
cursor.style.transition = 'transform 0.1s ease';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX - 7}px`;
  cursor.style.top = `${e.pageY - 7}px`;
});

// 初始化粒子背景
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,  // 控制粒子数量
      density: {
        enable: true,
        value_area: 800  // 控制粒子密度
      }
    },
    shape: {
      type: "circle",  // 粒子形状
    },
    size: {
      value: 3,  // 控制粒子大小
      random: true,
    },
    move: {
      enable: true,
      speed: 1,  // 控制粒子速度
      direction: "random",  // 随机方向
      out_mode: "out",
      attract: {
        enable: false,
      }
    },
    opacity: {
      value: 0.5,  // 粒子透明度
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#00ffcc",  // 线条颜色
      opacity: 0.5,
      width: 1
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"  // 鼠标悬停时粒子反弹效果
      },
      onclick: {
        enable: false,
      }
    }
  }
});
