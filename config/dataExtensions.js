/**
 * Add Eleventy data extensions support
 * https://www.11ty.dev/docs/data-custom/
 */
import { load as loadYaml } from "js-yaml";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => loadYaml(contents));
}
