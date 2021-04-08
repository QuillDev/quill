/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "\*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string; export default src;
}

declare module "\*.gif" {
    import React = require("react");
    export const ReactComponent: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>>;
    const src: string; export default src;

    //DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>
}
declare module "\*.png" {
    import React = require("react");
    export const ReactComponent: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>>;
    const src: string; export default src;

    //DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>
}
