import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({ pageId: "awards" });
export { generateMetadata };
export default Page;
