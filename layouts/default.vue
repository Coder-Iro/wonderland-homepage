<template>
  <div id="root">
    <nav>
      <h1>
        <NuxtLink id="maintop" to="/home" />
      </h1>
      <MemberForm />
      <ul id="lnb">
        <Navlink linkname="notice">서버 알림</Navlink>
        <Navlink linkname="rules">서버 규칙</Navlink>
        <Navlink linkname="command">명령어</Navlink>
        <Navlink linkname="contents">컨텐츠 사전</Navlink>
        <Navlink linkname="board">게시판</Navlink>
        <Navlink linkname="discord">디스코드</Navlink>
        <Navlink linkname="worldmap">월드맵</Navlink>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
ul,
li {
  list-style: none;
}

#app {
  height: 100%;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a,
img,
table {
  border: 0;
}

a,
a:hover,
a:active,
a:visited,
a:hover {
  text-decoration: none;
  line-height: 130%;
  color: #333;
}

.icon {
  background-image: url(assets/img/icons.gif);
  background-repeat: no-repeat;
  display: inline;
}

html,
body,
ul,
li,
dl,
dd,
dt,
ol,
p,
img,
h1,
h2,
h3,
h4,
h5,
input,
textarea {
  margin: 0;
  padding: 0;
}

html,
body,
#__nuxt,
#__layout,
#root {
  font-size: 13px;
  font-family: 'gulim';
  height: 100%;
  // min-width: 480px;
  color: #333;
  background-color: #f2f2f2;
}

nav {
  #maintop {
    display: block;
    width: 120px;
    height: 60px;
    margin: 25px auto 15px auto;
    background-image: url('assets/img/home.png');
    text-indent: -999px;
    overflow: hidden;
  }

  width: 150px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: #222;
  color: #777;
  overflow: auto;
  overflow-x: hidden;
}

form .button {
  padding: 5px 0 0 0;
  clear: both;
  text-align: center;
}

main {
  position: relative;
  min-height: 100%;
  margin-left: 150px;
}

@media (max-width: 700px), (orientation: portrait) {
  nav {
    position: absolute;
    width: 100%;
    height: 145px;
    overflow: hidden;
    min-width: inherit;
    padding: 0;

    .top {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }

    h1 {
      display: inline;
      float: left;
      height: 40px;

      a {
        width: 200px;
        height: 20px;
        margin: 8px 3px 3px 3px;
        background-position: 0 -60px;
      }
    }

    #maintop {
      width: 200px;
      height: 20px;
      margin: 8px 3px 3px 3px;
      background-position: 0 -60px;
    }

    #lnb {
      clear: both;
      padding: 0;
      display: block;
      height: 110px;
    }

    input.tt {
      width: 50px;
    }
  }

  main {
    margin-left: 0;
  }
}

.box {
  position: relative;
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #eaeaea;
  background: #fcfcfc;
  border-radius: 5px;
}

.box-alert {
  border-color: #e82;
  background-color: #f5f5f5;
  font-weight: bold;
  line-height: 160%;
  *line-height: 100%;
}

article {
  position: relative;
  padding: 30px 50px;
  background: #fff;
}

@media (max-width: 700px), (orientation: portrait) {
  article {
    padding: 30px 20px;
  }
}

@media (max-width: 460px) {
  nav {
    .top {
      flex-direction: column;
    }
  }
}

em.id {
  font-style: normal;
  font-weight: normal;
  color: #691;
}
</style>

<style lang="scss" src="../assets/css/color.scss"></style>
