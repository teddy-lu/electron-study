window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependence of ['chrome', 'electron', 'node']) {
        replaceText(`${dependence}-version`, process.versions[dependence])
    }
})