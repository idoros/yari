import { Element as HASTElement } from "hast";

export type Element = HASTElement & { properties: { className?: string[] } };

export type Options = Partial<{
  noBlocks: boolean;
  shouldWrap: boolean;
  singleLine: boolean;
}>;

export const asArray = <T>(v: T | T[]) =>
  v ? (Array.isArray(v) ? v : [v]) : [];

export const h = (node, type, children = null, props = {}) => ({
  type,
  ...props,
  ...(typeof children === "string"
    ? { value: children }
    : children && {
        children: Array.isArray(children) ? children : [children],
      }),
  ...(node.position && { position: node.position }),
});

export const wrapText = (value, { shouldWrap }: Options) =>
  shouldWrap ? value.replace(/\r?\n|\r/g, " ") : value;