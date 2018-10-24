<template>
    <div class="about" id="player-container">
      <h3>Deploy.am #1: 初収録</h3>
      <p><a href="https://twitter.com/hiyoko_taisa">ひよこ大佐</a>と<a href="https://twitter.com/_inductor_">inductor</a>の2人で、Podcastを始めた理由や、今までのキャリアの話などをしました。</p>
      <audio src="https://d1yccfvmd56qwo.cloudfront.net/1.mp3" id="player" preload=metadata controls></audio>
      <br>
        <div>
          <span class=nobr>
            速度 x<span id="current-rate">1.0</span>
      (<span class="player-control" onclick="player.playbackRate-=0.1; return false">遅く</span> /
      <span class="player-control" onclick="player.playbackRate+=0.1; return false">速く</span>)
    </span>
    <span class=nobr style="margin: 0 1em">
      <span class="player-control" onclick="player.currentTime-=15; return false">-15秒</span> /
      <span class="player-control" onclick="player.currentTime-=5; return false">-5秒</span> /
      <span class="player-control" onclick="player.currentTime+=5; return false">+5秒</span> /
      <span class="player-control" onclick="player.currentTime+=15; return false">+15秒</span>
    </span>
    <div class="linktoindex">
      <router-link to="/podcast">Back to Podcast index</router-link>
      </div>
  </div>
</div>

</template>
<style>
.linktoindex {
  position: fixed;
  bottom: 0;
  padding-bottom: 80px;
}

/* https://fonts.googleapis.com/css?family=Bungee&text=TuringCompleteFM */
@font-face {
  font-family: "Bungee";
  font-style: normal;
  font-weight: 400;
  src: url(data:font/woff2;base64,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)
    format("woff2");
}

#player-container,
.seek {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.player-control {
  text-decoration: underline;
  cursor: pointer;
}

.nobr {
  white-space: nowrap;
  line-height: 2;
}

.date {
  margin-top: 0.6em;
  padding: 0 0.3em 1em 0;
  float: right;
}

footer {
  font-size: small;
  margin-top: 0 auto;
}

@media (max-width: 349px) {
  #banner {
    font-size: 7.6vw;
  }
}

@media (min-width: 500px) {
  #banner {
    display: inline;
    font-size: 32px;
  }
  audio {
    width: 80%;
  }
}
</style>

