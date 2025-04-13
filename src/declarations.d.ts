// SVGなどの静的アセットを型で扱うための宣言
declare module '*.svg' {
    const content: string;
    export default content;
}
