import React from 'react';

export const TextEditorIcon = (props)=> {
  return (
    <>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 7.5V4.5H4.5V7.5H18ZM25.5 13.5V10.5H4.5V13.5H25.5ZM18 19.5V16.5H4.5V19.5H18ZM25.5 25.5V22.5H4.5V25.5H25.5Z" fill={`${props.color}`}/>
      </svg>
    </>
  );
};

export const BoldBtn = (props) => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_113_2)">
        <path d="M0 0V2.375C1.30625 2.375 2.375 3.44375 2.375 4.75V14.25C2.375 15.5563 1.30625 16.625 0 16.625V19H13.0625C14.6372 19 16.1474 18.3744 17.2609 17.2609C18.3744 16.1474 19 14.6372 19 13.0625C19 10.6875 17.5987 8.66875 15.58 7.71875C16.1392 7.02037 16.4897 6.17827 16.5913 5.28941C16.6929 4.40055 16.5414 3.50107 16.1543 2.69453C15.7671 1.88798 15.1601 1.20717 14.403 0.730466C13.6459 0.253765 12.7696 0.00055879 11.875 0L0 0ZM7.125 2.375H9.5C10.8063 2.375 11.875 3.44375 11.875 4.75C11.875 6.05625 10.8063 7.125 9.5 7.125H7.125V2.375ZM7.125 9.5H10.6875C12.6587 9.5 14.25 11.0913 14.25 13.0625C14.25 15.0337 12.6587 16.625 10.6875 16.625H7.125V9.5Z" fill="#CDCDCD"/>
      </g>
    </svg>
  );
};

export const HighlightBtn = (props) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.125 1.375C3.76033 1.375 3.41059 1.51987 3.15273 1.77773C2.89487 2.03559 2.75 2.38533 2.75 2.75V6.1875C2.75 6.73451 2.9673 7.25911 3.35409 7.64591C3.74089 8.0327 4.26549 8.25 4.8125 8.25C4.78912 8.25 4.76713 8.25 4.74375 8.25412H4.884C4.86025 8.25157 4.83639 8.2502 4.8125 8.25H5.15075V8.25412H16.9001V8.25H17.1889C17.1654 8.2502 17.142 8.25158 17.1187 8.25412H17.259C17.2353 8.25152 17.2114 8.25015 17.1875 8.25H17.1889C17.7359 8.25 18.2605 8.0327 18.6473 7.64591C19.0341 7.25911 19.2514 6.73451 19.2514 6.1875V2.75C19.2514 2.38533 19.1065 2.03559 18.8486 1.77773C18.5908 1.51987 18.241 1.375 17.8764 1.375H4.125ZM4.12637 9.62912C4.12747 10.3578 4.41768 11.0562 4.93329 11.571C5.44889 12.0858 6.14774 12.375 6.87637 12.375H15.1264C15.855 12.375 16.5539 12.0858 17.0695 11.571C17.5851 11.0562 17.8753 10.3578 17.8764 9.62912H4.12637ZM6.87912 19.9375V13.75H15.125L15.1277 14.7675C15.1283 15.1138 15.0417 15.4546 14.8759 15.7586C14.7101 16.0626 14.4704 16.3199 14.179 16.5069L7.9365 20.5164C7.83261 20.583 7.71269 20.6205 7.58934 20.6248C7.46598 20.6291 7.34374 20.6002 7.23544 20.541C7.12713 20.4817 7.03677 20.3945 6.97384 20.2883C6.9109 20.1821 6.87908 20.0609 6.87912 19.9375Z" fill={`${props.color}`}/>
    </svg>
  );
};

export const DeleteBtn = (props)=> {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072C5.00048 7.04803 4.99982 7.02402 5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z" fill={`${props.color}`}/>
    </svg>
  );
};

export const CopyBtn = (props)=> {
  return (
    <svg width="16" height="19.5" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.8 3.8225V15.5833C1.79982 16.747 2.23422 17.8671 3.01507 18.7166C3.79592 19.566 4.86477 20.0812 6.0048 20.1575L6.3 20.1667H14.2452C14.0591 20.7028 13.7144 21.1669 13.2586 21.4953C12.8028 21.8236 12.2583 21.9999 11.7 22H5.4C3.96783 22 2.59432 21.4205 1.58162 20.3891C0.568927 19.3576 3.71226e-07 17.9587 3.71226e-07 16.5V6.41667C-0.000292464 5.84774 0.17267 5.29272 0.495051 4.8281C0.817431 4.36348 1.27336 4.01214 1.8 3.8225ZM15.3 0C16.0161 0 16.7028 0.289731 17.2092 0.805456C17.7155 1.32118 18 2.02065 18 2.75V15.5833C18 16.3127 17.7155 17.0122 17.2092 17.5279C16.7028 18.0436 16.0161 18.3333 15.3 18.3333H6.3C5.58392 18.3333 4.89716 18.0436 4.39081 17.5279C3.88446 17.0122 3.6 16.3127 3.6 15.5833V2.75C3.6 2.02065 3.88446 1.32118 4.39081 0.805456C4.89716 0.289731 5.58392 0 6.3 0H15.3Z" fill={`${props.color}`}/>
    </svg>
  );
};

export const ExpandBtn = (props) => {
  return (
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3571 8.64286L21.2143 0.785721M21.2143 0.785721H14.9286M21.2143 0.785721V7.07143M8.64285 8.64286L0.785706 0.785721M0.785706 0.785721H7.07142M0.785706 0.785721V7.07143M13.3571 13.3571L21.2143 21.2143M21.2143 21.2143H14.9286M21.2143 21.2143V14.9286M8.64285 13.3571L0.785706 21.2143M0.785706 21.2143H7.07142M0.785706 21.2143V14.9286"stroke={`${props.color}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
};


