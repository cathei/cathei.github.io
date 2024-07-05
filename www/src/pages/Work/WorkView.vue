<script>
let scriptContent = null

function profileHandler(badgeHtml, badgeUid) {
  scriptContent = badgeHtml

  let iframe = document.getElementById('linkedin-profile')

  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(`<head><base target="_blank"></head><body>${badgeHtml}</body>`);
  iframe.contentWindow.document.close();
}

export default {
  mounted() {
    if (scriptContent !== null) {
      profileHandler(scriptContent, 0)
      return
    }

    window['LIBadgeCallback'] = profileHandler

    let linkedInScript = document.createElement('script')
    linkedInScript.src = 'https://badges.linkedin.com/profile?version=v1&locale=en_US&badgetype=VERTICAL&badgetheme=dark&maxsize=large&trk=profile-badge&vanityname=cathei&uid=0'

    document.head.appendChild(linkedInScript)
  }
}
</script>

<template>
  <div class="widgets">
    <div class="widget-image">
      <iframe id="linkedin-profile" frameborder="0" scrolling="no" allowfullscreen></iframe>
    </div>
    <div class="widget-text">
      <h2>Versatile Game Programmer</h2>
      <p>I've been professionally working for game industry since 2013. I can play any role in gamedev, from scratch to launch. This includes gameplay, rendering, networking, testing, platform integration and optimization!</p>
    </div>
  </div>
</template>

<style scoped>

#linkedin-profile {
  display: block;
  width: 301px;
  height: 262px;
}

</style>