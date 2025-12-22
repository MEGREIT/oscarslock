// components/CookieBanner.tsx
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = Cookies.get("acceptCookies");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("acceptCookies", "true", { expires: 365 });
    setIsVisible(false);
  };

  const declineCookies = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#15233E] text-white py-6 px-8 flex flex-col items-center justify-center space-y-4 z-50">
      <h2 className="text-lg font-semibold">This website uses cookies.</h2>
      <p className="text-center text-sm">
        We use cookies to analyze website traffic and optimize your website
        experience. By accepting our use of cookies, your data will be
        aggregated with all other user data.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={declineCookies}
          className="bg-white text-gray-700 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          Decline
        </button>
        <button
          onClick={acceptCookies}
          className="bg-white text-gray-700 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
