# Listen for fresh DOM-element load

## Short usage

```js
stateless.load('img.thumb', function(e){
  console.log('Thumbnail was loaded!');
});
```

## The problem we are solving

Attaching load event handlers like this

```js
$('.selector').load(function() {
    // do something on load.
  });
});
```

Will only work for elements already present in the DOM. What is more, load events do not bubble like most other events.

So what to do?

## Mutation Observers

DOM LVL 4 specifies Mutation Observer that can be used in this case to capture modifications of the DOM and hook onto load events on elements matching a selector.
