import * as React from 'react';
import { DocumentEditor, DocumentEditorModel } from '@syncfusion/ej2-documenteditor';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * Represents react Document Editor Component
 * ```ts
 * <DocumentEditorComponent></DocumentEditorComponent>
 * ```
 */
export declare class DocumentEditorComponent extends DocumentEditor {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<DocumentEditorModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<DocumentEditorModel & DefaultHtmlAttributes>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
