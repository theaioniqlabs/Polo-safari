import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({ pageId: "gallery" });
export { generateMetadata };
export default Page;
