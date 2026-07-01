import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({ pageId: "privacy" });
export { generateMetadata };
export default Page;
