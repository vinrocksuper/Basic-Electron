const dependencies = ['chrome', 'node', 'electron'];

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.querySelector(selector);

        if (element) {
            element.innerText = text;
        };
    }

    dependencies.forEach(dependency => replaceText(`#${dependency}-version`, process.versions[dependency]));
})