import Script from "next/script";

export default function InstagramFeed() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-0b72befb-5e0c-4350-bba7-734883ccca41"
        data-elfsight-app-lazy
      />
    </>
  );
}
