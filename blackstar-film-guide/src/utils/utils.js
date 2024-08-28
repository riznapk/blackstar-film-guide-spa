import closedCaptionIcon from "../assets/images/closed-caption-icon.png";
import openCaptionIcon from "../assets/images/open-caption-icon.png";
import audioDescIcon from "../assets/images/audio-desc-icon.png";

export const iconMappings = {
  "closed-captioning": {
    src: closedCaptionIcon,
    size: 45,
    alt: "Closed Caption Icon",
  },
  "open-captions": {
    src: openCaptionIcon,
    size: 45,
    alt: "Open Caption Icon",
  },
  "audio-described": {
    src: audioDescIcon,
    size: 45,
    alt: "Audio Description Icon",
  },
};

export const backgroundColors = ["#ffcccc", "#FF6222", "#ccccff", "#fff0cc"];

export function extractTrailerUrl(trailer, trailerHtml) {
  if (trailer) {
    const match = trailerHtml.match(/src="([^"]*)"/);
    return match ? match[1] : null;
  } else return "";
}

export const extractIframeHtml = (html) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const iframe = tempDiv.querySelector("iframe");
  return iframe ? iframe.outerHTML : "";
};
