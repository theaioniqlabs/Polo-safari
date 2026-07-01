import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({
  pageId: "theme-tour-packages",
});
export { generateMetadata };
export default Page;
