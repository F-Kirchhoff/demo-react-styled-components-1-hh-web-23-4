import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <h1>SC Demo</h1>
      <Component {...pageProps} />
    </>
  );
}
