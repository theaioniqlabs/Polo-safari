import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({ pageId: "contact" });
export { generateMetadata };
export default Page;
