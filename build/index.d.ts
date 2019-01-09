import * as React from 'react';

export interface Font {
    font: string;
    weights?: (string|number)[];
}

export interface GoogleFontLoaderProps {
    fonts: Font[];
    subsets?: string[];
}

declare class GoogleFontLoader extends React.PureComponent<GoogleFontLoaderProps> {};

export default GoogleFontLoader;
