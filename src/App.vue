<template>
  <div class="app">
    <nav>
      <div class="app__logo">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="50px"
          height="50px"
          viewBox="0 0 31.691 31.691"
          style="enable-background: new 0 0 31.691 31.691"
          xml:space="preserve"
        >
          <g>
            <path
              d="M16.868,6.977h2.517v0.695h-2.517V6.977z M19.379,8.124h-2.516v0.697h2.516V8.124z M14.09,6.977h-2.519v0.695h2.519V6.977z M31.691,20.605v1.672h-3.752v4.992h-2.146v-4.992H5.695v5.16H3.547v-5.16H0v-1.672h4.606l-2.522-0.58L5.697,4.254l4.653,1.064 V4.762h4.963v15.844h0.33V4.604h4.962v16.001h0.651V4.604h4.966v16.001H31.691z M6.411,20.322L9.723,5.873L6.208,5.068 l-3.311,14.45L6.411,20.322z M10.35,6.18L7.044,20.607h3.306V6.18z M14.634,18.667h-3.605v1.599h3.605V18.667z M11.627,16.846 v0.648h2.492v-0.648H11.627z M14.119,16.412v-0.647h-2.492v0.647H14.119z M14.634,5.443h-3.605v9.148h3.605V5.443z M19.926,20.107 V5.284H16.32v14.823H19.926z M25.543,5.284h-3.605v14.823h3.605V5.284z M24.66,6.653h-0.695v8.229h0.695V6.653z M23.512,6.636 h-0.697v8.228h0.697V6.636z M7.898,7.223l-1.884,8.225l0.628,0.144l1.884-8.225L7.898,7.223z M6.641,6.977l-1.885,8.224 l0.628,0.144l1.885-8.224L6.641,6.977z M19.379,15.763h-2.516v0.694h2.516V15.763z M16.868,17.693h2.517v-0.694h-2.517V17.693z"
            />
          </g>
        </svg>
        <h1>
          Сайт с <br />
          книжками
        </h1>
      </div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/FavoritesBook">Favorites</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import "./assets/style/main.scss";

.app {
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  &__logo {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  & nav {
    display: flex;
    align-items: center;
    gap: 150px;

    & ul {
      display: flex;
      gap: 40px;

      & li {
        & a {
          font-size: 20px;

          &:hover {
            color: royalblue;
            transition: 0.3s;
          }
        }
      }
    }
  }
  .router-link-exact-active {
    color: orange;
    transition: 0.3s;

    &:hover {
      color: orange;
    }
  }
}
</style>
