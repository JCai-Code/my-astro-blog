import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

/**
 * Remark plugin to calculate reading time for Markdown/MDX files.
 * It injects the reading time into the frontmatter.
 */
export function remarkReadingTime() {
	// The function returned is a transformer that runs on the AST
	return function (tree: any, { data }: any) {
		// Convert the Markdown AST to plain text
		const textOnPage = toString(tree);
		// Calculate reading time based on the text content
		const readingTime = getReadingTime(textOnPage);
		// Inject the reading time text (e.g., "5 min read") into Astro's frontmatter
		data.astro.frontmatter.minutesRead = readingTime.text;
	};
}
