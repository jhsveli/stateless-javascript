registeredSelectors = {}

observerCb = (mutations) ->
    for mutation in mutations
        newNodes = mutation.addedNodes
        if newNodes
            for node in newNodes
                console.log(node)
                for selector, cb of registeredSelectors
                    if $(node).find(selector).length >= 0
                        cb()

observer = new MutationObserver(observerCb)

config =
    attributes: true
    childList: true
    characterData: true
$ ->
  observer.observe(document.body, config)


window.stateless = window.stateless || {}
window.stateless.load = (selector, cb) ->
    registeredSelectors[selector] = cb
