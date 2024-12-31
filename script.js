// 打字效果
const text = "欢迎来到我的探索之旅";
let i = 0;
const typingElement = document.getElementById("typingText");

function typeText() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 100); // 控制打字速度
    }
}
window.onload = typeText; // 确保在页面加载完成后执行打字效果

// 动态星星粒子生成
function createStar() {
    let star = document.createElement('div');
    let size = Math.random() * 3 + 1; // 随机大小
    let positionX = Math.random() * window.innerWidth;  // 随机位置
    let positionY = Math.random() * window.innerHeight;
    let animationDuration = Math.random() * 2 + 2; // 随机动画时长

    star.classList.add('star');
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${positionX}px`;
    star.style.top = `${positionY}px`;

    // 随机动画时长
    star.style.animation = `starMove ${animationDuration}s infinite linear`;

    document.querySelector('.starfield').appendChild(star);

    // 每5秒钟删除一个星星
    setTimeout(() => {
        star.remove();
    }, animationDuration * 1000);
}

// 每50毫秒生成一个新的星星
setInterval(createStar, 50);

// 星星移动的关键帧动画
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes starMove {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(${window.innerWidth}px, ${window.innerHeight}px);
        }
    }
`, styleSheet.cssRules.length);

// 显示二维码弹出框
function showQRCodeModal() {
    document.getElementById('qrcodeModal').style.display = 'flex';
}

// 关闭二维码弹出框
function closeQRCodeModal() {
    document.getElementById('qrcodeModal').style.display = 'none';
}
