import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({ pageId: "terms" });
export { generateMetadata };
export default Page;
