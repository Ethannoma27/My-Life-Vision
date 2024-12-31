document.addEventListener("DOMContentLoaded", function() {
    const textContent1 = `
        在跨境电商的广阔天地中，我积累了深厚的经验，擅长优化供应链、维护客户关系和打造高效团队。
    `;
    const textContent2 = `
        我的动力源自于对未来的前瞻洞察和对自我成长的持续追求。
    `;
    const textContent3 = `
        不断挑战自我，借助技术与自动化的力量，我正在迈向更高的管理层次，释放无限潜能。
    `;

    let currentIndex = 0;
    const paragraphElement = document.getElementById("dynamicText");

    function typeText(content) {
        let index = 0;
        function type() {
            if (index < content.length) {
                paragraphElement.innerHTML += content.charAt(index);
                index++;
                setTimeout(type, 80);
            }
        }
        type();
    }

    typeText(textContent1);

    setTimeout(function() {
        typeText(textContent2);
    }, textContent1.length * 80 + 1000);

    setTimeout(function() {
        typeText(textContent3);
    }, (textContent1.length + textContent2.length) * 80 + 2000);
});
