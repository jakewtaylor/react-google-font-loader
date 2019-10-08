import * as React from 'react';

export interface Font {
    font: string;
    weights?: (string|number)[];
}

export interface GoogleFontLoaderProps {
    fonts: Font[];
    subsets?: string[];
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
}

declare const GoogleFontLoader: React.FC<GoogleFontLoaderProps>;
// declare class GoogleFontLoader extends React.PureComponent<GoogleFontLoaderProps> {};


export default GoogleFontLoader;
