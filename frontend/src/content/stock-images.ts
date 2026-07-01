import type { ImageUsage, StockImage } from "./types";

const USAGE_WIDTHS: Record<ImageUsage, number> = {
  hero: 2400,
  "full-width": 1600,
  card: 800,
  thumbnail: 600,
  background: 1600,
  gallery: 800,
};

/** Curated Unsplash photo IDs keyed by theme keywords. */
const KEYWORD_PHOTOS: [string, string][] = [
  ["polo forest", "photo-1511497584788-876760111969"],
  ["heritage", "photo-1548013146-72479768bada"],
  ["aravalli", "photo-1511497584788-876760111969"],
  ["temple", "photo-1548013146-72479768bada"],
  ["corporate", "photo-1529156069898-49953e39b3ac"],
  ["team building", "photo-1517456791042-9a829f1c6222"],
  ["leadership", "photo-1522071820081-009f0129c71c"],
  ["meditation", "photo-1506126613408-eca07ce68773"],
  ["yoga", "photo-1544367567-0f2fcb009e0b"],
  ["school", "photo-1524178232363-1fb2b075b655"],
  ["education", "photo-1503676260728-1c00da094a0b"],
  ["student", "photo-1524178232363-1fb2b075b655"],
  ["adventure", "photo-1682687220063-4742bd7fd538"],
  ["trek", "photo-1682687220063-4742bd7fd538"],
  ["camping", "photo-1504280390367-361c6d9f38f4"],
  ["family", "photo-1478131143081-80f7f84ca84d"],
  ["international", "photo-1488646953014-85cb44e25828"],
  ["singapore", "photo-1525626921450-6271ff2b773b"],
  ["bali", "photo-1537996194471-e657df975ab4"],
  ["dubai", "photo-1512453979798-5ea266f8880c"],
  ["vietnam", "photo-1528127269322-539801943592"],
  ["india map", "photo-1469474968028-56623f02e42e"],
  ["desert", "photo-1501785888041-af3ef285b470"],
  ["udaipur", "photo-1599661047819-0d9d4b58a4e8"],
  ["hill station", "photo-1501785888041-af3ef285b470"],
  ["beach", "photo-1507525428034-b723cf961d3e"],
  ["forest", "photo-1448375240586-882707db888b"],
  ["drone", "photo-1473968512647-3e44729ef990"],
  ["photography", "photo-1452587925148-ce544e77e70d"],
  ["videography", "photo-1492619375914-880f2206298f"],
  ["award", "photo-1567427017947-545c9dbce87f"],
  ["certificate", "photo-1586281380349-632531db7ed4"],
  ["testimonial", "photo-1573496359142-b8d87734a5a2"],
  ["review", "photo-1556742049-0cfed4f6a45d"],
  ["logo", "photo-1560179707-f14e90ef3623"],
  ["partner", "photo-1556761175-b413da4baf72"],
  ["gallery", "photo-1501785888041-af3ef285b470"],
  ["blog", "photo-1499750310107-5fef28a66643"],
  ["contact", "photo-1423666639041-f56000c27a9a"],
  ["office", "photo-1497366216548-37526070297c"],
  ["whatsapp", "photo-1611746872915-64382b5c76da"],
  ["map", "photo-1524661135-423995f22d0b"],
  ["campfire", "photo-1478131143081-80f7f84ca84d"],
  ["wellness", "photo-1545205597-3d9d02c29597"],
  ["csr", "photo-1559027615-cd4628902d4a"],
  ["monsoon", "photo-1511497584788-876760111969"],
  ["night", "photo-1516026679272-898673075d41"],
  ["wildlife", "photo-1437622363003-100a1911d9a6"],
  ["industrial", "photo-1581091226825-a6a2a5aee158"],
  ["manali", "photo-1626621341517-bbf3d9990a23"],
  ["jaisalmer", "photo-1501785888041-af3ef285b470"],
  ["legal", "photo-1589829545856-d10d557cf95f"],
  ["privacy", "photo-1563986768609-322da13575f3"],
  ["404", "photo-1511497584788-876760111969"],
  ["travel planning", "photo-1488646953014-85cb44e25828"],
  ["default", "photo-1469474968028-56623f02e42e"],
];

function resolvePhotoId(keywords: string[]): string {
  const joined = keywords.join(" ").toLowerCase();
  for (const [needle, photoId] of KEYWORD_PHOTOS) {
    if (joined.includes(needle)) return photoId;
  }
  return KEYWORD_PHOTOS.find(([k]) => k === "default")![1];
}

export function stockImageUrl(stock: StockImage, overrideWidth?: number): string {
  const width = overrideWidth ?? USAGE_WIDTHS[stock.usage];
  const photoId = resolvePhotoId(stock.keywords);
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

export function stockImageUrlFromKeywords(
  keywords: string[],
  usage: ImageUsage = "card",
): string {
  return stockImageUrl({
    keywords,
    orientation: "landscape",
    aspectRatio: "16:9",
    usage,
  });
}

export function aspectRatioClass(aspectRatio: string): string {
  switch (aspectRatio) {
    case "21:9":
      return "aspect-[21/9]";
    case "16:9":
      return "aspect-video";
    case "4:5":
      return "aspect-[4/5]";
    case "1:1":
      return "aspect-square";
    case "3:2":
      return "aspect-[3/2]";
    case "4:3":
      return "aspect-[4/3]";
    default:
      return "aspect-video";
  }
}
