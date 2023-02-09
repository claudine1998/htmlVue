new Vue({
  el: "#navigation",
  data() {
    return {
      items: [
        { name: "Home", link: "#home" },
        { name: "About", link: "#grid" },
        { name: "Profile", link: "#" },
        { name: "Contact Us", link: "#" },
      ],
    };
  },
  template: `
  	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li v-for="item in items" class="nav-item">
						<a class="nav-link active" aria-current="page" :href="item.link">{{ item.name }}</a>
					</li>					
				</ul>
			</div>
		</div>
	</nav>`,
});
