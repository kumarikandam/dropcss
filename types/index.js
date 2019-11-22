export {}

/* typal types/index.xml namespace */
/**
 * @typedef {_dropcss.Config} Config `＠record` Options for the program.
 * @typedef {Object} _dropcss.Config `＠record` Options for the program.
 * @prop {string} html The input HTML.
 * @prop {string} css The CSS to drop selectors from.
 * @prop {(sel: string) => boolean} [shouldDrop] Whether _DropCSS_ should remove this selector.
 * @typedef {_dropcss.Return} Return `＠record` Return Type.
 * @typedef {Object} _dropcss.Return `＠record` Return Type.
 * @prop {string} css The dropped CSS.
 * @prop {!Set<string>} sels The used selectors.
 */
