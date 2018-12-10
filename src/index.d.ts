import * as React from 'react';

export interface Font {
    font: string;
    weights?: number[];
}

export interface GoogleFontLoaderProps {
    fonts: Font[];
}

declare class GoogleFontLoader extends React.PureComponent<GoogleFontLoaderProps> {};

export default GoogleFontLoader;
