<template lang="pug">
  div#app
    mainView
</template>

<script>
import mainView from '@/components/mainView'
import firebaseFunc from '@/functions/firebase'

export default {
  name: 'app',
  components: {
    mainView
  },
  created () {
    firebaseFunc.init()
  }
}
</script>

<style lang="scss">
// http://meyerweb.com/eric/tools/css/reset/
//  v2.0 | 20110126
//  License: none (public domain)
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

// HTML5 display-role reset for older browsers
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
.styleguide-body {
  font-family: -apple-system,
  BlinkMacSystemFont,
  YuGothic,
  "\30D2\30E9\30AE\30CE\89D2\30B4\0020\0050\0072\006F\004E\0020\0057\0033",
  "Hiragino Kaku Gothic ProN",
  "\30E1\30A4\30EA\30AA",
  Meiryo,
  "\FF2D\FF33\0020\FF30\30B4\30B7\30C3\30AF",
  "MS PGothic",
  sans-serif;
  color: #3b1800;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  color: #3b1800;
  line-height: 1.5;
}

a {
  color: #1558ce;
  text-decoration: none;
  &:link {
    color: #1558ce;
  }
  &:visited {
    color: #7607f1;
  }
  &:hover {
    color: #e78a13;
  }
}

img {
  vertical-align: middle;
}
</style>
