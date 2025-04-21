import React, { CSSProperties } from 'react';

interface Annotation {
    id: string;
    pageNumber: number;
    type: "highlight" | "note" | "drawing";
    content?: string;
    color: string;
    position: {
        x: number;
        y: number;
        width?: number;
        height?: number;
    };
    points?: {
        x: number;
        y: number;
    }[];
    createdAt: number;
}
interface AdexViewerHandle {
    goToPage: (page: number) => void;
    rotatePage: (page: number, clockwise?: boolean) => void;
    getCurrentPage: () => number;
    getTotalPages: () => number | null;
    getZoom: () => number;
    setZoom: (z: number) => void;
}
interface PDFViewerProps {
    className?: string;
    style?: CSSProperties;
    data: {
        url: string;
    };
    credits?: boolean | null;
    showSidebar?: boolean | null;
    showToolbar?: boolean | null;
    showControls?: {
        navigation?: boolean;
        zoom?: boolean;
        fullscreen?: boolean;
        download?: boolean;
        info?: boolean;
        sidebarButton?: boolean;
        rotation?: boolean;
        print?: boolean;
        search?: boolean;
        bookmarks?: boolean;
        annotations?: boolean;
        localization?: boolean;
    };
    defaultValues?: {
        zoom?: number;
        page?: number;
        fullscreen?: boolean;
    };
    localization?: LocalizationOptions[] | null;
    responsive?: {
        mobileBreakpoint?: number;
        hideSidebarOnMobile?: boolean;
        reduceToolbarOnMobile?: boolean;
    };
    textOptions?: {
        enableSelection?: boolean;
        enableCopy?: boolean;
    };
    printOptions?: {
        printBackground?: boolean;
        pageRangeEnabled?: boolean;
    };
    theme?: string | null;
    onPageChanged?: (pageIndex: number) => void | Promise<void>;
    onLoaded?: (pos: {
        x: number;
        y: number;
        width: number;
        height: number;
    }) => void | Promise<void>;
}
interface LocalizationOptions {
    locale: string;
    title: string;
    active: boolean;
}
interface SearchResult {
    pageIndex: number;
    matchIndex: number;
    text: string;
    context: string;
    position: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
}
interface OutlineItem {
    title: string;
    dest?: any;
    items?: OutlineItem[];
    pageNumber?: number;
    expanded?: boolean;
    id: string;
}
interface Bookmark {
    id: string;
    title: string;
    pageNumber: number;
    createdAt: number;
}

declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<PDFViewerProps & React.RefAttributes<AdexViewerHandle>>>;

export { _default as AdexViewer, type AdexViewerHandle, type Annotation, type Bookmark, type OutlineItem, type SearchResult };
