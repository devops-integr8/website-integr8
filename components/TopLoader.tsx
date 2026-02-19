'use client';

import NextTopLoader from 'nextjs-toploader';

const TopLoader = () => {
  return (
    <>
      <NextTopLoader
        color="#014b81"
        height={2}
        crawlSpeed={200}
        crawl={true}
        easing="ease"
        speed={500}
        zIndex={1344}
        showAtBottom={false}
        showSpinner={false}
      />
    </>
  )
}

export default TopLoader