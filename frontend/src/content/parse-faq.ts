export type ParsedFaqItem = {
  id: string;
  question: string;
  answer: string;
};

/** Parse Q1:/A: blocks from FAQ section contentNotes in page YAML. */
export function parseFaqFromContentNotes(contentNotes?: string): ParsedFaqItem[] {
  if (!contentNotes) return [];

  const items: ParsedFaqItem[] = [];
  const lines = contentNotes.split("\n");
  let currentQ: string | null = null;
  let currentA: string[] = [];
  let index = 0;

  const flush = () => {
    if (currentQ && currentA.length > 0) {
      items.push({
        id: `faq-${index++}`,
        question: currentQ,
        answer: currentA.join(" ").trim(),
      });
    }
    currentQ = null;
    currentA = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    const qMatch = trimmed.match(/^Q\d+:\s*(.+)$/);
    const aMatch = trimmed.match(/^A:\s*(.+)$/);

    if (qMatch) {
      flush();
      currentQ = qMatch[1];
    } else if (aMatch && currentQ) {
      currentA.push(aMatch[1]);
    } else if (trimmed.startsWith("Accordion") || trimmed === "") {
      continue;
    }
  }
  flush();

  return items;
}
