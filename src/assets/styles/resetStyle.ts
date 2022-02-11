import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { PAGE_URL } from '@path';

const ResetStyle = createGlobalStyle`
  ${reset}
  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    line-height:1.4;
    font-family: 'Poppins-Regular', 'NotoSansKR-Regular';
  }

  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }


  html{
    ${() =>
      localStorage.getItem('theme') === 'light'
        ? css`
            background-color: #0e0e11;
          `
        : css`
            background-color: #0e0e11;
          `}
  }

  * {
    box-sizing: border-box;
    font-family: 'Poppins-Regular', 'NotoSansKR-Regular';

    ::-webkit-scrollbar {
      height: 4px;
      width: 3px;
    }

    ${() =>
      localStorage.getItem('theme') === 'light'
        ? css`
            ::-webkit-scrollbar-track {
              background: #333333;
            }

            ::-webkit-scrollbar-thumb {
              background: #4d4d4d;
            }

            ::-webkit-scrollbar-track:horizontal {
              background: #333333;
            }

            ::-webkit-scrollbar-thumb:horizontal {
              background: #4d4d4d;
            }
          `
        : css`
            ::-webkit-scrollbar-track {
              background: #333333;
            }

            ::-webkit-scrollbar-thumb {
              background: #4d4d4d;
            }

            ::-webkit-scrollbar-track:horizontal {
              background: #333333;
            }

            ::-webkit-scrollbar-thumb:horizontal {
              background: #4d4d4d;
            }
          `}
  }

  ul,
  ol {
    list-style: none;
  }

  a,
  a:visited {
    text-decoration: none;
  }
`;

export default ResetStyle;
