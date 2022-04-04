import { AppProps } from "next/app";
import Layout from "@components/Layout";
import {AppContext} from "@context/AppContext";
import { useState } from "react";

import "bulma/css/bulma.css";
/*
    here goes global css
    example:
    import "bulma/css/bulma.css";

    also you can use a Layout component over here:
    import Layout from "@components/Layout";
*/

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
  const [products, setProducts] = useState<any>([])
  return (<AppContext.Provider value = {{products, setProducts}}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContext.Provider>)

}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
