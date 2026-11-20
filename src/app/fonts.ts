import localFont from "next/font/local";

export const sfPro = localFont({
  src: [
    {
      path: "../../public/fonts/sf-pro/SF-Pro.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Italic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-sf-pro",
  display: "swap",
});

export const sfMono = localFont({
  src: [
    {
      path: "../../public/fonts/sf-mono/SF-Mono-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sf-mono",
  display: "swap",
});

export const sfRounded = localFont({
  src: [
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Rounded-Ultralight.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Rounded-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Rounded-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Rounded-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Rounded-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Rounded-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Rounded-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Rounded-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Rounded-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sf-rounded",
  display: "swap",
});

export const newYork = localFont({
  src: [
    {
      path: "../../public/fonts/new-york/NewYork.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/new-york/NewYorkItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-new-york",
  display: "swap",
});
