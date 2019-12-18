import * as React from 'react';
import { DocumentEditorContainer, DocumentEditorContainerModel } from '@syncfusion/ej2-documenteditor';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * Represents react Document Editor Container
 * ```ts
 * <DocumentEditorContainer></DocumentEditorContainer>
 * ```
 */
export declare class DocumentEditorContainerComponent extends DocumentEditorContainer {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<DocumentEditorContainerModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<DocumentEditorContainerModel & DefaultHtmlAttributes>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
