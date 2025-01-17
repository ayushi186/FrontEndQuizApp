export type Tquestions = {
    question: string;
    options: string[];
    answer: string;
  };
  export interface IChildProps {
    children: React.ReactNode;
  }

  export type Tquestion = {
    title: string;
    icon: string;
    questions: Array<Tquestions>;
  };
  
 export type IResultprops ={
    title?: string;
    questionCount?: number | undefined;
    icon?: string;
 }

 export type IAnsweredQreducers = {
    answeredquestions: Array<Tquestions>;
    data: Array<Tquestion>;
  };

  export interface IThemeContext {
    theme: string;
    setTheme: any;
  }

  export interface IChildrenProps {
    children: React.ReactNode;
  }

  export type ILoaderContext = {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    showLoader: (message?: string) => void;
    hideLoader: () => void;
  };
  
  export type LoaderContextProvider = {
    children: React.ReactNode;
  };


  export type ILoader = {
    message: string | undefined;
    theme: string;
  };

  export type IProgressBarProps = {
    bgcolor: string;
    completed: any;
  };
  