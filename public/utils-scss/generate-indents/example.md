### Example

```scss
// import and connect in main file .scss
@use 'values-generate-indents' as *;
@use 'variables-generate-indents' as *;
@use 'mixin-generate-indents-classes' as *;

//connect
//@params 'prefix', 'list-short-names', 'list-values'
@include mixin-generate-indents-classes('prefix', $spacing-properties, $spacing-values);
```

```html
<div class="prefix-my-16 prefix-mx-16 prefix-px-10 prefix-py-10 prefix-m-all-32 prefix-p-all-12">
  content
</div>
```





