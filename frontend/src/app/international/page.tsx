import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({ pageId: "international" });
export { generateMetadata };
export default Page;
