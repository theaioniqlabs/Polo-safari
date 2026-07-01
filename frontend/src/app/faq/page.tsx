import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({ pageId: "faq" });
export { generateMetadata };
export default Page;
