declare module "./AdexViewer" {
    import * as React from "react";

    export interface AdexViewerHandle {
        goToPage(page: number): void;
        rotatePage(page: number, clockwise?: boolean): void;
        getCurrentPage(): number;
        getTotalPages(): number | null;
        getZoom(): number;
        setZoom(z: number): void;
    }

    interface Bookmark {
        id: string
        title: string
        pageNumber: number
        createdAt: number
    }

    interface OutlineItem {
        title: string
        dest?: any
        items?: OutlineItem[]
        pageNumber?: number
        expanded?: boolean
        id: string
    }

    interface SearchResult {
        pageIndex: number
        matchIndex: number
        text: string
        context: string // Added context field for displaying text around the match
        position: {
            left: number
            top: number
            right: number
            bottom: number
        }
    }

    interface LocalizationOptions {
        locale: string
        title: string
        active: boolean
    }

    interface Annotation {
        id: string
        pageNumber: number
        type: "highlight" | "note" | "drawing"
        content?: string
        color: string
        position: {
            x: number
            y: number
            width?: number
            height?: number
        }
        points?: { x: number; y: number }[] // For drawing annotations
        createdAt: number
    }

    const PdfViewer: React.ForwardRefExoticComponent<
        React.PropsWithoutRef<any> & React.RefAttributes<AdexViewerHandle>
    >;

    export default PdfViewer;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}