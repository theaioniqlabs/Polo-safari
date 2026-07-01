import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({ pageId: "blog" });
export { generateMetadata };
export default Page;
