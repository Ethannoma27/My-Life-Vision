document.addEventListener("DOMContentLoaded", function() {
    const textContent = `
        在跨境电商的广阔天地中，我积累了深厚的经验，擅长优化供应链、维护客户关系和打造高效团队。
        我的动力源自于对未来的前瞻洞察和对自我成长的持续追求。不断挑战自我，借助技术与自动化的力量，
        我正在迈向更高的管理层次，释放无限潜能。
    `;

    let currentIndex = 0;
    const paragraphElement = document.getElementById("dynamicText");

    // Function to type out the text character by character
    function typeText() {
        if (currentIndex < textContent.length) {
            paragraphElement.innerHTML += textContent.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeText, 80); // Adjust speed here
        } else {
            paragraphElement.style.opacity = 1; // Fade in the text once typing is complete
        }
    }

    typeText();
});
