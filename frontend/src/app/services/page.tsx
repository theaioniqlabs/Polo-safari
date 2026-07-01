import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({ pageId: "services" });
export { generateMetadata };
export default Page;
