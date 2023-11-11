import Script from "next/script";
import React from "react";

const Analytics: React.VFC = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-P93BX55QZ1"
        strategy="afterInteractive"
      />

      <Script defer data-domain="sags.dev" src="https://plausible.io/js/script.js" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'GTM-P9Q97C7Z');
        `}
      </Script>
      <Script id="twitter-analytics" strategy="afterInteractive">
        {`
					!(function (e, t, n, s, u, a) {
						e.twq ||
							((s = e.twq =
								function () {
									s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
								}),
							(s.version = "1.1"),
							(s.queue = []),
							(u = t.createElement(n)),
							(u.async = !0),
							(u.src = "/api/twitter/uwt.js"),
							(a = t.getElementsByTagName(n)[0]),
							a.parentNode.insertBefore(u, a));
					})(window, document, "script");
					twq("init", "o8etq");
					twq("track", "PageView");
			`}
      </Script>
    </>
  );
};

export default Analytics;
