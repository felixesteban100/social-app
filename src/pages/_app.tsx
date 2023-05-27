import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
// import { useState } from "react"
// import useLocalStorage from "~/customHooks/useLocalStorage";
import { useLocalStorage } from "usehooks-ts";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import SideNav from "~/components/SideNav";


// we left the video tutorial there: https://youtu.be/jqVm5_G1ZEE?t=8612

// Pages using during the development process

// https://app.planetscale.com/felixesteban100/social-app/deploy-requests/2
// https://vercel.com/felixesteban100/social-app
// http://localhost:3000
// https://social-app-alpha-navy.vercel.app

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>("SOCIAL_THEME", false)

  function toogleTheme() {
    setIsDarkMode((prev: boolean) => !prev)
  }

  console.log(isDarkMode)

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="This is a Twitter clone" />
      </Head>
      {/* <div data-theme="mytheme2" className={`container mx-auto flex items-start sm:pr-4 bg-base-100`}> */}
      <div

        data-theme={isDarkMode === true ? "mytheme2" : "mytheme"}
        className={`px-auto  bg-base-100`}
      >
        <div className="container flex justify-center mx-auto max-w-[1000px]">
          <SideNav
            toogleTheme={toogleTheme}
            isDarkMode={isDarkMode}
          />
          <div
            className="min-h-screen flex-grow border-x"
          >
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);