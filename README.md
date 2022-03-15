# IBconsole(In-Browser Console)
A console library for web developers with browsers without console.
* * *
### **SETTING**
 * ### EMBEDDING
    Import JS and CSS files in the HTML header.
    ```html
    <head>
        <link rel="stylesheet" href="ibconsole.css" type="text/css">
        <script src="ibconsole.js"></script>
    </head>
    ```
    or you can just use Jsdelivr CDN.
    ```html
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hinaple/IBconsole/ibconsole.js" type="text/css">
        <script src="https://cdn.jsdelivr.net/gh/hinaple/IBconsole/ibconsole.css"></script>
    </head>
    ```
    
 * ### RUN
    ```js
    //at the top of the main file
    const ibc = new IBConsole(options);
    ```

### **OPTIONS**
* ### **size** | type: Number | defualt: 300     
    > Define the console's width size.
    
    > 콘솔의 가로 길이를 정의합니다.
* ### **openKey** | type: String | defualt: F12
    > The key name that can open and close the console.

    > 콘솔을 열고 닫는 단축키를 지정합니다.
* ### **dontCatchErr** | type: Boolean | defualt: false
    > If it's true, the errors aren't get caught by the console. If it's false, you must not use window.onerror event for console's working.

    > true로 지정 시 콘솔이 에러를 처리하지 않습니다. false로 지정 시 콘솔의 정상 작동을 위해 window.onerror 이벤트를 사용하지 마십시오.
* ### **autoScroll** | type: Boolean | defualt: true
    > If it's true, the console will be auto scrolled to the bottom when it was on bottom already.

    > true로 지정 시 스크롤이 가장 하단에 있을 때 자동으로 스크롤됩니다.

### **METHODS**

* ### IBConsole.**log(message[, type, lineInfo])**
    * **message** String
        > The message of the log will be displayed on the console.

        > 콘솔에 표시될 로그의 메시지
    * **type**(Optional) String
        > The type of the log. The log will be an error log when it's "error".

        > 로그의 타입, "error"으로 지정할 시 에러 로그로 처리됩니다.
    * **lineInfo**(Optional) String
        > The line information of the log. If it's unvaild it will be a called line information automatically.

        > 로그의 줄 정보, 비어있을 시 자동으로 호출한 줄의 정보가 됩니다.

* ### IBConsole.**error(message[, lineInfo])**
    > Same with the IBConsole.log(message, "error", loginInfo).

    >IBConsole.log(message, "error", loginInfo)와 같은 작업을 수행합니다.

* ### IBConsole.**open()**
    > Opens the console.

    > 콘솔을 엽니다.

* ### IBConsole.**close()**
    > Closes the console.

    > 콘솔을 닫습니다.

* ### IBConsole.**toggle()**
    > Opens the console when it's closed, and closes it when it's opened.

    > 콘솔이 열려있으면 닫고, 열려있으면 닫습니다.

* ### IBConsole.**isOpened()**
    > Returns if the console is opened.

    > 콘솔의 열림 여부를 반환합니다.