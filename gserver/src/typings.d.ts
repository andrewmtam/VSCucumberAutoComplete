type StepSettings = string[];

type PagesSettings = {
    [page: string]: string
};

type CustomParameter = {
    parameter: string,
    value: string
};

type FormatConf = {
    [key: string]: number | 'relative'
}

interface Settings {
    cucumberautocomplete: {
        steps?: StepSettings,
        pages?: PagesSettings,
        syncfeatures?: boolean | string,
        strictGherkinCompletion?: boolean,
        smartSnippets?: boolean,
        stepsInvariants?: boolean,
        customParameters?: CustomParameter[],
        skipDocStringsFormat?: boolean,
        formatConfOverride?: FormatConf[],
        onTypeFormat?: boolean,
    }
}