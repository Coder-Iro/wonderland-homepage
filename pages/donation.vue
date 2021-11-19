<template>
  <div>
    <header-bar>DONATION</header-bar>
    <article>
      <iframe
        src="https://skhcs.com/nano"
        width="100%"
        height="100%"
        allowtransparency="true"
        marginwidth="0"
        marginheight="0"
        frameborder="0"
        scrolling="no"
      />
      <box id="donationinfo"></box>
    </article>
    <footer-bar />
  </div>
</template>

<style lang="scss" scoped>
  article {
    height: 680px;
    iframe {
      position: absolute;
      z-index: 2;
      top: -330px;
      left: -40px;
      width: 600px;
      height: 1176px;
      margin: 0;
      overflow: hidden;
      transform: scale(0.8);
    }
    #donationinfo {
      position: absolute;
      z-index: 2;
      top: -330px;
      left: -40px;
    }
  }
</style>
