import * as React from 'react';

export interface Font {
    font: string;
    weights?: (string|number)[];
}

export interface GoogleFontLoaderProps {
    fonts: Font[];
    subsets?: string[];
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
    text?: string;
}

declare const GoogleFontLoader: React.FC<GoogleFontLoaderProps>;

export default GoogleFontLoader;
