<template>
  <nav>
    <div class="nav-wrapper blue darken-3">
      <a href="#!" class="brand-logo">IT4203 Project</a>
      <form>
        <div class="input-field blue darken-1">
          <input id="search" type="search" required>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">
            <i class="material-icons left">search</i>Link with Left Icon</a></li>
        <li><a href="badges.html">
            <i class="material-icons right">view_module</i>Link with Right Icon</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>
  nav {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  nav .nav-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  nav .brand-logo {
    position: inherit;
  }

  .nav-wrapper .input-field input[type=search] {
    width: calc(100vw - 50rem);
  }

  nav form {
    line-height: 50px;
    height: 80%;
  }

  @media only screen and (min-width: 601px) {
    nav .nav-wrapper form i {
      line-height: 55px;
    }
  }

  @media only screen and (max-width: 992px) {
    nav .brand-logo {
      left: 10%;
    }

    .hide-on-med-and-down {
      display: initial;
    }
  }
</style>
