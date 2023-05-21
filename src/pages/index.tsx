import { useState } from 'react'
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import InfiniteTweetList from "~/components/InfiniteTweetList";
import NewTweetForm from "~/components/NewTweetForm";
import { api } from "~/utils/api";

const TABS = ["Recent", "Following"] as const

const Home: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState<(typeof TABS)[number]>("Recent")
  const session = useSession()

  return (
    <div>
      <header className="sticky top-0 z-10 border-b bg-base-100 pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
        {session.status === "authenticated"
          ? (
            <div className="flex">
              {TABS.map((tab) => {
                return (
                  <button
                    key={tab}
                    className={`flex-grow p-2 hover:bg-primary focus-visible-bg-primary ${tab === selectedTab ? "border-b-4 border-b-primary font-bold" : ""}`}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>
          )
          : null
        }
      </header>

      <NewTweetForm />

      {selectedTab === "Recent" 
        ? <RecentTweets />
        : <FollowingTweets />
      }
      <div className='flex justify-center text-5xl py-2'>·</div>
    </div>
  );
};

function RecentTweets() {
  const tweets = api.tweet.infiniteFeed.useInfiniteQuery(
    {},
    { getNextPageParam: lastPage => lastPage.nextCursor },
  )

  return (
    <InfiniteTweetList
      tweets={tweets.data?.pages.flatMap(page => page.tweets)}
      isError={tweets.isError}
      isLoading={tweets.isLoading}
      hasMore={tweets.hasNextPage}
      fetchNewTweets={tweets.fetchNextPage}
    />
  )
}

function FollowingTweets() {
  const tweets = api.tweet.infiniteFeed.useInfiniteQuery(
    { onlyFollowing: true },
    { getNextPageParam: lastPage => lastPage.nextCursor },
  )

  return (
    <InfiniteTweetList
      tweets={tweets.data?.pages.flatMap(page => page.tweets)}
      isError={tweets.isError}
      isLoading={tweets.isLoading}
      hasMore={tweets.hasNextPage}
      fetchNewTweets={tweets.fetchNextPage}
    />
  )
}

export default Home;
