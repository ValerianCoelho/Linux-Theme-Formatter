import { CHANGE_THEME } from "./themeActions";

const Themes = {
  '1': {
    pageFgColor: '#000000',
    pageBgColor: '#EEEEEC',

    shareBtnFgColor: '#FFFFFF',
    shareBtnBgColor: '#4869B0',
    
    donateBtnFgColor: '#FFFFFF',
    donateBtnBgColor: '#66A116',

    kernelColor: '#EEEEEC',
    folderColor: '#4869B0',
    pathColor: '#66A116',
    textColor: '#000000',

    textEditorToolbarFgColor: '#CDCDCD',
    textEditorToolbarBgColor: '#676767',

    textEditorTaskbarFgColor: '#000000',
    textEditorTaskbarBgColor: '#BCBCBC',

    textEditorBorderColor: '#969696'
  },
  '2': {
    pageFgColor: '#ECECEC',
    pageBgColor: '#3A4141',

    shareBtnFgColor: '#FFFFFF',
    shareBtnBgColor: '#3667D0',
    
    donateBtnFgColor: '#FFFFFF',
    donateBtnBgColor: '#66A116',

    kernelColor: '#2C3435',
    folderColor: '#4869B0',
    pathColor: '#66A116',
    textColor: '#FFFFFF',

    textEditorToolbarFgColor: '#D9D9D9',
    textEditorToolbarBgColor: '#656D6D',

    textEditorTaskbarFgColor: '#FFFFFF',
    textEditorTaskbarBgColor: '#535A5A',

    textEditorBorderColor: '#3C4343'
  },
  '3': {
    pageFgColor: '#000000',
    pageBgColor: '#BABABA',

    shareBtnFgColor: '#FFFFFF',
    shareBtnBgColor: '#346CE6',
    
    donateBtnFgColor: '#000000',
    donateBtnBgColor: '#79C710',

    kernelColor: '#320A27',
    folderColor: '#4869B0',
    pathColor: '#66A116',
    textColor: '#FFFFFF',

    textEditorToolbarFgColor: '#9C9C9C',
    textEditorToolbarBgColor: '#2C2C2C',

    textEditorTaskbarFgColor: '#FFFFFF',
    textEditorTaskbarBgColor: '#2D2D2D',

    textEditorBorderColor: '#151515'
  }
}

let index = 1
const initialState = {
  Theme: Themes[index]
};

const themeReducer = (state = initialState, action)=> {
  switch(action.type) {
    case CHANGE_THEME: 
    index = index < 3 ? index + 1 : 1;
    return {
      Theme: Themes[index]
    }
    default: return state
  }
}

export default themeReducer