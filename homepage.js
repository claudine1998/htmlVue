new Vue({
  el: "#content",
  data() {
    return {};
  },
  template: `
  <div class="position-relative vh-100" id="home">
  <div
	class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white vh-100 position-absolute top-0 w-100 object-fit-cover"
	style="background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');
	z-index: -1; background-size:cover;"
  >
  	<div class="d-flex flex-column align-items-center h-100 justify-content-center">
	<div class="container">
		<h1 class="mb-3 h2">Testing Jumbotron</h1>
		<p>
		Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
		</p>
	</div>
	</div>
  </div>
  </div>
`,
});
