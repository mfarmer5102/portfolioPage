<template>
  <div id="app">

  <div class="container-fluid height-inherit">
      <div class="row height-inherit">

        <!-- Navbar -->
        <div class="height-inherit text-left frosted-bg p-3 animated slideInLeft" style="width: 250px">
            <br/><br/>
            <div
                style="height: 120px; width: 120px; margin: auto; background-image: url('https://raw.githubusercontent.com/cafeamericano/portfoliopage/master/siteImages/myphoto.jpg'); background-size: cover; border-radius: 100%">
            </div>
            <br/><br/>
            <div>
                <router-link :to="{name:'Welcome'}" class="seagreen">Welcome</router-link>
                <hr/>
                <router-link :to="{name:'Applications'}" class="seagreen">Applications</router-link>
                <hr/>
                <router-link :to="{name:'Skills'}" class="seagreen">Skills</router-link>
                <hr/>
                <router-link :to="{name:'Contact'}" class="seagreen">Contact</router-link>
                <hr/>
                <a href="https://cafeamericano.github.io/appGalleryLite/" target="_blank" class="seagreen">Interactive Gallery <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <!-- Content -->
        <div class="col height-inherit overflow-y-scroll">
            <router-view />
        </div>

      </div>
  </div>

  </div>
</template>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url('./assets/hugo-sousa-BIU3G8dPIRQ-unsplash.jpg');
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
    background-position: center;
}

a.router-link-exact-active {
  color: rgb(255,0,142);
}

a:hover {
    text-decoration: none;
}

</style>
