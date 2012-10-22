boxxy
=====

jQuery UI widget for an expanding content block with a clickable header as a toggle.


### Example usage:

```html
<script src="/js/boxxy/boxxy.js"></script>
<link rel="stylesheet" type="text/css" href="/js/boxxy/boxxy.css" />

<script>
  $(function() {
		$("#block_crazyContent").boxxy({headerText: "Crazy Content Here"}).show();
	});
</script>

<div id="block_crazyContent">This is a test. blarg!</div>
```