
import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
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
    font-family: 'Inter', sans-serif;
}
/* HTML5 display-role reset for older browsers */
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
button {
    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    background: transparent;
    font-family: 'Inter', sans-serif;
}
`

export const GlobalStyle = createGlobalStyle`

    body{
        background-color: var(--Grey4);
        height: 100vw;
    }

    input{
        border: none;
        border-radius: 3.25px;
        padding-left: 15px;
        margin-top: 6px;

        background-color: var(--Grey2);
        color: var(--Grey0);

        height: 40px;

        &:hover{
            border: 1px solid var(--Grey0) ;
            color: var(--Grey0);
        }
        }

    select{
        border: none;
        border-radius: 3.25px;
        padding-left: 15px;
        margin-top: 6px;

        background-color: var(--Grey2);
        color: var(--Grey0);

        height: 40px;
    }

    a{
        color: var(--WhiteFixed);
        text-decoration: none;
    }

    .headerButton{
        width: 80px;
        height: 40px;
        margin: 0;
        border-radius: 4px;

        background-color: var(--Grey3);
    } 

    .submitButton{
        color: var(--WhiteFixed);
        background-color: var(--Color-primary);

        height: 48px;
        width: -webkit-fill-available;
        border-radius: 3.25px;

        cursor: pointer;
    }

    .spanError{
        color: var(--Error);
        font-size: .75rem;
        padding-top: 5px;
    }

    .colorWhiteFixed{
        color: var(--WhiteFixed);
    }

    .colorgrey0{
        color: var(--Grey0);
    }

    .colorgrey1{
        color: var(--Grey1);
    }

    .colorgrey2{
        color: var(--Grey2);
    }

    .backgroundgrey1{
        background-color: var(--Grey1);
    }

    .weigth400{
        font-weight: 400;
    }

    .weigth500{
        font-weight: 500;
    }

    .weigth600{
        font-weight: 600;
    }

    .weigth700{
        font-weight: 700;
    }

    :root {
        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;
        --Error: #eb0e33;
        --WhiteFixed: #ffffff;
        --Grey0: #F8F9FA;
        --Grey1: #868E96;
        --Grey2: #343B41;
        --Grey3: #212529;
        --Grey4: #121214;
        --BlackFixed: #000000;
    }


`