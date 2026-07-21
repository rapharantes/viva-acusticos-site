import Script from "next/script";

export default function GoogleReviews() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-4111bab7-e669-4554-85ff-6e8961d60ba4"
        data-elfsight-app-lazy
      />
    </>
  );
}
