```scss
@use 'mixin-short-text' as *;

@include mixin-short-text('prefix','wrap');
@include mixin-short-text('prefix','nowrap');
```

```html
<div class="prefix-wrap"> content </div>

<div class="prefix-nowrap"> content </div>
```