<script>
layout: "default";
export default {
  head() {
    return {
      title: `Podcast #1`,
      meta: [
        {
          hid: `description`,
          name: "description",
          content: `ひよこ大佐とinductorの2人で、Podcastを始めた理由や、今までのキャリアの話などをしました。`
        },
        {
          hid: "og:title",
          name: "og:title",
          content: `Podcast #1: 初収録 - Deploy.am`
        },
        {
          hid: "og:description",
          name: "og:description",
          content: `ひよこ大佐とinductorの2人で、Podcastを始めた理由や、今までのキャリアの話などをしました。`
        }
      ]
    };
  }
};
if (process.browser) {
  let player;
  let key;
  let chapters = [];

  function parseTime(str) {
    let v = /^(?:(\d+):)?(\d+):(\d+)$/.exec(str);
    if (!v) {
      return 0;
    }
    let h = v[1] ? parseInt(v[1]) : 0;
    let m = parseInt(v[2]);
    let s = parseInt(v[3]);
    return h * 3600 + m * 60 + s;
  }

  function saveProgress() {
    if (player.currentTime > 0) {
      window.localStorage.setItem("rate", player.playbackRate.toFixed(1));
      window.localStorage.setItem(key + ".time", player.currentTime);
    }
  }

  function setSubscribeLink() {
    if (!/iPhone|Android/.test(navigator.userAgent)) {
      return;
    }

    let link = document.createElement("a");
    link.textContent = "Podcastアプリで購読";
    link.href = /iPhone/.test(navigator.userAgent)
      ? "https://itunes.apple.com/jp/podcast/turing-complete-fm/id1338596139?mt=2"
      : "intent://feeds.turingcomplete.fm/tcfm#Intent;scheme=pcast;S.browser_fallback_url=https://turingcomplete.fm/apps;end";
    document.getElementById("subscribe").appendChild(link);
  }

  function setOpenNewWindow() {
    if (!/iPhone|Android/.test(navigator.userAgent)) {
      return;
    }

    let elms = document.querySelectorAll(".notes a, .blank");
    for (let i = 0; i < elms.length; i++) {
      elms[i].target = "_blank";
    }
  }

  function initPlayer() {
    // Keep the playback speed indicator in sync with the actual speed.
    player.addEventListener("ratechange", () => {
      document.getElementById(
        "current-rate"
      ).textContent = player.playbackRate.toFixed(1);
    });

    // Initialize the chapter highlighter.
    let onplay = () => {
      player.addEventListener("timeupdate", focusChapter);
      player.removeEventListener("play", onplay);
    };
    player.addEventListener("play", onplay);

    // When the player is "position: sticky", the bottom border line should be visible.
    let elem = document.getElementById("player-container");
    let setBorder = () => {
      if (elem.getBoundingClientRect().top <= 50) {
        elem.style.borderBottomColor = "#e0e0e0";
      } else {
        elem.style.borderBottomColor = "white";
      }
    };

    setBorder();
    window.addEventListener("scroll", setBorder);
  }

  function maybeRemoveHashT() {
    let m = /^#t=([\d:]+)/.exec(window.location.hash);
    if (m && Math.abs(player.currentTime - parseTime(m[1])) > 15) {
      let url = window.location.href;
      url = url.substr(0, url.length - window.location.hash.length);
      history.replaceState({}, undefined, url);
    }
  }

  function pad(n) {
    let s = n.toString();
    return s.length == 1 ? "0" + s : s;
  }

  function formatTime(t) {
    let h = Math.floor(t / 3600);
    let m = Math.floor((t % 3600) / 60);
    let s = pad(Math.floor(t % 60));
    return h ? `${h}:${pad(m)}:${s}` : `${m}:${s}`;
  }

  function addHashT() {
    history.replaceState({}, undefined, "#t=" + formatTime(player.currentTime));
  }

  function getStartTime() {
    // Parse #t= value.
    let m = /^#t=([\d:]+)/.exec(window.location.hash);
    if (m) {
      return parseTime(m[1]);
    }

    // Restore the previous player position.
    let t = window.localStorage.getItem(key + ".time");
    return t ? parseInt(t) : 0;
  }

  function focusChapter() {
    let t = player.currentTime;

    for (let chap of chapters) {
      if (chap.start <= t && t < chap.end) {
        chap.tr.classList.add("focus");
      } else {
        chap.tr.classList.remove("focus");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setSubscribeLink();
    setOpenNewWindow();

    let m = /^\/(\d+)$/.exec(window.location.pathname);
    if (!m) {
      return;
    }

    // Initialize the global variables.
    let id = parseInt(m[1]);
    player = document.getElementById("player");
    key = "episode" + id;

    initPlayer();

    // Set click handlers to chapter links.
    let elms = document.getElementsByClassName("seek");
    for (let i = 0; i < elms.length; i++) {
      let elem = elms[i];
      let start = parseTime(elem.textContent);

      elem.onclick = () => {
        player.currentTime = start;
        player.play();
        history.replaceState({}, undefined, "#t=" + elem.textContent);
        return false;
      };

      if (chapters.length > 0) {
        chapters[chapters.length - 1].end = start;
      }
      chapters.push({
        start: start,
        end: Number.MAX_VALUE,
        tr: elem.parentElement.parentElement
      });
    }

    // Restore the previous player rate.
    let rate = window.localStorage.getItem("rate");
    if (rate) {
      player.playbackRate = rate;
    }

    // Set audio file URL.
    let elem = document.createElement("source");
    let time = getStartTime();
    elem.src = `https://d1yccfvmd56qwo.cloudfront.net/1.mp3#t=${time}`;
    elem.type = "audio/mpeg";
    player.appendChild(elem);

    if (time > 0) {
      player.currentTime = time;
    }

    window.onunload = saveProgress;
    window.setInterval(saveProgress, 10000);
    player.addEventListener("timeupdate", maybeRemoveHashT);
  });
}
</script>
