export function debounce(delay, callback) {
    let task

    return function() {
        clearTimeout(task)

        task = setTimeout(() => {
            callback(this, arguments)
        }, delay);
    }
}

export function observerDomResize(dom, callback) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    const observer = new MutationObserver(callback)
    observer.observe(dom, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })
    return observer
}